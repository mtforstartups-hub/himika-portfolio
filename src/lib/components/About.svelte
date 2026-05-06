<script lang="ts">
	import heroSection from '$lib/assets/hero-section.jpg?enhanced';
	import img3 from '$lib/assets/img3.jpg?enhanced';
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const specs = [
		{ id: 1, label: 'Screen Age', value: '18–26 years' },
		{ id: 2, label: 'Height', value: '5\'5" / 165cm' },
		{ id: 3, label: 'Languages', value: 'English, Hindi, Bengali, Malayalam' },
		{ id: 4, label: 'Training', value: 'Bristol Old Vic Theatre School' },
		{ id: 5, label: 'Appearance', value: 'Indian, Mediterranean, Mixed Race' },
		{ id: 6, label: 'Based', value: 'Delhi · Bombay' }
	];
</script>

<section
	id="about"
	use:reveal={(v) => (visible = v)}
	class="about grid grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-24 md:px-14 md:py-32"
>
	<!-- Images -->
	<div
		class="about-images relative transition-all duration-800 {visible
			? 'translate-y-0 opacity-100'
			: 'translate-y-7 opacity-0'}"
	>
		<!-- Main Image (Relative to provide height) -->
		<enhanced:img
			class="about-img-main relative z-0 h-auto w-[85%] shadow-2xl md:w-[75%]"
			src={heroSection}
			alt="Himika Bose profile"
		/>

		<!-- Secondary Image (Absolute to overlap) -->
		<enhanced:img
			class="about-img-secondary absolute -right-2 bottom-[-10%] z-10 h-auto w-[55%] border-4 border-canvas shadow-xl md:right-0 md:bottom-[-15%] md:w-[52%] md:border-6"
			src={img3}
			alt="Himika Bose portrait"
		/>

		<span
			class="about-badge absolute top-[40%] right-[22%] z-20 -rotate-4 bg-goldenrod px-2 py-1 font-syne text-[0.4rem] font-extrabold tracking-[0.15em] text-charcoal uppercase shadow-lg md:top-[40%] md:right-[22%] md:px-4 md:py-2 md:text-[0.6rem]"
		>
			Delhi · Bombay
		</span>
	</div>

	<!-- Text Content -->
	<div class="flex flex-col">
		<p
			class="section-eyebrow mb-4 font-syne text-[0.65rem] font-bold tracking-[0.3em] text-ember uppercase transition-all duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			About Me
		</p>
		<h2
			class="section-title text-clamp-title mb-6 font-syne leading-[1.1] font-extrabold tracking-tight transition-all delay-100 duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			Actor. Creator.<br /><em class="font-display font-normal text-ember not-italic"
				>Chaos energy.</em
			>
		</h2>

		<div
			class="transition-all delay-200 duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			<p class="section-body mb-5 text-[0.95rem] leading-[1.85] font-light text-slate">
				I'm Himikaa Bose — trained at Bristol Old Vic Theatre School, and equally at home in a
				dramatic scene as I am losing my mind at a Grand Prix. I've been acting since I was a kid
				doing short films, and I haven't stopped since.
			</p>
			<p class="section-body mb-8 text-[0.95rem] leading-[1.85] font-light text-slate">
				From Bollywood to Malayalam cinema to Bengali shows to Amazon OTT — I've been around the
				block. Off screen, I'm a lifestyle and F1 content creator sharing everything from race
				weekends and motorsport deep dives to everyday life, fashion, and the chaos of living
				between Delhi and Bombay. Add 80+ TV commercials and 15 years of dance training and you've
				got the full picture.
			</p>
		</div>

		<!-- Specs Grid -->
		<div
			class="specs-grid mt-8 grid grid-cols-2 gap-3 border-t border-linen pt-8 transition-all delay-300 duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			{#each specs as spec (spec.id)}
				<div class="spec-item">
					<div
						class="spec-label mb-1 font-syne text-[0.58rem] font-bold tracking-[0.2em] text-ember uppercase"
					>
						{spec.label}
					</div>
					<div class="spec-value text-[0.88rem] font-normal text-charcoal">
						{spec.value}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}
</style>
