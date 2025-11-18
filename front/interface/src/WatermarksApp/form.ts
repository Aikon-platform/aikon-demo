import { mount } from "svelte";
import WatermarksForm from "./components/WatermarksForm.svelte";

export function initWatermarksForm(target_root: HTMLElement) {
    const new_form = document.createElement("div");
    target_root.parentNode?.insertBefore(new_form, target_root.nextSibling);
    mount(WatermarksForm, { target: new_form, props: { originalForm: target_root } });
    target_root.style.display = "none";
}
