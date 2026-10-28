<script lang="ts">
import { fade, slide } from "svelte/transition";

const steps = [
    { stepId: "step-0", stepFilename: "home-pipeline-1.png", stepDesc: "Import datasets" },
    { stepId: "step-1", stepFilename: "home-pipeline-2.png", stepDesc: "Run computer vision algorithms" },
    { stepId: "step-2", stepFilename: "home-pipeline-3.png", stepDesc: "Visualize results" },
]
const stepInterval = 2000;

let currentStepIdx = $state(0);
// each `stepInterval`, update `currentStepIdx` to display a new step in the animation
setInterval(
    () => currentStepIdx =
        currentStepIdx===steps.length-1
        ? 0
        : currentStepIdx + 1,
    stepInterval
);
</script>

<div id="intro-grid" class="flex-centered is-flex-direction-column">
    <h1 class="is-title p-5 has-text-centered">Computer vision for historical data, made easier</h1>
    <div id="intro-fig-wrapper" class="flex-centered">
        {#each steps as step}
            {#if step.stepId === steps[currentStepIdx].stepId}
                <figure id={step.stepId} class="p-5">
                    <img in:fade
                        src={`/static/img/${step.stepFilename}`}
                        alt={step.stepDesc}
                    >
                    <figcaption style="height: 100%">
                        <span class="tag is-link is-large is-rounded m-2">{currentStepIdx+1}</span>
                        <span in:slide class="m-2">{step.stepDesc}</span>
                    </figcaption>
                </figure>
            {/if}
        {/each}
    </div>
</div>

<style>
#intro-fig-wrapper {
    width: 100%;
    /* background-color: red; */
}
figure {
    /* background-color: limegreen; */
    width: 100%;
    margin: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
figure > img {
    min-height: 0;    /* allow shrinking below the image's natural height */
    width: 100%;
    height: 40vh;
    object-fit: contain;
}
figcaption {
    flex: none;
    /* background-color: pink; */
    width: 70%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>
