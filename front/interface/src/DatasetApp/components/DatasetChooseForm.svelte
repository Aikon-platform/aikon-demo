<script lang="ts">
    import { Tabs } from "bits-ui";
    import IIIFURLListInput from "./IIIFURLListInput.svelte";
    import { onMount } from "svelte";
    import JSZip from "jszip";
    import { preprocessImage } from "../imageHelpers";
    import IconBtn from "../../shared/components/IconBtn.svelte";

    interface Props {
        form: HTMLElement;
    }
    let { form }: Props = $props();
    const form_id = $props.id();

    let switch_field = form.querySelector("#id_format") as HTMLInputElement;
    let iiif_field = form.querySelector("#id_iiif_manifests") as HTMLTextAreaElement;
    let zip_field = form.querySelector("#id_zip_file") as HTMLInputElement;
    let pdf_field = form.querySelector("#id_pdf_file") as HTMLInputElement;
    let form_elt = zip_field.form!;

    let zip_file_name = $state("No file selected");
    let pdf_file_name = $state("No file selected");
    let image_files: { name: string; blob: Blob }[] = $state([]);
    let image_zipper = new JSZip();

    let tab = $state("zip");
    let dragover = $state(false);

    onMount(() => {
        zip_file_name = zip_field.files?.[0]?.name ?? "No file selected";
        zip_field.onchange = () => {
            zip_file_name = zip_field.files?.[0]?.name ?? "No file selected";
        };

        pdf_file_name = pdf_field.files?.[0]?.name ?? "No file selected";
        pdf_field.onchange = () => {
            pdf_file_name = pdf_field.files?.[0]?.name ?? "No file selected";
        };

        tab = switch_field.value;

        if (form_elt) {
            form_elt.onsubmit = (event) => {
                if (tab !== "zip") zip_field.files = null;
                if (tab !== "pdf") pdf_field.files = null;

                if (tab == "images") {
                    event.preventDefault();
                    image_zipper.generateAsync({ type: "blob" }).then((blob) => {
                        const dataTransfer = new DataTransfer();
                        dataTransfer.items.add(
                            new File([blob], "dataset.zip", { type: "application/zip" })
                        );
                        zip_field.files = dataTransfer.files;
                        form_elt.submit();
                    });
                }
            };
        }
    });

    function addImages(files: File[]) {
        console.log(files);
        files.forEach((file) => {
            preprocessImage(file, 2048, (blob) => {
                if (blob) {
                    image_zipper.file(file.name, blob);
                    image_files = [...image_files, { name: file.name, blob: blob }];
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
                zip_file_name = files[0].name;
                tab = "zip";
            }
            if (files[0].type.startsWith("application/pdf")) {
                pdf_file_name = files[0].name;
                tab = "pdf";
            }
        }
    }

    function onTabChange(value: string) {
        switch_field.value = value == "images" ? "zip" : value;
    }
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
    class="box has-background-light dataset-compose-form is-relative"
>
    <div class="notification is-info is-light py-3 px-4 mt-0 mb-4">
        <span class="iconify" data-icon="mdi:info-outline"></span> You can drag and drop files here
    </div>
    {#if dragover}
        <div class="notification dropper is-info is-overlay">Drop files here</div>
    {/if}
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
                                    <span
                                        class="title-identification"
                                        title={file.name}
                                        ><span class="tag is-light is-bold mb-3">Image #{i}</span>
                                        <span class="is-size-7">{file.name}</span>
                                    </span>
                                </div>
                                <div class="image-generic-content mb-1">
                                    <img src={URL.createObjectURL(file.blob)} alt={file.name} />
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
                            addImages(Array.from((e.target as HTMLInputElement).files ?? []))}
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
            <IIIFURLListInput field={iiif_field} />
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
