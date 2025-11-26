import type {RequirementOneData} from "$lib/types/requirementOneData";
import type {RequirementTwoData} from "$lib/types/requirementTwoData";
import {ActivityManager} from "$lib/requirementThree/activityManager.svelte.js";
import type {OptionItem} from "$lib/types/optionItem";

export const requirementOneSubjectCombination: OptionItem[] = [
    { label: "Zwei Leistungskurse", name: "Zwei Leistungskurse im MINT-Bereich in der Q1 und Q2"},
    { label: "Ein Leistungskurs, zwei Grundkurse", name: "Ein Leistungskurs und zwei Grundkurse im MINT-Bereich in der Q1 und Q2" },
];
export const scientificWorkOptions: OptionItem[] = [
    { label: "Facharbeit", name: "Facharbeit in einem MINT-Fach mit mind. 10 Seiten" },
    { label: "Projektkurs", name: "Projektkurs im MINT-Bereich" },
    { label: "Lernleistung", name: "Besondere Lernleistung im MINT-Bereich" },
    { label: "Wettbewerbsbeitrag", name: "Wettbewerbsbeitrag im Rahmen von „Jugend forscht“" },
];

export const requirementOneData: RequirementOneData = $state({
    subjectChoice: requirementOneSubjectCombination[0].label,
    averageNote: 11,
    noteRequirement: false
});

export const requirementTwoData: RequirementTwoData = $state({
    scientificSelection: scientificWorkOptions[0].label,
    scientificNote: 11
});

export let activityManagerLevel1 = new ActivityManager();
export let activityManagerLevel2 = new ActivityManager();