import {RequirementLevels} from "$lib/requirementLevels";
import {
    requirementOneData,
    requirementOneSubjectCombination,
    requirementTwoData,
    activityManagerLevel1,
    activityManagerLevel2,
    scientificWorkOptions
} from "$lib/requirementData.svelte";

export function calculateCertificate(): string {
    let requirement1 = requirementOne();
    let requirement2 = requirementTwo();
    let requirement3 = requirementThree();

    if(requirement1 === RequirementLevels.None || requirement2 === RequirementLevels.None || requirement3 === RequirementLevels.None) return "Anforderungen nicht erfüllt!";

    console.log(requirement1, requirement2, requirement3);

    let average: number = Math.round((requirement1 + requirement2 + requirement3) / 3);

    console.log(average);
    if(average == 1) return "mit Erfolg";
    else if(average == 2) return "mit besonderem Erfolg";
    else if(average == 3) return "mit Auszeichnung";

    return "Versuche es später noch einmal!";
}
function requirementThree(): RequirementLevels {
    let requirementLevel = getPossibleRequirementLevel();
    if (requirementLevel === RequirementLevels.None) return RequirementLevels.None;

    let pointsLevel1 = getMaxPointsLevel1(requirementLevel);
    let pointsLevel2 = activityManagerLevel2.totalPoints;
    let sum = pointsLevel1 + pointsLevel2;

    if(sum >= 80) return RequirementLevels.HIGH;
    else if(sum >= 60) return RequirementLevels.Medium;
    else if(sum >= 40) return RequirementLevels.LOW;

    return RequirementLevels.None;
}
function getPossibleRequirementLevel(){
    if(activityManagerLevel2.totalPoints < 20) return RequirementLevels.None;
    else if (activityManagerLevel2.totalPoints < 30) return RequirementLevels.LOW;
    else if (activityManagerLevel2.totalPoints < 40) return RequirementLevels.Medium;
    else if (activityManagerLevel2.totalPoints < 50) return RequirementLevels.HIGH;

    return RequirementLevels.HIGH;
}
function getMaxPointsLevel1(requirementLevel: RequirementLevels){
    if(activityManagerLevel1.totalPoints > 20 && requirementLevel === RequirementLevels.LOW) return 20;
    else if(activityManagerLevel1.totalPoints > 30 && requirementLevel === RequirementLevels.Medium) return 30;
    else if(activityManagerLevel1.totalPoints > 40 && requirementLevel === RequirementLevels.HIGH) return 40;

    return activityManagerLevel1.totalPoints;
}

function requirementTwo(): RequirementLevels {
    if(labelInOptions(requirementTwoData.scientificSelection, scientificWorkOptions)){
        if(requirementTwoData.scientificNote >= 13) return RequirementLevels.HIGH;
        else if(requirementTwoData.scientificNote >= 11) return RequirementLevels.Medium;
        else if(requirementTwoData.scientificNote >= 9) return RequirementLevels.LOW;
    }
    return RequirementLevels.None;
}
function requirementOne(): RequirementLevels {
    if(labelInOptions(requirementOneData.subjectChoice, requirementOneSubjectCombination)
        && requirementOneData.noteRequirement){
        if(requirementOneData.averageNote >= 13) return RequirementLevels.HIGH;
        else if(requirementOneData.averageNote >= 11) return RequirementLevels.Medium;
        else if(requirementOneData.averageNote >= 9) return RequirementLevels.LOW;
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