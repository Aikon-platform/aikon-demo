<script lang="ts">
    import type {
        AlignmentState,
        RawImage,
        AligningImage,
    } from "../state.svelte.ts";
    import { Dialog } from "bits-ui";
    import Icon from "@iconify/svelte";
    import EditableSpan from "../../shared/components/EditableSpan.svelte";
    import IconBtn from "../../shared/components/IconBtn.svelte";
    import {
        applyTransform,
        initialMatrix,
        invertMatrix,
        multiplyMatrix,
    } from "../transform.js";

    interface Props {
        alignmentState: AlignmentState;
        open: boolean;
        onClose: () => void;
    }

    let { alignmentState, open = $bindable(), onClose }: Props = $props();
    const form_id = $props.id();

    // Track drag state for visual feedback
    let isDragging = $state(false);

    // Handle drag enter
    function handleDragEnter(event: DragEvent) {
        event.preventDefault();
        isDragging = true;
    }

    // Handle drag over
    function handleDragOver(event: DragEvent) {
        event.preventDefault();
        isDragging = true;
    }

    // Handle drag leave
    function handleDragLeave(event: DragEvent) {
        event.preventDefault();
        isDragging = false;
    }

    // Handle drop
    async function handleDrop(event: DragEvent) {
        event.preventDefault();
        isDragging = false;

        const items = event.dataTransfer?.items;
        if (!items) return;

        // Process each dropped item
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.kind === "file") {
                const file = item.getAsFile();
                if (file && file.type.startsWith("image/")) {
                    await addImageFromFile(file);
                }
            }
        }
    }

    // Handle files from input (fallback)
    async function handleFileInput(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files) {
            for (const file of Array.from(input.files)) {
                if (file.type.startsWith("image/")) {
                    await addImageFromFile(file);
                }
            }
            input.value = ""; // Reset so same file can be selected again
        }
    }

    // Add an image file to the state
    async function addImageFromFile(file: File) {
        // Create object URL for browser display
        const objectUrl = URL.createObjectURL(file);

        // Load image to get dimensions
        const img = new Image();
        await new Promise<void>((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = () => reject(new Error("Failed to load image"));
            img.src = objectUrl;
        });

        // Create RawImage
        const rawImage: RawImage = {
            file_name: file.name,
            width: img.width,
            height: img.height,
            data: objectUrl,
        };

        const matrix = initialMatrix(img.width, img.height);
        const kpMatrix =
            alignmentState.images.length > 0
                ? multiplyMatrix(
                      invertMatrix(matrix)!,
                      alignmentState.images[0].transform,
                  )
                : undefined;

        // Create AligningImage with identity transform
        const aligningImage: AligningImage = {
            image: rawImage,
            transform: matrix,
            visible: true,
            // Reference keypoints, warped into this image (identity transform)
            keypoints:
                alignmentState.images.length > 0
                    ? alignmentState.images[0].keypoints.map((p) =>
                          applyTransform(kpMatrix!, p.x, p.y),
                      )
                    : [],
            opacity: 0.7,
            invertColors: false,
            hFlip: false
        };

        // Add to state
        alignmentState.images = [...alignmentState.images, aligningImage];
        alignmentState.resync();
    }

    // Remove an image from the state
    function removeImage(index: number) {
        // Revoke object URL for the image being removed
        const imageToRemove = alignmentState.images[index];
        if (typeof imageToRemove.image.data === "string") {
            URL.revokeObjectURL(imageToRemove.image.data);
        }
        // Remove from state
        alignmentState.images = alignmentState.images.filter(
            (_, i) => i !== index,
        );
        alignmentState.resync();
    }
</script>

