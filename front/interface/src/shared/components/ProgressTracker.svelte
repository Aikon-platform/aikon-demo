<script lang="ts">
    interface ProgressStatus {
        status: string;
        is_finished: boolean;
        log: {
            infos?: string[];
            progress?: { context: string; current: number; total: number }[];
            errors?: string[];
        };
    }

    interface Props {
        tracking_url: string;
    }
    let { tracking_url }: Props = $props();

    let job_status = $state<ProgressStatus | null>(null);
    let error = $derived(job_status?.log?.errors?.join("\n"));
    let poll_timeout: number;

    /**
     * Poll the tracking URL to get the progress of the task.
     * If the task is finished, reload the page.
     * If the task is not finished, poll again after 1 second.
     * If there is an error, poll again after 1 second.
     */
    function poll() {
        fetch(tracking_url)
            .then((response) => response.json())
            .then((data) => {
                job_status = data as ProgressStatus;
                if (job_status.is_finished) {
                    window.location.reload();
                } else {
                    poll_timeout = setTimeout(poll, 1000);
                }
            })
            .catch((error) => {
                error = error.toString();
                poll_timeout = setTimeout(poll, 1000);
            });
    }

    $effect(() => {
        poll();
        return () => clearTimeout(poll_timeout);
    });
</script>

<div class="tck-progress">
    {#if error}
        {error}
    {:else if job_status?.is_finished}
        Done!
    {:else if job_status === null}
        Loading...
    {:else}
        <span class="mb-3 tag status status-{job_status.status}">{job_status.status}</span>
        {#if job_status.log?.progress}
            <div class="tck-bar-list">
                {#each job_status.log.progress as progress, i}
                    <div>
                        <span class="label"
                            >{progress.context} {progress.current}/{progress.total}</span
                        >
                        <progress
                            class="progress is-link bar"
                            value={progress.current}
                            max={progress.total}
                        ></progress>
                    </div>
                {/each}
            </div>
        {/if}
        <pre>{job_status.status == "PENDING"
                ? "Waiting for worker..."
                : job_status.log?.infos?.join("\n")}</pre>
    {/if}
</div>
