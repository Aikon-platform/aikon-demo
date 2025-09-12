import dramatiq

from .models import DTIClustering

"""
All dramatiq tasks related to the DTI clustering
"""


@dramatiq.actor()
def collect_results(experiment_id: str, result_url: str):
    """
    Download the results from the API and save them to the dticlustering.results_path
    """
    try:
        dticlustering = DTIClustering.objects.get(id=experiment_id)
    except Exception as e:
        print(
            f"[dticlustering.collect_results] Unknown DTIClustering: experiment_id doesn't match any record {e}"
        )
        return

    dticlustering.retrieve_results(result_url)
