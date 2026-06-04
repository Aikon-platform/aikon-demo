<script lang="ts">
    import { onMount } from "svelte";
    import IIIFURLItem from "./IIIFURLItem.svelte";
    import { enforceValue, enforceBooleanValue, valueOrDefault, updateUrlSearchParams, isValidHttpUrl, isString } from "../../shared/utils";

    /**
     * NOTE URL-bound parameters are:
     * - "iiif_data": string. comma-separated IIIF manifest URLs on which to run a task.
     */

    interface Props {
        field: HTMLTextAreaElement;
        value?: string[][];
    }

    let { field, value = $bindable([]) }: Props = $props();

    const paramName = "iiif_data";

    /**
     * `value` to "," separated string
     * [["url1"], ["url2"]] => "url1,url2"
     */
    const unstringifyIiifData = (s: string): string[][] =>
        s.split(",")
            .filter(isValidHttpUrl)
            .map(x => [x]);

    /**
     * comma separated string to `value`
     * "url1,url2" => [["url1"], ["url2"]]
     */
    const stringifyIiifData = (d: string[][]): string =>
        d.filter(x => x.length)
            .map(x => x[0])
            .filter(x => isString(x) && isValidHttpUrl(x))
            .join(",");

    /** update URL param `iiif_data` with new URLs. */
    const updateUrlIiifData = (iiifData: string[][]): Function => {
        // stringify `iiifData` (extract urls, remove non-urls, join urls by ",")
        const iiifDataStr = stringifyIiifData(iiifData);

        return updateUrlSearchParams(
            undefined,
            paramName,
            iiifDataStr
        )
    }

    function readFromUrlParam() {
        const sp = (new URL(window.location.href)).searchParams;
        // 1. parse URLs in seach params
        const urlIiifUris = unstringifyIiifData(sp.get(paramName) || "");
        // 2. concat items here with `value`
        value = value.concat(urlIiifUris);
        // 3. update URL search params (=remove invalid url sanitized in 1.)
        updateUrlIiifData(value);
    }

    // fired when pre-saved items are deleted or modified
    function onChangeItem(index: number) {
        return (url: string) => {
            if (url == "") {
                value.splice(index, 1);
            } else {
                value[index] = [ url ];
            }
            field.value = JSON.stringify(value);
            updateUrlIiifData(value);
        }
    }

    // fired when a new item is added
    function onKeydown(e: KeyboardEvent) {
        if (e.key == "Enter") {
            e.preventDefault();
            if ((e.currentTarget as HTMLInputElement).value != "") {
                // value.push([ (e.currentTarget as HTMLInputElement).value.trim() ]);
                value = value.concat([ [(e.currentTarget as HTMLInputElement).value.trim()] ])
                field.value = JSON.stringify(value);
            }
            (e.currentTarget as HTMLInputElement).value = "";
            updateUrlIiifData(value);
        }
    }

    // TODO fix URL binding here !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // fired when data is pasted into the input
    function onPaste(e: ClipboardEvent) {
        const text = e.clipboardData?.getData("text/plain");
        const lines = text?.split(/\s+/);
        if (lines) {
            value.push(...lines.map(line => [ line.trim() ]).filter(line => line[0] != ""));
            field.value = JSON.stringify(value);
        }
        updateUrlIiifData(value);
    }

    onMount(() => {
        value = JSON.parse(field.value);
        readFromUrlParam();
    });
</script>

<div>
    {#each value as url, i (i)}
        <IIIFURLItem url={url[0]} onChange={onChangeItem(i)} />
    {/each}
    <input class="input" type="text" placeholder="Type or paste URLs to append to the list above" onkeydown={onKeydown} onpaste={onPaste}/>
</div>