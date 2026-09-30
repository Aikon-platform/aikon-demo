// Data model for the SVG diagram editor: parsing, serialization and geometry.

export type Pt = { x: number; y: number };

interface PrimitiveBase {
    id: string; // unique, generated with newId()
    stroke: string; // CSS color, e.g. "#ff0000"
    strokeWidth: number; // in SVG user units
}

export interface LinePrim extends PrimitiveBase {
    kind: "line";
    p1: Pt;
    p2: Pt;
}

/** Rotated ellipse; rotation in degrees (SVG convention, clockwise with y down) */
export interface EllipsePrim extends PrimitiveBase {
    kind: "ellipse";
    center: Pt;
    rx: number;
    ry: number;
    rotation: number;
}

/** Circular arc from p1 through p2 to p3 */
export interface ArcPrim extends PrimitiveBase {
    kind: "arc";
    p1: Pt;
    p2: Pt;
    p3: Pt;
}

export type Primitive = LinePrim | EllipsePrim | ArcPrim;

/** Element the editor does not understand, preserved verbatim (outerHTML) */
export interface ForeignItem {
    kind: "foreign";
    id: string;
    markup: string;
}

export type DiagramItem = Primitive | ForeignItem;

export interface Diagram {
    /** Root <svg> attributes other than viewBox/width/height/xmlns (kept verbatim on save) */
    rootAttrs: Record<string, string>;
    width: number; // pixel width (width attr, or viewBox width if missing/percent)
    height: number;
    viewBox: { x: number; y: number; w: number; h: number }; // defaults to 0 0 width height
    items: DiagramItem[]; // document order = paint order (last on top)
}

/** Draggable control points of a primitive, in user units */
export type HandleKey = "p1" | "p2" | "p3" | "center" | "rx" | "ry";

const SVG_NS = "http://www.w3.org/2000/svg";
const DEFAULT_STROKE = "#000000";
const DEFAULT_STROKE_WIDTH = 1;

// Ids

let idCounter = 0;

