/**
 * an array of images displayed as a bulma `columns` inside an invisible `html:ul`
 */

import React from "react";

import { ImageGeneric } from ".";
import { ImageInfo } from "./types";


export function ImageGenericList(props: { imageArray:ImageInfo[] }) {
    const imageArray = props.imageArray;

    return (
        <ul className="columns is-mobile is-multiline list-invisible">
        { imageArray.map(image =>
            (<li key={image.id} className="column is-one-fourth is-flex">
                <ImageGeneric image={image}/>
            </li>)) }
        </ul>
    )
}
