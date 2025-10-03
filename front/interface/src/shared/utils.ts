import type { TImageInfo } from "./types";

export function guessImageLink(image: TImageInfo) {
    if (image.link) return image.link;
    if (image.metadata?.page && image.document?.name.startsWith("cudllibcamacuk")) {
        const url = image.document.src.replace("/iiif/", "/view/");
        return `${url}/${image.metadata.page}`
    }
    return undefined;
}

export function ellipsis(str: string, maxLen: number) {
    if (maxLen < 0 || str.length <= maxLen) return str;
    if (maxLen < 12) return str.slice(0, maxLen) + "...";
    return str.slice(0, Math.max(5, maxLen - 12)) + "..." + str.slice(-Math.min(9, maxLen - 5));
}