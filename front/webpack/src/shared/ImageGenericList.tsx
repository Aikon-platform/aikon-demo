/**
 * an array of images displayed as a CSS grid inside an invisible `html:ul`
 */

import React from "react";

import { ImageGeneric } from ".";
import { ImageInfo } from "./types";


export function ImageGenericList(props: { imageArray:ImageInfo[] }) {
    const imageArray = props.imageArray;

    return (
        <ul className="grid list-invisible">
        { imageArray.map(image =>
            (<li key={image.id}><ImageGeneric image={image} /></li>)) }
        </ul>
    )
}