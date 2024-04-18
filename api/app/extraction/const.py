from pathlib import Path
from ..shared.utils.fileutils import create_dirs_if_not, create_file_if_not
from ..config.base import ENV, BASE_DIR, XACCEL_PREFIX, API_DATA_FOLDER

DEMO_NAME = "extraction"

# Path to extraction/ folder
DEMO_DIR = BASE_DIR / "app" / DEMO_NAME
LIB_PATH = DEMO_DIR / "lib"

EXT_QUEUE = "queue0"  # see docker-confs/supervisord.conf

EXT_DATA_FOLDER = API_DATA_FOLDER / DEMO_NAME
# EXT_XACCEL_PREFIX = Path(ENV("EXT_XACCEL_PREFIX", default="/media/extraction-results"))
EXT_RESULTS_PATH = EXT_DATA_FOLDER / "results"

IMG_PATH = EXT_DATA_FOLDER / "documents" / "images"
MAN_PATH = EXT_DATA_FOLDER / "documents" / "manifests"
ANNO_PATH = EXT_RESULTS_PATH
MODEL_PATH = EXT_DATA_FOLDER / "models"

create_dirs_if_not([IMG_PATH, MAN_PATH, ANNO_PATH, MODEL_PATH])

IMG_LOG = Path(f"{DEMO_DIR}/img.log")

create_file_if_not(IMG_LOG)

DEFAULT_MODEL = "best_eida.pt"
