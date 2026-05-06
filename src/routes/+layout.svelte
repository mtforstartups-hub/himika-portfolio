<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	//Fonts
	import '@fontsource-variable/dm-sans/wght.css';
	import '@fontsource-variable/syne/wght.css';
	import '@fontsource-variable/playfair-display/wght-italic.css';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
