/**
 * display all images of all documents within a dataset, using ImageGenericList.tsx
 */

import React from "react";

import { DatasetFormat, ImageInfo } from "../../shared/types";
import { ImageGenericList } from "../../shared";

import { DjangoDatasetImagesInterface,
         DjangoDocumentInterface,
         DjangoImageInterface,
         FolderImagesInterface,
         DocumentImagesInterface,
         DatasetImageBrowserInterface } from "../types";


/**********************************************/
// converters

const imgToImageInfo = (img:DjangoImageInterface, imgIdx:number): ImageInfo => ({
    id: img.id,
    num: imgIdx,
    url: img.url,
    src: img.src,
})

// the returned FolderImagesInterface[] is sorted alphanuerically by folder name
const toFolderImagesInterfaceArray = (docContents:DjangoDocumentInterface):FolderImagesInterface[] => {
    const folderPathExtracter = (filePath:string):string =>
        filePath.split("/").slice(0,-1).join("/")
    let documentImageArray =
        Object.entries(docContents).map(([imgUid, img], idx) =>
            imgToImageInfo(img as DjangoImageInterface, idx as number));
    let folderPathArray =
        [ ...new Set(documentImageArray.map(
            img => folderPathExtracter(img.url))) ];
    return folderPathArray.map(folderPath => ({
        folderPath: folderPath,
        folderImages: documentImageArray.filter(documentImage =>
            folderPathExtracter(documentImage.url) === folderPath)
    })).sort((a,b) => a.folderPath.localeCompare(b.folderPath));
}

const toDocumentImagesInterface = (docUid:string, docContents:DjangoDocumentInterface):DocumentImagesInterface => ({
    documentUid:docUid,
    documentFolders: toFolderImagesInterfaceArray(docContents)
})

// the returned DatasetImageBrowserInterface is sorted by each document's UUID.
const toDatasetImageBrowserInterface = (dataset:DjangoDatasetImagesInterface):DatasetImageBrowserInterface =>
    Object
        .entries(dataset)
        .map(([docUid, docContents]) => toDocumentImagesInterface(docUid, docContents))
        .sort((a,b) => a.documentUid.localeCompare(b.documentUid));


interface DatasetImageBrowserAgnosticItem {
    name: string,
    images: ImageInfo[]
}

interface DatasetImageBrowserAgnosticArray extends Array<DatasetImageBrowserAgnosticItem> {}

const toDatasetBrowserAgnostic = (dataset:DatasetImageBrowserInterface, datasetFormat:DatasetFormat):DatasetImageBrowserAgnosticArray =>
    datasetFormat === "iiif"
    // dataset may contain several documents, but no subfolders
    ? dataset.map(({documentUid, documentFolders}) => ({
        name:documentUid,
        images: documentFolders.map(({folderPath, folderImages}) =>
            folderImages
        ).reduce((previousVal, currentVal) =>
            previousVal.concat(currentVal)
        )
    }))
    // dataset contains only one document, but may contain folders
    : dataset[0].documentFolders.map(({ folderPath, folderImages }) => ({
        name: folderPath,
        images: folderImages
    }))

// TODO cleanup : homogenize interfaces, clarify names, see if we can do without `toDatasetImageBrowserInterface`.


/**********************************************/
// component
export function DatasetImageBrowser({ dataset, datasetFormat }: { dataset:DjangoDatasetImagesInterface, datasetFormat:DatasetFormat }) {

    // remove all directories up to the `images/` directory, which is in practice the root of the dataset.
    const folderPathCleaner = (folderPath:string):string =>
        folderPath.split("/").slice(5,).join("/") + "/"

    const datasetRetyped1: DatasetImageBrowserInterface = toDatasetImageBrowserInterface(dataset),
          datasetRetyped2: DatasetImageBrowserAgnosticArray = toDatasetBrowserAgnostic(datasetRetyped1, datasetFormat);

    return (
        <div>
        { datasetRetyped2.map(({name, images}, idx) =>
            (<div id={name}
                  key={name}>
                <h3 className="id-suffix">Images of {
                    datasetFormat === "iiif"
                    ? `document #${idx+1}`
                    : `folder ${folderPathCleaner(name)}`
                }</h3>
                <div>
                    <ImageGenericList imageArray={images} />
                </div>
            </div>)
        )}
        </div>
    )
}
