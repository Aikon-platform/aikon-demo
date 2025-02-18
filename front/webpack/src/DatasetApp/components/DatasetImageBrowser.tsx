/**
 * display all images of all documents within a dataset, using ImageGenericList.tsx
 */

import React from "react";

import { ImageInfo } from "../../shared/types";
import { ImageGenericList } from "../../shared";

import { DocumentHierarchyType,
         DatasetFormatType,
         DjangoDatasetInterface,
         DjangoDocumentInterface,
         DatasetContentsInterface,
         DjangoImageInterface,
         DatasetImageBrowserInterface } from "../types";


/**********************************************/
// converters

const toImageInfo = (img:DjangoImageInterface, imgIdx:number): ImageInfo => ({
    id: img.id,
    num: imgIdx,
    url: img.url,
    src: img.src,
})

const nonIiifToDatasetContentsInterface = (dataset:DjangoDatasetInterface):DatasetContentsInterface[] => {
    const folderPathExtracter = (filePath:string):string =>
        filePath.split("/").slice(0,-1).join("/"),
          docContents =  Object.values(dataset)[0];

    let documentImageArray =
        Object.entries(docContents).map(([imgUid, img], idx) =>
            toImageInfo(img as DjangoImageInterface, idx as number));
    let folderPathArray =
        [ ...new Set(documentImageArray.map(img =>
            folderPathExtracter(img.url))) ];

    return folderPathArray.map(folderPath => ({
        name: folderPath,
        images: documentImageArray.filter(documentImage =>
            folderPathExtracter(documentImage.url) === folderPath) })
    );
}

const iiifToDatasetContentsInterface = (dataset:DjangoDatasetInterface):DatasetContentsInterface[] =>
    Object.entries(dataset).map(([docUid, docImages]) => ({
        name: docUid,
        images:
            Object
            .entries(docImages)
            .map(([imgUid, img], idx) => toImageInfo(img, idx))
    }))


// to preserve structure, datasetContents is sorted by the `name` key of each item.
const toDatasetImageBrowserInterface = (dataset:DjangoDatasetInterface, datasetFormat:DatasetFormatType): DatasetImageBrowserInterface => ({
    datasetFormat: datasetFormat,
    datasetHierarchy: datasetFormat === "iiif" ? "document" : "folder",
    datasetContents:
        datasetFormat === "iiif"
        ? iiifToDatasetContentsInterface(dataset)
        : nonIiifToDatasetContentsInterface(dataset)
        .sort((a,b) => a.name.localeCompare(b.name))
})

/**********************************************/
// component
export function DatasetImageBrowser({ dataset, datasetFormat }: { dataset:DjangoDatasetInterface, datasetFormat:DatasetFormatType }) {

    // remove all directories up to the `images/` directory, which is in practice the root of the dataset.
    const folderPathCleaner = (folderPath:string):string =>
        folderPath.split("/").slice(5,).join("/") + "/";

    const datasetAsInterface = toDatasetImageBrowserInterface(dataset, datasetFormat);

    return (
        <div>
        { datasetAsInterface.datasetContents.map(({name, images}, idx) =>
            (<div id={name}
                  key={name}>
                <h3 className="id-suffix">Images in {
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
