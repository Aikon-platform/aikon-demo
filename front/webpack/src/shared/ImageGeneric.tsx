/**
 * a generic display for an Image and its metadata.
 * inspired by SimilarityApp.components.MatchGroup
 *
 * TODO fuse with SimilarityApp.components.MatchGroup ?
 */

import React from "react";

import { ImageInfo } from "./types";
import { ImageIdentification, ImageDisplay } from ".";


export function ImageGeneric(props: { image: ImageInfo }) {
    const image = props.image;

    return (
        <div className="column match-group">
            <div className="match-expanded">
                <React.Fragment>
                    <ImageIdentification image={image}/>
                </React.Fragment>
            </div>
            <div className="columns is-multiline match-items">
                <ImageDisplay image={image}></ImageDisplay>
            </div>
        </div>
    )
}