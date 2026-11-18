<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { Tabs } from "bits-ui";
    import JSZip from "jszip";

    import IIIFURLListInput from "./IIIFURLListInput.svelte";
    import { preprocessImage } from "../imageHelpers";
    import IconBtn from "../../shared/components/IconBtn.svelte";
    import { enforceValue, unquote, updateUrlSearchParams } from "../../shared/utils";

    /**
     * NOTE URL-bound params are:
     * - "dataset_type": TDatasetValue. has no effect if dataset_reuse=true"
     */

    type TDatasetValue = "zip"|"iiif"|"pdf"|"images";
    const EMPTY_FILE = "No file selected";

    interface Props {
        form: HTMLElement;
        readyUpload: boolean;
    }
    let { form, readyUpload = $bindable() }: Props = $props();
    const form_id = $props.id();

    const urlSearchParams = new URLSearchParams(window.location.search);
    const paramNameDatasetType = "dataset_type"

    // set dataset name (no URL binding)
    const dataset_name_field = form.querySelector("#id_dataset_name") as HTMLInputElement
    let datasetName = $state("");
    $effect(() => {
        dataset_name_field.value = datasetName;
    })

    // `switch_field` represents the internal state sent to Django
    // `tab` represents the user-exposed / svelte side data
    // the notable difference is that, if tab==="images", images are zipped in svelte-side
    // `switch_field.value` is set to "zip" while `tab` is kept to "images", and a zip of
    // images is sent to Django.
    const switch_field = form.querySelector("#id_format") as HTMLInputElement;
    const defaultTab = "pdf";
    // NOTE: tab value is set in `onMount`. here it is necessary to use `null`
    // instead of `undefined` to avoid a svelte error ("Cannot do `bind:value={undefined}` when `value` has a fallback value")
    // https://svelte.dev/e/props_invalid_value)
    let tab: TDatasetValue | null = $state(null);

    const iiif_field = form.querySelector("#id_iiif_manifests") as HTMLTextAreaElement;
    const zip_field = form.querySelector("#id_zip_file") as HTMLInputElement;
    const pdf_field = form.querySelector("#id_pdf_file") as HTMLInputElement;
    const parent_html_form = zip_field.form!;

    let iiif_value = $state<string[][]>([]);
    let zip_file_name = $state(EMPTY_FILE);
    let pdf_file_name = $state(EMPTY_FILE);
    let image_files: { name: string; blob: Blob }[] = $state([]);
    const image_zipper = new JSZip();

    let dragover = $state(false);

    const enforceSwitchFieldValue = enforceValue([ "zip", "iiif", "images", "pdf" ], defaultTab)

    function addImages(files: File[]) {
        files.forEach((file) => {
            preprocessImage(file, 2048, (blob) => {
                if (blob) {
                    // make file name unique
                    const prev_names = image_files.map(f => f.name);
                    let filename = file.name;
                    if (prev_names.includes(filename)) {
                        // Generate a unique name
                        const ext = file.name.split('.').pop() || '';
                        const name = file.name.slice(0, -ext.length - 1);
                        let counter = 1;
                        while (prev_names.includes(filename)) {
                            filename = `${name}+${counter}.${ext}`;
                            counter++;
                        }
                    }
                    image_zipper.file(filename, blob);
                    image_files = [ ...image_files, { name: filename, blob: blob }];
                }
            });
        });
        tab = "images";
    }

    function removeImage(index: number) {
        return () => {
            const file = image_files[index];
            image_zipper.remove(file.name);
            image_files.splice(index, 1);
        };
    }

    function onDrop(e: DragEvent) {
        e.preventDefault();
        e.stopPropagation();
        dragover = false;
        const files = e.dataTransfer?.files;
        if (files) {
            // based on the mime type
            if (files[0].type.startsWith("image/")) {
                addImages(Array.from(files).filter((file) => file.type.startsWith("image/")));
            }
            if (files[0].type.startsWith("application/zip")) {
                zip_field.files = files;
                zip_file_name = files[0].name;
                tab = "zip";
            }
            if (files[0].type.startsWith("application/pdf")) {
                pdf_field.files = files;
                pdf_file_name = files[0].name;
                tab = "pdf";
            }
        }
    }

    function onTabChange(value: string):TDatasetValue {
        value = updateUrlSearchParams(enforceSwitchFieldValue, paramNameDatasetType, value);
        switch_field.value = value == "images" ? "zip" : value;
        return value as TDatasetValue;
    }

    $effect(() => {
        readyUpload =
            (tab == "images" && image_files.length > 0) ||
            (tab == "zip" && zip_file_name !== EMPTY_FILE) ||
            (tab == "iiif" && iiif_value.length > 0) ||
            (tab == "pdf" && pdf_file_name !== EMPTY_FILE);
    })

    onMount(() => {
        const urlDatasetType = urlSearchParams.get(paramNameDatasetType);

        // if `dataset_type` is defined in the URL, use it to set `tab`. otherwise, tab is set using a default.
        // implicitly, `switch_field.value` is also updated.
        const rawTab = urlDatasetType && urlDatasetType?.length
            ? urlDatasetType
            : defaultTab;
        // validate tab, and if `urlDatasetType` and sync tab and URL param, sync with field.
        tab = onTabChange(rawTab);

        zip_file_name = zip_field.files?.[0]?.name ?? EMPTY_FILE;
        zip_field.onchange = () => {
            zip_file_name = zip_field.files?.[0]?.name ?? EMPTY_FILE;
        };

        pdf_file_name = pdf_field.files?.[0]?.name ?? EMPTY_FILE;
        pdf_field.onchange = () => {
            pdf_file_name = pdf_field.files?.[0]?.name ?? EMPTY_FILE;
        };

        if (parent_html_form) {
            parent_html_form.onsubmit = (event) => {
                if (tab !== "zip") zip_field.files = null;
                if (tab !== "pdf") pdf_field.files = null;

                if (tab == "images") {
                    event.preventDefault();
                    image_zipper.generateAsync({ type: "blob" }).then((blob) => {
                        const dataTransfer = new DataTransfer();
                        dataTransfer.items.add(
                            new File([ blob ], "dataset.zip", { type: "application/zip" })
                        );
                        zip_field.files = dataTransfer.files;
                        parent_html_form.submit();
                    });
                }
            };
        }
        return () => {
            zip_field.onchange = null;
            pdf_field.onchange = null;
            parent_html_form.onsubmit = null;
        };

    })

    // reset value of URL-bound params before unmounting
    onDestroy(() => {
        updateUrlSearchParams(undefined, paramNameDatasetType, "");
    })

