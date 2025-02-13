/**
 * an array of images displayed as a CSS grid inside an invisible `html:ul`
 */

import React from "react";

import { ImageGeneric } from ".";
import { ImageInfo } from "./types";

// .list-invisible {
//     list-style: none;
//     padding-left: 0;
//     margin-bottom: 0;
//     margin-top: 0;
//
// }


export function ImageGenericList(props: { imageArray:ImageInfo[] }) {
    const imageArray = props.imageArray;

    return (
        <ul className="grid"
            style={{ listStyle: "none",
                     paddingLeft: 0,
                     marginBottom: 0,
                     marginTop: 0, }}
        >
            {/* imageArray.map(image => (<li>{image.id} X {image.url}</li>) ) */}
        { imageArray.map(image =>
            (<li><ImageGeneric image={image} /></li>)) }
        </ul>
    )
}