<script lang="ts">
  import { untrack } from "svelte";
  import type { AlignmentState } from "../state.svelte";
  import {
    applyTransform,
    identityMatrix,
    invertMatrix,
    multiplyMatrix,
    type TransformMatrix,
  } from "../transform";
  import TransformBox from "./TransformBox.svelte";

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

  // Compute relative transform for each image and centering offset
  function computeLayout() {
    const images = alignmentState.images;
    if (images.length === 0) {
      return { transforms: [], centerX: 0, centerY: 0 };
    }

    const firstMatrix = images[0].transform;
    const firstInverse = invertMatrix(firstMatrix);
    const inv = firstInverse || identityMatrix();
    console.log(firstMatrix, inv);

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
      return { transforms: relativeTransforms, centerX: 0, centerY: 0 };
    }

    const width = maxX - minX;
    const height = maxY - minY;
    const centerX = containerWidth / 2 - (minX + width / 2);
    const centerY = containerHeight / 2 - (minY + height / 2);

    return { transforms: relativeTransforms, centerX, centerY };
  }

  // Format matrix for CSS transform
  function matrixToCss(m: TransformMatrix): string {
    // Embed 3x3 projective matrix into 4x4 for CSS matrix3d
    // [ a  c  0  e ]   Column-major: a,b,0,g, c,d,0,h, 0,0,1,0, e,f,0,i
    // [ b  d  0  f ]
    // [ 0  0  1  0 ]
    // [ g  h  0  i ]
    return `matrix3d(${m.a}, ${m.b}, 0, ${m.g}, ${m.c}, ${m.d}, 0, ${m.h}, 0, 0, 1, 0, ${m.e}, ${m.f}, 0, ${m.i})`;
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
  const layout = $derived(computeLayout());

  let selectedImage:number|null = $state(null);
  let initialTransform:TransformMatrix|null = $state(null);
  let initialWidth:number|null = $state(null);
  let initialHeight:number|null = $state(null);
  $effect(() => {
      const reactive = alignmentState.selected[0];
      untrack(() => {
          if (reactive == selectedImage) return;
          selectedImage = reactive;
          initialTransform = {...$state.snapshot(alignmentState.images[reactive].transform)};
          initialWidth = alignmentState.images[reactive].image.width;
          initialHeight = alignmentState.images[reactive].image.height;
      })
  })
  $inspect(selectedImage, initialTransform, initialWidth, initialHeight);
</script>

<div bind:this={container} class="align-canvas">
  {#each alignmentState.images as aligningImage, i}
    {#if aligningImage.visible}
      <img
        src={aligningImage.image.data}
        alt={aligningImage.image.file_name}
        class="align-image"
        width={aligningImage.image.width}
        height={aligningImage.image.height}
        style="
          transform-origin: 0 0;
          transform: translate({layout.centerX}px, {layout.centerY}px) {matrixToCss(
          layout.transforms[i],
        )};
          opacity: 0.7;
        "
      />
    {/if}
  {/each}
  {#if selectedImage !== null}
    <TransformBox 
      initial={initialTransform!}
      width={initialWidth!}
      height={initialHeight!}
      onChange={(m) => {
        alignmentState.images[selectedImage!].transform = m;
      }}
    />
  {/if}
</div>

<style>
  .align-canvas {
    width: 100%;
    height: 100%;
    min-height: 400px;
    background: #222;
    position: relative;
    overflow: hidden;
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
