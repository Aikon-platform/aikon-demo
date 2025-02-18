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

export interface DjangoDocumentInterface {
    [imgUid:string]: DjangoImageInterface
}

/**
 * an entire dataset as sent from the Django backend.
 * each document is identified by its UUID and mapped
 * to an object mappign image uids to DjangoImageInterface
 */
export interface DjangoDatasetImagesInterface {
    [docUid:string]: DjangoDocumentInterface
}

/**
 * single folder structure expected by the DatasetImageBrowser component
 */
export interface FolderImagesInterface {
    folderPath: string,
    folderImages: ImageInfo[]
}

/**
 * single document structure expected by the DatasetImageBrowser component
 */
export interface DocumentImagesInterface {
    documentUid: string,
    documentFolders: FolderImagesInterface[]
}

/**
 * data structure expected by the DatasetImageBrowser component
 */
export interface DatasetImageBrowserInterface extends Array<DocumentImagesInterface> { }
