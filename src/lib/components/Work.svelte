<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	// Image imports for enhanced:img
	import padManImg from '$lib/assets/gallery1.jpg?enhanced';
	import immatureImg from '$lib/assets/gallery2.jpg?enhanced';
	import jaiMummyImg from '$lib/assets/gallery3.jpg?enhanced';
	import valiyaperunnalImg from '$lib/assets/gallery4.jpg?enhanced';
	import breatheImg from '$lib/assets/gallery5.jpg?enhanced';
	import highwayImg from '$lib/assets/gallery6.jpg?enhanced';

	type Category = 'films' | 'series' | 'short' | 'commercials';

	interface WorkItem {
		id: string;
		category: Category;
		title: string;
		year: string;
		type: string;
		role: string;
		image?: string | object;
		color?: string;
		span?: string;
		link?: string;
		isFeatured?: boolean;
	}

	let visible = $state(false);
	let activeGlow = $state('transparent');
	let activeTab = $state<Category>('series');

	const allWork: WorkItem[] = [
		// SERIES
		{
			id: 'immature',
			category: 'series',
			title: 'ImMATURE',
			year: '2018–Present',
			type: 'Amazon',
			role: 'Nandini / Natasha',
			image: immatureImg,
			color: '#B2FF05',
			span: 'md:col-span-2 md:row-span-2',
			link: 'https://www.google.com/search?q=ImMATURE+web+series+Amazon',
			isFeatured: true
		},
		{
			id: 'breathe',
			category: 'series',
			title: 'Breathe',
			year: '2021',
			type: 'Amazon',
			role: 'Rahila Kaul',
			image: breatheImg,
			color: '#7000FF',
			span: 'md:row-span-2',
			link: 'https://www.google.com/search?q=Breathe+Into+the+Shadows+Amazon+Prime',
			isFeatured: true
		},
		{
			id: 'highway',
			category: 'series',
			title: 'Highway Love',
			year: '2024',
			type: 'Amazon',
			role: 'Nidhi',
			image: highwayImg,
			color: '#00B2FF',
			span: 'md:col-span-1',
			link: 'https://www.google.com/search?q=Highway+Love+Season+2+Amazon',
			isFeatured: true
		},
		{
			id: 'insiders',
			category: 'series',
			title: 'The Insiders',
			year: '2019',
			type: 'TV',
			role: 'Shravya Sharma',
			isFeatured: false
		},
		{
			id: 'nishedh',
			category: 'series',
			title: 'MTV Nishedh',
			year: '2020',
			type: 'MTV',
			role: 'Laxmi',
			isFeatured: false
		},
		{
			id: 'jugaadistan',
			category: 'series',
			title: 'Jugaadistan',
			year: '2022',
			type: 'Lionsgate',
			role: 'Aarti Chatterjee',
			isFeatured: false
		},
		{
			id: 'feelslikehome',
			category: 'series',
			title: 'Feels Like Home',
			year: '2022',
			type: 'Lionsgate',
			role: 'Dhriti',
			isFeatured: false
		},

		// FILMS
		{
			id: 'padman',
			category: 'films',
			title: 'Pad Man',
			year: '2018',
			type: 'Film',
			role: 'Supporting Role',
			image: padManImg,
			color: '#FF007F',
			span: 'md:col-span-1 md:row-span-3',
			link: 'https://www.google.com/search?q=Pad+Man+2018+film',
			isFeatured: true
		},
		{
			id: 'jaimummy',
			category: 'films',
			title: 'Jai Mummy Di',
			year: '2020',
			type: 'Film',
			role: 'Role',
			image: jaiMummyImg,
			color: '#00F0FF',
			span: 'md:col-span-1 md:row-span-3',
			link: 'https://www.google.com/search?q=Jai+Mummy+Di+2020+film',
			isFeatured: true
		},
		{
			id: 'valiyaperunnal',
			category: 'films',
			title: 'Valiyaperunnal',
			year: '2020',
			type: 'Film',
			role: 'Female Lead — Pooja',
			image: valiyaperunnalImg,
			color: '#FF8A00',
			span: 'md:col-span-1 md:row-span-3',
			link: 'https://www.google.com/search?q=Valiyaperunnal+2020+Malayalam+film',
			isFeatured: true
		},

		// SHORTS
		{
			id: 'abnormal',
			category: 'short',
			title: 'Abnormal',
			year: '2016',
			type: 'Short Film',
			role: 'Lead',
			isFeatured: false
		},
		{
			id: 'tippingpoint',
			category: 'short',
			title: 'The Tipping Point',
			year: '2021',
			type: 'Short Film',
			role: 'Lead',
			isFeatured: false
		},
		{
			id: 'whatiffail',
			category: 'short',
			title: 'What If I Fail',
			year: '2022',
			type: 'Short Film',
			role: 'Lead',
			isFeatured: false
		},

		// COMMERCIALS
		{
			id: 'cadbury',
			category: 'commercials',
			title: 'Cadbury',
			year: '—',
			type: 'Film',
			role: 'TVC',
			isFeatured: false
		},
		{
			id: 'airtel',
			category: 'commercials',
			title: 'Airtel × iPhone',
			year: '—',
			type: 'OTT',
			role: 'TVC',
			isFeatured: false
		},
		{
			id: 'garnier',
			category: 'commercials',
			title: 'Garnier',
			year: '—',
			type: 'Film',
			role: 'TVC',
			isFeatured: false
		},
		{
			id: 'fastrack',
			category: 'commercials',
			title: 'Fastrack Watches',
			year: '—',
			type: 'Film',
			role: 'TVC',
			isFeatured: false
		}
	];

	const tabs = [
		{ id: 'series' as const, label: 'Series' },
		{ id: 'films' as const, label: 'Films' },
		{ id: 'short' as const, label: 'Shorts' },
		{ id: 'commercials' as const, label: 'Ads' }
	];

	const filteredFeatured = $derived(
		allWork.filter((w) => w.category === activeTab && w.isFeatured)
	);
	const filteredArchival = $derived(
		allWork.filter((w) => w.category === activeTab && !w.isFeatured)
	);
