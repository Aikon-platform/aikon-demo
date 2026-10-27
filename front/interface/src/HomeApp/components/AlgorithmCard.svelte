<script lang="ts">
let { title, desc, href } = $props();
</script>

<a href={href}>
    <h2>{title}</h2>
    <h3 class="is-family-sans-serif">{desc}</h3>
</a>

<style lang="scss">
</style>
