<script lang="ts">
  import type {
    AlignmentState,
    RawImage,
    AligningImage,
  } from "../state.svelte.ts";
  import EditableSpan from "../../shared/components/EditableSpan.svelte";
  import { fly } from "svelte/transition";
  import IconBtn from "../../shared/components/IconBtn.svelte";
  import { identityMatrix } from "../transform.js";

  interface Props {
    alignmentState: AlignmentState;
    onClose: () => void;
  }

  let { alignmentState, onClose }: Props = $props();
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

    // Create AligningImage with identity transform
    const aligningImage: AligningImage = {
      image: rawImage,
      transform: identityMatrix(),
      visible: true,
    };

    // Add to state
    alignmentState.images = [...alignmentState.images, aligningImage];
  }

  // Remove an image from the state
  function removeImage(index: number) {
    // Revoke object URL for the image being removed
    const imageToRemove = alignmentState.images[index];
    if (typeof imageToRemove.image.data === "string") {
      URL.revokeObjectURL(imageToRemove.image.data);
    }
    // Remove from state
    alignmentState.images = alignmentState.images.filter((_, i) => i !== index);
  }
</script>

<div
  class="alignment-app drop-zone"
  class:dragging={isDragging}
  ondragenter={handleDragEnter}
  ondragover={handleDragOver}
  ondragleave={handleDragLeave}
  ondrop={handleDrop}
  role="region"
  aria-label="Drag and drop image files here"
  aria-dropeffect="copy"
  transition:fly={{ y: -30, duration: 500 }}
>
  <div class="file is-boxed">
    <label for="{form_id}-img-input" class="file-label">
      <span class="file-cta">
        <span class="file-icon">
          <span class="iconify" data-icon="mdi:upload"></span>
        </span>
        <span class="file-label">Select image files...</span>
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

  <IconBtn
    icon="mdi:check"
    onclick={onClose}
    label="Start aligning"
    class="is-link"
    disabled={!alignmentState.images.length}
  />

  <div class="images-list">
    {#each alignmentState.images as aligningImage, index (index)}
      <div class="image-item">
        <button
          class="delete-button"
          onclick={() => removeImage(index)}
          title="Delete"
        >
          &times;
        </button>
        <img
          src={aligningImage.image.data}
          alt={aligningImage.image.file_name}
          width={aligningImage.image.width}
          height={aligningImage.image.height}
        />
        <EditableSpan
          bind:value={aligningImage.image.file_name}
          placeholder="Filename"
          class="filename-span"
        />
        <span class="image-meta"
          >({aligningImage.image.width}x{aligningImage.image.height})</span
        >
      </div>
    {/each}
  </div>
</div>

<style>
  .alignment-app {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .drop-zone {
    border: 2px dashed #ccc;
    border-radius: 8px;
    padding: 40px;
    text-align: center;
    margin-bottom: 20px;
    transition: all 0.3s ease;
  }

  .drop-zone.dragging {
    border-color: #4caf50;
    background-color: rgba(76, 175, 80, 0.1);
  }

  .images-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .image-item {
    position: relative;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
  }

  .image-item img {
    max-width: 100%;
    max-height: 150px;
    object-fit: contain;
  }

  .filename-span {
    margin-top: 8px;
    font-size: 12px;
    text-align: center;
    word-break: break-all;
    display: block;
  }

  .image-meta {
    font-size: 12px;
    text-align: center;
    color: #666;
    display: block;
    margin-top: 4px;
  }

  .delete-button {
    position: absolute;
    top: 5px;
    right: 5px;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
  }

  .delete-button:hover {
    background: rgba(255, 255, 255, 1);
    color: #333;
  }
</style>
