export interface TransformMatrix {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
  g: number;
  h: number;
  i: number;
}

export function identityMatrix(): TransformMatrix {
  return {
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 1,
  };
}

export function translationMatrix(tx: number, ty: number): TransformMatrix {
  return { ...identityMatrix(), e: tx, f: ty };
}

export function scaleMatrix(sx: number, sy: number): TransformMatrix {
  return { ...identityMatrix(), a: sx, d: sy };
}

export function rotationMatrix(theta: number): TransformMatrix {
  const cos = Math.cos(theta);
  const sin = Math.sin(theta);
  return { ...identityMatrix(), a: cos, b: sin, c: -sin, d: cos };
}

// Conjugate m so that it operates around (x, y) instead of the origin
export function aroundPoint(
  m: TransformMatrix,
  x: number,
  y: number,
): TransformMatrix {
  return multiplyMatrix(
    translationMatrix(x, y),
    multiplyMatrix(m, translationMatrix(-x, -y)),
  );
}

// Matrix utilities
export function invertMatrix(m: TransformMatrix): TransformMatrix | null {
  const { a, b, c, d, e, f, g, h, i } = m;

  // Compute determinant of 3x3 matrix
  const det = a * (d * i - f * h) - c * (b * i - f * g) + e * (b * h - d * g);

  if (Math.abs(det) < 1e-10) {
    return null;
  }

  const invDet = 1 / det;

  // Adjugate = transpose of cofactor matrix
  // For matrix M = [[a,c,e],[b,d,f],[g,h,i]], adjugate is:
  // [[ d*i-f*h,  e*h-c*i,  c*f-d*e ],
  //  [ f*g-b*i,  a*i-e*g,  b*e-a*f ],
  //  [ b*h-d*g,  c*g-a*h,  a*d-b*c ]]
  // Then map back to [[a,c,e],[b,d,f],[g,h,i]] layout
  return {
    a: (d * i - f * h) * invDet,
    b: (f * g - b * i) * invDet,
    c: (e * h - c * i) * invDet,
    d: (a * i - e * g) * invDet,
    e: (c * f - d * e) * invDet,
    f: (b * e - a * f) * invDet,
    g: (b * h - d * g) * invDet,
    h: (c * g - a * h) * invDet,
    i: (a * d - b * c) * invDet,
  };
}

export function multiplyMatrix(
  m1: TransformMatrix,
  m2: TransformMatrix,
): TransformMatrix {
  return {
    a: m1.a * m2.a + m1.c * m2.b + m1.e * m2.g,
    b: m1.b * m2.a + m1.d * m2.b + m1.f * m2.g,
    c: m1.a * m2.c + m1.c * m2.d + m1.e * m2.h,
    d: m1.b * m2.c + m1.d * m2.d + m1.f * m2.h,
    e: m1.a * m2.e + m1.c * m2.f + m1.e * m2.i,
    f: m1.b * m2.e + m1.d * m2.f + m1.f * m2.i,
    g: m1.g * m2.a + m1.h * m2.b + m1.i * m2.g,
    h: m1.g * m2.c + m1.h * m2.d + m1.i * m2.h,
    i: m1.g * m2.e + m1.h * m2.f + m1.i * m2.i,
  };
}

export function applyTransform(
  m: TransformMatrix,
  x: number,
  y: number,
): { x: number; y: number } {
  const w = m.g * x + m.h * y + m.i;
  return {
    x: (m.a * x + m.c * y + m.e) / w,
    y: (m.b * x + m.d * y + m.f) / w,
  };
}

type Point = { x: number; y: number };
export type Quad = [Point, Point, Point, Point];

// Projective transform mapping the (0, 0) - (width, height) rectangle onto
// quad (clockwise from top-left), or null if the quad is degenerate.
// Square -> quad solution from Heckbert, "Fundamentals of Texture Mapping", 1989
export function rectToQuad(
  width: number,
  height: number,
  quad: Quad,
): TransformMatrix | null {
  const [p0, p1, p2, p3] = quad;
  const dx1 = p1.x - p2.x;
  const dy1 = p1.y - p2.y;
  const dx2 = p3.x - p2.x;
  const dy2 = p3.y - p2.y;
  const dx3 = p0.x - p1.x + p2.x - p3.x;
  const dy3 = p0.y - p1.y + p2.y - p3.y;

  const den = dx1 * dy2 - dx2 * dy1;
  if (Math.abs(den) < 1e-10) {
    return null;
  }
  const g = (dx3 * dy2 - dx2 * dy3) / den;
  const h = (dx1 * dy3 - dx3 * dy1) / den;

  const square: TransformMatrix = {
    a: p1.x - p0.x + g * p1.x,
    b: p1.y - p0.y + g * p1.y,
    c: p3.x - p0.x + h * p3.x,
    d: p3.y - p0.y + h * p3.y,
    e: p0.x,
    f: p0.y,
    g,
    h,
    i: 1,
  };
  return multiplyMatrix(square, scaleMatrix(1 / width, 1 / height));
}

// Signed orientation of a quad if it is strictly convex, 0 otherwise
export function quadOrientation(quad: Quad): number {
  let sign = 0;
  for (let k = 0; k < 4; k++) {
    const p = quad[k];
    const q = quad[(k + 1) % 4];
    const r = quad[(k + 2) % 4];
    const cross = (q.x - p.x) * (r.y - q.y) - (q.y - p.y) * (r.x - q.x);
    if (Math.abs(cross) < 1e-9) return 0;
    const s = Math.sign(cross);
    if (sign !== 0 && s !== sign) return 0;
    sign = s;
  }
  return sign;
}

export function matrixToCss(m: TransformMatrix): string {
  // Embed 3x3 projective matrix into 4x4 for CSS matrix3d
  // [ a  c  0  e ]   Column-major: a,b,0,g, c,d,0,h, 0,0,1,0, e,f,0,i
  // [ b  d  0  f ]
  // [ 0  0  1  0 ]
  // [ g  h  0  i ]
  return `matrix3d(${m.a}, ${m.b}, 0, ${m.g}, ${m.c}, ${m.d}, 0, ${m.h}, 0, 0, 1, 0, ${m.e}, ${m.f}, 0, ${m.i})`;
}
