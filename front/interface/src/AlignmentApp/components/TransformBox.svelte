<script lang="ts">
  import type { TransformMatrix } from "../transform";
  import { applyTransform, multiplyMatrix } from "../transform";

  interface Props {
    initial: TransformMatrix;
    width: number;
    height: number;
    onChange: (m: TransformMatrix) => void;
  }

  let { initial, onChange, width, height }: Props = $props();

  // Internal matrix state
  let internalMatrix = $state(structuredClone($state.snapshot(initial)));

  $effect(() => {
    internalMatrix = structuredClone($state.snapshot(initial));
  });

  // Pivot point in local coordinates
  let pivot = $state({ x: 0, y: 0 });

  // Track which handle is being dragged
  type HandleType =
    | "nw"
    | "ne"
    | "sw"
    | "se" // corners
    | "n"
    | "e"
    | "s"
    | "w" // edges
    | "rotation"
    | "pivot"
    | null;

  let activeHandle = $state<HandleType>(null);
  let dragStart = $state({ x: 0, y: 0 });
  let dragStartMatrix = $state<TransformMatrix | null>(null);
  let dragStartPivot = $state<{ x: number; y: number } | null>(null);

  // Container reference
  let container: HTMLDivElement;

  // Half dimensions
  const halfW = $derived(width / 2);
  const halfH = $derived(height / 2);

  // Check if matrix is affine (no projective components)
  const isAffine = $derived(
    internalMatrix.g === 0 && internalMatrix.h === 0 && internalMatrix.i === 1,
  );
  $inspect("is affine", isAffine);

  // Get container bounding rect
  function getContainerRect() {
    if (!container) return { x: 0, y: 0, width: 1, height: 1 };
    const rect = container.getBoundingClientRect();
    return {
      x: rect.x,
      y: rect.y,
      width: Math.max(rect.width, 1),
      height: Math.max(rect.height, 1),
    };
  }

  // Convert local coordinates to screen coordinates using the matrix
  // Returns null if matrix is projective (not supported for editing)
  function localToScreen(
    localX: number,
    localY: number,
  ): { x: number; y: number } | null {
    if (!isAffine) return null;

    const rect = getContainerRect();
    const transformed = applyTransform(internalMatrix, localX, localY);

    // Transform to screen: center of container is (0,0) in local space
    return {
      x: rect.x + rect.width / 2 + transformed.x,
      y: rect.y + rect.height / 2 + transformed.y,
    };
  }

  // Convert screen coordinates to local coordinates
  function screenToLocal(
    screenX: number,
    screenY: number,
  ): { x: number; y: number } | null {
    if (!isAffine) return null;

    const rect = getContainerRect();
    // Convert to container-relative coordinates with (0,0) at center
    const containerX = screenX - rect.x - rect.width / 2;
    const containerY = screenY - rect.y - rect.height / 2;

    // Invert the affine matrix
    const { a, b, c, d, e, f } = internalMatrix;
    const det = a * d - b * c;

    if (Math.abs(det) < 1e-10) {
      return { x: containerX, y: containerY };
    }

    const invDet = 1 / det;
    const localX = (d * (containerX - e) - c * (containerY - f)) * invDet;
    const localY = (-b * (containerX - e) + a * (containerY - f)) * invDet;

    return { x: localX, y: localY };
  }

  // Get screen position of a local point (for handles)
  function getHandleScreenPosition(
    localX: number,
    localY: number,
  ): { x: number; y: number } | null {
    return localToScreen(localX, localY);
  }

  // Handle size
  const handleSize = 8;
  const pivotSize = 10;

  // Check if screen point is within a handle
  function isInHandle(
    screenX: number,
    screenY: number,
    handleLocalX: number,
    handleLocalY: number,
    size: number = handleSize,
  ): boolean {
    const handlePos = localToScreen(handleLocalX, handleLocalY);
    if (!handlePos) return false;

    const dx = screenX - handlePos.x;
    const dy = screenY - handlePos.y;
    return dx * dx + dy * dy <= size * size;
  }

  // Create affine scale matrix around origin
  function createScaleMatrix(
    scaleX: number,
    scaleY: number,
    originX: number,
    originY: number,
  ): TransformMatrix {
    return {
      a: scaleX,
      b: 0,
      c: 0,
      d: scaleY,
      e: originX * (1 - scaleX),
      f: originY * (1 - scaleY),
      g: 0,
      h: 0,
      i: 1,
    };
  }

  // Create affine rotation matrix around origin
  function createRotationMatrix(
    angle: number,
    originX: number,
    originY: number,
  ): TransformMatrix {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
      a: cos,
      b: -sin,
      c: sin,
      d: cos,
      e: originX * (1 - cos) + originY * sin,
      f: originY * (1 - cos) - originX * sin,
      g: 0,
      h: 0,
      i: 1,
    };
  }

  // Matrix to CSS transform (for the box display)
  function matrixToCss(m: TransformMatrix): string {
    // CSS matrix3d takes 16 values in column-major order
    // Our 3x3 matrix [[a, c, e], [b, d, f], [g, h, i]]
    // maps to 4x4 as:
    // [ a   b   0   g ]
    // [ c   d   0   h ]
    // [ 0   0   1   0 ]
    // [ e   f   0   i ]
    // Column-major: a,b,0,g, c,d,0,h, 0,0,1,0, e,f,0,i
    return `matrix3d(${m.a}, ${m.b}, 0, ${m.g}, ${m.c}, ${m.d}, 0, ${m.h}, 0, 0, 1, 0, ${m.e}, ${m.f}, 0, ${m.i})`;
  }

  // Start drag
  function startDrag(handle: HandleType, clientX: number, clientY: number) {
    activeHandle = handle;
    dragStart = { x: clientX, y: clientY };
    dragStartMatrix = structuredClone(internalMatrix);
    dragStartPivot = { ...pivot };
  }

  // End drag
  function endDrag() {
    activeHandle = null;
    dragStartMatrix = null;
    dragStartPivot = null;
  }

  // Handle pointer down
  function onPointerDown(event: PointerEvent) {
    if (event.button !== 0) return;
    const { clientX, clientY } = event;

    if (!isAffine) return; // No editing with projective transforms

    // Check pivot first
    if (isInHandle(clientX, clientY, pivot.x, pivot.y, pivotSize)) {
      startDrag("pivot", clientX, clientY);
      return;
    }

    // Check rotation handle
    if (isInHandle(clientX, clientY, halfW + 30, -halfH - 30)) {
      startDrag("rotation", clientX, clientY);
      return;
    }

    // Check corner handles
    const corners = [
      { name: "nw" as const, x: -halfW, y: -halfH },
      { name: "ne" as const, x: halfW, y: -halfH },
      { name: "se" as const, x: halfW, y: halfH },
      { name: "sw" as const, x: -halfW, y: halfH },
    ];
    for (const corner of corners) {
      if (isInHandle(clientX, clientY, corner.x, corner.y)) {
        startDrag(corner.name, clientX, clientY);
        return;
      }
    }

    // Check edge handles
    const edges = [
      { name: "n" as const, x: 0, y: -halfH },
      { name: "e" as const, x: halfW, y: 0 },
      { name: "s" as const, x: 0, y: halfH },
      { name: "w" as const, x: -halfW, y: 0 },
    ];
    for (const edge of edges) {
      if (isInHandle(clientX, clientY, edge.x, edge.y)) {
        startDrag(edge.name, clientX, clientY);
        return;
      }
    }
  }

  // Handle pointer move
  function onPointerMove(event: PointerEvent) {
    if (!activeHandle || !dragStartMatrix || !isAffine) return;

    const { clientX, clientY } = event;
    const ctrlKey = event.ctrlKey || event.metaKey;
    const shiftKey = event.shiftKey;

    if (activeHandle === "pivot") {
      const localPos = screenToLocal(clientX, clientY);
      if (localPos) {
        pivot = localPos;
        onChange(internalMatrix);
      }
      return;
    }

    if (activeHandle === "rotation") {
      const pivotPos = localToScreen(pivot.x, pivot.y);
      const dragStartPivotPos = localToScreen(
        dragStartPivot!.x,
        dragStartPivot!.y,
      );

      if (!pivotPos || !dragStartPivotPos) return;

      const startDx = dragStart.x - pivotPos.x;
      const startDy = dragStart.y - pivotPos.y;
      const currentDx = clientX - pivotPos.x;
      const currentDy = clientY - pivotPos.y;

      const startAngle = Math.atan2(startDy, startDx);
      const currentAngle = Math.atan2(currentDy, currentDx);
      const rotation = currentAngle - startAngle;

      const rotationMat = createRotationMatrix(rotation, pivot.x, pivot.y);
      internalMatrix = multiplyMatrix(dragStartMatrix, rotationMat);
      onChange(internalMatrix);
      return;
    }

    // Handle scaling
    const currentLocal = screenToLocal(clientX, clientY);
    const startLocal = screenToLocal(dragStart.x, dragStart.y);

    if (!currentLocal || !startLocal) return;

    let scaleOriginX = 0;
    let scaleOriginY = 0;

    if (ctrlKey) {
      // Scale around pivot
      scaleOriginX = pivot.x;
      scaleOriginY = pivot.y;
    } else {
      // Scale from opposite side
      switch (activeHandle) {
        case "nw":
          scaleOriginX = halfW;
          scaleOriginY = halfH;
          break;
        case "ne":
          scaleOriginX = -halfW;
          scaleOriginY = halfH;
          break;
        case "se":
          scaleOriginX = -halfW;
          scaleOriginY = -halfH;
          break;
        case "sw":
          scaleOriginX = halfW;
          scaleOriginY = -halfH;
          break;
        case "n":
          scaleOriginX = 0;
          scaleOriginY = halfH;
          break;
        case "e":
          scaleOriginX = -halfW;
          scaleOriginY = 0;
          break;
        case "s":
          scaleOriginX = 0;
          scaleOriginY = -halfH;
          break;
        case "w":
          scaleOriginX = halfW;
          scaleOriginY = 0;
          break;
      }
    }

    // Get the reference handle position in local space
    let refLocalX = 0,
      refLocalY = 0;
    if (activeHandle === "nw") {
      refLocalX = -halfW;
      refLocalY = -halfH;
    } else if (activeHandle === "ne") {
      refLocalX = halfW;
      refLocalY = -halfH;
    } else if (activeHandle === "se") {
      refLocalX = halfW;
      refLocalY = halfH;
    } else if (activeHandle === "sw") {
      refLocalX = -halfW;
      refLocalY = halfH;
    } else if (activeHandle === "n") {
      refLocalX = 0;
      refLocalY = -halfH;
    } else if (activeHandle === "e") {
      refLocalX = halfW;
      refLocalY = 0;
    } else if (activeHandle === "s") {
      refLocalX = 0;
      refLocalY = halfH;
    } else if (activeHandle === "w") {
      refLocalX = -halfW;
      refLocalY = 0;
    }

    // Calculate scale based on distance from origin
    const originToRefDx = refLocalX - scaleOriginX;
    const originToRefDy = refLocalY - scaleOriginY;
    const originToCurrentDx = currentLocal.x - scaleOriginX;
    const originToCurrentDy = currentLocal.y - scaleOriginY;

    const originToRefDist = Math.sqrt(
      originToRefDx * originToRefDx + originToRefDy * originToRefDy,
    );
    const originToCurrentDist = Math.sqrt(
      originToCurrentDx * originToCurrentDx +
        originToCurrentDy * originToCurrentDy,
    );

    let scaleX = originToCurrentDist / Math.max(originToRefDist, 0.001);
    let scaleY = originToCurrentDist / Math.max(originToRefDist, 0.001);

    if (shiftKey) {
      // Maintain aspect ratio
      scaleX = scaleY = originToCurrentDist / Math.max(originToRefDist, 0.001);
    } else if (["n", "s"].includes(activeHandle)) {
      // Vertical edge: scale Y only
      scaleX = 1;
      scaleY =
        Math.abs(originToCurrentDy) / Math.max(Math.abs(originToRefDy), 0.001);
      if (originToRefDy * originToCurrentDy < 0) scaleY = -scaleY;
    } else if (["e", "w"].includes(activeHandle)) {
      // Horizontal edge: scale X only
      scaleY = 1;
      scaleX =
        Math.abs(originToCurrentDx) / Math.max(Math.abs(originToRefDx), 0.001);
      if (originToRefDx * originToCurrentDx < 0) scaleX = -scaleX;
    } else {
      // Corner: calculate separate scales
      scaleX =
        Math.abs(originToCurrentDx) / Math.max(Math.abs(originToRefDx), 0.001);
      scaleY =
        Math.abs(originToCurrentDy) / Math.max(Math.abs(originToRefDy), 0.001);
      if (originToRefDx * originToCurrentDx < 0) scaleX = -scaleX;
      if (originToRefDy * originToCurrentDy < 0) scaleY = -scaleY;

      if (shiftKey) {
        const avgScale = (Math.abs(scaleX) + Math.abs(scaleY)) / 2;
        const sign = scaleX * scaleY > 0 ? 1 : -1;
        scaleX = scaleY = sign * avgScale;
      }
    }

    const scaleMat = createScaleMatrix(
      scaleX,
      scaleY,
      scaleOriginX,
      scaleOriginY,
    );
    internalMatrix = multiplyMatrix(dragStartMatrix, scaleMat);
    onChange(internalMatrix);
  }

  // Handle pointer up
  function onPointerUp() {
    endDrag();
  }
