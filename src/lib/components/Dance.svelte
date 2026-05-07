<script lang="ts">
	import dance1 from '$lib/assets/dance1.jpg?enhanced&w=480;640;800;1024;1280;1440';
	import dance2 from '$lib/assets/dance2.jpg?enhanced&w=320;480;640;800;1024';
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const danceStyles = [
		'Jazz',
		'Contemporary',
		'Ballet',
		'Bollywood',
		'Hip Hop',
		'Street Jazz',
		'Lyrical'
	];

	const timeline = [
		{
			year: '2009–2018',
			desc: 'The Danceworx India — Specialized in Jazz, Contemporary, and Ballet.'
		},
		{
			year: '2012–2014',
			desc: 'Kingdom of Dreams — Jhumroo · ~100 shows as a Dancer at India’s first live entertainment destination.'
		},
		{
			year: '2015–2017',
			desc: 'Teaching Kids Ballet · 2 years — The Danceworx'
		},
		{
			year: '2017–2019',
			desc: 'Teaching Adults Jazz · 2 years — The Danceworx'
		}
	];
</script>

<section
	id="dance"
	use:reveal={(v) => (visible = v)}
	class="dance-section bg-canvas px-6 py-20 md:px-14 md:py-32"
>
	<div class="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
		<!-- Content -->
		<div class="flex flex-col">
			<p
				class="section-eyebrow mb-4 font-syne text-[0.65rem] font-bold tracking-[0.3em] text-ember uppercase transition-all duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				Dance
			</p>
			<h2
				class="section-title text-clamp-title mb-6 font-syne leading-[1.1] font-extrabold tracking-tight transition-all delay-100 duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				Trained Since<br /><em class="font-display font-normal text-ember not-italic">age 8</em>
			</h2>

			<div
				class="transition-all delay-200 duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				<p class="section-body mb-8 text-[0.95rem] leading-[1.85] font-light text-slate">
					Dance isn't just something Himikaa does — it's how she moved into the world of
					storytelling. With over 15 years of rigorous training and professional performance, her
					background in movement informs every role she takes on screen.
				</p>

				<!-- Styles Chips -->
				<div class="dance-styles mb-10 flex flex-wrap gap-2">
					{#each danceStyles as style (style)}
						<span
							class="bg-charcoal px-4 py-2 font-syne text-[0.62rem] font-bold tracking-wider text-goldenrod uppercase transition-all duration-300 hover:bg-lagoon hover:text-white"
						>
							{style}
						</span>
					{/each}
				</div>
			</div>

			<!-- Timeline -->
			<div
				class="dance-timeline flex flex-col transition-all delay-300 duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				{#each timeline as item (item.year + item.desc)}
					<div class="timeline-item flex gap-6 border-b border-linen py-5 last:border-0 md:gap-10">
						<div
							class="timeline-year min-w-20 font-syne text-[0.7rem] font-extrabold tracking-wider text-lagoon"
						>
							{item.year}
						</div>
						<div class="timeline-desc text-[0.88rem] leading-relaxed text-slate">
							{item.desc}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Images (Natural Aspect Ratio Strategy) -->
		<div
			class="dance-images relative transition-all duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			<enhanced:img
				class="dance-img-main relative z-0 h-auto w-[85%] shadow-2xl md:w-[75%]"
				src={dance1}
				alt="Dance pose"
				sizes="(min-width: 768px) 40vw, 85vw"
			/>
			<enhanced:img
				class="dance-img-secondary absolute -right-2 bottom-[-10%] z-10 h-auto w-[55%] border-4 border-canvas shadow-xl md:right-0 md:bottom-[-15%] md:w-[55%] md:border-6"
				src={dance2}
				alt="Dance performance"
				sizes="(min-width: 768px) 30vw, 55vw"
			/>
			<span
				class="dance-badge absolute top-[78%] -left-4 z-20 rotate-2 bg-lagoon px-2 py-1 font-syne text-[0.5rem] font-extrabold text-white uppercase shadow-lg md:px-4 md:py-2 md:text-[0.58rem] md:tracking-[0.15em]"
			>
				~100 Stage Shows
			</span>
		</div>
	</div>
</section>

<style>
	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}
</style>
