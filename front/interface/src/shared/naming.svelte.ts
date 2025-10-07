import { getContext, setContext } from "svelte";
import type { TDocument, TImageInfo } from "./types";

/**
 * This module defines a class that handles the mapping [imageId -> name]
 */

interface SourceInfo {
    name: string;
    metadata: Record<string, string>;
    images: Record<string, string>;
}

interface TNameProvider {
    sortImages: (images: TImageInfo[]) => TImageInfo[];
    getImageName: (image: TImageInfo, ellipsis?: boolean) => string;
    getSourceName: (source?: TDocument) => string;
    fetchIIIFNames: (documents: TDocument[]) => Promise<any>;
}

export default class NameProvider implements TNameProvider {
    sources: Record<string, SourceInfo> = $state({});

    constructor(sources?: Record<string, SourceInfo>) {
        this.sources = sources || {};
    }

    /**
     * Get the name of an image.
     * @param image The image.
     * @param ellipsis Whether to truncate the name.
     * @returns The name of the image.
     */
    getImageName(image: TImageInfo, ellipsis = false): string {
        let name =
            (image.document &&
                this.sources[image.document.uid]?.images[image.src || image.id]) ||
            image.id;
        if (ellipsis) {
            name = name.split(".").slice(0, -1).join(".");
            if (name.length >= 16) {
                name = name.slice(0, 5) + "..." + name.slice(-10);
            }
        }
        return name;
    }

    /**
     * Get the name of a source.
     * @param source The source.
     * @returns The name of the source.
     */
    getSourceName(source?: TDocument): string {
        if (source === undefined) return "";
        return this.sources[source.uid]?.name || source.name || source.uid || "";
    }

    /**
     * Fetch the names of the sources from a IIIF manifest.
     * Known sources are ignored.
     * @param documents The sources.
     * @returns A promise that resolves when the names are fetched.
     */
    fetchIIIFNames(documents: TDocument[]) {
        return new Promise(async (resolve, reject) => {
            for (const source of documents) {
                if (this.sources[source.uid]) continue;
                fetch(source.src)
                    .then((response) => response.json())
                    .then((manifest) => {
                        // extract title and other metadata
                        if (manifest.metadata === undefined) return source;
                        const metadata = Object.fromEntries(
                            manifest.metadata.map(
                                ({
                                    label,
                                    value,
                                }: {
                                    label: string;
                                    value: string;
                                }) => [label.toLowerCase(), value]
                            )
                        );
                        if (metadata.title === undefined)
                            metadata.title = source.name;

                        if (metadata.classmark !== undefined)
                            metadata.title =
                                metadata.classmark + " " + metadata.title;

                        // extract image names?
                        const canvases =
                            manifest.sequences && manifest.sequences[0]?.canvases;
                        const image_labels =
                            canvases &&
                            Object.fromEntries(
                                canvases.map((canvas: any) => {
                                    const label: string =
                                        canvas.label ||
                                        canvas.title ||
                                        (canvas.images && canvas.images[0].label) ||
                                        canvas["@id"] ||
                                        canvas.id;
                                    const id: string =
                                        (canvas.images &&
                                            canvas.images[0].resource &&
                                            canvas.images[0].resource["@id"]) ||
                                        canvas["@id"] ||
                                        canvas.id;
                                    return [id, label];
                                })
                            );

                        this.sources[source.uid] = {
                            name: metadata.title,
                            metadata,
                            images: image_labels,
                        };
                    });
                // slow down the requests
                await new Promise((resolve) => setTimeout(resolve, 300));
            }
        });
    }

    /**
     * Sort images by source and then by name.
     * @param images The images to sort.
     * @returns The sorted images.
     */
    sortImages(images: TImageInfo[]) {
        const sortfn = (a: TImageInfo, b: TImageInfo) => {
            const source_a = this.getSourceName(a.document);
            const source_b = this.getSourceName(b.document);
            if (source_a === source_b) {
                return this.getImageName(a).localeCompare(
                    this.getImageName(b)
                );
            }
            return (source_a || "").localeCompare(source_b || "");
        };
        return images.sort(sortfn);
    }
}

const no_name_provider: TNameProvider = {
    sortImages: (images: TImageInfo[]) => images,
    getImageName: (image: TImageInfo) => image.name || image.id,
    getSourceName: (source?: TDocument) => source?.name || source?.uid || "",
    fetchIIIFNames: async (documents: TDocument[]) => {},
}

export function getNameProvider(): TNameProvider {
    return getContext<NameProvider>("name_provider") || no_name_provider;
}

export function setNameProvider(name_provider: NameProvider) {
    setContext("name_provider", name_provider);
}