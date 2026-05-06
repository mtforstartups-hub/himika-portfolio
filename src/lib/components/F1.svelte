<script lang="ts">
	import f1img1 from '$lib/assets/f1img1.jpg?enhanced';
	import f1img2 from '$lib/assets/f1img2.jpg?enhanced';
	import { onMount } from 'svelte';

	let visible = $state(false);
	let sectionRef: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					observer.unobserve(sectionRef);
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef) observer.observe(sectionRef);
		return () => observer.disconnect();
	});

	const f1Stats = [
		{ num: '🏎️', label: 'Dedicated F1 content account' },
		{ num: '103K', label: 'Instagram followers' },
		{ num: '🔥', label: 'Race reactions & hot takes' },
		{ num: '24/7', label: 'F1 on the brain' }
	];

	const f1Links = [
		{
			label: '🏁 @himikatalksf1 — F1 Content Account',
			href: 'https://www.instagram.com/himikatalksf1',
			primary: true
		},
		{
			label: '📸 @himika_bose — Main Instagram',
			href: 'https://www.instagram.com/himika_bose',
			primary: false
		}
	];
</script>

<section
	id="f1"
	bind:this={sectionRef}
	class="f1-section relative overflow-hidden bg-[#0f0f0f] px-6 py-20 text-white md:px-14 md:py-32"
>
	<!-- Background Giant Text -->
	<div
		class="pointer-events-none absolute top-1/2 right-[-3vw] z-0 -translate-y-1/2 font-syne text-[28vw] leading-none font-extrabold text-vermillion/5 select-none"
	>
		F1
	</div>

	<div class="relative z-1 grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
		<!-- Left Side: Content -->
		<div class="flex flex-col">
			<p
				class="section-eyebrow mb-4 font-syne text-[0.65rem] font-bold tracking-[0.3em] text-vermillion uppercase transition-all duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				Motorsport & Content
			</p>
			<h2
				class="section-title text-clamp-title mb-6 font-syne leading-[1.1] font-extrabold tracking-tight transition-all delay-100 duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				Full-Send<br /><em class="font-display font-normal text-vermillion not-italic">F1 Nerd.</em>
			</h2>

			<div
				class="transition-all delay-200 duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				<p class="section-body mb-5 text-[0.95rem] leading-[1.85] font-light text-white/50">
					When she's not on set, Himikaa is probably watching qualifying. A self-described F1 nerd
					with a dedicated motorsport alter ego — @himikatalksf1 — she creates race reactions, hot
					takes, in-depth informational content, driver breakdowns, and commentary for fellow F1
					fans across India.
				</p>
				<p class="section-body mb-10 text-[0.95rem] leading-[1.85] font-light text-white/50">
					From explaining technical regulations to breaking down race strategy — it's not just
					vibes, it's actual knowledge. Her passion for the sport is baked into her identity, and
					her audience loves her for it.
				</p>
			</div>

			<!-- Stats Grid -->
			<div
				class="f1-stats mb-10 grid grid-cols-2 gap-6 transition-all delay-300 duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				{#each f1Stats as stat (stat.label)}
					<div class="f1-stat border border-vermillion/25 bg-vermillion/5 p-3 md:p-6">
						<div
							class="f1-stat-num font-syne text-xl leading-none font-extrabold text-vermillion md:text-3xl"
						>
							{stat.num}
						</div>
						<div class="f1-stat-label mt-2 text-[0.7rem] font-light tracking-wide text-white/40">
							{stat.label}
						</div>
					</div>
				{/each}
			</div>

			<!-- Links -->
			<div
				class="flex flex-col gap-3 transition-all delay-400 duration-800 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				{#each f1Links as link (link.label)}
					<a
						href={link.href}
						target="_blank"
						rel="external"
						class="flex items-center gap-3 border px-6 py-4 font-syne text-[0.72rem] font-bold tracking-[0.15em] uppercase transition-all duration-300 {link.primary
							? 'border-vermillion text-vermillion hover:bg-vermillion hover:text-white'
							: 'border-white/25 text-white/60 hover:border-white/50 hover:text-white'}"
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>

		<!-- Right Side: Images -->
		<div
			class="f1-right relative transition-all delay-100 duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			<div class="f1-img-stack relative h-90 md:h-120">
				<enhanced:img
					class="f1-img-main absolute top-0 left-0 h-[88%] w-[80%] object-cover contrast-[1.1] saturate-[0.7]"
					src={f1img1}
					alt="Himika F1"
				/>
				<enhanced:img
					class="f1-img-accent absolute right-0 bottom-0 h-[45%] w-[50%] border-[5px] border-[#0f0f0f] object-cover saturate-[0.7]"
					src={f1img2}
					alt="F1 racing"
				/>
				<span
					class="f1-badge absolute top-[55%] left-[62%] rotate-3 bg-vermillion px-2 py-1 font-syne text-[0.48rem] font-extrabold tracking-[0.2em] text-white uppercase shadow-lg md:px-4 md:py-2 md:text-[0.58rem]"
				>
					@himikatalksf1
				</span>
			</div>
		</div>
	</div>
</section>

<style>
	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}
</style>
