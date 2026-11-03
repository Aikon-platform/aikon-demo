<script lang="ts">
    import { Dialog } from "bits-ui";
    import type { AlignmentState } from "../state.svelte";
    import DiagramEditor from "./DiagramEditor.svelte";
    import IconBtn from "../../shared/components/IconBtn.svelte";
    import { untrack } from "svelte";
    import { multiplyMatrix, translationMatrix } from "../transform";
    import {
        fitViewBox,
        parseSvg,
        serializeSvg,
        type Diagram,
    } from "./diagram";

    interface Props {
        alignmentState: AlignmentState;
        /** Index of the SVG layer being edited */
        index: number;
        open: boolean;
        onClose: () => void;
    }

    let {
        alignmentState,
        index,
        open = $bindable(),
        onClose,
    }: Props = $props();

    let diagram = $state<Diagram | null>(null);
    let loadError = $state<string | null>(null);
    let editor: DiagramEditor | null = $state(null);
    let dirty = $state(false);

    const layer = $derived(alignmentState.images[index]);

    $effect(() => {
        if (open) untrack(() => load(index));
    });

    function load(index: number) {
        const img = alignmentState.images[index].image;
        diagram = null;
        loadError = null;
        fetch(img.data)
            .then((r) => r.text())
            .then((text) => {
                const d = parseSvg(text, img.width, img.height);
                d.width = img.width;
                d.height = img.height;
                diagram = d;
                editor?.reset();
            })
            .catch((e) => {
                loadError = `Could not load ${img.file_name}: ${e}`;
            });
    }

    // ---- Save ----

    function svgBlob(d: Diagram): Blob {
        return new Blob([serializeSvg(d)], { type: "image/svg+xml" });
    }

    /** The diagram with its viewport grown to contain every shape */
    function fitted(d: Diagram): Diagram & { dx: number; dy: number } {
        return { ...$state.snapshot(d), ...fitViewBox(d) };
    }

    function save() {
        if (!diagram) return;
        editor?.cancelCreating();
        const fit = fitted(diagram);
        if (fit.dx || fit.dy || fit.width !== diagram.width || fit.height !== diagram.height) {
            // The layer's pixel p moves to p + (dx, dy): compensate in its
            // transform and keypoints, which live in (flipped) display pixels
            const ddx = layer.hFlip
                ? fit.width - diagram.width - fit.dx
                : fit.dx;
            layer.transform = multiplyMatrix(
                layer.transform,
                translationMatrix(-ddx, -fit.dy),
            );
            layer.keypoints = layer.keypoints.map((p) => ({
                ...p,
                x: p.x + ddx,
                y: p.y + fit.dy,
            }));
            layer.image.width = fit.width;
            layer.image.height = fit.height;
            diagram.viewBox = fit.viewBox;
            diagram.width = fit.width;
            diagram.height = fit.height;
        }
        const old = layer.image.data;
        layer.image.data = URL.createObjectURL(svgBlob(diagram));
        if (typeof old === "string" && old.startsWith("blob:")) {
            URL.revokeObjectURL(old);
        }
        dirty = false;
    }

    function download() {
        if (!diagram) return;
        const url = URL.createObjectURL(svgBlob(fitted(diagram)));
        const a = document.createElement("a");
        a.href = url;
        a.download = layer.image.file_name.replace(/(\.svg)?$/i, ".svg");
        a.click();
        URL.revokeObjectURL(url);
    }

    function close() {
        if (dirty && !confirm("Discard unsaved changes to the diagram?")) {
            return;
        }
        editor?.cancelCreating();
        onClose();
    }
</script>

<!-- Closing goes through close() so that unsaved changes are confirmed -->
<Dialog.Root
    bind:open={
        () => open,
        (o) => {
            if (!o) close();
        }
    }
>
    <Dialog.Portal>
        <div class="modal" class:is-active={open}>
            <Dialog.Overlay class="modal-background" />
            <Dialog.Content
                class="modal-card diagram-editor-modal"
                escapeKeydownBehavior={"ignore"}
            >
                {#snippet child({ props })}
                    <div {...props}>
                        <div class="modal-card-head">
                            <Dialog.Title class="modal-card-title"
                                >Edit {layer.image.file_name}{dirty ? " *" : ""}</Dialog.Title
                            >
                            <IconBtn
                                icon="mdi:content-save"
                                label="Save"
                                class="is-link"
                                disabled={!diagram || !dirty}
                                onclick={save}
                            />
                            <IconBtn
                                icon="mdi:download"
                                label="Download .svg"
                                class="is-link is-light ml-2"
                                disabled={!diagram}
                                onclick={download}
                            />
                            <IconBtn
                                icon="mdi:close"
                                class="is-ghost ml-2"
                                onclick={close}
                            />
                        </div>

                        <div class="modal-card-body diagram-editor-body">
                            {#if loadError}
                                <p class="diagram-message has-text-danger">
                                    {loadError}
                                </p>
                            {:else if !diagram}
                                <p class="diagram-message">Loading…</p>
                            {:else}
                                <DiagramEditor
                                    {alignmentState}
                                    {index}
                                    {diagram}
                                    bind:dirty
                                    bind:this={editor}
                                />
                            {/if}
                        </div>
                    </div>
                {/snippet}
            </Dialog.Content>
        </div>
    </Dialog.Portal>
</Dialog.Root>

<style>
    .diagram-editor-modal {
        width: min(1600px, 92vw);
        max-height: 85vh;
        display: flex;
        flex-direction: column;
    }

    .diagram-editor-body {
        justify-content: stretch;
        display: flex;
        flex-direction: column;
        padding: 0;
        overflow: hidden;
        align-items: stretch;
    }

    .diagram-editor-modal :global(.modal-card-title) {
        text-overflow: ellipsis;
        flex-shrink: 1;
        overflow: hidden;
    }
</style>
