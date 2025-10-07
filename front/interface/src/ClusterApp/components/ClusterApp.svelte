<script lang="ts">
    import type { TClusterImageInfo, TClusterInfo, TClusteringFile } from "../types";
    import IconBtn from "../../shared/components/IconBtn.svelte";
    import ClusterEditorState, { setEditorState } from "../state.svelte";
    import ClusterCSVExporter from "./ClusterCSVExporter.svelte";
    import ClusterElement from "./ClusterElement.svelte";
    import ClusterAskModale from "./ClusterAskModale.svelte";
    import ImageMagnifier, {
        getMagnifyingContext,
        setMagnifyingContext,
        type MagnifyingContext,
    } from "../../shared/components/ImageMagnifier.svelte";

    interface Props {
        clustering_data: TClusteringFile;
        base_url?: string;
        editable?: boolean;
        formfield?: HTMLInputElement;
    }

    let { clustering_data, base_url, editable, formfield }: Props = $props();

    const editor_state = $state(new ClusterEditorState(clustering_data, base_url));
    setEditorState(editor_state);

    let magnifying: MagnifyingContext = $state({});
    if (!getMagnifyingContext()) setMagnifyingContext(magnifying);

    let cluster_sorting = $derived({
        size: (a: TClusterInfo, b: TClusterInfo) => b.images.length - a.images.length,
        id: (a: TClusterInfo, b: TClusterInfo) => a.id - b.id,
        name: (a: TClusterInfo, b: TClusterInfo) => a.name.localeCompare(b.name),
    }[editor_state.viewer_sort]);

    let clusters = $derived(Object.values(editor_state.content.clusters).sort(cluster_sorting));

    function save() {
        if (formfield) {
            formfield.value = JSON.stringify(editor_state.content);
            formfield.form?.submit();
        }
        editor_state.editing = false;
    }
</script>

<div class:cl-editor={editor_state.editing}>
    <div class="toolbar cl-editor-toolbar">
        <div class="toolbar-content">
            <h2>Cluster {editor_state.editing ? "Editor" : "Viewer"}</h2>
            <div class="toolbar-item">
                <label class="label">Sort by:</label>
                <div class="field is-narrow">
                    <div class="select">
                        <select bind:value={editor_state.viewer_sort}>
                            <option value="size">Size</option>
                            <option value="id">ID</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="toolbar-item">
                <label class="label">Display:</label>
                <div class="field is-narrow">
                    <div class="select">
                        <select bind:value={editor_state.viewer_display}>
                            <option value="grid">Grid</option>
                            <option value="rows">Rows</option>
                        </select>
                    </div>
                </div>
            </div>
            {#if editable}
                <div class="toolbar-content cl-editor-tools">
                    {#if editor_state.editingCluster !== null}
                        <div class="toolbar-item cl-select-tools">
                            <label class="label"
                                >Selection ({editor_state.image_selection.size}):</label
                            >
                            <div class="field">
                                {#if editor_state.image_selection.size == 0}
                                    <IconBtn
                                        onclick={() => {
                                            editor_state.select_images("all");
                                        }}
                                        icon="mdi:select-all"
                                        label="All"
                                    />
                                {:else}
                                    <IconBtn
                                        onclick={() => {
                                            editor_state.select_images("none");
                                        }}
                                        icon="mdi:close"
                                        label="Clear"
                                    />
                                    <IconBtn
                                        onclick={() => {
                                            editor_state.select_images("invert");
                                        }}
                                        icon="mdi:select-inverse"
                                        label="Invert"
                                    />
                                {/if}
                            </div>
                        </div>
                        {#if editor_state.image_selection.size > 0}
                            <div class="toolbar-item toolbar-btn">
                                <label class="label">Actions on selection:</label>
                                <IconBtn
                                    onclick={() => {
                                        editor_state.ask_cluster("selection_move", editor_state.editingCluster!);
                                    }}
                                    icon="mdi:folder-move"
                                    label="Move to cluster..."
                                />
                            </div>
                        {/if}
                    {/if}
                    <div class="toolbar-item toolbar-btn">
                        {#if editor_state.editing}
                            <IconBtn
                                onclick={save}
                                icon="mdi:content-save"
                                class="big is-link"
                                label={formfield ? "Save" : "Apply"}
                            />
                        {:else}
                            <IconBtn
                                onclick={() => {
                                    editor_state.editing = true;
                                }}
                                class="big is-link"
                                icon="mdi:edit"
                                label="Edit"
                            />
                        {/if}
                    </div>
                    <div class="toolbar-item toolbar-btn">
                        <ClusterCSVExporter {clusters} />
                    </div>
                </div>
            {/if}
        </div>
    </div>
    <div class={"cl-cluster-list cl-display-" + editor_state.viewer_display}>
        {#each clusters as cluster (cluster.id)}
            <ClusterElement bind:editing={() => editor_state.editingCluster == cluster.id, (value) => editor_state.editingCluster = value ? cluster.id : null} {cluster} editable={editor_state.editing} />
        {/each}
        <div class="cl-cluster box cl-filler"></div>
        <div class="cl-cluster box cl-filler"></div>
        <div class="cl-cluster box cl-filler"></div>
        <div class="cl-cluster box cl-filler"></div>
        <div class="cl-cluster box cl-filler"></div>
    </div>
    {#if editor_state.askingCluster !== null}
        <ClusterAskModale {...editor_state.askingCluster} {clusters} />
    {/if}
</div>

<ImageMagnifier />
