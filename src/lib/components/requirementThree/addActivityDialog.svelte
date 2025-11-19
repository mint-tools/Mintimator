<script lang="ts">
    import activities from "$lib/assets/activities.json";
    import {Activity} from "$lib/requirementThree/activity.js";
    import {Button} from "$lib/components/ui/button/index.js";
    import * as Dialog from "$lib/components/ui/dialog";
    import * as Select from "$lib/components/ui/select";
    import * as RadioGroup from "$lib/components/ui/radio-group/index.js";
    import {Label} from "$lib/components/ui/label/index.js";
    import {ActivityManager} from "$lib/requirementThree/activityManager.svelte.js";

    let {activityManager}: { activityManager: ActivityManager } = $props();

    let activitySelection: string = $state("activities/0");
    let index: number = $state(0);
    let niveau: string = $state("");
    let open = $state(false);

    let category = $state(activities.activities);

</script>

<Dialog.Root bind:open={open}>
    <Dialog.Trigger>
        <Button>Hinzufügen</Button>
    </Dialog.Trigger>
    <Dialog.Content>
        <Dialog.Header>
            <Dialog.Title>Aktivität hinzufügen</Dialog.Title>
            <Dialog.Description>
            </Dialog.Description>
        </Dialog.Header>
        <Select.Root type="single" bind:value={activitySelection} onValueChange={() => {
            // Achtung: Schwarze Magie
            let split = activitySelection.split("/");
            split[0] === "competitions" ? category = activities.competitions : category = activities.activities;
            index = Number(split[1]);
            niveau = "";
        }}>
            <Select.Trigger class="w-full justify-between">
                <span class="truncate">{category[index]?.label}</span>
            </Select.Trigger>
            <Select.Content class="max-w-md lg:max-w-lg whitespace-normal max-h-80">
                <Select.Group>
                    <Select.Label>Aktivitäten</Select.Label>
                    {#each activities.activities as activity, i}
                        <Select.Item disabled={activityManager.hasActivity(new Activity(activity.label, Number(niveau)*5))} value={"activities/" + String(i)} label={activity.label}
                                     class="p-2 flex items-start">
                            <span class="min-w-0 flex-1 whitespace-normal break-words">
                                {activity.name}
                            </span>
                        </Select.Item>
                    {/each}
                    <Select.Separator/>
                    <Select.Label>Wettbewerbe</Select.Label>
                    {#each activities.competitions as competition, i}
                        <Select.Item value={"competitions/" + String(i)} label={competition.label}
                                     class="p-2 flex items-start">
                            <span class="min-w-0 flex-1 whitespace-normal break-words">
                                {competition.name}
                            </span>
                        </Select.Item>
                    {/each}
                </Select.Group>
            </Select.Content>
        </Select.Root>
        <div class="border rounded-lg p-4">
            <RadioGroup.Root bind:value={niveau}>
                <div class="flex items-center space-x-2">
                    <RadioGroup.Item value="1" id="niveau1" disabled={!category[index]?.niveau1}></RadioGroup.Item>
                    <Label class={!category[index]?.niveau1 ? "text-muted-foreground": ""} for="niveau1">Niveau
                        1</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroup.Item value="2" id="niveau2" disabled={!category[index]?.niveau2}></RadioGroup.Item>
                    <Label class={!category[index]?.niveau2 ? "text-muted-foreground": ""} for="niveau2">Niveau
                        2</Label>
                </div>
                <div class="flex items-center space-x-2">
                    <RadioGroup.Item value="3" id="niveau3" disabled={!category[index]?.niveau3}></RadioGroup.Item>
                    <Label class={!category[index]?.niveau3 ? "text-muted-foreground": ""} for="niveau3">Niveau
                        3</Label>
                </div>
            </RadioGroup.Root>
        </div>
        <Dialog.Footer>
            <Button type="submit" onclick={() => {
                    let activity = new Activity(category[index]?.label, Number(niveau)*5);
                    if (activityManager.hasActivity(activity)) return;
                    if(niveau === "" || Number(index) < 0) return;
                    activityManager.addActivity(activity);
                    open = !open;
                }
            }>Hinzufügen
            </Button>
        </Dialog.Footer>
    </Dialog.Content>
</Dialog.Root>