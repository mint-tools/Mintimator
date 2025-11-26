<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs/index.js";

    let {index = $bindable(), niveau = $bindable(), category = $bindable()} = $props();
</script>

<Tabs.Root bind:value={niveau}>
    <Tabs.List>
        <Tabs.Trigger value="1" disabled={!category[index]?.niveau1}>Niveau 1</Tabs.Trigger>
        <Tabs.Trigger value="2" disabled={!category[index]?.niveau2}>Niveau 2</Tabs.Trigger>
        <Tabs.Trigger value="3" disabled={!category[index]?.niveau3}>Niveau 3</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="1">
        <div class="border p-4 rounded-lg text-sm">
            {category[index]?.description1}
        </div>

    </Tabs.Content>
    <Tabs.Content value="2">
        <div class="border p-4 rounded-lg text-sm">
            {category[index]?.description2}
        </div>
    </Tabs.Content>
    <Tabs.Content value="3">
        <div class="border p-4 rounded-lg text-sm">
            {category[index]?.description3}
        </div>
    </Tabs.Content>
</Tabs.Root>

