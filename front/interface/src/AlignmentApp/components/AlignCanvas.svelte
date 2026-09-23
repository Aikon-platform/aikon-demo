<script lang="ts">
  import type { AligningImage, AlignmentState } from "../state.svelte";
  import {
    applyTransform,
    identityMatrix,
    invertMatrix,
    matrixToCss,
    multiplyMatrix,
    scaleMatrix,
    translationMatrix,
    type TransformMatrix,
  } from "../transform";
  import TransformBox from "./TransformBox.svelte";
  import IconBtn from "../../shared/components/IconBtn.svelte";
  import Icon from "@iconify/svelte";

  interface Props {
    alignmentState: AlignmentState;
  }

  let { alignmentState }: Props = $props();

  // Container reference for resize observation
  let container: HTMLDivElement;

  // Resize observer
  let resizeObserver: ResizeObserver | null = null;

  // Track container dimensions
  let containerWidth = $state(0);
  let containerHeight = $state(0);

  // Canvas zoom/pan applied on top of the auto-fit layout, expressed
  // as a "fit-space -> screen" transform: screen = zoom * fitPoint + pan
  const MIN_ZOOM = 0.05;
  const MAX_ZOOM = 20;
  let zoom = $state(1);
  let pan = $state({ x: 0, y: 0 });
  let spaceHeld = $state(false);
  let isPanning = $state(false);
  let panStart = { x: 0, y: 0 };
  let panOrigin = { x: 0, y: 0 };

  const clampZoom = (z: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));

  function zoomAt(clientX: number, clientY: number, factor: number) {
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const mx = clientX - rect.left;
    const my = clientY - rect.top;
    const newZoom = clampZoom(zoom * factor);
    if (newZoom === zoom) return;

    // Keep the fit-space point currently under the cursor fixed on screen
    const fx = (mx - pan.x) / zoom;
    const fy = (my - pan.y) / zoom;
    pan = { x: mx - newZoom * fx, y: my - newZoom * fy };
    zoom = newZoom;
  }

  function handleWheel(e: WheelEvent) {
    e.preventDefault();
    const factor = Math.exp(-e.deltaY * 0.001);
    zoomAt(e.clientX, e.clientY, factor);
  }

  function resetView() {
    zoom = 1;
    pan = { x: 0, y: 0 };
  }

  function zoomButton(factor: number) {
    if (!container) return;
    const rect = container.getBoundingClientRect();
    zoomAt(rect.left + rect.width / 2, rect.top + rect.height / 2, factor);
  }

  function isPanTrigger(e: PointerEvent) {
    return e.button === 1 || (e.button === 0 && spaceHeld);
  }

  function handlePointerDown(e: PointerEvent) {
    if (!isPanTrigger(e)) return;
    e.preventDefault();
    isPanning = true;
    panStart = { x: e.clientX, y: e.clientY };
    panOrigin = { ...pan };
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: PointerEvent) {
    if (!isPanning) return;
    pan = {
      x: panOrigin.x + (e.clientX - panStart.x),
      y: panOrigin.y + (e.clientY - panStart.y),
    };
  }

  function handlePointerUp(e: PointerEvent) {
    if (!isPanning) return;
    isPanning = false;
    (e.currentTarget as Element).releasePointerCapture(e.pointerId);
  }

  // Space key triggers hand tool
  function handleKeyDown(e: KeyboardEvent) {
    if (e.code === "Space" && !e.repeat) {
      spaceHeld = true;
    }
  }

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === "Space") {
      spaceHeld = false;
    }
  }

  // Compute relative transform for each image and centering offset
  function computeLayout() {
    const images = alignmentState.images;
    if (images.length === 0) {
      return { transforms: [], centerX: 0, centerY: 0, view: identityMatrix() };
    }

    const firstMatrix = images[0].transform;
    const firstInverse = invertMatrix(firstMatrix);
    const inv = firstInverse || identityMatrix();

    const relativeTransforms = images.map((img) =>
      multiplyMatrix(inv, img.transform),
    );

    // Find bounds of all visible transformed images
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    let hasVisible = false;

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const transform = relativeTransforms[i];

      if (!img.visible) continue;

      hasVisible = true;
      const corners = [
        applyTransform(transform, 0, 0),
        applyTransform(transform, img.image.width, 0),
        applyTransform(transform, img.image.width, img.image.height),
        applyTransform(transform, 0, img.image.height),
      ];

      for (const corner of corners) {
        minX = Math.min(minX, corner.x);
        minY = Math.min(minY, corner.y);
        maxX = Math.max(maxX, corner.x);
        maxY = Math.max(maxY, corner.y);
      }
    }

    // If no visible images, return identity transforms and no offset
    if (!hasVisible) {
      return {
        transforms: relativeTransforms,
        centerX: 0,
        centerY: 0,
        view: inv,
      };
    }

    const width = maxX - minX;
    const height = maxY - minY;
    const centerX = containerWidth / 2 - (minX + width / 2);
    const centerY = containerHeight / 2 - (minY + height / 2);

    // World -> container pixels
    const view = multiplyMatrix(translationMatrix(centerX, centerY), inv);

    return { transforms: relativeTransforms, centerX, centerY, view };
  }

  // Update container dimensions
  function updateDimensions() {
    if (!container) return;

    const rect = container.getBoundingClientRect();
    containerWidth = Math.floor(rect.width);
    containerHeight = Math.floor(rect.height);
  }

  // Initialize resize observer and compute layout
  $effect(() => {
    if (container) {
      updateDimensions();

      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });
      resizeObserver.observe(container);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
  });

  // Compute layout reactively
  const liveLayout = $derived(computeLayout());
  // Layout is frozen while a transform is being dragged, to avoid re-centering
  let frozenLayout: ReturnType<typeof computeLayout> | null = $state(null);
  const layout = $derived(frozenLayout ?? liveLayout);

  // User zoom/pan, applied on top of the auto-fit "world -> container pixel" view
  const zoomPan = $derived(
    multiplyMatrix(translationMatrix(pan.x, pan.y), scaleMatrix(zoom, zoom)),
  );
  const view = $derived(multiplyMatrix(zoomPan, layout.view));

  const selectedImage: number | null = $derived(
    alignmentState.selected[0] ?? null,
  );

  // Clear selection if the selected image is not visible or is the first layer
  $effect(() => {
    if (
      selectedImage !== null &&
      (alignmentState.images[selectedImage]?.visible === false ||
        selectedImage === 0)
    ) {
      alignmentState.selected = [];
    }
  });

  // Only show TransformBox if the selected image is visible and not the first layer
  const showTransformBox = $derived(
    selectedImage !== null &&
      selectedImage !== 0 &&
      alignmentState.images[selectedImage]?.visible !== false,
  );

  function onTransformChange(selected: AligningImage, m: TransformMatrix) {
    selected.transform = m;
    if (!alignmentState.syncWithKeypoints) return;
    
    // Update keypoints for the selected image from reference
    const ref = alignmentState.images[0];
    if (ref && ref.keypoints.length > 0) {
      selected.keypoints = ref.keypoints.map((p) =>
        alignmentState.warpPoint(0, selectedImage!, p),
      );
      selected.fitWarning = null;
    }
  }
