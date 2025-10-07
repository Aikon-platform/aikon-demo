// SOURCE TYPES

export interface TDocument {
    uid: string;
    src: string;
    type: string;
    name: string;
    metadata?: Record<string, string>;
}

export interface TImageInfo {
    id: string;
    num: number;
    url: string;

    src?: string;
    name?: string;
    document?: TDocument;
    link?: string;
    metadata?: Record<string, string>;
    subtitle?: string | undefined;
}

export type TMatchTransposition = "none" | "rot90" | "rot180" | "rot270" | "hflip" | "vflip" | "rot90 hflip" | "rot180 hflip" | "rot270 hflip";
