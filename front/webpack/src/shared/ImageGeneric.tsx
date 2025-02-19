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

import React from "react";

import { ImageInfo } from "./types";
import { ImageIdentification, ImageFileDisplay } from ".";


export function ImageGeneric(props: { image: ImageInfo }) {
    const image = props.image;

    return (
        <div className="image-generic-outer-wrapper">
            <div className="image-generic-inner-wrapper">
                <div className="image-generic-title">
                    {<ImageIdentification image={image} filenameDisplay={false}/>}

                </div>
                <div className="image-generic-content mb-1">
                    <ImageFileDisplay image={image}></ImageFileDisplay>
                </div>
            </div>
        </div>
    )
}
