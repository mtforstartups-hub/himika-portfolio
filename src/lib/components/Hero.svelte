<script lang="ts">
	import heroBg from '$lib/assets/hero-bg.jpg?enhanced&w=480;640;800;1024;1280;1440;1920';
	import { resolve } from '$app/paths';
</script>

<section
	class="hero relative grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-2"
	id="home"
>
	<!-- Image Side -->
	<div class="hero-image-side relative h-[50vh] overflow-hidden md:h-full">
		<enhanced:img
			src={heroBg}
			alt="Himika Bose"
			fetchpriority="high"
			loading="eager"
			sizes="(min-width: 768px) 50vw, 100vw"
			class="h-full w-full scale-[1.06] object-cover object-[center_20%] saturate-[0.9] transition-transform duration-[9s] ease-in-out hover:scale-100 md:object-[center_top]"
		/>
		<div
			class="absolute inset-0 bg-linear-to-b from-transparent via-canvas/20 to-canvas md:bg-linear-to-r md:from-transparent md:via-transparent md:via-55% md:to-canvas md:to-98%"
		></div>
	</div>

	<!-- Text Side -->
	<div
		class="hero-text-side relative z-1 flex flex-col justify-center px-10 pt-12 pb-24 max-md:px-6 md:pt-32 md:pr-18 md:pl-10"
	>
		<p
			class="hero-eyebrow mb-6 animate-fadeUp text-[0.65rem] font-bold tracking-[0.3em] text-ember uppercase opacity-0 [animation-delay:0.3s]"
		>
			Actor · Creator · F1 Nerd · Dancer
		</p>

		<h1
			class="hero-name text-clamp-name animate-fadeUp leading-none font-extrabold tracking-[-0.02em] opacity-0 [animation-delay:0.5s]"
		>
			HIMIKA BOSE
			<span
				class="name-sub mt-1 block font-display text-[0.6em] font-normal tracking-[0.02em] text-ember italic"
			>
				Actor · Creator · F1 Nerd
			</span>
		</h1>

		<p
			class="hero-sub mt-7 max-w-90 animate-fadeUp text-[0.95rem] leading-[1.75] font-light text-slate opacity-0 [animation-delay:0.7s]"
		>
			Bollywood. OTT. Malayalam cinema. Bengali shows. And a dedicated F1 alter ego. Delhi–Bombay.
		</p>

		<div
			class="hero-pills mt-6 flex animate-fadeUp flex-wrap gap-2 opacity-0 [animation-delay:0.85s]"
		>
			<span
				class="pill border border-charcoal px-3.5 py-1.5 font-syne text-[0.6rem] font-bold tracking-[0.15em] text-charcoal uppercase transition-all duration-250 hover:bg-charcoal hover:text-canvas"
				>Actor</span
			>
			<span
				class="pill border border-ember px-3.5 py-1.5 font-syne text-[0.6rem] font-bold tracking-[0.15em] text-ember uppercase transition-all duration-250 hover:bg-ember hover:text-white"
				>F1 &#x1F3CE;&#xFE0F;</span
			>
			<span
				class="pill border border-lagoon px-3.5 py-1.5 font-syne text-[0.6rem] font-bold tracking-[0.15em] text-lagoon uppercase transition-all duration-250 hover:bg-lagoon hover:text-white"
				>Dancer</span
			>
			<span
				class="pill border border-charcoal px-3.5 py-1.5 font-syne text-[0.6rem] font-bold tracking-[0.15em] text-charcoal uppercase transition-all duration-250 hover:bg-charcoal hover:text-canvas"
				>Lifestyle Creator</span
			>
		</div>

		<div
			class="hero-cta mt-10 flex animate-fadeUp items-center gap-4 opacity-0 [animation-delay:1s]"
		>
			<a
				href="{resolve('/')}#work"
				class="bg-charcoal px-8 py-3.5 font-syne text-[0.7rem] font-bold tracking-[0.18em] text-white uppercase transition-colors duration-300 hover:bg-ember"
			>
				View Work
			</a>
			<a
				href="{resolve('/')}#contact"
				class="flex items-center gap-1.5 font-syne text-[0.7rem] font-semibold tracking-[0.15em] text-slate uppercase transition-colors duration-300 after:content-['→'] hover:text-ember"
			>
				Get in touch
			</a>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<span
		class="hero-scroll absolute right-14 bottom-10 hidden animate-fadeIn items-center gap-3 font-syne text-[0.6rem] font-bold tracking-[0.25em] text-slate uppercase opacity-0 [animation-delay:1.5s] [writing-mode:vertical-rl] before:h-11.25 before:w-px before:bg-ember md:flex"
	>
		Scroll
	</span>
</section>

<style>
	.text-clamp-name {
		font-size: clamp(2.4rem, 12vw, 4rem);
	}

	@media (min-width: 768px) {
		.text-clamp-name {
			font-size: clamp(3.2rem, 5.5vw, 6.5rem);
		}
	}
</style>
