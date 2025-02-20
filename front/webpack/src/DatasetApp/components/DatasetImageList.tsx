import { useState } from "react";

import { ImageInfo } from "../../shared/types";

import { ImageGenericList } from "../../shared";


export function DatasetImageList({ imageArray }: { imageArray:ImageInfo[] })  {
    const defaultDisplayLength = 4,
          [displayLength, setDisplayLength] = useState<number>(defaultDisplayLength),
          updateDisplayLength = () => setDisplayLength( displayLength === defaultDisplayLength
                                                      ? imageArray.length
                                                      : defaultDisplayLength);
    return (
        <div className="list-wrapper">
            { imageArray.length > defaultDisplayLength &&
                <button onClick={() => updateDisplayLength()}
                        className="button"
                >{ displayLength === defaultDisplayLength
                   ? "Voir plus"
                   : "Voir moins"
                }</button>
            }
            <ImageGenericList imageArray={imageArray.slice(0,displayLength)} />
        </div>
    )
}
