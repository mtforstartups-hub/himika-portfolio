<script lang="ts">
	import f1img1 from '$lib/assets/f1img1.jpg?enhanced&w=480;640;800;1024;1280';
	import f1img2 from '$lib/assets/f1img2.jpg?enhanced&w=320;480;640;800';
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const f1Stats = [
		{ num: '🏎️', label: 'Dedicated F1 content account' },
		{ num: '103K', label: 'Instagram followers' },
		{ num: '🔥', label: 'Race reactions & hot takes' },
		{ num: '24/7', label: 'F1 on the brain' }
	];

	const f1Links = [
		{
			label: 'himikatalksf1 — F1 Content Account',
			href: 'https://www.instagram.com/himikatalksf1',
			primary: true
		},
		{
			label: 'himika_bose — Main Instagram',
			href: 'https://www.instagram.com/himika_bose',
			primary: false
		}
	];
</script>

<section
	id="f1"
	use:reveal={(v) => (visible = v)}
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

			<!-- Links -->
			<div
				class="flex flex-col gap-3  mb-10 transition-all delay-400 duration-800 {visible
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
						<svg class="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
								clip-rule="evenodd"
							/>
						</svg>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Stats Grid -->
			<div
				class="f1-stats grid grid-cols-2 gap-6 transition-all delay-300 duration-800 {visible
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
					sizes="(min-width: 768px) 40vw, 80vw"
				/>
				<enhanced:img
					class="f1-img-accent absolute right-0 bottom-0 h-[45%] lg:h-6/10 w-[50%] border-[5px] border-[#0f0f0f] object-cover saturate-[0.7]"
					src={f1img2}
					alt="F1 racing"
					sizes="(min-width: 768px) 25vw, 50vw"
				/>
				<span
					class="f1-badge absolute top-[55%] lg:top-1/3 left-[62%] rotate-3 bg-vermillion px-2 py-1 font-syne text-[0.48rem] font-extrabold tracking-[0.2em] text-white uppercase shadow-lg md:px-4 md:py-2 md:text-[0.58rem]"
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
