<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	//Fonts
	import '@fontsource-variable/dm-sans/wght.css';
	import '@fontsource-variable/syne/wght.css';
	import '@fontsource-variable/playfair-display/wght-italic.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Himika Bose | Actor, Creator & F1 Nerd</title>
	<meta
		name="description"
		content="Official portfolio of Himika Bose - Bollywood actor, content creator, and F1 enthusiast. Exploring cinema, dance, and the fast lane."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://himika-portfolio-weld.vercel.app/" />
	<meta property="og:title" content="Himika Bose | Actor, Creator & F1 Nerd" />
	<meta
		property="og:description"
		content="Official portfolio of Himika Bose - Bollywood actor, content creator, and F1 enthusiast."
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://himika-portfolio-weld.vercel.app/" />
	<meta property="twitter:title" content="Himika Bose | Actor, Creator & F1 Nerd" />
	<meta
		property="twitter:description"
		content="Official portfolio of Himika Bose - Bollywood actor, content creator, and F1 enthusiast."
	/>

	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />

<main>
	{@render children()}
</main>

<Footer />
