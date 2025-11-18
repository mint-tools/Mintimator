<script lang="ts">
    import {Button} from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card";
    import {calculateCertificate} from "$lib/certificateCalculator";

    let resultText: string = $state("");
    function calculate() {
        resultText = calculateCertificate();
    }
</script>
<div class="lg:grid-cols-2 w-full">
    <Card.Root class="overflow-hidden rounded-xl border shadow-sm">
        <Card.Header class="bg-muted/40 border-b">
            <div class="flex items-center justify-between space-y-1.5">
                <Card.Title class="text-base md:text-lg">Zertifikatsergebnis</Card.Title>
                <Button onclick={() => calculate()}>Berechnen</Button>
            </div>

        </Card.Header>
        <Card.Content class="">
            <div class="flex p-5 border rounded-lg items-center justify-center">
                <span class="font-semibold text-md">
                    {resultText}
                </span>
            </div>
        </Card.Content>
    </Card.Root>
</div>