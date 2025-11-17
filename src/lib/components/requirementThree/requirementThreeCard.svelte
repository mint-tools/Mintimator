<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import {ActivityManager} from "$lib/activityManager.svelte.js";
    import { ScrollArea } from "$lib/components/ui/scroll-area";
    import AddActivityDialog from "./addActivityDialog.svelte";
    import {Trash2} from "@lucide/svelte";
    import {Button} from "$lib/components/ui/button";

    let {requirementLevel} = $props();

    let activityManager: ActivityManager = new ActivityManager();


    function calculatePoints() {
        let sum: number = 0;
        for (const activity of activityManager.activities) {
            sum += activity.points;
        }
        return sum;
    }
</script>

<Card.Root class="overflow-hidden rounded-xl border shadow-sm">
    <Card.Header class="border-b bg-muted/40">
        <div class="flex space-between items-center">
            <div class="pr-5">
                <Card.Title class="text-base md:text-lg">Anforderungsfeld 3</Card.Title>
                <Card.Description>Aktivitäten in der Sekundarstufe {requirementLevel}</Card.Description>
            </div>
        </div>


    </Card.Header>
    <Card.Content>
        <ScrollArea class="h-[200px] border rounded-lg p-2">
            <!--TODO: Add mint ec wettbewerbe to activity list-->
            {#each activityManager.activities as activity, i}
                <div class="rounded-lg border my-2 p-4 flex items-center justify-between group relative">
                    <div>
                        <div class="text-sm font-medium">{activity.name}</div>
                    </div>
                    <div class="text-base font-semibold mr-10">{activity.points} P</div>
                    <Button variant="ghost" class="group-hover:visible not-group-hover:hidden absolute right-2 top-2.5" onclick={() => {
                        activityManager.removeActivity(i);
                    }}>
                        <Trash2 class="size-4"/>
                    </Button>

                </div>
            {/each}
        </ScrollArea>
    </Card.Content>
    <Card.Footer>
        <div class="grid grid-cols-2 gap-20">
            <AddActivityDialog activityManager={activityManager}/>
            <div class="rounded-lg border p-4">
                <div class="text-xs text-muted-foreground">Gesamtpunkte</div>
                <!--TODO: Overwork for more flexibility-->
                {#key activityManager.activities.length}
                    <div class="text-2xl font-semibold">
                        {calculatePoints()}
                    </div>
                {/key}
            </div>
        </div>
    </Card.Footer>
</Card.Root>