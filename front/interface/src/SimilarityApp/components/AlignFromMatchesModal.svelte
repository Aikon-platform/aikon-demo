<script lang="ts">
    import { Dialog } from "bits-ui";
    import {
        AlignmentState,
        type RawImage,
        type AligningImage,
    } from "../../AlignmentApp/state.svelte";
    import type { TSimilarityMatches } from "../types";
    import {
        applyTransform,
        identityMatrix,
    } from "../../AlignmentApp/transform";
    import AlignmentApp from "../../AlignmentApp/components/AlignmentApp.svelte";

    interface Props {
        matches: TSimilarityMatches;
        open: boolean;
        onClose: () => void;
        threshold?: number;
    }

    let {
        matches,
        open = $bindable(),
        onClose,
        threshold = 0,
    }: Props = $props();

    // Create alignment state for this modal
    const alignmentState = new AlignmentState();

    // Track if images have been loaded
    let previousThreshold = $state(0);
    let imagesLoaded = $state(false);

    // Load images from matches into alignment state
    async function loadImagesFromMatches() {
        if (imagesLoaded && previousThreshold === threshold) return;
        imagesLoaded = true;
        previousThreshold = threshold;

        // Get up to 20 matches (query + 20 results)
        const imagesToLoad = [
            matches.query,
            ...matches.matches
                .filter((m) => m.similarity >= threshold)
                .slice(0, 20)
                .map((m) => m.image),
        ];
        console.log(imagesToLoad);

        // Clear existing images
        alignmentState.images = [];

        // Load each image
        for (const img of imagesToLoad) {
            try {
                const rawImage = await imageInfoToRawImage(img);
                if (rawImage) {
                    const aligningImage: AligningImage = {
                        image: rawImage,
                        transform: identityMatrix(),
                        visible: true,
                        keypoints:
                            alignmentState.images.length > 0
                                ? alignmentState.images[0].keypoints.map((p) =>
                                      applyTransform(
                                          alignmentState.images[0].transform,
                                          p.x,
                                          p.y,
                                      ),
                                  )
                                : [],
                    };
                    alignmentState.images = [
                        ...alignmentState.images,
                        aligningImage,
                    ];
                }
            } catch (error) {
                console.error("Failed to load image:", img.id, error);
            }
        }

        alignmentState.resync();
    }

    // Convert TImageInfo to RawImage
    async function imageInfoToRawImage(image: {
        id: string;
        url: string;
        name?: string;
        src?: string;
    }): Promise<RawImage | null> {
        // Use the URL directly - it could be a direct image URL or IIIF URL
        const imageUrl = image.url || image.src;

        if (!imageUrl) {
            return null;
        }

        // Create an image element to get dimensions
        const img = new Image();

        // Try loading with timeout
        const loadWithTimeout = (useCrossOrigin = false): Promise<void> => {
            return new Promise((resolve, reject) => {
                const timeoutId = setTimeout(() => {
                    reject(new Error("Image load timeout"));
                }, 5000);

                img.onload = () => {
                    clearTimeout(timeoutId);
                    resolve();
                };
                img.onerror = () => {
                    clearTimeout(timeoutId);
                    reject(new Error("Failed to load image"));
                };

                if (useCrossOrigin) {
                    img.crossOrigin = "anonymous";
                }
                img.src = imageUrl!;
            });
        };

        try {
            // Try without crossOrigin first
            await loadWithTimeout(false);
        } catch (error) {
            // If that fails, try with crossOrigin
            try {
                await loadWithTimeout(true);
            } catch (error2) {
                console.error("Failed to load image:", image.id, error2);
                return null;
            }
        }

        if (img.width === 0 || img.height === 0) {
            return null;
        }

        return {
            file_name: image.name || image.id,
            width: img.width,
            height: img.height,
            data: imageUrl,
        };
    }

    // Handle close - clean up images
    function handleClose() {
        // Revoke object URLs if needed
        for (const aligningImage of alignmentState.images) {
            if (typeof aligningImage.image.data === "string") {
                // Only revoke if it's an object URL we created
                if (aligningImage.image.data.startsWith("blob:")) {
                    URL.revokeObjectURL(aligningImage.image.data);
                }
            }
        }
        alignmentState.images = [];
        imagesLoaded = false;
        onClose();
    }

    // Load images when modal opens
    $effect(() => {
        if (open && (!imagesLoaded || previousThreshold !== threshold)) {
            loadImagesFromMatches();
        }
    });
</script>

<Dialog.Root bind:open>
    <Dialog.Portal>
        <div class="modal" class:is-active={open}>
            <Dialog.Overlay class="modal-background" onclick={handleClose} />
            <Dialog.Content class="modal-card align-from-matches-modal">
                {#snippet child({ props })}
                    <div {...props}>
                        <AlignmentApp {alignmentState} />
                    </div>
                {/snippet}
            </Dialog.Content>
        </div>
    </Dialog.Portal>
</Dialog.Root>

<style>
    .align-from-matches-modal {
        width: min(1600px, 92vw);
        max-height: 85vh;
        display: flex;
        flex-direction: column;
    }
</style>
