<script lang="ts">
    import {Label} from "$lib/components/ui/label/index.js";
    import * as Select from "$lib/components/ui/select/index.js";

    let {list, selection = $bindable("")} = $props();

</script>

<div class="rounded-lg border p-4 bg-card">
    <Label class="text-xs text-muted-foreground">Fachwissenschaftliche Arbeiten</Label>
    <div class="mt-2">
        <Select.Root type="single" bind:value={selection}>
            <Select.Trigger class="w-full justify-between">
                <span class="truncate">{selection}</span>
            </Select.Trigger>
            <Select.Content>
                <Select.Group>
                    <Select.Label>Fächerbelegung</Select.Label>
                    {#each list as option}
                        <Select.Item value={option.label} label={option.label}>
                            {option.name}
                        </Select.Item>
                    {/each}
                </Select.Group>
            </Select.Content>
        </Select.Root>
    </div>
</div>