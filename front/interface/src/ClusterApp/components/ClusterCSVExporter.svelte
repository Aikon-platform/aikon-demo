<script lang="ts">
    import CSVExporter from "../../shared/components/CSVExporter.svelte";
    import { getNameProvider } from "../../shared/naming.svelte";
    import type { TClusterInfo } from "../types";
    let { clusters }: { clusters: TClusterInfo[] } = $props();
    const name_provider = getNameProvider();

    async function* iterRows() {
        const metadata_fields = new Set<string>();
        clusters.forEach((cluster) => {
            cluster.images.forEach((image) => {
                Object.keys(image.document?.metadata || {}).forEach((key) =>
                    metadata_fields.add(key)
                );
                Object.keys(image.metadata || {}).forEach((key) => metadata_fields.add(key));
            });
        });
        yield [
            "Cluster",
            "Cluster Name",
            "Image",
            "Source",
            "Document",
            "Document URL",
            ...Array.from(metadata_fields).map((s) =>
                (s.charAt(0).toUpperCase() + s.slice(1)).replace(/[^\w\s]/g, "")
            ),
        ];
        for (const cluster of clusters) {
            for (const image of cluster.images) {
                const metadata = Array.from(metadata_fields).map(
                    (key) => (image.metadata || image.document?.metadata || {})[key] || ""
                );
                yield [
                    cluster.id,
                    cluster.name,
                    name_provider.getImageTitle(image),
                    image.src || image.id,
                    name_provider.getImageDescription(image.document),
                    image.document?.src || "",
                    ...metadata,
                ];
            }
        }
    }
</script>

<CSVExporter {iterRows} filename="cluster.csv" />
