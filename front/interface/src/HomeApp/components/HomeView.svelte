<script lang="ts">
    import AlgorithmCard from "./AlgorithmCard.svelte";
    import HomeIntro from "./HomeIntro.svelte";

    const toStartTask = (taskName: String) => `/${taskName}/start`;

    const data = [
        [
            "Regions extraction",
            "Extract visual elements from a document",
            toStartTask("regions")
        ],
        [
            "Similarity retrieval",
            "Find similar images and copies within a dataset",
            toStartTask("similarity")
        ],
        [
            "DTI Clustering",
            "Group images dataset based on prototype reconstruction",
            toStartTask("dti")
        ],
        [
            "Watermark detection",
            "Detect and compare watermarks on historical documents",
            toStartTask("watermarks")
        ],
    ]
</script>

<div>
    <div class="main-wrapper">
        <HomeIntro></HomeIntro>
        <div class="flex-centered">
            <ul class="columns is-centered is-vcentered is-multiline task-list">
                {#each data as [title, desc, href]}
                    <li class="row column is-12">
                        <AlgorithmCard {title} {desc} {href} /></li>
                {/each}
            </ul>
        </div>
    </div>
    <div class="footer-wrapper">
        <section class="is-6 column is-large">
            <div class="notification is-light">
                <p>
                    These demos were created as part of the <strong>ERC project DISCOVER</strong> funded by the
                    European Union’s Horizon Europe Research and Innovation program under
                    grant agreement No. 101076028.
                </p>
                <div class="message mt-5 is-small">
                    <div class="message-body">
                        <p>
                            Discover project is supported by a network of collaborators:
                        </p>
                        <ul>
                            <li>
                                <strong>EiDA</strong>
                                (<a href="https://anr.fr/Projet-ANR-22-CE38-0014" class="has-text-link">ANR-22-CE38-0014</a>)
                            </li>
                            <li>
                                <strong>VHS</strong>
                                (<a href="https://anr.fr/Projet-ANR-21-CE38-0008" class="has-text-link">ANR-21-CE38-0008</a>)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>

<style>
.main-wrapper {
    height: calc(100vh - var(--bulma-navbar-height));
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    width: 100%;
}
</style>
