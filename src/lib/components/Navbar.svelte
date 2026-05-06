<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';

	let scrolled = $state(false);
	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ name: 'About', href: '#about' },
		{ name: 'Work', href: '#work' },
		{ name: 'F1', href: '#f1' },
		{ name: 'Brands', href: '#brands' },
		{ name: 'Dance', href: '#dance' },
		{ name: 'Contact', href: '#contact' }
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed top-0 right-0 left-0 z-200 flex items-center justify-between px-6 py-5.5 transition-colors duration-400 md:px-14 {scrolled
		? 'border-b border-linen bg-canvas/94 backdrop-blur-[14px]'
		: 'bg-transparent'}"
>
	<a
		href={resolve('/')}
		class="font-syne text-[1.1rem] font-extrabold tracking-wider text-charcoal no-underline"
	>
		HIMIKA <span class="text-ember">BOSE</span>
	</a>

	<!-- Mobile Toggle -->
	<button
		class="nav-toggle relative z-201 flex flex-col gap-1.5 p-2 md:hidden"
		onclick={toggleMobileMenu}
		aria-label="Toggle Menu"
	>
		<span
			class="block h-0.5 w-6 bg-charcoal transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] {mobileMenuOpen
				? 'translate-y-2 rotate-45'
				: ''}"
		></span>
		<span
			class="block h-0.5 w-6 bg-charcoal transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] {mobileMenuOpen
				? '-translate-x-2.5 opacity-0'
				: ''}"
		></span>
		<span
			class="block h-0.5 w-6 bg-charcoal transition-all duration-300 ease-[cubic-bezier(0.645,0.045,0.355,1)] {mobileMenuOpen
				? '-translate-y-2 -rotate-45'
				: ''}"
		></span>
	</button>

	<!-- Desktop & Mobile Links -->
	<ul
		class="nav-links flex list-none gap-8 transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] max-md:fixed max-md:inset-0 max-md:h-screen max-md:w-full max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-10 max-md:bg-canvas {mobileMenuOpen
			? 'max-md:visible max-md:translate-x-0'
			: 'max-md:invisible max-md:translate-x-full'}"
	>
		{#each navLinks as link (link.name)}
			<li>
				<a
					href="{resolve('/')}{link.href}"
					class="relative text-[0.7rem] font-medium tracking-[0.18em] text-slate uppercase no-underline transition-colors duration-300 hover:text-charcoal max-md:text-[1.2rem] max-md:tracking-[0.25em]"
					onclick={() => (mobileMenuOpen = false)}
				>
					{link.name}
					<span
						class="absolute right-0 -bottom-0.75 left-0 h-0.5 origin-left scale-x-0 bg-ember transition-transform duration-300 hover:scale-x-100"
					></span>
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	/* For the custom hover underline effect which is cleaner via pseudo or dedicated span */
	a:hover span {
		transform: scaleX(1);
	}

	    .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--color-ember);
            transform: scaleX(0);
            transition: transform 0.3s;
            transform-origin: left;
        }
</style>
