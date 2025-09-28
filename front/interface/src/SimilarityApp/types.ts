import type { TDocument, TImageInfo, TMatchTransposition } from "../shared/types";

// RAW TYPES

export interface TSimilarityIndexRaw {
    sources: {
        [source_id: string]: {
            uid: string;
            src: string;
            type: string;
            metadata: { [key: string]: string };
        }
    }
    images: [
        {
            id: string;
            src: string; // e.g. iiif url
            url: string; // e.g. media url
            doc_uid: string;
            metadata?: { [key: string]: string };
        }
    ]
    transpositions?: TMatchTransposition[];
}

export type TSimpleSimilarityMatchRaw = [number, number, number] // [source_index, query_index, similarity]

export interface TSimilarityMatchRaw {
    similarity: number;
    best_source_flip: number;
    best_query_flip: number;
    query_index: number;
    source_index: number;
}

export interface TSimilarityOutputRaw {
    matches: TSimilarityMatchRaw[][]; // matches for each query image
    query_transpositions: TMatchTransposition[];
}

export interface TSimilarityIndex {
    sources: TDocument[];
    images: TImageInfo[];
    transpositions: TMatchTransposition[];
}

// QUERY TYPES

export interface TQueryImage {
    source_url: string;
    crop_id?: number;
    bbox?: [number, number, number, number];
}

// RESULT TYPES

export interface TSimilarityMatch {
    image: TImageInfo;
    similarity: number;
    q_transposition: TMatchTransposition;
    m_transposition: TMatchTransposition;
}

export interface TSimilarityMatches {
    query: TImageInfo;
    matches: TSimilarityMatch[];
    matches_by_document: TSimilarityMatch[][];
}
