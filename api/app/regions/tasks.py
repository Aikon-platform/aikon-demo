import dramatiq
from typing import Optional

from .const import EXT_QUEUE
from .lib.regions import LoggedExtractRegions
from ..shared.utils.logging import notifying, TLogger, LoggerHelper

# @notifying # TODO implement results return with notifying
@dramatiq.actor(
    time_limit=1000 * 60 * 60, max_retries=0, store_results=True, queue_name=EXT_QUEUE
)
def extract_objects(
    experiment_id: str,
    documents: dict,
    model: Optional[str] = None,
    notify_url: Optional[str] = None,
    logger: TLogger = LoggerHelper,
):
    for document in documents.values():
        regions_extraction_task = LoggedExtractRegions(
            logger, experiment_id=experiment_id, document=document, model=model, notify_url=notify_url
        )
        regions_extraction_task.run_task()
