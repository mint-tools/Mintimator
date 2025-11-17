<script lang="ts">
    import {Button} from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card";

    

    function calculate() {

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
        <Card.Content class="text-muted-foreground text-sm">
            <!--TODO: Put result here-->
        </Card.Content>
    </Card.Root>
</div>