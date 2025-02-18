import { createRoot } from 'react-dom/client';

import { ClusterApp } from "./ClusterApp/components/ClusterApp";
import { TaskProgressTracker } from './ProgressTracker';
import { MatchViewer, WatermarkSimBrowser } from './WatermarkMatches';
import { SimilarityApp } from './SimilarityApp';
import { SimilarityMode } from './SimilarityApp/components/SimilarityApp';
import { ImageGenericList } from "./shared";
import { DatasetImageBrowser } from "./DatasetApp";
import { DjangoDatasetImagesInterface } from './DatasetApp/types';

import { unserializeSingleWatermarkMatches, unserializeWatermarkSimilarity } from './WatermarkMatches/types';
import { ImageInfo } from "./shared/types";
import { DatasetFormat } from "./shared/types";
import { unserializeSimilarityMatrix } from "./SimilarityApp/utils/serialization";
import { unserializeClusterFile } from './ClusterApp/types';

import "./sass/style.scss";


function initClusterViewer(
    target_root: HTMLElement,
    clustering_data: any,
    base_media_url: string,
    editable?: boolean,
    editing?: boolean,
    formfield?: HTMLInputElement) {
    /*
    Main entry point for the clustering viewer app.

    target_root: the root element to render the app in
    clustering_data: the clustering data to render
    base_media_url: the base url for media files
    editable: whether the app should be editable
    editing: whether the app should be in editing mode
    formfield: the form field to update with the current clustering data
    */

    createRoot(target_root).render(
        <ClusterApp clustering_data={unserializeClusterFile(clustering_data)} base_url={base_media_url}
                                editable={editable} editing={editing} formfield={formfield} />
    );
}

function initProgressTracker(target_root: HTMLElement, tracking_url: string) {
    /*
    Main entry point for the progress tracker app.

    target_root: the root element to render the app in
    tracking_url: the url to track
    */

    createRoot(target_root).render(
        <TaskProgressTracker tracking_url={tracking_url} />
    );
}

function initSimilaritySimBrowser(target_root: HTMLElement, source_index_url: string, sim_matrix_url: string, mode: string) {
    /*
    Main entry point for the similarity browser app.

    target_root: the root element to render the app in
    source_index_url: the url to fetch the sources from
    sim_matrix_url: the url to fetch the similarity matrix from
    */
    fetch(source_index_url).then(response => response.json()).then(source_index => {
        fetch(sim_matrix_url).then(response => response.json()).then(sim_matrix => {
            const all_matches = unserializeSimilarityMatrix(sim_matrix, source_index);
            createRoot(target_root).render(
                <SimilarityApp index={all_matches.index} matches={all_matches.matches} mode={(mode as SimilarityMode) || "browse"} />
            );
        });
    });
}

function initWatermarkMatches(target_root: HTMLElement, query_image: string, matches: any, source_url: string) {
    /*
    Main entry point for the watermark matches app.

    target_root: the root element to render the app in
    query_image: the image url used as a query
    matches: the matches to render
    source_url: the url of the folder of the index files (index.json, images)
    */
    fetch(source_url + "index.json").then(response => response.json()).then(index => {
        const all_matches = unserializeSingleWatermarkMatches(query_image, matches, index, source_url);
        createRoot(target_root).render(
            <MatchViewer all_matches={all_matches} />
        );
    });
}

function initWatermarkSimBrowser(target_root: HTMLElement, source_url: string) {
    /*
    Main entry point for the watermark similarity browser app.

    target_root: the root element to render the app in
    source_url: the url to fetch the images and index from
    */
    fetch(source_url + "similarity.json").then(response => response.json()).then(raw_matches => {
        fetch(source_url + "index.json").then(response => response.json()).then(raw_index => {
            const {matches, index} = unserializeWatermarkSimilarity(raw_matches, raw_index, source_url);
            createRoot(target_root).render(
                <WatermarkSimBrowser matches={matches} index={index} />
            );
        });
    });
}

/**
 * initiarlize an ImageGenericList component inserted at targetRoot.
 * components are passed from the Django template.
 */
function initImageGenericList(targetRoot:HTMLElement, imageArray:ImageInfo[]) {
    createRoot(targetRoot).render(<ImageGenericList imageArray={imageArray} />)
}


function initDatasetImageBrowser(
    targetRoot:HTMLElement,
    dataset:DjangoDatasetImagesInterface,
    datasetFormat:DatasetFormat
) {
    createRoot(targetRoot).render(<DatasetImageBrowser dataset={dataset} datasetFormat={datasetFormat} />)
}

export {
    initClusterViewer,
    initProgressTracker,
    initSimilaritySimBrowser,
    initWatermarkMatches,
    initWatermarkSimBrowser,
    initImageGenericList,
    initDatasetImageBrowser
};
