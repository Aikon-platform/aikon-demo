import type { TImageInfo } from "../shared/types";

/**
 * a single image as sent from the Django backend
 */
export interface TDjangoImageInterface {
    id: string;
    src: string;
    url: string;
    path: string;
    metadata: string | undefined;
}

/**
 * a single document within DjangoDatasetInterface
 */
export interface TDjangoDocumentInterface {
    [imgUid: string]: TDjangoImageInterface;
}

/**
 * an entire dataset as sent from the Django backend.
 * each document is identified by its UUID and mapped
 * to an object mapping image uids to DjangoImageInterface
 */
export interface TDjangoDatasetInterface {
    [docUid: string]: TDjangoDocumentInterface;
}

/**
 * to qualify the hierarchy
 */
export type TDocumentHierarchyType = "folder" | "document";

/**
 * allowed dataset formats
 */
export type TDatasetFormatType = "zip" | "iiif" | "pdf";

/**
 * a container mapped to the images it contains.
 */
export interface TDatasetContentsItemInterface {
    name: string;
    images: TImageInfo[];
}

/**
 * frontend representation of a dataset. depending on `datasetFormat`,
 * `datasetHierarchy` will vary. `datasetHierarchy` qualifies the different
 * elements in `datasetContents`:
 * - if the datasetFormat is IIIF, then datasetContents will have
 *      one DatasetContentsItemInterface  per document)
 * - otherwise, datasetContents will have one DatasetContentsItemInterface
 *      per folder)
 */
export interface TDatasetImageBrowserInterface {
    datasetHierarchy: TDocumentHierarchyType;
    datasetFormat: TDatasetFormatType;
    datasetContents: TDatasetContentsItemInterface[];
}
