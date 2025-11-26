<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import {calculateCertificate} from "$lib/calc/certificateCalculator";
    import * as Data from "$lib/requirementData.svelte";
    import {Button} from "$lib/components/ui/button";
    import UploadButton from "$lib/components/file/uploadButton.svelte";
    import DownloadButton from "$lib/components/file/downloadButton.svelte";

</script>
<div class="lg:grid-cols-2 w-full">
    <Card.Root class="overflow-hidden rounded-lg border shadow-sm">
        <Card.Header class="border-b">
            <div class="flex items-center justify-between space-y-1.5">
                <Card.Title class="text-base md:text-lg">Zertifikatsergebnis</Card.Title>
                <div>
                    <UploadButton class="mx-1"/>
                    <DownloadButton class="mx-1"/>
                </div>
            </div>

        </Card.Header>
        <Card.Content class="">
            <div class="flex p-5 border rounded-lg items-center justify-center">
                <span class="font-semibold text-md">
                    {#key Data.requirementOneData.averageNote || Data.requirementOneData.averageNote || Data.requirementTwoData.scientificNote || Data.activityManagerLevel1.activities.length || Data.activityManagerLevel2.activities.length}
                        {calculateCertificate()}
                    {/key}
                </span>
            </div>
        </Card.Content>
    </Card.Root>
</div>