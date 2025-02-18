import { ImageInfo } from "../shared/types";

/**
 * a single image as sent from the Django backend
 */
export interface DjangoImageInterface {
    id: string,
    src: string,
    url: string,
    path: string,
    metadata: string|undefined
}

/**
 * a single document within DjangoDatasetInterface
 */
export interface DjangoDocumentInterface {
    [imgUid:string]: DjangoImageInterface
}

/**
 * an entire dataset as sent from the Django backend.
 * each document is identified by its UUID and mapped
 * to an object mapping image uids to DjangoImageInterface
 */
export interface DjangoDatasetInterface {
    [docUid:string]: DjangoDocumentInterface
}

/**
 * to qualify the hierarchy
 */
export type DocumentHierarchyType = "folder"|"document";

/**
 * allowed dataset formats
 */
export type DatasetFormatType = "zip" | "iiif" | "pdf";

/**
 * a container mapped to the images it contains.
 */
export interface DatasetContentsInterface {
    name: string,
    images: ImageInfo[]
}

/**
 * frontend representation of a dataset. depending on `datasetFormat`,
 * `datasetHierarchy` will vary. `datasetHierarchy` qualifies the different
 * elements in `datasetContents`:
 * - if the datasetFormat is IIIF, then datasetContents will have
 *      one DatasetContentsInterface  per document)
 * - otherwise, datasetContents will have one DatasetContentsInterface
 *      per folder)
 */

export interface DatasetImageBrowserInterface {
    datasetHierarchy: DocumentHierarchyType,
    datasetFormat: DatasetFormatType,
    datasetContents: DatasetContentsInterface[]
}
