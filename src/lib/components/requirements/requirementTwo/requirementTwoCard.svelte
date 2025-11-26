<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import AverageNoteSlider from "$lib/components/requirements/averageNoteSlider.svelte";
    import SelectBox from "$lib/components/requirements/selectBox.svelte";
    import {scientificWorkOptions} from "$lib/requirementData.svelte.js";
    import {requirementTwoData} from "$lib/requirementData.svelte.js";

    const competitionDescription: Record<number, string> = {
        9: "ernsthafte Teilnahme am Regionalwettbewerb",
        11: "Preisträger*in im Regionalwettbewerb (keine Sonderpreise)",
        13: "Teilnahme am Landes- oder Bundeswettbewerb"
    };
</script>
<Card.Root class="overflow-hidden rounded-lg border shadow-sm">
    <Card.Header class="border-b">
        <Card.Title class="text-base md:text-lg">Anforderungsfeld 2</Card.Title>
        <Card.Description>Fachwissenschaftliche Arbeiten</Card.Description>
    </Card.Header>
    <Card.Content class="space-y-4">
        <SelectBox list={scientificWorkOptions} bind:selection={requirementTwoData.scientificSelection}/>
        {#if requirementTwoData.scientificSelection === "Wettbewerbsbeitrag"}
            <AverageNoteSlider bind:averageNote={requirementTwoData.scientificNote} sliderText="Wettbewerbsbeitrag" showDetails={false}/>
            <div class="border p-4 rounded-lg text-sm text-muted-foreground">
                {competitionDescription[requirementTwoData.scientificNote]}
            </div>
        {:else}
            <AverageNoteSlider bind:averageNote={requirementTwoData.scientificNote} sliderText="Note ≥"/>
        {/if}
    </Card.Content>
</Card.Root>