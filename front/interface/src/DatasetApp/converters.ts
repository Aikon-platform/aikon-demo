import type { TImageInfo } from "../shared/types";
import type {
    TDjangoImageInterface,
    TDjangoDatasetInterface,
    TDatasetContentsItemInterface,
    TDatasetImageBrowserInterface,
    TDatasetFormatType,
} from "./types";

function toImageInfo(image: TDjangoImageInterface, imgIdx: number): TImageInfo {
    return {
        id: image.id,
        num: imgIdx,
        url: image.url,
        src: image.src,
    };
}

function nonIIIFToDatasetContentsItemInterface(
    dataset: TDjangoDatasetInterface
): TDatasetContentsItemInterface[] {
    const folderPathExtracter = (filePath: string): string =>
        filePath.split("/").slice(0, -1).join("/");
    const docContents = Object.values(dataset)[0];

    let folderPathArray = [
        ...new Set(
            Object.entries(docContents).map(([imgUid, img]) => folderPathExtracter(img.url))
        ),
    ];

    return folderPathArray.map((folderPath) => ({
        name: folderPath,
        images: Object.entries(docContents)
            .filter(([imgUid, img]) => folderPathExtracter(img.url) === folderPath)
            .map(([imgUid, img], idx) => toImageInfo(img, idx as number)),
    }));
}

function IIIFToDatasetContentsItemInterface(
    dataset: TDjangoDatasetInterface
): TDatasetContentsItemInterface[] {
    return Object.entries(dataset).map(([docUid, docImages]) => ({
        name: docUid,
        images: Object.entries(docImages).map(([imgUid, img], idx) =>
            toImageInfo(img, idx as number)
        ),
    }));
}

/**
 * Unserialize a Django dataset to a DatasetImageBrowserInterface
 * @param dataset
 * @param datasetFormat
 * @returns
 */
export function toDatasetImageBrowserInterface(
    dataset: TDjangoDatasetInterface,
    datasetFormat: TDatasetFormatType
): TDatasetImageBrowserInterface {
    return {
        datasetFormat: datasetFormat,
        datasetHierarchy: datasetFormat === "iiif" ? "document" : "folder",
        datasetContents:
            datasetFormat === "iiif"
                ? IIIFToDatasetContentsItemInterface(dataset)
                : nonIIIFToDatasetContentsItemInterface(dataset),
    };
}