</script>

<svelte:window onkeydown={handleKeyDown} onkeyup={handleKeyUp} />

<div class="align-canvas-wrap">
  <div
    bind:this={container}
    class="align-canvas"
    class:pannable={spaceHeld}
    class:panning={isPanning}
    onwheel={handleWheel}
    onpointerdown={handlePointerDown}
    onpointermove={handlePointerMove}
    onpointerup={handlePointerUp}
    onpointercancel={handlePointerUp}
    role="application"
  >
    {#each alignmentState.images as aligningImage}
      {#if aligningImage.visible}
        <img
          src={aligningImage.image.data}
          alt={aligningImage.image.file_name}
          class="align-image"
          width={aligningImage.image.width}
          height={aligningImage.image.height}
          style="
            transform-origin: 0 0;
            transform: {matrixToCss(
            multiplyMatrix(view, aligningImage.transform),
          )};
            opacity: 0.7;
          "
        />
      {/if}
    {/each}
    {#if showTransformBox}
      {@const selected = alignmentState.images[selectedImage!]}
      {#key selectedImage}
        <TransformBox
          transform={selected.transform}
          {view}
          width={selected.image.width}
          height={selected.image.height}
          transformModel={alignmentState.transformModel}
          keepAspectRatio={alignmentState.keepAspectRatio}
          onChange={(m: TransformMatrix) => onTransformChange(selected, m)}
          onDragStart={() => {
            frozenLayout = liveLayout;
          }}
          onDragEnd={() => {
            frozenLayout = null;
          }}
        />
      {/key}
    {/if}
  </div>

  <div class="align-canvas-controls">
    {#if alignmentState.transformModel.startsWith("scale")}
      <IconBtn
        icon={alignmentState.keepAspectRatio
          ? "mdi:link-variant"
          : "mdi:link-variant-off"}
        label="Isotropic"
        class={[
          "is-small",
          alignmentState.keepAspectRatio ? "is-link" : "is-ghost",
        ]}
        onclick={() => {
          alignmentState.keepAspectRatio = !alignmentState.keepAspectRatio;
          alignmentState.resync();
        }}
      />
    {/if}
    <div class="select is-small">
      <select
        bind:value={alignmentState.transformModel}
        onchange={() => alignmentState.resync()}
        title="Transform model"
      >
        <option value="scale">Scale</option>
        <option value="scale+rotate">Scale + Rotate</option>
        <option value="affine">Affine</option>
        <option value="homography">Homography</option>
      </select>
    </div>
    <IconBtn
      icon="mdi:magnify-minus"
      class="is-ghost is-small"
      onclick={() => zoomButton(1 / 1.25)}
    />
    <span class="zoom-level">{Math.round(zoom * 100)}%</span>
    <IconBtn
      icon="mdi:magnify-plus"
      class="is-ghost is-small"
      onclick={() => zoomButton(1.25)}
    />
    <IconBtn
      icon="mdi:fit-to-page-outline"
      label="Reset"
      class="is-ghost is-small"
      onclick={resetView}
    />
  </div>
</div>

<style>
  .align-canvas-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .align-canvas {
    width: 100%;
    height: 100%;
    min-height: 400px;
    background: #222;
    position: relative;
    overflow: hidden;
    touch-action: none;
    cursor: default;
  }

  .align-canvas.pannable {
    cursor: grab;
  }

  .align-canvas.panning {
    cursor: grabbing;
  }

  .align-canvas-controls {
    position: absolute;
    right: 0.75rem;
    bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: rgba(30, 30, 30, 0.75);
    border-radius: var(--bulma-radius, 4px);
    padding: 0.25rem 0.5rem;
    color: #fff;
  }

  .zoom-level {
    font-size: 0.75rem;
    min-width: 3em;
    text-align: center;
    color: #fff;
  }

  .align-image {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    max-width: none;
    max-height: none;
  }
</style>
