<script lang="ts">
    import { Dialog } from "bits-ui";
    import type { TClusterInfo } from "../types";
    import { getEditorState } from "../state.svelte";
    import ClusterElement from "./ClusterElement.svelte";
    import IconBtn from "../../shared/components/IconBtn.svelte";
    import Icon from "@iconify/svelte";

    interface Props {
        for_action: "cluster_merge" | "selection_move";
        exclude_cluster_id?: number;
        clusters: TClusterInfo[];
    }

    let { for_action, exclude_cluster_id, clusters }: Props = $props();

    let selected: TClusterInfo | null = $state(null);
    let open = $state(true);
    let editor_state = getEditorState();

    let cluster = $derived(editor_state.content.clusters[exclude_cluster_id!]);
    let { action_icon, action_label, action_title, action_cluster } = $derived(
        for_action == "cluster_merge"
            ? {
                  action_icon: "mdi:merge",
                  action_label: "Merge whole clusters",
                  action_title: "Select target cluster to merge with:",
                  action_cluster: {
                      ...cluster!,
                      name: "Selected cluster: " + cluster?.name,
                  },
              }
            : {
                  action_icon: "mdi:folder-move",
                  action_label: "Move selected images to...",
                  action_title: "Select target cluster to move images:",
                  action_cluster: {
                      id: -1,
                      name: "Selected images",
                      images: editor_state.content.clusters[exclude_cluster_id!]
                          ?.images.filter((image) => editor_state.image_selection.has(image.id)) ?? [],
                  },
              }
    );

    let proposed_clusters = $derived([
        ...clusters.filter((c) => c.id != exclude_cluster_id!),
        ...(for_action == "selection_move" ? [{ id: -1, name: "New cluster", images: [] }] : []),
    ]);

    function doAction() {
        editor_state.ask_cluster_choice(selected!.id);
    }

    function getOpen() {
        return editor_state.askingCluster !== null;
    }
    function setOpen(value: boolean) {
        editor_state.askingCluster = value ? editor_state.askingCluster : null;
    }
</script>

<Dialog.Root bind:open={getOpen, setOpen}>
    <Dialog.Portal>
        <div class="modal" class:is-active={getOpen()}>
            <Dialog.Overlay class="modal-background" />
            <Dialog.Content class="modal-card cl-ask-modal">
                <div class="modal-card-head">
                    <Dialog.Title class="modal-card-title">{action_title}</Dialog.Title>
                    <Dialog.Close class="modal-card-close">
                        <Icon icon="mdi:close" onclick={() => (open = false)} />
                    </Dialog.Close>
                </div>
                <div class="modal-card-body">
                    <div class="cl-ask-cluster">
                        {#if action_cluster.id !== undefined}
                            <ClusterElement
                                thumbnail={true}
                                cluster={action_cluster}
                                selected={true}
                            />
                        {/if}
                    </div>
                    <div class="cl-ask-select">
                        <div class="cl-ask-list">
                            {#each proposed_clusters as cluster (cluster.id)}
                                <div class="cl-ask-cluster">
                                    <a
                                        href="javascript:void(0)"
                                        onclick={() => (selected = cluster)}
                                    >
                                        <ClusterElement
                                            thumbnail={true}
                                            {cluster}
                                            selected={selected?.id == cluster.id}
                                        />
                                    </a>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
                <div class="modal-card-foot cl-modale-actions">
                    <p>
                        <IconBtn
                            onclick={() => {
                                editor_state.askingCluster = null;
                            }}
                            icon="mdi:close"
                            label="Cancel"
                            class="is-outline"
                        />
                        <IconBtn
                            onclick={doAction}
                            icon={action_icon}
                            label={action_label}
                            disabled={selected === null}
                        />
                    </p>
                </div>
            </Dialog.Content>
        </div>
    </Dialog.Portal>
</Dialog.Root>
