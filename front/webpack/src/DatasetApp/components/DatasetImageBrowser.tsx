/**
 * display all images of all documents within a dataset.
 * this component handles dataset-level display. in a
 * DatasetImageBrowserInterface, images are split in several
 * "containers" (one for folder/documents, depending on the
 * DatasetImageBrowserInterface.datasetFormat). each of these
 * containers is handled by ContainerImageList
 */

import { ImageInfo } from "../../shared/types";
import { DatasetContentsItem } from "./DatasetContentsItem";

import { DatasetFormatType,
         DjangoDatasetInterface,
         DatasetContentsItemInterface,
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

// in non-IIIF datasets, images are grouped by folder path (especially useful for zips)
const nonIiifToDatasetContentsItemInterface = (dataset:DjangoDatasetInterface):DatasetContentsItemInterface[] => {
    const folderPathExtracter = (filePath:string):string =>
        filePath.split("/").slice(0,-1).join("/"),
          docContents =  Object.values(dataset)[0];

    let folderPathArray =
        [ ...new Set(Object.entries(docContents).map(([imgUid, img]) =>
            folderPathExtracter(img.url)))]

    return folderPathArray.map(folderPath => ({
        name: folderPath,
        images:
            Object.entries(docContents)
            .filter(([imgUid, img]) => folderPathExtracter(img.url) === folderPath)
            .map(([imgUid, img], idx) => toImageInfo(img, idx as number))
    }));
}

// in IIIF datasets, images are grouped by document
// (since a IIIF dataset can contain multiple manifests, treated as multiple docs)
const iiifToDatasetContentsItemInterface = (dataset:DjangoDatasetInterface):DatasetContentsItemInterface[] =>
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
        ? iiifToDatasetContentsItemInterface(dataset)
        : nonIiifToDatasetContentsItemInterface(dataset)
        .sort((a,b) => a.name.localeCompare(b.name))
})

/**********************************************/
// component
export function DatasetImageBrowser({ dataset, datasetFormat }: { dataset:DjangoDatasetInterface, datasetFormat:DatasetFormatType }) {

    const datasetAsInterface = toDatasetImageBrowserInterface(dataset, datasetFormat) as DatasetImageBrowserInterface;

    return (
        <div>
        { datasetAsInterface.datasetContents.map((datasetContentsItem, idx) =>
            (<div id={datasetContentsItem.name}
                  key={datasetContentsItem.name}>
                <DatasetContentsItem datasetContentsItem={datasetContentsItem}
                                     datasetFormat={datasetFormat}
                                     itemIndex={idx}
                />
            </div>)
        )}
        </div>
    )
}
