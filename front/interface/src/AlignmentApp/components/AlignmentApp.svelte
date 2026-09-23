<script lang="ts">
    import { AlignmentState } from "../state.svelte";
    import AlignCandidates from "./AlignCandidates.svelte";
    import AlignCanvas from "./AlignCanvas.svelte";
    import AlignKeypoints from "./AlignKeypoints.svelte";
    import AlignLayers from "./AlignLayers.svelte";
    import IconBtn from "../../shared/components/IconBtn.svelte";

    const alignmentState = new AlignmentState();

    // Open the candidates modal by default so the user picks images first;
    // it can be reopened at any time from the toolbar.
    let showCandidates = $state(true);
    let showKeypoints = $state(true);

    // Resizable panel state
    let sidebarWidth = $state(260);
    let keypointsWidth = $state(300);
    let startX = $state(0);
    let startWidth = $state(0);
    let activeHandle = $state<"sidebar" | "keypoints" | null>(null);

    function startResize(handle: "sidebar" | "keypoints", e: MouseEvent) {
        activeHandle = handle;
        startX = e.clientX;
        startWidth = handle === "sidebar" ? sidebarWidth : keypointsWidth;
        e.preventDefault();
    }

    function stopResize() {
        activeHandle = null;
    }

    function handleResize(e: MouseEvent) {
        if (!activeHandle) return;
        const delta = e.clientX - startX;
        if (activeHandle === "sidebar") {
            const newWidth = startWidth + delta;
            if (newWidth >= 150 && newWidth <= 500) {
                sidebarWidth = newWidth;
            }
        } else if (activeHandle === "keypoints") {
            const newWidth = startWidth - delta;
            if (newWidth >= 200 && newWidth <= 700) {
                keypointsWidth = newWidth;
            }
        }
    }
</script>

<div class="alignment-app-root">
    <div class="alignment-toolbar">
        <IconBtn
            icon="mdi:image-plus"
            label="Add images"
            class="is-link is-light"
            onclick={() => (showCandidates = true)}
        />
        <IconBtn
            icon="mdi:vector-point"
            label="Keypoints"
            class={["is-link", showKeypoints ? "" : "is-light"]}
            onclick={() => (showKeypoints = !showKeypoints)}
        />
    </div>

    <div
        class="alignment-layout"
        on:mousemove={handleResize}
        on:mouseup={stopResize}
        on:mouseleave={stopResize}
    >
        <div
            class="alignment-sidebar"
            style="width: {sidebarWidth}px; flex: 0 0 {sidebarWidth}px;"
        >
            <AlignLayers {alignmentState} />
        </div>
        <div
            class="resize-handle"
            on:mousedown={(e) => startResize("sidebar", e)}
        />
        <div class="alignment-main">
            <AlignCanvas {alignmentState} />
        </div>
        {#if showKeypoints}
            <div
                class="resize-handle"
                on:mousedown={(e) => startResize("keypoints", e)}
            />
            <div
                class="alignment-keypoints"
                style="width: {keypointsWidth}px; flex: 0 0 {keypointsWidth}px;"
            >
                <AlignKeypoints {alignmentState} />
            </div>
        {/if}
    </div>
</div>

<AlignCandidates
    {alignmentState}
    bind:open={showCandidates}
    onClose={() => (showCandidates = false)}
/>

<style>
    .alignment-app-root {
        display: flex;
        flex-direction: column;
        height: 88vh;
        min-height: 500px;
        width: 100%;
    }

    .alignment-toolbar {
        flex: none;
        display: flex;
        align-items: center;
        padding: 0.5rem 0;
    }

    .alignment-layout {
        flex: 1 1 auto;
        display: flex;
        flex-direction: row;
        min-height: 0;
        border: 1px solid var(--bulma-border, #dbdbdb);
        border-radius: var(--bulma-radius-large, 6px);
        overflow: hidden;
    }

    .alignment-sidebar {
        height: 100%;
        overflow: hidden;
        border-right: 1px solid var(--bulma-border, #dbdbdb);
        background: var(--bulma-scheme-main, #fff);
        min-width: 150px;
        max-width: 500px;
    }

    .alignment-main {
        flex: 1 1 auto;
        height: 100%;
        min-width: 0;
        overflow: hidden;
    }

    .alignment-keypoints {
        height: 100%;
        overflow: hidden;
        border-left: 1px solid var(--bulma-border, #dbdbdb);
        background: var(--bulma-scheme-main, #fff);
        min-width: 200px;
        max-width: 70%;
    }

    .resize-handle {
        width: 8px;
        height: 100%;
        background: var(--bulma-border, #dbdbdb);
        cursor: col-resize;
        flex: 0 0 8px;
        transition: background-color 0.2s;
        user-select: none;
    }

    .resize-handle:hover,
    .resize-handle:active {
        background: var(--bulma-primary, #00d1b2);
    }

    :global(.aligner-viewer) {
        width: 100%;
    }
</style>
