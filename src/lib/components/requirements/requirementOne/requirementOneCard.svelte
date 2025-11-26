<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import AverageNoteSlider from "$lib/components/requirements/averageNoteSlider.svelte";
    import SelectBox from "$lib/components/requirements/selectBox.svelte";
    import NoteRequirementCheckBox from "$lib/components/requirements/requirementOne/noteRequirementCheckBox.svelte";
    import {requirementOneSubjectCombination} from "$lib/requirementData.svelte.js";
    import {requirementOneData} from "$lib/requirementData.svelte.js";
</script>

<Card.Root class="overflow-hidden rounded-lg border shadow-sm">
    <Card.Header class="border-b">
        <Card.Title class="text-base md:text-lg">Anforderungsfeld 1</Card.Title>
        <Card.Description>Fächerbelegung in der Q-Phase</Card.Description>
    </Card.Header>
    <Card.Content class="space-y-4">
        <SelectBox list={requirementOneSubjectCombination} bind:selection={requirementOneData.subjectChoice}/>
        <AverageNoteSlider bind:averageNote={requirementOneData.averageNote} sliderText="Mittelwert aller Noten ≥"/>
        <NoteRequirementCheckBox bind:noteRequirement={requirementOneData.noteRequirement}/>
    </Card.Content>
</Card.Root>