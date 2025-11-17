<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import AverageNoteSlider from "$lib/components/averageNoteSlider.svelte";
    import SelectBox from "$lib/components/selectBox.svelte";

    const scientificWorkOptions = [
        { value: "Facharbeit", label: "Facharbeit in einem MINT-Fach mit mind. 10 Seiten oder" },
        { value: "Projektkurs", label: "Projektkurs im MINT-Bereich" },
        { value: "Lernleistung", label: "Besondere Lernleistung im MINT-Bereich" },
        { value: "Wettbewerbsbeitrag", label: "Wettbewerbsbeitrag im Rahmen von „Jugend forscht“" },
    ];

    let scientificWorkSelection = $state("Fachwissenschaftliche Arbeiten");

    let note: number = $state(11);
</script>

<Card.Root class="overflow-hidden rounded-xl border shadow-sm">
    <Card.Header class="border-b bg-muted/40">
        <Card.Title class="text-base md:text-lg">Anforderungsfeld 2</Card.Title>
        <Card.Description>Fachwissenschaftliche Arbeiten</Card.Description>
    </Card.Header>
    <Card.Content class="space-y-4">
        <SelectBox list={scientificWorkOptions} bind:selection={scientificWorkSelection}/>
        <AverageNoteSlider bind:averageNote={note} sliderText="Note ≥"/>
    </Card.Content>
</Card.Root>