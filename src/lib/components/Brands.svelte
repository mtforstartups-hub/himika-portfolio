<script lang="ts">
	import collab1 from '$lib/assets/collab1.jpg?enhanced';
	import collab2 from '$lib/assets/collab2.jpg?enhanced';
	import collab3 from '$lib/assets/collab3.jpg?enhanced';
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const deals = [
		{
			id: 1,
			brand: 'Ocean Beverages',
			image: collab1,
			link: 'https://www.instagram.com/reel/DUu65uqEU_D/',
			delay: '0'
		},
		{
			id: 2,
			brand: 'Maybelline',
			image: collab2,
			link: 'https://www.instagram.com/p/CrBQD4DpGui/',
			delay: 'delay-100'
		},
		{
			id: 3,
			brand: 'Parachute',
			image: collab3,
			link: 'https://www.instagram.com/reel/DTCdyGRCiMp/',
			delay: 'delay-200'
		}
	];
</script>

<section
	id="brands"
	use:reveal={(v) => (visible = v)}
	class="brand-deals bg-white px-6 py-16 md:px-14 md:py-24"
>
	<div class="brand-deals-header mb-12">
		<p
			class="section-eyebrow mb-4 font-syne text-[0.65rem] font-bold tracking-[0.3em] text-ember uppercase transition-all duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			Instagram · Brand Collaborations
		</p>
		<h2
			class="section-title text-clamp-title mb-6 font-syne leading-[1.1] font-extrabold tracking-tight transition-all delay-100 duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			Brands I've <em class="font-display font-normal text-ember not-italic">Worked With</em>
		</h2>
		<p
			class="section-body max-w-130 text-[0.95rem] leading-[1.85] font-light text-slate transition-all delay-200 duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			Click any card to watch the reel. Available for brand partnerships across lifestyle, F1,
			beauty, tech, and more.
		</p>
	</div>

	<div class="reels-grid grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each deals as deal (deal.id)}
			<div
				class="reel-item group relative aspect-9/16 overflow-hidden bg-charcoal transition-all duration-800 {deal.delay} {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				<enhanced:img
					src={deal.image}
					alt={deal.brand}
					class="reel-thumbnail absolute inset-0 h-full w-full object-cover brightness-[0.6] saturate-[0.7] transition-all duration-400 group-hover:scale-104 group-hover:brightness-[0.5] group-hover:saturate-100"
				/>

				<div
					class="reel-overlay absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center"
				>
					<span
						class="reel-tag bg-ember px-1.5 py-0.5 font-syne text-[0.45rem] font-bold tracking-[0.2em] text-white uppercase xs:px-3 xs:py-1 xs:text-[0.58rem]"
					>
						Brand Collab
					</span>

					<div
						class="reel-brand-name font-syne text-[0.7rem] font-extrabold tracking-normal text-white uppercase xs:text-[0.8rem] xs:tracking-wider sm:text-[1.1rem]"
					>
						{deal.brand}
					</div>

					<a
						href={deal.link}
						target="_blank"
						rel="external"
						class="reel-play-btn flex size-9 items-center justify-center rounded-full border-2 border-white/40 bg-white/15 text-xl text-white backdrop-blur-xs transition-all duration-300 hover:scale-110 hover:border-ember hover:bg-ember xs:size-13"
						aria-label="Play Reel"
					>
						▶
					</a>

					<a
						href={deal.link}
						target="_blank"
						rel="external"
						class="reel-watch-link flex items-center gap-1.5 font-syne text-[0.45rem] font-bold tracking-normal text-white/70 uppercase transition-colors duration-300 after:content-['↗'] hover:text-goldenrod xs:text-[0.62rem] xs:tracking-[0.15em]"
					>
						Watch Reel
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}
</style>
