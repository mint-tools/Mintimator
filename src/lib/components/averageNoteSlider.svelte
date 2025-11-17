<script lang="ts">
    import { Slider } from "$lib/components/ui/slider/index.js";

    let {averageNote = $bindable(11), sliderText} = $props();
</script>

<div class="rounded-lg border p-4 bg-card">
    <div class="flex items-center justify-between">
        <span class="text-xs text-muted-foreground">{sliderText}</span>
        <span class="text-xs text-muted-foreground">{averageNote} NP</span>
    </div>
    <div class="mt-3">
        <Slider
                class="w-full"
                bind:value={averageNote}
                type="single"
                min={9}
                max={13}
                step={2}
        />
    </div>
</div>