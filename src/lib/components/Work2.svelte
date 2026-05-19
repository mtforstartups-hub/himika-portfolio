<script>
	import { Play, Sparkles } from 'lucide-svelte';

	// Image imports for enhanced:img
	import padmanImg from '$lib/assets/work/films/Padman_poster.jpg?enhanced';
	import jaimummyImg from '$lib/assets/work/films/Jai_Mummy_Di_poster.jpg?enhanced';
	import valiyaImg from '$lib/assets/work/films/Valiyaperunnal.jpg?enhanced';

	import immatureImg from '$lib/assets/work/web series/immature.jpg?enhanced';
	import breatheImg from '$lib/assets/work/web series/breathintoshadows.jpg?enhanced';
	import highwayImg from '$lib/assets/work/web series/highway_love.jpg?enhanced';
	import insidersImg from '$lib/assets/work/web series/theinsiders.jpg?enhanced';
	import nishedhImg from '$lib/assets/work/web series/mtvnishedh.jpg?enhanced';
	import jugaadistanImg from '$lib/assets/work/web series/jugadistaan.jpg?enhanced';
	import feelsHomeImg from '$lib/assets/work/web series/feels home.jpg?enhanced';
	import kalipotkaImg from '$lib/assets/work/web series/kalipotka.jpg?enhanced';
	import glitchImg from '$lib/assets/work/web series/theglitch.jpg?enhanced';

	import abnormalImg from '$lib/assets/work/short films/abnormal.jpg?enhanced';
	import tippingImg from '$lib/assets/work/short films/thetippingpoint.jpg?enhanced';
	import whatifImg from '$lib/assets/work/short films/whatifIfail.jpg?enhanced';

	import airtelImg from '$lib/assets/work/commercials/airtel.jpg?enhanced';
	import kotakImg from '$lib/assets/work/commercials/kotak.jpg?enhanced';
	import cocaImg from '$lib/assets/work/commercials/cocacola.PNG?enhanced';

	import print1Img from '$lib/assets/work/print media/img1.jpeg?enhanced';
	import print2Img from '$lib/assets/work/print media/img2.jpeg?enhanced';
	import print3Img from '$lib/assets/work/print media/img3.jpeg?enhanced';

	const WORKS_DATA = [
		// SERIES
		{
			id: 'feelshome',
			title: 'Feels Like Home',
			category: 'Series',
			role: 'Dhriti',
			director: 'Lionsgate',
			year: '2022',
			color: '#B2FF05',
			image: feelsHomeImg,
			size: 'large'
		},
		{
			id: 'breathe',
			title: 'Breathe',
			category: 'Series',
			role: 'Rahila Kaul',
			director: 'Amazon',
			year: '2021',
			color: '#7000FF',
			image: breatheImg,
			size: 'tall'
		},
		{
			id: 'immature',
			title: 'ImMATURE',
			category: 'Series',
			role: 'Nandini / Natasha',
			director: 'Amazon',
			year: '2018–Present',
			color: '#B2FF05',
			image: immatureImg,
			size: 'normal'
		},
		{
			id: 'highway',
			title: 'Highway Love',
			category: 'Series',
			role: 'Nidhi',
			director: 'Amazon',
			year: '2024',
			color: '#00B2FF',
			image: highwayImg,
			size: 'normal'
		},
		{
			id: 'insiders',
			title: 'The Insiders',
			category: 'Series',
			role: 'Shravya Sharma',
			director: 'TV',
			year: '2019',
			color: '#FF8A00',
			image: insidersImg,
			size: 'normal'
		},
		{
			id: 'nishedh',
			title: 'MTV Nishedh',
			category: 'Series',
			role: 'Laxmi',
			director: 'MTV',
			year: '2020',
			color: '#FF007F',
			image: nishedhImg,
			size: 'normal'
		},
		{
			id: 'jugaadistan',
			title: 'Jugaadistan',
			category: 'Series',
			role: 'Aarti Chatterjee',
			director: 'Lionsgate',
			year: '2022',
			color: '#00F0FF',
			image: jugaadistanImg,
			size: 'normal'
		},

		{
			id: 'kalipotka',
			title: 'Kali Potka',
			category: 'Series',
			role: 'Role',
			director: 'TV',
			year: '2021',
			color: '#FF8A00',
			image: kalipotkaImg,
			size: 'normal'
		},
		{
			id: 'glitch',
			title: 'The Glitch',
			category: 'Series',
			role: 'Role',
			director: 'TV',
			year: '2022',
			color: '#00E5FF',
			image: glitchImg,
			size: 'normal'
		},

		// FILMS
		{
			id: 'padman',
			title: 'Pad Man',
			category: 'Films',
			role: 'Supporting Role',
			director: 'Film',
			year: '2018',
			color: '#FF007F',
			image: padmanImg,
			size: 'tall'
		},
		{
			id: 'jaimummy',
			title: 'Jai Mummy Di',
			category: 'Films',
			role: 'Role',
			director: 'Film',
			year: '2020',
			color: '#00F0FF',
			image: jaimummyImg,
			size: 'tall'
		},
		{
			id: 'valiya',
			title: 'Valiyaperunnal',
			category: 'Films',
			role: 'Female Lead — Pooja',
			director: 'Film',
			year: '2020',
			color: '#FF8A00',
			image: valiyaImg,
			size: 'tall'
		},

		// SHORTS
		{
			id: 'abnormal',
			title: 'Abnormal',
			category: 'Shorts',
			role: 'Lead',
			director: 'Short Film',
			year: '2016',
			color: '#FF5500',
			image: abnormalImg,
			size: 'normal'
		},
		{
			id: 'tipping',
			title: 'The Tipping Point',
			category: 'Shorts',
			role: 'Lead',
			director: 'Short Film',
			year: '2021',
			color: '#B200FF',
			image: tippingImg,
			size: 'normal'
		},
		{
			id: 'whatif',
			title: 'What If I Fail',
			category: 'Shorts',
			role: 'Lead',
			director: 'Short Film',
			year: '2022',
			color: '#00E5FF',
			image: whatifImg,
			size: 'normal'
		},

		// ADS
		{
			id: 'airtel',
			title: 'Airtel × iPhone',
			category: 'Ads',
			role: 'TVC',
			director: 'OTT',
			year: '—',
			color: '#FF00CC',
			image: airtelImg,
			size: 'large'
		},
		{
			id: 'kotak',
			title: 'Kotak',
			category: 'Ads',
			role: 'TVC',
			director: 'Film',
			year: '—',
			color: '#CCFF00',
			image: kotakImg,
			size: 'normal'
		},
		{
			id: 'coca',
			title: 'Coca Cola',
			category: 'Ads',
			role: 'TVC',
			director: 'Film',
			year: '—',
			color: '#FF5500',
			image: cocaImg,
			size: 'normal'
		},

		// PRINT
		{
			id: 'print1',
			title: 'Editorial 01',
			category: 'Print',
			role: 'Model',
			director: 'Print',
			year: '—',
			color: '#00E5FF',
			image: print1Img,
			size: 'normal'
		},
		{
			id: 'print2',
			title: 'Editorial 02',
			category: 'Print',
			role: 'Model',
			director: 'Print',
			year: '—',
			color: '#FF00CC',
			image: print2Img,
			size: 'normal'
		},
		{
			id: 'print3',
			title: 'Editorial 03',
			category: 'Print',
			role: 'Model',
			director: 'Print',
			year: '—',
			color: '#B200FF',
			image: print3Img,
			size: 'normal'
		}
	];

	const CATEGORIES = ['Series', 'Films', 'Shorts', 'Ads', 'Print'];

	// Svelte 5 Runes for State Management
	let activeFilter = $state('Series');
	let hoveredProject = $state(null);
	let containerRef = $state();

	// Derived state for the filtered works
	let filteredWorks = $derived(WORKS_DATA.filter((work) => work.category === activeFilter));
