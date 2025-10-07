import type { TClusterInfo, TClusteringFile, TClusterImageInfo } from "../ClusterApp/types";
import type { TSimilarityIndex, TSimilarityMatches } from "./types";
import type { TImageInfo } from "../shared/types";

export interface TEdge {
    source: number;
    target: number;
    weight: number;
}

interface TRCluster {
    id: number;
    merged?: TRCluster;
}

interface TGraph {
    edges: TEdge[];
}

export interface TSimpleCluster {
    id: number;
    members: number[];
}

/**
 * Computes the connected components of a graph, with union-find
 * @param graph The graph
 * @param threshold The threshold for keeping an edge
 * @param graph_size The size of the graph (number of nodes)
 * @returns The connected components
 */
export function connectedComponents(
    graph: TGraph,
    threshold: number,
    graph_size: number
): TSimpleCluster[] {
    const clusters = new Map<number, TRCluster>();

    for (const edge of graph.edges) {
        if (edge.weight < threshold) continue;
        let cluster = clusters.get(edge.source) || clusters.get(edge.target) || { id: edge.source };
        while (cluster?.merged) cluster = cluster.merged;
        let cluster2 = clusters.get(edge.target);
        while (cluster2?.merged) cluster2 = cluster2.merged;
        if (cluster2 && cluster !== cluster2) cluster2.merged = cluster;
        clusters.set(edge.source, cluster);
        clusters.set(edge.target, cluster);
    }

    const fclusters = new Map<number, TSimpleCluster>();
    const residual = new Array<number>();
    for (let i = 0; i < graph_size; i++) {
        let cluster = clusters.get(i);
        while (cluster?.merged) cluster = cluster.merged;
        if (!cluster) {
            residual.push(i);
            continue;
        }
        if (!fclusters.has(cluster.id))
            fclusters.set(cluster.id, { id: fclusters.size, members: [] });
        fclusters.get(cluster.id)!.members.push(i);
    }

    if (residual.length > 0) fclusters.set(-1, { id: -1, members: residual });

    return Array.from(fclusters.values());
}

/**
 * Creates a graph from similarity matches
 * Caution : does not work with svelte proxies as input; use $state.snapshot
 * @param index The index
 * @param matches The matches
 * @returns The graph
 */
export function graphFromSimilarityMatches(
    index: TSimilarityIndex,
    matches: TSimilarityMatches[]
): TGraph {
    const edges: TEdge[] = [];
    const map_index = new Map<string, number>();
    for (const [i, image] of index.images.entries()) {
        map_index.set(image.id, i);
    }

    for (const match of matches) {
        const query_index = map_index.get(match.query.id)!;
        for (const source of match.matches) {
            const source_index = map_index.get(source.image.id)!;
            edges.push({ source: query_index, target: source_index, weight: source.similarity });
        }
    }

    return { edges };
}

/**
 * Serializes the clusters to a clustering file
 * @param index The index
 * @param matches The matches
 * @param clusters The clusters
 * @returns The clustering file
 */
export function convertToClusteringFile(
    index: TSimilarityIndex,
    matches: TSimilarityMatches[],
    clusters: TSimpleCluster[]
): TClusteringFile {
    const cluster_map = new Map<number, TSimpleCluster>();

    for (const cluster of clusters) {
        cluster_map.set(cluster.id, cluster);
    }

    const cluster_info = new Map<number, TClusterInfo>();
    for (const [id, cluster] of cluster_map) {
        const images: TClusterImageInfo[] = cluster.members.map((i) => {
            const image = index.images[i];
            return {
                ...image,
                raw_url: image.url,
                path: image.url,
                name: image.name || "",
            };
        });
        const pid = id >= 0 ? id + 1 : cluster_map.size + 1;
        cluster_info.set(pid, {
            id: pid,
            name: id >= 0 ? `Cluster ${id + 1}` : "Unclustered",
            images,
        });
    }

    return {
        clusters: Object.fromEntries(cluster_info),
        background_urls: index.sources.map((s) => s.src),
    };
}
