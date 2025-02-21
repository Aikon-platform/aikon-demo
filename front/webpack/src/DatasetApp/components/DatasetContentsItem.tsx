/**
 * display the all the images in a singleDatasetContentsItemInterface
 * (i.e., either a document or a folder within a dataset).
 *
 * a button can toggle between displaying 4 images and displaying
 * all images, based on `displayLength` and `useDisplayLength`
 */

import { useState, useEffect, useRef } from "react";

import { ImageInfo } from "../../shared/types";
import { DatasetContentsItemInterface, DatasetFormatType } from "../types";

import { IconBtn } from "../../shared/IconBtn";
import { ImageGenericList } from "../../shared";


// itemIndex is the position of `datasetContentsItem` within the `DatasetImageBrowserInterface.datasetContents` array.
export function DatasetContentsItem({
    datasetContentsItem,
    datasetFormat,
    itemIndex
}: {
    datasetContentsItem:DatasetContentsItemInterface,
    datasetFormat:DatasetFormatType,
    itemIndex:number
})  {
    const
        // handle the number of images to display (between 4 and the whole dataset)
        defaultDisplayLength = 4,
        [displayLength, setDisplayLength] = useState<number>(defaultDisplayLength),
        updateDisplayLength = () => setDisplayLength( displayLength === defaultDisplayLength
                                                    ? datasetContentsItem.images.length
                                                    : defaultDisplayLength),
        // remove all directories up to the `images/` directory, which is in practice the root of the dataset.
        folderPathCleaner = (folderPath:string):string =>
            folderPath.split("/").slice(5,).join("/") + "/";

    return (
        <div className="dci-wrapper">
            <div className="dci-title is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
                <h3 className="id-suffix m-0"
                >Images in {
                    datasetFormat === "iiif"
                    ? `document #${itemIndex+1}`
                    : `folder ${folderPathCleaner(datasetContentsItem.name)}`
                }</h3>
                { datasetContentsItem.images.length > defaultDisplayLength &&
                    <IconBtn icon={ displayLength === 4 ? "mdi:plus" : "mdi:minus" }
                             label={ displayLength === 4 ? "See more items" : "See less items" }
                             onClick={() => updateDisplayLength()}
                    ></IconBtn>
                }
            </div>
            <ImageGenericList imageArray={datasetContentsItem.images.slice(0,displayLength)} />
        </div>
    )
}
