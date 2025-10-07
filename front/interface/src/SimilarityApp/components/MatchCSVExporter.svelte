<script lang="ts">
    import CSVExporter from "../../shared/components/CSVExporter.svelte";
    import { getNameProvider } from "../../shared/naming.svelte";
    import type { TSimilarityMatches } from "../types";

    interface Props {
        matches: TSimilarityMatches;
        threshold?: number;
    }
    let { matches, threshold }: Props = $props();
    const name_provider = getNameProvider();

    async function* iterRows() {
        const metadata_fields = new Set<string>();
        const ematches = matches.matches.filter(m => !threshold || m.similarity >= threshold);
        ematches.unshift({image: matches.query, similarity: 1, q_transposition: "none", m_transposition: "none"});

        ematches.forEach((match) => {
            Object.keys(match.image.document?.metadata || {}).forEach((key) =>
                metadata_fields.add(key)
            );
            Object.keys(match.image.metadata || {}).forEach((key) => metadata_fields.add(key));
        });

        const linted_metadata = Array.from(metadata_fields).map((s) =>
            (s.charAt(0).toUpperCase() + s.slice(1)).replace(/[^\w\s]/g, " ")
        );

        yield [
            "Image",
            "Source",
            "Similarity",
            "Document",
            "Document URL",
            ...linted_metadata,
        ];
        for (const match of ematches) {
            const metadata = Array.from(metadata_fields).map(
                (key) => (match.image.metadata || match.image.document?.metadata || {})[key] || ""
            );
            yield [
                name_provider.getImageName(match.image),
                match.image.src || match.image.id,
                match.similarity,
                name_provider.getSourceName(match.image.document),
                match.image.document?.src || "",
                ...metadata,
            ];
        }
    }
</script>

<CSVExporter {iterRows} filename="similarity-matches.csv" />