</script>

<div
  bind:this={container}
  class="transform-box-container"
  onpointerdown={onPointerDown}
  onpointermove={onPointerMove}
  onpointerup={onPointerUp}
  onpointerleave={onPointerUp}
  style:--handle-size="{handleSize}px"
  style:--pivot-size="{pivotSize}px"
>
  <!-- Box outline - centered at (0,0) with width/height, transformed by matrix -->
  <div
    class="box-outline"
    style={matrixToCss(internalMatrix)}
    style:width="{width}px"
    style:height="{height}px"
    style:margin-left="{-width / 2}px"
    style:margin-top="{-height / 2}px"
  ></div>

  <!-- Pivot point -->
  {#if isAffine}
    <div
      class="handle pivot-handle"
      class:active={activeHandle === "pivot"}
      style={`transform: ${matrixToCss(internalMatrix)} translate(${pivot.x}px, ${pivot.y}px)`}
    ></div>
  {/if}

  <!-- Corner handles -->
  {#if isAffine}
    <div
      class="handle corner-handle nw"
      class:active={activeHandle === "nw"}
      style={`transform: ${matrixToCss(internalMatrix)} translate(${-halfW}px, ${-halfH}px)`}
    ></div>
    <div
      class="handle corner-handle ne"
      class:active={activeHandle === "ne"}
      style={`transform: ${matrixToCss(internalMatrix)} translate(${halfW}px, ${-halfH}px)`}
    ></div>
    <div
      class="handle corner-handle se"
      class:active={activeHandle === "se"}
      style={`transform: ${matrixToCss(internalMatrix)} translate(${halfW}px, ${halfH}px)`}
    ></div>
    <div
      class="handle corner-handle sw"
      class:active={activeHandle === "sw"}
      style={`transform: ${matrixToCss(internalMatrix)} translate(${-halfW}px, ${halfH}px)`}
    ></div>
  {/if}

  <!-- Edge handles -->
  {#if isAffine}
    <div
      class="handle edge-handle n"
      class:active={activeHandle === "n"}
      style={`transform: ${matrixToCss(internalMatrix)} translate(0px, ${-halfH}px)`}
    ></div>
    <div
      class="handle edge-handle e"
      class:active={activeHandle === "e"}
      style={`transform: ${matrixToCss(internalMatrix)} translate(${halfW}px, 0px)`}
    ></div>
    <div
      class="handle edge-handle s"
      class:active={activeHandle === "s"}
      style={`transform: ${matrixToCss(internalMatrix)} translate(0px, ${halfH}px)`}
    ></div>
    <div
      class="handle edge-handle w"
      class:active={activeHandle === "w"}
      style={`transform: ${matrixToCss(internalMatrix)} translate(${-halfW}px, 0px)`}
    ></div>
  {/if}

  <!-- Rotation handle -->
  {#if isAffine}
    <div
      class="handle rotation-handle"
      class:active={activeHandle === "rotation"}
      style={`transform: ${matrixToCss(internalMatrix)} translate(${halfW + 30}px, ${-halfH - 30}px)`}
    ></div>
  {/if}
</div>

<style>
  .transform-box-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .box-outline {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px dashed #4CAF50;
    pointer-events: none;
    box-sizing: border-box;
  }

  .handle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--handle-size);
    height: var(--handle-size);
    margin-left: calc( -1 * var(--handle-size) / 2 ); 
    margin-top: calc( -1 * var(--handle-size) / 2 ); 
    border-radius: 50%;
    background: white;
    border: 2px solid #4CAF50;
    pointer-events: auto;
    cursor: nwse-resize;
    transform-origin: center;
  }

  .pivot-handle {
    width: var(--pivot-size);
    height: var(--pivot-size);
    margin-left: calc( -1 * var(--pivot-size) / 2 );
    margin-top: calc( -1 * var(--pivot-size) / 2 );
    background: #FF9800;
    border-color: white;
    cursor: move;
  }

  .corner-handle {
    cursor: nwse-resize;
  }

  .edge-handle {
    cursor: ns-resize;
  }
  
  .edge-handle.e, .edge-handle.w { cursor: ew-resize; }

  .rotation-handle {
    background: white;
    border-color: #FF9800;
    cursor: grab;
  }

  .active {
    background: #FFEB3B !important;
    border-color: #FF9800 !important;
    border-width: 3px !important;
  }
</style>