</script>

<section
	id="work"
	use:reveal={(v) => (visible = v)}
	class="work relative overflow-hidden bg-linen px-6 py-20 transition-colors duration-700 md:px-14 md:py-32"
	style="background-color: {activeGlow !== 'transparent'
		? `${activeGlow}15`
		: 'var(--color-linen)'}"
>
	<!-- Dynamic Glow -->
	<div
		class="pointer-events-none absolute inset-0 z-0 opacity-30 blur-[120px] transition-colors duration-1000"
		style="background: radial-gradient(circle at 50% 50%, {activeGlow}, transparent 70%)"
	></div>

	<div class="relative z-10 mx-auto">
		<div class="work-header mb-12 flex flex-col items-center text-center md:mb-20">
			<p
				class="section-eyebrow mb-4 font-syne text-[0.65rem] font-bold tracking-[0.3em] text-slate uppercase transition-all duration-1000 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-10 opacity-0'}"
			>
				Portfolio
			</p>
			<h2
				class="section-title text-clamp-title mb-10 font-syne leading-[1.1] font-extrabold tracking-tight text-charcoal transition-all delay-200 duration-1000 {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-10 opacity-0'}"
			>
				The Work
			</h2>

			<!-- Tabs -->
			<div
				class="no-scrollbar flex w-full overflow-x-auto border-b border-charcoal/10 transition-all delay-300 duration-1000 md:w-fit {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-10 opacity-0'}"
			>
				{#each tabs as tab (tab.id)}
					<button
						class="shrink-0 border-b-2 px-8 py-4 font-syne text-[0.65rem] font-bold tracking-[0.3em] uppercase transition-all duration-300 {activeTab ===
						tab.id
							? 'border-charcoal text-charcoal'
							: 'border-transparent text-slate/40 hover:text-charcoal/60'}"
						onclick={() => (activeTab = tab.id)}
					>
						{tab.label}
					</button>
				{/each}
			</div>
		</div>

		<!-- Bento Grid (Only if featured items exist for category) -->
		{#if filteredFeatured.length > 0}
			<div
				class="bento-grid grid auto-rows-[180px] grid-cols-1 gap-6 md:auto-rows-[220px] md:grid-cols-3 md:gap-8"
			>
				{#each filteredFeatured as project (project.id)}
					<a
						href={project.link}
						target="_blank"
						rel="external"
						class="group relative flex flex-col overflow-hidden bg-pure-white transition-all duration-500 hover:-translate-x-1 hover:-translate-y-2 hover:rotate-1 {project.span}"
						style="--brand-color: {project.color}; box-shadow: 0 0 0 transparent; transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);"
						onmouseenter={() => (activeGlow = project.color || 'transparent')}
						onmouseleave={() => (activeGlow = 'transparent')}
					>
						<div
							class="absolute inset-0 z-[-1] translate-x-0 translate-y-0 bg-transparent transition-all duration-300 group-hover:translate-x-3 group-hover:translate-y-3"
							style="background-color: {project.color};"
						></div>

						<div class="relative h-full w-full overflow-hidden">
							<enhanced:img
								src={project.image}
								alt={project.title}
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
							/>
							<div
								class="absolute inset-0 flex items-center overflow-hidden bg-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
							>
								<div class="marquee-wrapper flex animate-marquee py-4 whitespace-nowrap">
									{#each [0, 1, 2, 3] as i (i)}
										<span
											class="mx-4 font-syne text-[4rem] font-black tracking-tighter text-charcoal uppercase md:text-[6rem]"
										>
											{project.title}
										</span>
									{/each}
								</div>
							</div>
						</div>

						<div
							class="absolute right-0 bottom-0 left-0 z-20 translate-y-full bg-pure-white p-5 transition-transform duration-500 group-hover:translate-y-0"
						>
							<div class="mb-1 flex items-center justify-between">
								<span
									class="font-syne text-[0.55rem] font-bold tracking-[0.2em] uppercase"
									style="color: {project.color}"
								>
									{project.type}
								</span>
								<span class="font-syne text-[0.6rem] font-medium text-slate">
									{project.year}
								</span>
							</div>
							<h3 class="mb-1 font-syne text-lg font-bold text-charcoal">
								{project.title}
							</h3>
							<p class="text-[0.75rem] text-slate">
								{project.role}
							</p>
						</div>
					</a>
				{/each}
			</div>
		{/if}

		<!-- Archival List -->
		{#if filteredArchival.length > 0}
			<div class="archival-credits mx-auto mt-16 max-w-4xl md:mt-24">
				{#each filteredArchival as item (item.id)}
					<div
						class="credit-row group grid grid-cols-1 border-b border-charcoal/5 py-5 transition-all duration-300 hover:bg-charcoal/[0.02] hover:px-4 md:grid-cols-[80px_1fr_1fr_120px] md:items-center md:gap-8"
					>
						<div class="font-syne text-[0.7rem] font-bold tracking-widest text-slate/40">
							{item.year}
						</div>
						<div class="font-syne text-[0.95rem] font-bold text-charcoal">
							{item.title}
						</div>
						<div class="text-[0.88rem] font-light text-slate">
							{item.role}
						</div>
						<div
							class="mt-2 w-fit rounded-full border border-charcoal/10 px-3 py-1 text-center font-syne text-[0.55rem] font-bold tracking-wider text-slate/60 uppercase md:mt-0 md:justify-self-end"
						>
							{item.type}
						</div>
					</div>
				{/each}
			</div>
		{/if}

		<!-- IMDB -->
		<div class="mt-20 flex justify-center">
			<a
				href="https://www.imdb.com/name/nm8141972/"
				target="_blank"
				rel="external"
				class="group flex items-center gap-4 font-syne text-[0.65rem] font-bold tracking-[0.4em] text-charcoal uppercase transition-all hover:tracking-[0.5em]"
			>
				Full IMDB Profile <span class="transition-transform group-hover:translate-x-2">→</span>
			</a>
		</div>
	</div>
</section>

<style>
	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}

	.bento-grid {
		grid-auto-flow: dense;
	}

	:global(.marquee-wrapper) {
		display: flex;
		animation: marquee 10s linear infinite;
	}

	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