export function newId(): string {
    idCounter += 1;
    return `d${Date.now().toString(36)}-${idCounter.toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

export function emptyDiagram(width: number, height: number): Diagram {
    return {
        rootAttrs: {},
        width,
        height,
        viewBox: { x: 0, y: 0, w: width, h: height },
        items: [],
    };
}

// Number helpers

function fmt(n: number): string {
    return String(Math.round(n * 1000) / 1000);
}

function fmtPt(p: Pt): string {
    return `${fmt(p.x)},${fmt(p.y)}`;
}

const NUM_RE = /^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i;

/** Strict number parse; accepts an optional "px" suffix. Returns null if invalid. */
function parseNum(s: string | null | undefined): number | null {
    if (s == null) return null;
    let t = s.trim();
    if (t.toLowerCase().endsWith("px")) t = t.slice(0, -2).trim();
    if (!NUM_RE.test(t)) return null;
    const n = Number(t);
    return Number.isFinite(n) ? n : null;
}

function parsePt(s: string | null): Pt | null {
    if (s == null) return null;
    const parts = s.trim().split(/[\s,]+/);
    if (parts.length !== 2) return null;
    const x = parseNum(parts[0]);
    const y = parseNum(parts[1]);
    if (x === null || y === null) return null;
    return { x, y };
}

function escapeAttr(v: string): string {
    return v
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/\n/g, "&#10;")
        .replace(/\t/g, "&#9;");
}

// Parsing

interface StrokeInfo {
    stroke: string;
    strokeWidth: number;
}

const COMMON_ATTRS = new Set([
    "id",
    "stroke",
    "stroke-width",
    "fill",
    "style",
    "stroke-linecap",
    "transform",
]);

const GEOMETRY_ATTRS: Record<string, string[]> = {
    line: ["x1", "y1", "x2", "y2"],
    circle: ["cx", "cy", "r"],
    ellipse: ["cx", "cy", "rx", "ry"],
    path: ["d"],
};

/** Returns false if the element carries attributes the editor would lose */
function onlyKnownAttrs(el: Element, geometry: string[]): boolean {
    for (const attr of Array.from(el.attributes)) {
        const name = attr.name;
        if (
            COMMON_ATTRS.has(name) ||
            geometry.includes(name) ||
            name.startsWith("data-")
        )
            continue;
        return false;
    }
    return true;
}

function isNoFill(v: string | null | undefined): boolean {
    return v == null || v.trim().toLowerCase() === "none";
}

/** Reads fill/stroke/stroke-width from attributes and inline style; null if not editable */
function readStroke(el: Element): StrokeInfo | null {
    let stroke = el.getAttribute("stroke");
    let strokeWidthStr = el.getAttribute("stroke-width");
    let fill = el.getAttribute("fill");

    const style = el.getAttribute("style");
    if (style !== null) {
        for (const decl of style.split(";")) {
            if (decl.trim() === "") continue;
            const colon = decl.indexOf(":");
            if (colon < 0) return null;
            const prop = decl.slice(0, colon).trim().toLowerCase();
            const value = decl.slice(colon + 1).trim();
            if (prop === "stroke") stroke = value;
            else if (prop === "stroke-width") strokeWidthStr = value;
            else if (prop === "fill") fill = value;
            else return null;
        }
    }

    if (!isNoFill(fill)) return null;

    let strokeWidth = DEFAULT_STROKE_WIDTH;
    if (strokeWidthStr !== null) {
        const n = parseNum(strokeWidthStr);
        if (n === null || n < 0) return null;
        strokeWidth = n;
    }
    return {
        stroke:
            stroke !== null && stroke.trim() !== ""
                ? stroke.trim()
                : DEFAULT_STROKE,
        strokeWidth,
    };
}

/** Reads numeric geometry attributes (missing = 0); null if any is not a plain number */
function readNums(el: Element, names: string[]): number[] | null {
    const out: number[] = [];
    for (const name of names) {
        const raw = el.getAttribute(name);
        if (raw === null) {
            out.push(0);
            continue;
        }
        const n = parseNum(raw);
        if (n === null) return null;
        out.push(n);
    }
    return out;
}

const ROTATE_RE =
    /^\s*rotate\(\s*([^\s,()]+)(?:(?:\s*,\s*|\s+)([^\s,()]+)(?:\s*,\s*|\s+)([^\s,()]+))?\s*\)\s*$/;

/** Rotation angle from a transform attribute rotating around `center`; null if unsupported */
function readRotation(el: Element, center: Pt): number | null {
    const t = el.getAttribute("transform");
    if (t === null || t.trim() === "") return 0;
    const m = ROTATE_RE.exec(t);
    if (!m) return null;
    const a = parseNum(m[1]);
    if (a === null) return null;
    const cx = m[2] !== undefined ? parseNum(m[2]) : 0;
    const cy = m[3] !== undefined ? parseNum(m[3]) : 0;
    if (cx === null || cy === null) return null;
    const tol = 1e-3;
    if (Math.abs(cx - center.x) > tol || Math.abs(cy - center.y) > tol)
        return null;
    return a;
}

function parsePrimitive(el: Element, usedIds: Set<string>): Primitive | null {
    if (el.namespaceURI !== SVG_NS) return null;
    const tag = el.localName;
    const geometry = GEOMETRY_ATTRS[tag];
    if (!geometry || !onlyKnownAttrs(el, geometry)) return null;
    const strokeInfo = readStroke(el);
    if (!strokeInfo) return null;

    const attrId = el.getAttribute("id");
    const pickId = () => {
        const id =
            attrId !== null && attrId !== "" && !usedIds.has(attrId)
                ? attrId
                : newId();
        usedIds.add(id);
        return id;
    };

    if (tag === "line") {
        if (el.hasAttribute("transform")) return null;
        const nums = readNums(el, geometry);
        if (!nums) return null;
        const [x1, y1, x2, y2] = nums;
        return {
            kind: "line",
            id: pickId(),
            ...strokeInfo,
            p1: { x: x1, y: y1 },
            p2: { x: x2, y: y2 },
        };
    }

    if (tag === "circle" || tag === "ellipse") {
        const nums = readNums(el, geometry);
        if (!nums) return null;
        const center = { x: nums[0], y: nums[1] };
        const rx = nums[2];
        const ry = tag === "circle" ? nums[2] : nums[3];
        if (rx < 0 || ry < 0) return null;
        const rotation = readRotation(el, center);
        if (rotation === null) return null;
        return {
            kind: "ellipse",
            id: pickId(),
            ...strokeInfo,
            center,
            rx,
            ry,
            rotation,
        };
    }

    if (tag === "path") {
        if (el.getAttribute("data-diagram") !== "arc") return null;
        if (el.hasAttribute("transform")) return null;
        const p1 = parsePt(el.getAttribute("data-p1"));
        const p2 = parsePt(el.getAttribute("data-p2"));
        const p3 = parsePt(el.getAttribute("data-p3"));
        if (!p1 || !p2 || !p3) return null;
        return { kind: "arc", id: pickId(), ...strokeInfo, p1, p2, p3 };
    }

    return null;
}

function parseViewBox(s: string | null): Diagram["viewBox"] | null {
    if (s === null) return null;
    const parts = s.trim().split(/[\s,]+/);
    if (parts.length !== 4) return null;
    const nums = parts.map((p) => parseNum(p));
    if (nums.some((n) => n === null)) return null;
    const [x, y, w, h] = nums as number[];
    if (w <= 0 || h <= 0) return null;
    return { x, y, w, h };
}

/**
 * viewBox -> viewport (width x height) mapping as browsers render it,
 * honoring the root preserveAspectRatio (default "xMidYMid meet")
 */
export function viewBoxTransform(d: Diagram): {
    sx: number;
    sy: number;
    tx: number;
    ty: number;
} {
    const vb = d.viewBox;
    const par = (d.rootAttrs["preserveAspectRatio"] ?? "")
        .trim()
        .replace(/^defer\s+/, "")
        .split(/\s+/);
    const align = par[0] || "xMidYMid";
    let sx = d.width / vb.w;
    let sy = d.height / vb.h;
    if (align === "none") {
        return { sx, sy, tx: -vb.x * sx, ty: -vb.y * sy };
    }
    const s = par[1] === "slice" ? Math.max(sx, sy) : Math.min(sx, sy);
    sx = sy = s;
    const offset = (mode: string, free: number) =>
        mode === "Min" ? 0 : mode === "Max" ? free : free / 2;
    const xMode = /^x(Min|Mid|Max)/.exec(align)?.[1] ?? "Mid";
    const yMode = /Y(Min|Mid|Max)$/.exec(align)?.[1] ?? "Mid";
    return {
        sx,
        sy,
        tx: offset(xMode, d.width - vb.w * s) - vb.x * s,
        ty: offset(yMode, d.height - vb.h * s) - vb.y * s,
    };
}

export function parseSvg(
    text: string,
    fallbackWidth: number,
    fallbackHeight: number,
): Diagram {
    let doc: Document;
    try {
        doc = new DOMParser().parseFromString(text, "image/svg+xml");
    } catch {
        return emptyDiagram(fallbackWidth, fallbackHeight);
    }
    const root = doc.documentElement;
    if (
        !root ||
        root.localName !== "svg" ||
        root.namespaceURI !== SVG_NS ||
        doc.getElementsByTagName("parsererror").length > 0
    ) {
        return emptyDiagram(fallbackWidth, fallbackHeight);
    }

    const viewBoxAttr = parseViewBox(root.getAttribute("viewBox"));
    const w = parseNum(root.getAttribute("width"));
    const h = parseNum(root.getAttribute("height"));
    const width =
        w !== null && w > 0 ? w : viewBoxAttr ? viewBoxAttr.w : fallbackWidth;
    const height =
        h !== null && h > 0 ? h : viewBoxAttr ? viewBoxAttr.h : fallbackHeight;
    const viewBox = viewBoxAttr ?? { x: 0, y: 0, w: width, h: height };

    const rootAttrs: Record<string, string> = {};
    for (const attr of Array.from(root.attributes)) {
        if (["viewBox", "width", "height", "xmlns"].includes(attr.name))
            continue;
        rootAttrs[attr.name] = attr.value;
    }

    const serializer = new XMLSerializer();
    const usedIds = new Set<string>();
    const items: DiagramItem[] = [];
    for (const child of Array.from(root.childNodes)) {
        if (child.nodeType !== Node.ELEMENT_NODE) continue;
        const el = child as Element;
        const prim = parsePrimitive(el, usedIds);
        if (prim) {
            items.push(prim);
        } else {
            items.push({
                kind: "foreign",
                id: newId(),
                markup: serializer.serializeToString(el),
            });
        }
    }

    return { rootAttrs, width, height, viewBox, items };
}

// Serialization

function strokeAttrs(p: Primitive): string {
    return `fill="none" stroke="${escapeAttr(p.stroke)}" stroke-width="${fmt(p.strokeWidth)}"`;
}

function serializeItem(item: DiagramItem): string {
    switch (item.kind) {
        case "foreign":
            return item.markup;
        case "line":
            return (
                `<line id="${escapeAttr(item.id)}" x1="${fmt(item.p1.x)}" y1="${fmt(item.p1.y)}" ` +
                `x2="${fmt(item.p2.x)}" y2="${fmt(item.p2.y)}" ${strokeAttrs(item)}/>`
            );
        case "ellipse": {
            const { center: c } = item;
            const rotation = fmt(item.rotation);
            const transform =
                rotation !== "0"
                    ? ` transform="rotate(${rotation} ${fmt(c.x)} ${fmt(c.y)})"`
                    : "";
            return (
                `<ellipse id="${escapeAttr(item.id)}" cx="${fmt(c.x)}" cy="${fmt(c.y)}" ` +
                `rx="${fmt(Math.abs(item.rx))}" ry="${fmt(Math.abs(item.ry))}"${transform} ${strokeAttrs(item)}/>`
            );
        }
        case "arc":
            return (
                `<path id="${escapeAttr(item.id)}" d="${arcPathD(item)}" data-diagram="arc" ` +
                `data-p1="${fmtPt(item.p1)}" data-p2="${fmtPt(item.p2)}" data-p3="${fmtPt(item.p3)}" ` +
                `${strokeAttrs(item)}/>`
            );
    }
}

export function serializeSvg(d: Diagram): string {
    const vb = d.viewBox;
    let head =
        `<svg xmlns="${SVG_NS}" width="${fmt(d.width)}" height="${fmt(d.height)}" ` +
        `viewBox="${fmt(vb.x)} ${fmt(vb.y)} ${fmt(vb.w)} ${fmt(vb.h)}"`;
    for (const [name, value] of Object.entries(d.rootAttrs)) {
        if (["viewBox", "width", "height", "xmlns"].includes(name)) continue;
        head += ` ${name}="${escapeAttr(value)}"`;
    }
    head += ">";
    const body = d.items.map((item) => "  " + serializeItem(item)).join("\n");
    return body ? `${head}\n${body}\n</svg>\n` : `${head}</svg>\n`;
}

// Colors

let colorCtx: CanvasRenderingContext2D | null | undefined;

function hex2(n: number): string {
    return Math.max(0, Math.min(255, Math.round(n)))
        .toString(16)
        .padStart(2, "0");
}

/** Converts any CSS color to #rrggbb (alpha dropped); "#000000" if unknown */
export function toHexColor(c: string): string {
    const s = c.trim().toLowerCase();
    if (/^#[0-9a-f]{6}$/.test(s)) return s;
    if (/^#[0-9a-f]{3}$/.test(s))
        return "#" + s[1] + s[1] + s[2] + s[2] + s[3] + s[3];

    if (colorCtx === undefined) {
        colorCtx =
            typeof document !== "undefined"
                ? document.createElement("canvas").getContext("2d")
                : null;
    }
    if (!colorCtx) return DEFAULT_STROKE;

    // Detect invalid colors: an invalid assignment leaves the previous value untouched
    colorCtx.fillStyle = "#000000";
    colorCtx.fillStyle = s;
    const a = String(colorCtx.fillStyle);
    colorCtx.fillStyle = "#ffffff";
    colorCtx.fillStyle = s;
    const b = String(colorCtx.fillStyle);
    if (a !== b) return DEFAULT_STROKE;

    if (/^#[0-9a-f]{6}$/i.test(a)) return a.toLowerCase();
    const m = /^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/.exec(a);
    if (m)
        return (
            "#" + hex2(Number(m[1])) + hex2(Number(m[2])) + hex2(Number(m[3]))
        );
    return DEFAULT_STROKE;
}

// Handles

function deg2rad(d: number): number {
    return (d * Math.PI) / 180;
}

function dist(a: Pt, b: Pt): number {
    return Math.hypot(a.x - b.x, a.y - b.y);
}

export function handles(p: Primitive): { key: HandleKey; pt: Pt }[] {
    switch (p.kind) {
        case "line":
            return [
                { key: "p1", pt: { ...p.p1 } },
                { key: "p2", pt: { ...p.p2 } },
            ];
        case "arc":
            return [
                { key: "p1", pt: { ...p.p1 } },
                { key: "p2", pt: { ...p.p2 } },
                { key: "p3", pt: { ...p.p3 } },
            ];
        case "ellipse": {
            const t = deg2rad(p.rotation);
            const cos = Math.cos(t);
            const sin = Math.sin(t);
            const c = p.center;
            return [
                { key: "center", pt: { ...c } },
                { key: "rx", pt: { x: c.x + p.rx * cos, y: c.y + p.rx * sin } },
                { key: "ry", pt: { x: c.x - p.ry * sin, y: c.y + p.ry * cos } },
            ];
        }
    }
}

/** Move one control point (mutates p in place) */
export function moveHandle(p: Primitive, key: HandleKey, pt: Pt): void {
    switch (p.kind) {
        case "line":
            if (key === "p1") p.p1 = { ...pt };
            else if (key === "p2") p.p2 = { ...pt };
            return;
        case "arc":
            if (key === "p1") p.p1 = { ...pt };
            else if (key === "p2") p.p2 = { ...pt };
            else if (key === "p3") p.p3 = { ...pt };
            return;
        case "ellipse": {
            const dx = pt.x - p.center.x;
            const dy = pt.y - p.center.y;
            if (key === "center") {
                p.center = { ...pt };
            } else if (key === "rx") {
                const r = Math.hypot(dx, dy);
                p.ry = r * (p.ry / p.rx);
                p.rx = r;
                if (r > 1e-9) p.rotation = (Math.atan2(dy, dx) * 180) / Math.PI;
            } else if (key === "ry") {
                const t = deg2rad(p.rotation);
                p.ry = Math.abs(-dx * Math.sin(t) + dy * Math.cos(t));
            }
            return;
        }
    }
}

/** Pivot used to translate the whole primitive: line midpoint, ellipse center, arc p2 */
export function pivot(p: Primitive): Pt {
    switch (p.kind) {
        case "line":
            return { x: (p.p1.x + p.p2.x) / 2, y: (p.p1.y + p.p2.y) / 2 };
        case "ellipse":
            return { ...p.center };
        case "arc":
            return { ...p.p2 };
    }
}

function shift(pt: Pt, dx: number, dy: number): Pt {
    return { x: pt.x + dx, y: pt.y + dy };
}

export function translate(p: Primitive, dx: number, dy: number): void {
    switch (p.kind) {
        case "line":
            p.p1 = shift(p.p1, dx, dy);
            p.p2 = shift(p.p2, dx, dy);
            return;
        case "ellipse":
            p.center = shift(p.center, dx, dy);
            return;
        case "arc":
            p.p1 = shift(p.p1, dx, dy);
            p.p2 = shift(p.p2, dx, dy);
            p.p3 = shift(p.p3, dx, dy);
            return;
    }
}

// Arc geometry

/** Circle through three points; null if (near-)collinear */
export function circleThrough(
    a: Pt,
    b: Pt,
    c: Pt,
): { cx: number; cy: number; r: number } | null {
    const d = 2 * (a.x * (b.y - c.y) + b.x * (c.y - a.y) + c.x * (a.y - b.y));
    const maxLen = Math.max(dist(a, b), dist(b, c), dist(c, a));
    // |d| / 2 is twice the triangle area; compare it to the longest side squared
    if (maxLen < 1e-12 || Math.abs(d) / 2 < 1e-6 * maxLen * maxLen) return null;
    const a2 = a.x * a.x + a.y * a.y;
    const b2 = b.x * b.x + b.y * b.y;
    const c2 = c.x * c.x + c.y * c.y;
    const cx = (a2 * (b.y - c.y) + b2 * (c.y - a.y) + c2 * (a.y - b.y)) / d;
    const cy = (a2 * (c.x - b.x) + b2 * (a.x - c.x) + c2 * (b.x - a.x)) / d;
    return { cx, cy, r: Math.hypot(a.x - cx, a.y - cy) };
}

const TAU = 2 * Math.PI;

function normAngle(a: number): number {
    const r = a % TAU;
    return r < 0 ? r + TAU : r;
}

interface ArcGeom {
    cx: number;
    cy: number;
    r: number;
    start: number; // angle of p1
    span: number; // angular extent from p1 to p3, in (0, 2π)
    sweep: boolean; // true = increasing angle (SVG sweep-flag 1, clockwise on screen)
}

function arcGeom(p: ArcPrim): ArcGeom | null {
    const circle = circleThrough(p.p1, p.p2, p.p3);
    if (!circle) return null;
    const { cx, cy, r } = circle;
    const a1 = Math.atan2(p.p1.y - cy, p.p1.x - cx);
    const a2 = Math.atan2(p.p2.y - cy, p.p2.x - cx);
    const a3 = Math.atan2(p.p3.y - cy, p.p3.x - cx);
    const d2 = normAngle(a2 - a1);
    const d3 = normAngle(a3 - a1);
    const sweep = d2 < d3;
    return { cx, cy, r, start: a1, span: sweep ? d3 : TAU - d3, sweep };
}

type Bounds = { minX: number; minY: number; maxX: number; maxY: number };

/** Axis-aligned bounds of the primitive's stroke, in user units */
export function primitiveBounds(p: Primitive): Bounds {
    let pts: Pt[];
    switch (p.kind) {
        case "line":
            pts = [p.p1, p.p2];
            break;
        case "ellipse": {
            const t = (p.rotation * Math.PI) / 180;
            const hx = Math.hypot(p.rx * Math.cos(t), p.ry * Math.sin(t));
            const hy = Math.hypot(p.rx * Math.sin(t), p.ry * Math.cos(t));
            const c = p.center;
            pts = [
                { x: c.x - hx, y: c.y - hy },
                { x: c.x + hx, y: c.y + hy },
            ];
            break;
        }
        case "arc": {
            pts = [p.p1, p.p2, p.p3];
            const g = arcGeom(p);
            if (g) {
                // Axis extremes of the circle that lie within the arc
                for (let k = 0; k < 4; k++) {
                    const a = (k * Math.PI) / 2;
                    const d = g.sweep
                        ? normAngle(a - g.start)
                        : normAngle(g.start - a);
                    if (d <= g.span) {
                        pts.push({
                            x: g.cx + g.r * Math.cos(a),
                            y: g.cy + g.r * Math.sin(a),
                        });
                    }
                }
            }
            break;
        }
    }
    const pad = p.strokeWidth / 2;
    return {
        minX: Math.min(...pts.map((q) => q.x)) - pad,
        minY: Math.min(...pts.map((q) => q.y)) - pad,
        maxX: Math.max(...pts.map((q) => q.x)) + pad,
        maxY: Math.max(...pts.map((q) => q.y)) + pad,
    };
}

/**
 * Grow the viewport so that it contains every primitive, keeping the
 * current user unit -> pixel scale. The result maps the viewBox exactly
 * onto width x height (whole pixels); a layer pixel p becomes p + (dx, dy).
 */
export function fitViewBox(d: Diagram): {
    viewBox: Diagram["viewBox"];
    width: number;
    height: number;
    dx: number;
    dy: number;
} {
    const { sx, sy, tx, ty } = viewBoxTransform(d);
    // Pixel bounds, starting from the current viewport
    let minX = 0;
    let minY = 0;
    let maxX = d.width;
    let maxY = d.height;
    for (const it of d.items) {
        if (it.kind === "foreign") continue;
        const b = primitiveBounds(it);
        minX = Math.min(minX, b.minX * sx + tx);
        minY = Math.min(minY, b.minY * sy + ty);
        maxX = Math.max(maxX, b.maxX * sx + tx);
        maxY = Math.max(maxY, b.maxY * sy + ty);
    }
    minX = Math.floor(minX);
    minY = Math.floor(minY);
    const width = Math.ceil(maxX) - minX;
    const height = Math.ceil(maxY) - minY;
    return {
        viewBox: {
            x: (minX - tx) / sx,
            y: (minY - ty) / sy,
            w: width / sx,
            h: height / sy,
        },
        width,
        height,
        dx: -minX,
        dy: -minY,
    };
}

/** SVG path `d` for the primitive (arc: "M p1 A r r 0 large sweep p3", falls back to polyline M p1 L p2 L p3 when collinear) */
export function arcPathD(p: ArcPrim): string {
    const g = arcGeom(p);
    const m = `M ${fmt(p.p1.x)} ${fmt(p.p1.y)}`;
    if (!g)
        return `${m} L ${fmt(p.p2.x)} ${fmt(p.p2.y)} L ${fmt(p.p3.x)} ${fmt(p.p3.y)}`;
    const r = fmt(g.r);
    return `${m} A ${r} ${r} 0 ${g.span > Math.PI ? 1 : 0} ${g.sweep ? 1 : 0} ${fmt(p.p3.x)} ${fmt(p.p3.y)}`;
}

// Hit testing

function segmentDistance(pt: Pt, a: Pt, b: Pt): number {
    const vx = b.x - a.x;
    const vy = b.y - a.y;
    const len2 = vx * vx + vy * vy;
    if (len2 === 0) return dist(pt, a);
    const t = Math.max(
        0,
        Math.min(1, ((pt.x - a.x) * vx + (pt.y - a.y) * vy) / len2),
    );
    return Math.hypot(pt.x - (a.x + t * vx), pt.y - (a.y + t * vy));
}

const ELLIPSE_SAMPLES = 64;

/** Shortest distance from pt to the primitive's stroke (for hit testing) */
export function distanceTo(p: Primitive, pt: Pt): number {
    switch (p.kind) {
        case "line":
            return segmentDistance(pt, p.p1, p.p2);
        case "ellipse": {
            // Distance to the inscribed polygon, which is close enough for hit testing
            const t = deg2rad(p.rotation);
            const cos = Math.cos(t);
            const sin = Math.sin(t);
            const at = (i: number): Pt => {
                const u = (i / ELLIPSE_SAMPLES) * TAU;
                const ex = p.rx * Math.cos(u);
                const ey = p.ry * Math.sin(u);
                return {
                    x: p.center.x + ex * cos - ey * sin,
                    y: p.center.y + ex * sin + ey * cos,
                };
            };
            let best = Infinity;
            let prev = at(0);
            for (let i = 1; i <= ELLIPSE_SAMPLES; i++) {
                const cur = at(i);
                best = Math.min(best, segmentDistance(pt, prev, cur));
                prev = cur;
            }
            return best;
        }
        case "arc": {
            const g = arcGeom(p);
            if (!g)
                return Math.min(
                    segmentDistance(pt, p.p1, p.p2),
                    segmentDistance(pt, p.p2, p.p3),
                );
            const ang = Math.atan2(pt.y - g.cy, pt.x - g.cx);
            const offset = g.sweep
                ? normAngle(ang - g.start)
                : normAngle(g.start - ang);
            if (offset <= g.span)
                return Math.abs(Math.hypot(pt.x - g.cx, pt.y - g.cy) - g.r);
            return Math.min(dist(pt, p.p1), dist(pt, p.p3));
        }
    }
}
