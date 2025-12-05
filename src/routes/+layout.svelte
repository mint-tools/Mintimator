<script lang="ts">
	import '../app.css';
	import logo from '$lib/assets/logo.png';
    import { ModeWatcher } from "mode-watcher";
    import { Toaster } from "$lib/components/ui/sonner/index.js";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>

<Toaster />
<ModeWatcher defaultMode={"light"}/>
{@render children?.()}
