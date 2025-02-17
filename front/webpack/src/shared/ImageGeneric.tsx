/**
 * a generic display for an Image and its metadata.
 * inspired by SimilarityApp.components.MatchGroup
 *
 * ImageDisplay focuses only on displaying the image file
 * itself, while ImageGeneric is a fully-fledged component
 * with metadata (title...).
 *
 * TODO fuse with SimilarityApp.components.MatchGroup ?
 */

import React from "react";

import { ImageInfo } from "./types";
import { ImageIdentification, ImageDisplay } from ".";


export function ImageGeneric(props: { image: ImageInfo }) {
    const image = props.image;

    return (
        <div className="column image-generic-outer-wrapper">
            <div className="image-generic-inner-wrapper">
                <div className="image-generic-title">
                    <ImageIdentification image={image}/>
                </div>
                <div className="image-generic-content">
                    <ImageDisplay image={image}></ImageDisplay>
                </div>
            </div>
        </div>
    )
}
