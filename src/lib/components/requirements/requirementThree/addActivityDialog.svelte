<script lang="ts">
    import rawActivities from "$lib/assets/activities.json";
    import {Activity} from "$lib/requirementThree/activity.js";
    import {Button, buttonVariants} from "$lib/components/ui/button";
    import * as Dialog from "$lib/components/ui/dialog";
    import {ActivityManager} from "$lib/requirementThree/activityManager.svelte.js";
    import SelectActivity from "$lib/components/requirements/requirementThree/selectActivity.svelte";
    import NiveauSelection from "$lib/components/requirements/requirementThree/niveauSelection.svelte";
    import type {Activities} from "$lib/types/activities";
    import {activityManagerLevel1, activityManagerLevel2} from "$lib/requirementData.svelte";

    let {activityManager}: { activityManager: ActivityManager } = $props();

    let index: number = $state(0);
    let niveau: string = $state("");
    let open = $state(false);

    const activities = rawActivities as Activities;
    let category = $state(activities["activities"]);
</script>

<Dialog.Root bind:open={open}>
    <Dialog.Trigger class={buttonVariants({variant: "default"})}>
        Hinzufügen
    </Dialog.Trigger>
    <Dialog.Content>
        <Dialog.Header>
            <Dialog.Title>Aktivität hinzufügen</Dialog.Title>
            <Dialog.Description>
            </Dialog.Description>
        </Dialog.Header>
        <SelectActivity bind:index={index} bind:category={category} bind:niveau={niveau} activityManager={activityManager}/>
        <NiveauSelection bind:index={index} bind:niveau={niveau} bind:category={category}/>
        <Dialog.Footer>
            <Button type="submit" onclick={() => {
                // TODO: Look up whether there are same activities allowed in Q1 and Q2
                    let activity = new Activity(category[index]?.label, Number(niveau)*5);
                    if (!category[index]?.multipleParticipation && (activityManagerLevel1.hasActivity(activity) || activityManagerLevel2.hasActivity(activity))) return;
                    if(niveau === "" || Number(index) < 0) return;
                    activityManager.addActivity(activity);
                    open = !open;
                }
            }>Hinzufügen
            </Button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>