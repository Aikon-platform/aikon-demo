/**
 * a generic display for an Image and its metadata.
 * inspired by SimilarityApp.components.MatchGroup
 *
 * ImageFileDisplay focuses only on displaying the image file
 * itself, while ImageGeneric is a fully-fledged component
 * with metadata (title...).
 *
 * TODO fuse with SimilarityApp.components.MatchGroup ?
 */

import { useEffect, useState } from "react";

import { ImageInfo } from "./types";
import { ImageIdentification, ImageFileDisplay } from ".";
import { ImageMagnifier, MagnifyingContext, MagnifyProps } from "./ImageMagnifier";
import { ImageTooltip, TooltipContext, TooltipProps } from "./ImageTooltip";


export function ImageGeneric(props: { image: ImageInfo }) {
    const image = props.image,
          [magnifying, setMagnifying] = useState<MagnifyProps | null>(null),
          [tooltip, setTooltip] = useState<TooltipProps | undefined>(undefined),
          [mounted, setMounted] = useState<boolean>(false);

    // toggles the value of `mounted` to `true` when the component is mounted.
    useEffect(() => setMounted(true), []);

    return (
        <MagnifyingContext.Provider value={{ magnify: setMagnifying }}>
            <TooltipContext.Provider value={{ setTooltip }}>

            <div className="image-generic-outer-wrapper"
                 style={{ transition: "opacity 1s",
                          opacity: mounted ? 1 : 0 }}
            >
                <div className="image-generic-inner-wrapper">
                    <div className="image-generic-title">
                        {<ImageIdentification image={image} filenameDisplay={false}/>}

                    </div>
                    <div className="image-generic-content mb-1">
                        <ImageFileDisplay image={image}></ImageFileDisplay>
                    </div>
                </div>
            </div>

            {magnifying && <ImageMagnifier {...magnifying} />}
            {tooltip && <ImageTooltip {...tooltip} />}

            </TooltipContext.Provider>
        </MagnifyingContext.Provider>
    )
}
