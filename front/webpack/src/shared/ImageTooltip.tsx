import React from "react";
import { IconBtn } from "./IconBtn";
import { MatchTransposition } from "../SimilarityApp/types";
import { ImageFileToDisplay } from "./ImageFileDisplay";
import {ImageIdentification} from "./ImageIdentification";


export interface TooltipProps {
    image?: ImageFileToDisplay;
    transpositions?: MatchTransposition[];
}

export interface TooltipContext {
    // Context to manage focusing on a Watermark
    setTooltip?: (tooltip?:TooltipProps) => void;
    // getTitle?: (image: ImageFileToDisplay) => string;
    // getSubtitle?: (image: ImageFileToDisplay) => string;
}

export const TooltipContext = React.createContext<TooltipContext>({});

export function ImageTooltip({ image, transpositions }: TooltipProps) {
    /*
    Component to render a magnified view of a watermark.
    */
    const context = React.useContext(TooltipContext);
    const refTooltip = React.useRef<HTMLDivElement>(null);

    const followMouse = (e: MouseEvent) => {
        if (refTooltip.current) {
            const x = e.clientX + 10;
            const y = e.clientY + 10;
            refTooltip.current.style.left = x + "px";
            refTooltip.current.style.top = y + "px";
        }
    }

    React.useEffect(() => {
        document.addEventListener("mousemove", followMouse);
        return () => document.removeEventListener("mousemove", followMouse);
    }, []);

    console.log("ImageTooltip", image)

    return image && (
        <div className="tooltip" ref={refTooltip}>
            <div className="display-image">
                <img src={image.url} alt={image.id} className={"display-img " + (transpositions?.join(" "))} />
            </div>
            <ImageIdentification image={image} isTitle={true}/>
        </div>
    );
}
