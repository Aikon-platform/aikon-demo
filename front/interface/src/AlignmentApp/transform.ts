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
// Matrix utilities
export function invertMatrix(m: TransformMatrix): TransformMatrix | null {
  const { a, b, c, d, e, f, g, h, i } = m;

  // Compute determinant of 3x3 matrix
  const det =
    a * (d * i - f * h) -
    c * (b * i - f * g) +
    e * (b * h - d * g);

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
