<script lang="ts">
	import '@fontsource/ms-madi/400.css';
	import { resolve } from '$app/paths';

	const links = [
		{ name: 'About', href: '#about' },
		{ name: 'Work', href: '#work' },
		{ name: 'F1', href: '#f1' },
		{ name: 'Brands', href: '#brands' },
		{ name: 'Dance', href: '#dance' }
	];
</script>

<footer
	class="flex flex-col items-center justify-between gap-5 bg-charcoal px-6 py-10 text-center md:flex-row md:gap-0 md:px-14 md:text-left"
>
	<div
		class="font-script text-xl font-extrabold tracking-widest text-white sm:text-2xl lg:text-3xl"
	>
		Himika <span class="text-ember">Bose</span>
	</div>

	<p class="text-[0.7rem] tracking-widest text-white">© 2026 Himikaa Bose</p>

	<ul class="flex list-none justify-center gap-6">
		{#each links as link (link.name)}
			<li>
				<a
					href="{resolve('/')}{link.href}"
					class="font-syne text-[0.62rem] font-semibold tracking-[0.15em] text-white/35 uppercase no-underline transition-colors duration-300 hover:text-goldenrod"
				>
					{link.name}
				</a>
			</li>
		{/each}
	</ul>
</footer>
