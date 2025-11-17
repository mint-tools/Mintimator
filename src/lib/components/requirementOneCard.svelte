<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import AverageNoteSlider from "$lib/components/averageNoteSlider.svelte";
    import SelectBox from "$lib/components/selectBox.svelte";
    import NoteRequirementCheckBox from "$lib/components/noteRequirementCheckBox.svelte";

    const subjectChoice = [
        { value: "Zwei Leistungskurse", label: "Zwei Leistungskurse im MINT-Bereich in der Q1 und Q2"},
        { value: "Ein Leistungskurs, zwei Grundkurse", label: "Ein Leistungskurs und zwei Grundkurse im MINT-Bereich in der Q1 und Q2" },
    ];
    let selection = $state("Fächerbelegung");
    let noteRequirement = $state(false);
    let note = $state(11);

</script>

<Card.Root class="overflow-hidden rounded-xl border shadow-sm">
    <Card.Header class="border-b bg-muted/40">
        <Card.Title class="text-base md:text-lg">Anforderungsfeld 1</Card.Title>
        <Card.Description>Fächerbelegung in der Q-Phase</Card.Description>
    </Card.Header>
    <Card.Content class="space-y-4">
        <SelectBox list={subjectChoice} bind:selection={selection}/>
        <AverageNoteSlider bind:averageNote={note} sliderText="Mittelwert aller Noten ≥"/>
        <NoteRequirementCheckBox bind:noteRequirement={noteRequirement}/>
    </Card.Content>
</Card.Root>