import type { TransformMatrix } from "./transform";

export interface RawImage {
    file_name: string;
    width: number;
    height: number;
    data: any;
}

export interface AligningImage {
    image: RawImage;
    transform: TransformMatrix;
    visible: boolean;
}

export class AlignmentState {
    images: AligningImage[] = $state([]);
    selected: number[] = $state([]);
}