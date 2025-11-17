<script lang="ts">
    import RequirementOneCard from "$lib/components/requirementOneCard.svelte";
    import RequirementThreeCard from "$lib/components/requirementThree/requirementThreeCard.svelte";
    import RequirementTwoCard from "$lib/components/requirementTwoCard.svelte";
    import ResultCard from "$lib/components/resultCard.svelte";
</script>

<div class="min-h-dvh bg-background text-foreground">
    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div class="flex flex-col gap-2">
            <h1 class="text-2xl sm:text-3xl font-semibold tracking-tight">MINT-EC Punkte Berechnung</h1>
            <p class="text-sm text-muted-foreground">
                Trage deine Aktivitäten ein, berechne Punkte und behalte den Überblick.
            </p>
        </div>

        <section class="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 place-items-center">
            <div class="lg:grid-cols-1"></div>
            <ResultCard/>
        </section>
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RequirementOneCard/>
            <RequirementTwoCard/>
            <RequirementThreeCard requirementLevel={1}/>
            <RequirementThreeCard requirementLevel={2}/>
        </section>
    </main>

    <footer class="border-t">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-xs text-muted-foreground">
            <span>© 2025 MINT-EC Rechner</span>
            <a href="#" class="hover:text-foreground">Impressum</a>
        </div>
    </footer>
</div>