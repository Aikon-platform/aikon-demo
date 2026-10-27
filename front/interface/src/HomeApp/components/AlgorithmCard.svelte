<script lang="ts">
let { title, desc, href } = $props();
</script>

<a href={href}>
    <div class="algo-card p-4 border">
        <h2>{title}</h2>
        <h3 class="is-family-sans-serif">{desc}</h3>
    </div>
</a>

<style>
.algo-card {

}
</style>
