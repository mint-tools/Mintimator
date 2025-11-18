import {RequirementLevels} from "$lib/requirementLevels";
import {
    requirementOneData,
    requirementOneSubjectCombination,
    requirementTwoData,
    scientificWorkOptions
} from "$lib/requirementData.svelte";

export function calculateCertificate(): string {
    if(requirementOne() === RequirementLevels.None || requirementTwo() === RequirementLevels.None || requirementThree() === RequirementLevels.None) return "Anforderungen nicht erfüllt!";
    // TODO implement certificate decision
    return "Test string";
}
function requirementThree(): RequirementLevels {
    // TODO implement requirementThree
    return RequirementLevels.None;
}

function requirementTwo(): RequirementLevels {
    if(labelInOptions(requirementTwoData.scientificSelection, scientificWorkOptions)){
        if(requirementTwoData.scientificNote >= 9) return RequirementLevels.LOW;
        else if(requirementTwoData.scientificNote >= 11) return RequirementLevels.Medium;
        else if(requirementTwoData.scientificNote >= 13) return RequirementLevels.High;
    }
    return RequirementLevels.None;
}
function requirementOne(): RequirementLevels {
    if(labelInOptions(requirementOneData.subjectChoice, requirementOneSubjectCombination)
        && requirementOneData.noteRequirement){
        if(requirementOneData.averageNote >= 9) return RequirementLevels.LOW;
        else if(requirementOneData.averageNote >= 11) return RequirementLevels.Medium;
        else if(requirementOneData.averageNote >= 13) return RequirementLevels.High;
    }
    return RequirementLevels.None;
}

export function labelInOptions(label: string, options: OptionItem[]): boolean {
    for (let i = 0; i < options.length; i++) {
        if (label === options[i].label) return true;
    }
    return false;
}

interface OptionItem{
    label: string;
    name: string;
}