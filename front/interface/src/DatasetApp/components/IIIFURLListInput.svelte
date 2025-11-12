<script lang="ts">
    import { onMount } from "svelte";
    import IIIFURLItem from "./IIIFURLItem.svelte";

    interface Props {
        field: HTMLTextAreaElement;
    }

    let { field }: Props = $props();

    let value:string[][] = $state([]);

    onMount(() => {
        value = JSON.parse(field.value);
    });

    function onChangeItem(index: number) {
        return (url: string) => {
            if (url == "") {
                value.splice(index, 1);
            } else {
                value[index] = [url];
            }
            field.value = JSON.stringify(value);
        }
    }

    function onKeydown(e: KeyboardEvent) {
        if (e.key == "Enter") {
            e.preventDefault();
            if ((e.currentTarget as HTMLInputElement).value != "") {
                value.push([(e.currentTarget as HTMLInputElement).value.trim()]);
                field.value = JSON.stringify(value);
            }
            (e.currentTarget as HTMLInputElement).value = "";
        }
    }

    function onPaste(e: ClipboardEvent) {
        let text = e.clipboardData?.getData("text/plain");
        let lines = text?.split("\n");
        if (lines) {
            value.push(...lines.map(line => [line.trim()]).filter(line => line[0] != ""));
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