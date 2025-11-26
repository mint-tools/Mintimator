<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import {Upload} from "@lucide/svelte";
    import {loadRequirements} from "$lib/fileHandler.svelte";
    import {toast} from "svelte-sonner";

    let {class: className} = $props();

    let fileInput: HTMLInputElement;

    function pickFile() {
        fileInput.click(); // öffnet den File-Dialog
    }

    function handleFile(evt: Event) {
        const input = evt.target as HTMLInputElement;
        const file = input.files?.[0];

        if (!file) return;

        const reader = new FileReader();
        reader.readAsText(file);
        reader.onloadend = () => {
            try {
                const text = reader.result as string;
                const data = JSON.parse(text);
                loadRequirements(data);
            } catch (err) {
                toast.error("Fehler beim einlesen der Datei... Versuche es später erneut");
            } finally {
                input.value = "";
            }
        }
    }
</script>

<Button class={className} size="icon" variant="outline" type="button" onclick={pickFile}>
    <Upload/>
</Button>

<input
        bind:this={fileInput}
        type="file"
        accept=".json"
        class="hidden"
        onchange={handleFile}
/>