<Dialog.Root bind:open>
    <Dialog.Portal>
        <div class="modal" class:is-active={open}>
            <Dialog.Overlay class="modal-background" />
            <Dialog.Content class="modal-card align-candidates-modal">
                {#snippet child({ props })}
                    <div {...props}>
                        <div class="modal-card-head">
                            <Dialog.Title class="modal-card-title"
                                >Select images to align</Dialog.Title
                            >

                            <IconBtn
                                icon="mdi:check"
                                onclick={onClose}
                                label="Start aligning"
                                class="is-link"
                                disabled={!alignmentState.images.length}
                            />
                        </div>

                        <div class="modal-card-body">
                            <div
                                class="drop-zone box"
                                class:dragging={isDragging}
                                ondragenter={handleDragEnter}
                                ondragover={handleDragOver}
                                ondragleave={handleDragLeave}
                                ondrop={handleDrop}
                                role="region"
                                aria-label="Drag and drop image files here"
                                aria-dropeffect="copy"
                            >
                                <div class="align-candidates-upload columns">
                                    <p class="column">
                                        Drag &amp; drop images here, or
                                    </p>
                                    <div class="column file is-boxed is-small">
                                        <label
                                            for="{form_id}-img-input"
                                            class="file-label"
                                        >
                                            <span class="file-cta">
                                                <span class="file-icon">
                                                    <Icon icon="mdi:upload" />
                                                </span>
                                                <span class="file-label"
                                                    >Select image files...</span
                                                >
                                            </span>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                onchange={handleFileInput}
                                                style="display: none;"
                                                class="file-input"
                                                id="{form_id}-img-input"
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div class="images-list">
                                    {#each alignmentState.images as aligningImage, index (index)}
                                        <div class="image-card">
                                            <button
                                                class="delete is-small delete-button"
                                                onclick={() =>
                                                    removeImage(index)}
                                                title="Delete"
                                                aria-label="Delete"
                                            ></button>
                                            <div class="image-thumb">
                                                <img
                                                    src={aligningImage.image
                                                        .data}
                                                    alt={aligningImage.image
                                                        .file_name}
                                                />
                                            </div>
                                            <EditableSpan
                                                bind:value={
                                                    aligningImage.image
                                                        .file_name
                                                }
                                                placeholder="Filename"
                                                class="filename-span"
                                            />
                                            <span class="image-meta"
                                                >{aligningImage.image
                                                    .width}×{aligningImage.image
                                                    .height}</span
                                            >
                                        </div>
                                    {/each}
                                    {#if alignmentState.images.length === 0}
                                        <p class="has-text-grey no-images">
                                            No images added yet.
                                        </p>
                                    {/if}
                                </div>
                            </div>
                        </div>

                        <div class="modal-card-foot align-candidates-foot">
                            <IconBtn
                                icon="mdi:check"
                                onclick={onClose}
                                label="Start aligning"
                                class="is-link"
                                disabled={!alignmentState.images.length}
                            />
                        </div>
                    </div>
                {/snippet}
            </Dialog.Content>
        </div>
    </Dialog.Portal>
</Dialog.Root>

<style>
    .align-candidates-modal {
        width: min(1600px, 92vw);
        max-height: 85vh;
        display: flex;
        flex-direction: column;
    }

    .align-candidates-upload {
        justify-content: center;
        align-items: center;
        align-self: center;
    }

    .modal-card-body {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .drop-zone {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        border: 2px dashed var(--bulma-border, #ccc);
        text-align: center;
        padding: 1.5rem;
        transition: all 0.2s ease;
        align-items: stretch;
    }

    .drop-zone.dragging {
        border-color: var(--bulma-primary, #4caf50);
        background-color: var(--bulma-primary-light, rgba(76, 175, 80, 0.1));
    }

    .images-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 1rem;
    }

    .no-images {
        grid-column: 1 / -1;
        text-align: center;
        padding: 1rem 0;
    }

    .image-card {
        position: relative;
        border: 1px solid var(--bulma-border, #ddd);
        border-radius: var(--bulma-radius, 4px);
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
    }

    .image-thumb {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bulma-scheme-main-bis, #f5f5f5);
        border-radius: var(--bulma-radius-small, 3px);
        overflow: hidden;
    }

    .image-thumb img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    :global(.filename-span) {
        margin-top: 0.25rem;
        font-size: 0.75rem;
        text-align: center;
        word-break: break-all;
        width: 100%;
    }

    .image-meta {
        font-size: 0.7rem;
        color: var(--bulma-text-weak, #666);
    }

    .delete-button {
        position: absolute;
        top: 0.35rem;
        right: 0.35rem;
    }

    .align-candidates-foot {
        justify-content: flex-end;
    }
</style>