</script>

<div
	class="min-h-screen overflow-x-hidden bg-canvas text-charcoal selection:bg-ember selection:text-black"
>
	<!-- --- BACKGROUND DYNAMIC GLOW --- -->
	<div
		class="pointer-events-none fixed top-1/2 left-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 mix-blend-screen blur-[150px] transition-colors duration-700 ease-in-out"
		style="
      background-color: {hoveredProject ? hoveredProject.color : '#333'};
      transform: {hoveredProject
			? 'translate(-50%, -50%) scale(1.1)'
			: 'translate(-50%, -50%) scale(1)'};
    "
	></div>

	<section class="relative z-10 mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
		<!-- --- HEADER SECTION --- -->
		<div class="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
			<div class="group relative cursor-default">
				<h2 class="text-clamp-title font-syne leading-[1.1] font-extrabold">
					<span
						class="stroke-text block font-display tracking-widest text-transparent"
						style="-webkit-text-stroke: 1px rgba(20,20,20,1);">The</span
					>
					<span
						class="block text-3xl text-ember transition-colors duration-300 group-hover:text-charcoal md:text-5xl"
						>Archive</span
					>
				</h2>
				<div class="animate-spin-slow absolute -top-6 -right-12 text-ember">
					<Sparkles size={48} strokeWidth={1} />
				</div>
			</div>
		</div>

		<!-- --- FILTER NAVIGATION --- -->
		<div class="no-scrollbar mb-12 flex gap-3 overflow-x-auto pb-4">
			{#each CATEGORIES as cat (cat)}
				<button
					onclick={() => (activeFilter = cat)}
					class="border px-3.5 py-1.5 text-[0.6rem] font-bold tracking-[0.15em] whitespace-nowrap uppercase transition-all duration-300 {activeFilter ===
					cat
						? 'border-ember bg-ember text-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
						: 'border-ember bg-transparent text-ember hover:border-lagoon hover:text-lagoon'}"
				>
					{cat}
				</button>
			{/each}
		</div>

		<!-- --- DYNAMIC MASONRY GRID --- -->
		<div bind:this={containerRef} class="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-3">
			{#each filteredWorks as work, index (work.id)}
				<!-- Determine grid span based on the 'size' property -->
				{@const spanClass =
					work.size === 'large'
						? 'md:col-span-2 md:row-span-2'
						: work.size === 'tall'
							? 'md:col-span-1 md:row-span-2'
							: 'md:col-span-1 md:row-span-1'}

				<!-- Alternating slight rotations -->
				{@const rotationClass = index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'}

				<div
					onmouseenter={() => (hoveredProject = work)}
					onmouseleave={() => (hoveredProject = null)}
					class="group brutal-shadow relative overflow-hidden bg-neutral-900 {spanClass} {rotationClass}"
					style="box-shadow: {hoveredProject?.id === work.id
						? `8px 8px 0px ${work.color}`
						: 'none'};"
				>
					style="box-shadow: {hoveredProject?.id === work.id
						? `8px 8px 0px ${work.color}`
						: 'none'};"
				>
					<!-- --- BACKGROUND IMAGE --- -->
					<div class="absolute inset-0 h-full w-full">
						<div
							class="absolute inset-0 z-10 bg-black/40 transition-colors duration-500 group-hover:bg-black/10"
						></div>
						<enhanced:img
							src={work.image}
							alt={work.title}
							class="h-full w-full object-cover opacity-70 grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
						/>
					</div>

					<!-- --- KINETIC MARQUEE --- -->
					<div
						class="pointer-events-none absolute top-1/2 left-0 z-20 w-full -translate-y-1/2 -rotate-6 overflow-hidden opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
					>
						<div class="animate-marquee whitespace-nowrap">
							<span class="px-4 text-6xl font-black text-white/50 uppercase sm:text-8xl">
								{work.title} • {work.category} • {work.title} • {work.category} •
							</span>
						</div>
					</div>

					<!-- --- CARD CONTENT --- -->
					<div class="absolute inset-0 z-30 flex flex-col justify-between p-6 sm:p-8">
						<!-- Top Row: Category Pill & Play Button -->
						<div class="flex items-start justify-between">
							<span
								class="rounded-full border bg-black/30 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-md"
								style="
                  color: {hoveredProject?.id === work.id ? work.color : 'white'};
                  border-color: {hoveredProject?.id === work.id
									? work.color
									: 'rgba(255,255,255,0.2)'};
                "
							>
								{work.category}
							</span>

							<div
								class="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
							>
								<Play fill="white" size={20} class="ml-1" />
							</div>
						</div>

						<!-- Bottom Row: Text Details -->
						<div
							class="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0"
						>
							<p
								class="mb-2 font-mono text-sm text-white/70 opacity-0 transition-opacity delay-100 duration-300 group-hover:opacity-100"
							>
								{work.year} // {work.director}
							</p>
							<h3 class="mb-1 text-3xl font-black tracking-tight text-white uppercase sm:text-4xl">
								{work.title}
							</h3>
							<p
								class="text-lg font-medium opacity-0 transition-opacity delay-200 duration-300 group-hover:opacity-100"
								style="color: {work.color};"
							>
								{work.role}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- --- VIEW REEL CALL TO ACTION --- -->
		<!-- <div class="mt-20 flex justify-center">
			<button
				class="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#CCFF00] px-8 py-5 font-black tracking-widest text-black uppercase transition-transform hover:scale-105"
			>
				<span class="relative z-10 flex items-center gap-2">
					View Full Showreel
					<MoveRight class="transition-transform duration-300 group-hover:translate-x-2" />
				</span>
				
				<div
					class="absolute inset-0 z-0 translate-y-full rounded-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0"
				></div>
			</button>
		</div> -->
	</section>
</div>

<style>
	@keyframes marquee {
		0% {
			transform: translateX(0%);
		}
		100% {
			transform: translateX(-50%);
		}
	}
	.animate-marquee {
		display: inline-block;
		white-space: nowrap;
		animation: marquee 15s linear infinite;
	}
	.brutal-shadow {
		transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	}
	.brutal-shadow:hover {
		transform: translate(-4px, -4px);
	}

	/* Custom scrollbar for hiding horizontal scroll but keeping functionality */
	:global(.no-scrollbar::-webkit-scrollbar) {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}
</style>