</script>

    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        ondrop={onDrop}
        ondragover={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dragover = true;
        }}
        ondragleave={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dragover = false;
        }}
        class="has-background-light"
    >

        <div class="top-notification notification py-3 px-4">
            <span class="iconify" data-icon="mdi:info-outline"></span> You can drag and drop files
            here
        </div>
        {#if dragover}
            <div class="notification dropper is-info is-overlay">Drop files here</div>
        {/if}

        <div class="mx-0 mb-2">
            <label for="dataset-name">Dataset name</label>
            <input
                class="input"
                type="text"
                bind:value={datasetName}
            >
        </div>
        <Tabs.Root bind:value={tab} onValueChange={onTabChange}>
            <Tabs.List class="columns gap-2">
                <div class="column is-3">
                    <Tabs.Trigger value="images" class="">Image files</Tabs.Trigger>
                </div>
                <div class="column is-3">
                    <Tabs.Trigger value="zip" class="">Zip file</Tabs.Trigger>
                </div>
                <div class="column is-3">
                    <Tabs.Trigger value="iiif" class="">IIIF manifests</Tabs.Trigger>
                </div>
                <div class="column is-3">
                    <Tabs.Trigger value="pdf" class="">PDF file</Tabs.Trigger>
                </div>
            </Tabs.List>

            <Tabs.Content value="images">
                <ul class="columns is-mobile is-multiline list-invisible">
                    {#each image_files as file, i (file)}
                        <li class="column is-3 is-flex">
                            <div class="image-generic-outer-wrapper" style="opacity: 1;">
                                <div class="image-generic-inner-wrapper">
                                    <div class="image-generic-title">
                                        <IconBtn icon="mdi:delete" onclick={removeImage(i)} />
                                        <span class="title-identification" title={file.name}
                                            ><span class="tag is-light is-bold mb-3"
                                                >Image #{i}</span
                                            >
                                            <span class="is-size-7">{file.name}</span>
                                        </span>
                                    </div>
                                    <div class="image-generic-content mb-1">
                                        <img
                                            src={URL.createObjectURL(file.blob)}
                                            alt={file.name}
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                    {/each}
                </ul>
                <div class="file has-name is-fullwidth" id="id_pdf_file-wrapper">
                    <label for="{form_id}-img-input" class="file-label">
                        <span class="file-cta">
                            <span class="file-icon">
                                <span class="iconify" data-icon="mdi:upload"></span>
                            </span>
                            <span class="file-label">Select files...</span>
                        </span>
                        <span class="file-name">Images ({image_files.length})</span>
                        <input
                            type="file"
                            id="{form_id}-img-input"
                            accept="image/*"
                            onchange={(e) =>
                                addImages(
                                    Array.from((e.target as HTMLInputElement).files ?? [])
                                )}
                            class="file-input"
                            style="display: none;"
                            multiple
                        />
                    </label>
                </div>
            </Tabs.Content>
            <Tabs.Content value="zip">
                <div class="file has-name is-fullwidth" id="id_zip_file-wrapper">
                    <label for={zip_field.id} class="file-label">
                        <span class="file-cta">
                            <span class="file-icon">
                                <span class="iconify" data-icon="mdi:upload"></span>
                            </span>
                            <span class="file-label">Select a file...</span>
                        </span>
                        <span class="file-name">{zip_file_name}</span>
                    </label>
                </div>
            </Tabs.Content>
            <Tabs.Content value="iiif">
                <IIIFURLListInput field={iiif_field} bind:value={iiif_value} />
            </Tabs.Content>
            <Tabs.Content value="pdf">
                <div class="file has-name is-fullwidth" id="id_pdf_file-wrapper">
                    <label for={pdf_field.id} class="file-label">
                        <span class="file-cta">
                            <span class="file-icon">
                                <span class="iconify" data-icon="mdi:upload"></span>
                            </span>
                            <span class="file-label">Select a file...</span>
                        </span>
                        <span class="file-name">{pdf_file_name}</span>
                    </label>
                </div>
            </Tabs.Content>
        </Tabs.Root>
    </div>
