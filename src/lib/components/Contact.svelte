<script lang="ts">
import portrait from '$lib/assets/footerbg2.png?enhanced';
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);
</script>

<section
	id="contact"
	use:reveal={(v) => (visible = v)}
	class="contact bg-canvas px-6 py-16 md:px-14 md:py-32"
>
	<div class="contact-inner grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-24">
		<!-- Left Side: Info & Links -->
		<div class="flex flex-col">
			<p
				class="section-eyebrow mb-4 font-syne text-[0.65rem] font-bold tracking-[0.3em] text-ember uppercase transition-all duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				Let's Connect
			</p>
			<div class="grid grid-flow-col grid-rows-3 gap-4">
				<h2
				class="section-title col-span-2 text-clamp-title font-syne leading-[1.1] font-extrabold tracking-tight transition-all delay-100 duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				Work with <em class="font-display font-normal text-ember not-italic">me</em>
			</h2>
			<p
				class="section-body col-span-2 row-span-2 max-w-md  text-[0.95rem] leading-[1.85] font-light text-slate transition-all delay-200 duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				Open to film, web series, theatre, brand campaigns and collaborations. If you're building
				something interesting, let's talk.
			</p>
			<div class="relative row-span-3 w-full max-w-50 justify-self-end sm:justify-self-start">
					<enhanced:img
						class="h-auto w-full object-cover saturate-[0.9]"
						src={portrait}
						alt="Actress smiling portrait"
						sizes="(min-width: 768px) 200px, 40vw"
					/>
					<!-- Gradients to blend the image seamlessly into the background -->
					<div
						class="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-canvas"
					></div>
					<div
						class="absolute inset-0 bg-linear-to-r from-canvas via-transparent to-transparent"
					></div>
				</div>
			</div>
			
				
			<!-- <p
				class="section-body mb-10 text-[0.95rem] leading-[1.85] font-light text-slate transition-all delay-200 duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				Open to film, web series, theatre, brand campaigns and collaborations. If you're building
				something interesting, let's talk.
			</p> -->

			<div
				class="transition-all delay-200 duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				<div class="contact-info-item mb-8">
					<div
						class="contact-info-label mb-1.5 font-syne text-[0.6rem] font-bold tracking-[0.22em] text-ember uppercase"
					>
						Based in
					</div>
					<div class="contact-info-value text-base font-light text-charcoal">Delhi · Bombay</div>
				</div>
				<div class="contact-info-item mb-8">
					<div
						class="contact-info-label mb-1.5 font-syne text-[0.6rem] font-bold tracking-[0.22em] text-ember uppercase"
					>
						Work Email
					</div>
					<div class="contact-info-value text-base font-light text-charcoal">Himika.work@gmail.com</div>
				</div>
			</div>

			<div
				class="contact-links mt-6 flex flex-wrap gap-3 transition-all delay-300 duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				<a
					href="https://www.instagram.com/himika_bose"
					target="_blank"
					rel="external"
					class="contact-link border border-charcoal px-5 py-2.5 font-syne text-[0.62rem] font-bold tracking-[0.15em] text-charcoal uppercase transition-all duration-250 hover:bg-charcoal hover:text-canvas"
				>
					Instagram
				</a>
				<a
					href="https://www.imdb.com/name/nm8479608/"
					target="_blank"
					rel="external"
					class="contact-link border border-goldenrod px-5 py-2.5 font-syne text-[0.62rem] font-bold tracking-[0.15em] text-goldenrod uppercase transition-all duration-250 hover:bg-goldenrod hover:text-charcoal"
				>
					IMDb
				</a>
				<a
					href="https://www.spotlight.com/8393-7834-2731"
					target="_blank"
					rel="external"
					class="contact-link border border-charcoal px-5 py-2.5 font-syne text-[0.62rem] font-bold tracking-[0.15em] text-charcoal uppercase transition-all duration-250 hover:bg-charcoal hover:text-canvas"
				>
					Spotlight
				</a>
				<a
					href="https://www.instagram.com/himikatalksf1"
					target="_blank"
					rel="external"
					class="contact-link border border-vermillion px-5 py-2.5 font-syne text-[0.62rem] font-bold tracking-[0.15em] text-vermillion uppercase transition-all duration-250 hover:bg-vermillion hover:text-white"
				>
					@himikatalksf1
				</a>
			</div>
		</div>

		<!-- Right Side: Form -->
		<div
			class="contact-form flex flex-col gap-5 transition-all delay-100 duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			<div class="form-group flex flex-col gap-1.5">
				<label
					for="name"
					class="form-label font-syne text-[0.6rem] font-bold tracking-[0.2em] text-slate uppercase"
					>Your Name</label
				>
				<input
					id="name"
					class="form-input w-full border-b-2 border-linen bg-transparent py-3 font-sans text-[0.9rem] text-charcoal transition-colors duration-300 outline-none focus:border-ember"
					type="text"
					placeholder="Director / Producer / Brand"
				/>
			</div>
			<div class="form-group flex flex-col gap-1.5">
				<label
					for="email"
					class="form-label font-syne text-[0.6rem] font-bold tracking-[0.2em] text-slate uppercase"
					>Email</label
				>
				<input
					id="email"
					class="form-input w-full border-b-2 border-linen bg-transparent py-3 font-sans text-[0.9rem] text-charcoal transition-colors duration-300 outline-none focus:border-ember"
					type="email"
					placeholder="your@email.com"
				/>
			</div>
			<div class="form-group flex flex-col gap-1.5">
				<label
					for="type"
					class="form-label font-syne text-[0.6rem] font-bold tracking-[0.2em] text-slate uppercase"
					>Project Type</label
				>
				<input
					id="type"
					class="form-input w-full border-b-2 border-linen bg-transparent py-3 font-sans text-[0.9rem] text-charcoal transition-colors duration-300 outline-none focus:border-ember"
					type="text"
					placeholder="Film / Series / Commercial / Collab"
				/>
			</div>
			<div class="form-group flex flex-col gap-1.5">
				<label
					for="details"
					class="form-label font-syne text-[0.6rem] font-bold tracking-[0.2em] text-slate uppercase"
					>Tell me more</label
				>
				<textarea
					id="details"
					class="form-textarea h-25 w-full resize-none border-b-2 border-linen bg-transparent py-3 font-sans text-[0.9rem] text-charcoal transition-colors duration-300 outline-none focus:border-ember"
					placeholder="What are you working on?"
				></textarea>
			</div>
			<button
				class="form-submit mt-4 self-start bg-charcoal px-10 py-4 font-syne text-[0.7rem] font-bold tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:bg-ember"
			>
				Send It →
			</button>
		</div>
	</div>
</section>

<style>
	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}
</style>
