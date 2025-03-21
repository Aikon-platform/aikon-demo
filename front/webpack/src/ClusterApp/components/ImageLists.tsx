import React from "react";
import { ClusterEditorContext } from "../actions";
import { ClusterImageInfo } from "../types";
import { ImageFileDisplay } from "../../shared/ImageFileDisplay";

/*
  This file contains the React components that display the list of images in a cluster.

  Two versions are available:
  - BasicImageList: the full list of images, with no selection
  - SelectableImageList: the list of images with checkboxes for selection
*/

export function SelectableImageList(props: { images: ClusterImageInfo[]; limit?: number; transformed: boolean; expander?: React.ReactNode; }) {
  const editorContext = React.useContext(ClusterEditorContext);
  const selection = editorContext!.state.image_selection;

  const toggleSelection = (image: ClusterImageInfo) => {
    editorContext!.dispatch({ type: "selection_change", images: [image], selected: !selection.has(image) });
  };

  return (
    <div className="cl-images cl-selectable">
      {props.images.slice(0, props.limit).map((image) => (
        <ClusterImage key={image.id} image={image} transformed={props.transformed}
          selectable={true} selected={selection.has(image)} onClick={() => toggleSelection(image)} />
      ))}
      {props.images.length === 0 && <p>∅</p>}
      {props.expander}
    </div>
  );
}


export function BasicImageList(props: { images: ClusterImageInfo[]; transformed: boolean; limit?: number; expander?: React.ReactNode; }) {
  return (
    <div className="cl-images">
      {props.images.slice(0, props.limit).map((image) => (
        <ClusterImage key={image.id} image={image} transformed={props.transformed} selectable={false} />
      ))}
      {props.images.length === 0 && <p>∅</p>}
      {props.expander}
    </div>
  );
}


export function ClusterImage(props: { image: ClusterImageInfo; transformed: boolean; selected?: boolean; selectable: boolean; onClick?: () => void; }) {
  const editorContext = React.useContext(ClusterEditorContext);
  const image = props.image;

  return (
    <div className={"cl-image card" + (props.selected ? " cl-selected" : "")} onClick={props.onClick}>
      {props.selectable && <a href="javascript:void(0)" className="cl-selecter"></a>}
      <ImageFileDisplay image={{
        ...image,
        id: image.num.toString(),
        url: (editorContext?.state.base_url || "") + ((props.transformed && image.tsf_url) ? image.tsf_url : image.url),
      }} disable_magnify={props.selectable} />
    </div>
  );
}
