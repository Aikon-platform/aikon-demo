"""
Conversion of DTI clustering results (cluster_by_path.csv) to alignment results,
mirroring interface/src/ClusterApp/align.ts
"""

import csv
import json
import math
from pathlib import Path
from typing import Dict, List, Literal, Optional, Tuple

# 3x3 matrix, as rows
Matrix = List[List[float]]

# DTI spatial transform, image -> prototype in normalized coordinates ([-1, 1]):
# - affine (F.affine_grid): align_corners=False on both sides
# - projective (kornia homography_warp): image grid with align_corners=True,
#   sampled in the prototype with align_corners=False
DTITransformKind = Literal["affine", "projective"]

# Csv columns of each transform kind (DTI transformation names and their aliases)
TRANSFORM_COLUMNS: Dict[DTITransformKind, List[str]] = {
    "affine": ["matrix_affine", "matrix_aff"],
    "projective": ["matrix_projective", "matrix_proj", "matrix_homography"],
}

# Alignment target transform equivalent to each DTI transform kind
TARGET_TRANSFORMS: Dict[DTITransformKind, str] = {
    "affine": "affine",
    "projective": "homographic",
}


def multiply(m: Matrix, n: Matrix) -> Matrix:
    return [
        [sum(m[i][k] * n[k][j] for k in range(3)) for j in range(3)] for i in range(3)
    ]


def parse_matrix(value: Optional[str]) -> Optional[Matrix]:
    """
    "[a, c, e, b, d, f, g, h, i]" (flattened 3x3 or 2x3 rows) -> 3x3 matrix
    """
    if not value:
        return None
    try:
        flat = json.loads(value)
    except ValueError:
        return None
    if not isinstance(flat, list) or len(flat) not in [9, 6]:
        return None
    if not all(isinstance(x, (int, float)) and math.isfinite(x) for x in flat):
        return None
    flat = [float(x) for x in flat] + ([0.0, 0.0, 1.0] if len(flat) == 6 else [])
    return [flat[0:3], flat[3:6], flat[6:9]]


def parse_cluster_csv(
    csv_path: Path,
) -> Tuple[DTITransformKind, Dict[str, Tuple[int, Optional[Matrix]]]]:
    """
    Parse the DTI image metadata csv
    (header like "image_id,path,cluster_name,cluster_id,matrix_color,matrix_affine,dist_cluster_0")

    Returns:
        The transform kind, and {image path: (cluster_id, image -> prototype matrix)}

    Raises:
        ValueError: If the csv has no or both affine and projective transforms
    """
    with open(csv_path, newline="") as f:
        rows = list(csv.DictReader(f))
    header = list(rows[0].keys()) if rows else []

    columns = {
        kind: next(col for col in header if col in names)
        for kind, names in TRANSFORM_COLUMNS.items()
        if any(col in names for col in header)
    }
    if len(columns) != 1:
        raise ValueError(
            "DTI alignment requires exactly one affine or projective transform, "
            f"found columns {header}"
        )
    [(kind, column)] = columns.items()

    return kind, {
        row["path"]: (int(row["cluster_id"]), parse_matrix(row[column])) for row in rows
    }


def normalization_matrix(
    width: int, height: int, align_corners: bool = False, inverse: bool = False
) -> Matrix:
    """
    Pixels of a width x height image -> torch normalized coordinates (or the inverse)
    """
    if align_corners:
        # Pixel centers (at x + 0.5) span [-1, 1]
        sx, sy = 2 / (width - 1), 2 / (height - 1)
        tx, ty = -sx / 2 - 1, -sy / 2 - 1
    else:
        sx, sy, tx, ty = 2 / width, 2 / height, -1.0, -1.0
    if inverse:
        sx, sy, tx, ty = 1 / sx, 1 / sy, -tx / sx, -ty / sy
    return [[sx, 0.0, tx], [0.0, sy, ty], [0.0, 0.0, 1.0]]


def to_pixel_matrix(
    to_prototype: Matrix,
    kind: DTITransformKind,
    image_size: Tuple[int, int],
    prototype_size: Tuple[int, int],
) -> Matrix:
    """
    DTI normalized image -> prototype matrix to image pixels -> prototype pixels matrix
    (the alignment transform_matrix, the prototype being the reference)
    """
    normalize = normalization_matrix(*image_size, align_corners=(kind == "projective"))
    from_prototype = normalization_matrix(*prototype_size, inverse=True)
    return multiply(from_prototype, multiply(to_prototype, normalize))
