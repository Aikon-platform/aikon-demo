<script lang="ts">
    import { onMount } from "svelte";
    import IIIFURLItem from "./IIIFURLItem.svelte";
    import { enforceValue, enforceBooleanValue, valueOrDefault, updateUrlSearchParams } from "../../shared/utils";

    // $effect(() => {
    //     console.log("iiif_value", iiif_value);
    // })

    interface Props {
        field: HTMLTextAreaElement;
        value?: string[][];
    }

    let { field, value = $bindable([]) }: Props = $props();

    const updateUrlSearchParamsIiifData = (val: string[][]) => updateUrlSearchParams(
        valueOrDefault([], (x) => Array.isArray(x) && x.length > 0),
        "iiif_data",
        val
    )

    onMount(() => {
        value = JSON.parse(field.value);
    });

    // when pre-saved items are deleted or modified, this fires
    function onChangeItem(index: number) {
        return (url: string) => {
            console.log(`onChangeItem (index=${index}, url=${url}, value=${value})`)
            if (url == "") {
                value.splice(index, 1);
            } else {
                value[index] = [ url ];
            }
            field.value = JSON.stringify(value);
        }
    }

    // when a new item is added, this fires
    function onKeydown(e: KeyboardEvent) {
        if (e.key == "Enter") {
            e.preventDefault();
            if ((e.currentTarget as HTMLInputElement).value != "") {
                value.push([ (e.currentTarget as HTMLInputElement).value.trim() ]);
                console.log("onKeyDown", value);
                field.value = JSON.stringify(value);
            }
            (e.currentTarget as HTMLInputElement).value = "";
        }
    }

    function onPaste(e: ClipboardEvent) {
        const text = e.clipboardData?.getData("text/plain");
        const lines = text?.split(/\s+/);
        if (lines) {
            value.push(...lines.map(line => [ line.trim() ]).filter(line => line[0] != ""));
            field.value = JSON.stringify(value);
        }
    }
</script>

<div>
    {#each value as url, i (i)}
        <IIIFURLItem url={url[0]} onChange={onChangeItem(i)} />
    {/each}
    <input class="input" type="text" placeholder="Type or paste URLs to append to the list above" onkeydown={onKeydown} onpaste={onPaste}/>
</div>