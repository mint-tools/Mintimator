<script lang="ts">
    import {Label} from "$lib/components/ui/label/index.js";
    import {Checkbox} from "$lib/components/ui/checkbox/index.js";

    let {noteRequirement = $bindable(false)} = $props();
</script>

<div class="rounded-lg border p-4 bg-card">
    <div class="flex items-center gap-2">
        <Checkbox id="noteRequirement" bind:checked={noteRequirement} class="size-4" />
        <Label for="noteRequirement" class="text-xs">Kein Halbjahr weniger als 5 NP</Label>
    </div>
</div>