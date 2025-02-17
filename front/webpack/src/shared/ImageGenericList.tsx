/**
 * an array of images displayed as a bulma `columns` inside an invisible `html:ul`
 */

import React from "react";

import { ImageGeneric } from ".";
import { ImageInfo } from "./types";
import { ImageMagnifier, MagnifyingContext, MagnifyProps } from "./ImageMagnifier";


export function ImageGenericList(props: { imageArray:ImageInfo[] }) {
    const imageArray = props.imageArray;
    const [magnifying, setMagnifying] = React.useState<MagnifyProps | null>(null);


    return (
        <MagnifyingContext.Provider value={{ magnify: setMagnifying }}>
            <ul className="columns is-mobile is-multiline list-invisible">
            { imageArray.map(image =>
                (<li key={image.id}><ImageGeneric image={image}/></li>)) }
            </ul>
            {magnifying && <ImageMagnifier {...magnifying} />}
        </MagnifyingContext.Provider>
    )
}
