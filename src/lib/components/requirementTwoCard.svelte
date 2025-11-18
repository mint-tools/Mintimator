<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import AverageNoteSlider from "$lib/components/averageNoteSlider.svelte";
    import SelectBox from "$lib/components/selectBox.svelte";
    import {scientificWorkOptions} from "$lib/requirementData.svelte";
    import {requirementTwoData} from "$lib/requirementData.svelte";

</script>

<Card.Root class="overflow-hidden rounded-xl border shadow-sm">
    <Card.Header class="border-b bg-muted/40">
        <Card.Title class="text-base md:text-lg">Anforderungsfeld 2</Card.Title>
        <Card.Description>Fachwissenschaftliche Arbeiten</Card.Description>
    </Card.Header>
    <Card.Content class="space-y-4">
        <SelectBox list={scientificWorkOptions} bind:selection={requirementTwoData.scientificSelection}/>
        <AverageNoteSlider bind:averageNote={requirementTwoData.scientificNote} sliderText="Note ≥"/>
    </Card.Content>
</Card.Root>