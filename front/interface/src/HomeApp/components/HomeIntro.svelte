<script lang="ts">
import { fade } from "svelte/transition";

const steps = [
    { stepId: "step-0", stepFilename: "home-pipeline-1.png", stepDesc: "Import a dataset" },
    { stepId: "step-1", stepFilename: "home-pipeline-2.png", stepDesc: "Run a computer vision task" },
    { stepId: "step-2", stepFilename: "home-pipeline-3.png", stepDesc: "Visualize results" },
]
const stepInterval = 2000;

let currentStepIdx = $state(0);
// let currentStep = $derived(steps[currentStepIdx])
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
    <h1 class="is-title p-5">What do you want to process ?</h1>
    <div id="intro-fig-wrapper" class="flex-centered">
        {#each steps as step}
            {#if step.stepId === steps[currentStepIdx].stepId}
                <figure id={step.stepId} class="p-5">
                    <img in:fade src={`/static/img/${step.stepFilename}`} alt={step.stepDesc}>
                    <figcaption>
                        <span class="tag is-link is-large is-rounded">{currentStepIdx+1}</span>
                        {step.stepDesc}
                    </figcaption>
                </figure>
            {/if}
        {/each}
    </div>
</div>

<style>
#intro-grid {
    /*
    height: 90vh;
    display: grid;
    grid-template-rows: 10% 90%;
    grid-template-columns: 100%;
    justify-items: center;
    align-items: center;
    */
}
/*
h1 { background-color: pink }
*/
#intro-fig-wrapper {
    /*
    background-color: purple;
    height: 100%;
    */
}
figure {
    /*
    background-color: limegreen;
    */
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
}
</style>
