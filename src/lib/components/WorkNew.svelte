<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { fade } from 'svelte/transition';

	// Films
	import padmanImg from '$lib/assets/work/films/Padman_poster.jpg?enhanced';
	import jaiMummyDiImg from '$lib/assets/work/films/Jai_Mummy_Di_poster.jpg?enhanced';
	import valiyaperunnalImg from '$lib/assets/work/films/Valiyaperunnal.jpg?enhanced';

	// Web Series
	import immatureImg from '$lib/assets/work/web series/immature.jpg?enhanced';
	import theInsidersImg from '$lib/assets/work/web series/theinsiders.jpg?enhanced';
	import mtvNishedhImg from '$lib/assets/work/web series/mtvnishedh.jpg?enhanced';
	import theGlitchImg from '$lib/assets/work/web series/theglitch.jpg?enhanced';
	import breatheImg from '$lib/assets/work/web series/breathintoshadows.jpg?enhanced';
	import jugaadistanImg from '$lib/assets/work/web series/jugadistaan.jpg?enhanced';
	import feelsLikeHomeImg from '$lib/assets/work/web series/feels home.jpg?enhanced';
	import highwayLoveImg from '$lib/assets/work/web series/highway_love.jpg?enhanced';
	import kaalipotkaImg from '$lib/assets/work/web series/kalipotka.jpg?enhanced';

	// Short Films
	import abnormalImg from '$lib/assets/work/short films/abnormal.jpg?enhanced';
	import tippingPointImg from '$lib/assets/work/short films/thetippingpoint.jpg?enhanced';
	import whatIfIFailImg from '$lib/assets/work/short films/whatifIfail.jpg?enhanced';

	// Commercials
	import airtelImg from '$lib/assets/work/commercials/airtel.jpg?enhanced';
	import cocacolaImg from '$lib/assets/work/commercials/cocacola.PNG?enhanced';
	import kotakImg from '$lib/assets/work/commercials/kotak.jpg?enhanced';

	// Print
	import printImg1 from '$lib/assets/work/print media/img1.jpeg?enhanced';
	import printImg2 from '$lib/assets/work/print media/img2.jpeg?enhanced';
	import printImg3 from '$lib/assets/work/print media/img3.jpeg?enhanced';

	let visible = $state(false);
	let activeTab = $state('films');

	const categories = [
		{ id: 'films', label: 'Films', count: 3 },
		{ id: 'web-series', label: 'Web Series', count: 10 },
		{ id: 'shorts', label: 'Shorts', count: 3 },
		{ id: 'commercials', label: 'Commercials', count: 9 },
		{ id: 'print', label: 'Print', count: 3 }
	];

	interface PortfolioItem {
		title: string;
		role?: string;
		year?: string;
		img?: string | import('@sveltejs/enhanced-img').Picture | null;
		platform?: string;
		campaign?: string;
		featured?: boolean;
		grayscale?: boolean;
		link?: string;
	}

	const portfolioData: Record<string, PortfolioItem[]> = {
		films: [
			{
				title: 'Pad Man',
				role: 'Supporting Role',
				year: '2018',
				img: padmanImg,
				link: 'https://www.google.com/search?q=Pad+Man+2018+film'
			},
			{
				title: 'Jai Mummy Di',
				role: 'Role',
				year: '2020',
				img: jaiMummyDiImg,
				link: 'https://www.google.com/search?q=Jai+Mummy+Di+2020+film'
			},
			{
				title: 'Valiyaperunnal',
				role: 'Female Lead — Pooja',
				year: '2020',
				img: valiyaperunnalImg,
				link: 'https://www.google.com/search?q=Valiyaperunnal+2020+Malayalam+film'
			}
		],
		'web-series': [
			{
				title: 'ImMATURE',
				role: 'Nandini / Natasha',
				year: '2018–Present',
				platform: 'Amazon',
				img: immatureImg,
				link: 'https://www.google.com/search?q=ImMATURE+web+series+Amazon'
			},
			{
				title: 'The Insiders',
				role: 'Shravya Sharma',
				year: '2019',
				platform: 'TV',
				img: theInsidersImg,
				link: 'https://www.google.com/search?q=The+Insiders+2019+TV+series'
			},
			{
				title: 'MTV Nishedh',
				role: 'Laxmi',
				year: '2020',
				platform: 'MTV',
				img: mtvNishedhImg,
				link: 'https://www.google.com/search?q=MTV+Nishedh+web+series'
			},
			{
				title: 'The Glitch',
				role: 'Role',
				year: '2020',
				platform: 'YouTube',
				img: theGlitchImg,
				link: 'https://www.google.com/search?q=The+Glitch+2020+YouTube+series'
			},
			{
				title: 'Breathe: Into the Shadows',
				role: 'Rahila Kaul',
				year: '2021',
				platform: 'Amazon',
				img: breatheImg,
				link: 'https://www.google.com/search?q=Breathe+Into+the+Shadows+Amazon+Prime'
			},
			{
				title: 'Jugaadistan',
				role: 'Aarti Chatterjee',
				year: '2022',
				platform: 'Lionsgate',
				img: jugaadistanImg,
				link: 'https://www.google.com/search?q=Jugaadistan+Lionsgate+Play+series'
			},
			{
				title: 'Feels Like Home',
				role: 'Dhriti',
				year: '2022',
				platform: 'Lionsgate',
				img: feelsLikeHomeImg,
				link: 'https://www.google.com/search?q=Feels+Like+Home+Lionsgate+Play+series'
			},
			{
				title: 'Canteen Honors',
				role: 'Role',
				year: '2024',
				platform: 'The Timeliners',
				img: null,
				link: 'https://www.google.com/search?q=Canteen+Honors+The+Timeliners+YouTube'
			},
			{
				title: 'Highway Love Season 2',
				role: 'Nidhi',
				year: '2024',
				platform: 'Amazon',
				img: highwayLoveImg,
				link: 'https://www.google.com/search?q=Highway+Love+Season+2+Amazon'
			},
			{
				title: 'Kaalipotka',
				role: 'Rinku',
				year: '2026',
				platform: 'Bengali Series',
				img: kaalipotkaImg,
				link: 'https://www.google.com/search?q=Kaalipotka+Bengali+series+2026'
			}
		],
		shorts: [
			{
				title: 'The Tipping Point',
				role: 'Lead',
				year: '2021',
				img: tippingPointImg,
				link: 'https://www.google.com/search?q=The+Tipping+Point+2021+short+film'
			},
			{
				title: 'What If I Fail',
				role: 'Jaanvi',
				year: '2022',
				img: whatIfIFailImg,
				link: 'https://www.google.com/search?q=What+If+I+Fail+2022+short+film+Kiran+Nagdev'
			},
			{
				title: 'Abnormal',
				role: 'Available on Hotstar',
				year: '2016',
				img: abnormalImg,
				link: 'https://www.google.com/search?q=Abnormal+2016+short+film+Hotstar'
			}
		],
		commercials: [
			{ title: 'Airtel × iPhone', campaign: 'TVC', featured: true, img: airtelImg },
			{ title: 'Coca Cola', campaign: 'TVC', img: cocacolaImg },
			{ title: 'Kotak Bank', campaign: 'TVC', img: kotakImg },
			{ title: 'Cadbury', campaign: 'TVC' },
			{ title: 'Garnier', campaign: 'TVC' },
			{ title: 'Fastrack Watches', campaign: 'TVC' },
			{ title: 'Micromax', campaign: 'TVC' },
			{ title: 'Coffee Bite', campaign: 'TVC' },
			{ title: 'OYO Rooms', campaign: 'TVC' }
		],
		print: [
			{
				title: 'Vogue Editorial',
				img: printImg1
			},
			{
				title: 'GQ Portrait',
				img: printImg2,
				grayscale: true
			},
			{
				title: 'Dior Campaign',
				img: printImg3
			}
		]
	};
</script>

<section
	id="portfolio"
	class="relative overflow-hidden bg-linen py-16 text-charcoal md:py-24"
	use:reveal={(v) => (visible = v)}
>
	<div class="mx-auto px-6 md:px-14">
		<!-- Header -->
		<header
			class="mb-12 flex flex-col gap-6 transition-all duration-1000 md:flex-row md:items-end md:justify-between {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-12 opacity-0'}"
		>
			<div>
				<h2 class="text-clamp-title mb-2 font-syne leading-[1.1] font-extrabold tracking-tight">
					Selected <em class="font-display font-normal text-ember not-italic">Works.</em>
				</h2>
				<p class="font-display text-xl text-slate italic">A curated archive of performances.</p>
			</div>

			<!-- Interactive Navigation Tabs -->
			<nav
				class="hide-scrollbar flex w-full gap-6 overflow-x-auto pb-4 md:w-auto md:pb-0"
				aria-label="Portfolio categories"
			>
				{#each categories as category (category.id)}
					<button
						class="tab-btn border-b-2 pb-1 font-syne text-lg font-bold tracking-wide whitespace-nowrap uppercase transition-all duration-300
            {activeTab === category.id
							? 'border-ember text-ember'
							: 'border-transparent text-slate hover:text-charcoal'}"
						onclick={() => (activeTab = category.id)}
					>
						{category.label}
						<span class="ml-1 font-sans text-xs text-slate">({category.count})</span>
					</button>
				{/each}
			</nav>
		</header>

		<!-- Content Panels Container -->
		<div class="relative grid min-h-[60vh] grid-cols-1 items-start md:min-h-[50vh]">
			{#if activeTab === 'films'}
				<div
					in:fade={{ duration: 400 }}
					out:fade={{ duration: 400 }}
					class="col-start-1 row-start-1 grid grid-cols-1 gap-6 md:grid-cols-3"
				>
					{#each portfolioData.films as film (film.title)}
						<article
							class="group relative aspect-4/5 cursor-pointer overflow-hidden rounded-lg bg-linen"
						>
							{#if film.img}
								<enhanced:img
									src={film.img}
									class="h-full w-full object-cover brightness-90 filter transition-transform duration-700 group-hover:scale-110 group-hover:brightness-100"
									alt={film.title}
								/>
							{:else}
								<div
									class="flex h-full w-full items-center justify-center bg-slate/10 p-8 text-center"
								>
									<span class="font-syne text-sm tracking-widest text-slate/40 uppercase"
										>{film.title}</span
									>
								</div>
							{/if}
							<div
								class="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/20 to-transparent opacity-80"
							></div>
							<div class="absolute bottom-0 left-0 w-full p-6">
								<h4 class="mb-1 font-syne text-2xl font-bold text-pure-white">{film.title}</h4>
								<p class="font-sans text-sm text-linen">{film.role} • {film.year}</p>
							</div>
							{#if film.link}
								<a href={film.link} target="_blank" rel="external" class="absolute inset-0 z-20">
									<span class="sr-only">View {film.title}</span>
								</a>
							{/if}
						</article>
					{/each}
				</div>
			{:else if activeTab === 'web-series'}
				<div
					in:fade={{ duration: 400 }}
					out:fade={{ duration: 400 }}
					class="col-start-1 row-start-1 grid grid-cols-2 gap-4 md:grid-cols-5"
				>
					{#each portfolioData['web-series'] as series (series.title)}
						<article class="group relative aspect-4/5 overflow-hidden rounded bg-linen">
							{#if series.img}
								<enhanced:img
									src={series.img}
									class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
									alt={series.title}
								/>
							{:else}
								<div
									class="flex h-full w-full items-center justify-center bg-slate/10 p-4 text-center"
								>
									<span class="font-syne text-xs tracking-widest text-slate/40 uppercase"
										>{series.title}</span
									>
								</div>
							{/if}
							<div
								class="absolute inset-0 flex items-center justify-center bg-charcoal/60 p-4 text-center transition-colors duration-300 group-hover:bg-charcoal/80"
							>
								<div
									class="translate-y-2 transition-transform duration-300 group-hover:translate-y-0"
								>
									<h4 class="font-syne leading-tight font-bold text-pure-white">{series.title}</h4>
									{#if series.platform}
										<p class="mt-1 font-sans text-xs text-goldenrod">{series.platform}</p>
									{/if}
								</div>
							</div>
							{#if series.link}
								<a href={series.link} target="_blank" rel="external" class="absolute inset-0 z-20">
									<span class="sr-only">View {series.title}</span>
								</a>
							{/if}
						</article>
					{/each}
				</div>
			{:else if activeTab === 'shorts'}
				<div
					in:fade={{ duration: 400 }}
					out:fade={{ duration: 400 }}
					class="col-start-1 row-start-1 grid grid-cols-1 gap-6 md:grid-cols-3"
				>
					{#each portfolioData.shorts as short (short.title)}
						<article class="group relative border-t-2 border-slate/20 pt-4">
							<h4 class="mb-2 font-syne text-2xl font-bold text-charcoal">{short.title}</h4>
							<p class="mb-4 font-display text-slate italic">{short.role} • {short.year}</p>
							<div class="aspect-4/5 overflow-hidden rounded-lg bg-linen">
								{#if short.img}
									<enhanced:img
										src={short.img}
										class="h-full w-full object-cover grayscale filter transition-all duration-500 group-hover:grayscale-0"
										alt={short.title}
									/>
								{:else}
									<div class="flex h-full w-full items-center justify-center bg-slate/10">
										<span class="font-syne text-xs tracking-widest text-slate/40 uppercase"
											>Placeholder</span
										>
									</div>
								{/if}
							</div>
							{#if short.link}
								<a href={short.link} target="_blank" rel="external" class="absolute inset-0 z-20">
									<span class="sr-only">View {short.title}</span>
								</a>
							{/if}
						</article>
					{/each}
				</div>
			{:else if activeTab === 'commercials'}
				<div
					in:fade={{ duration: 400 }}
					out:fade={{ duration: 400 }}
					class="col-start-1 row-start-1 grid grid-cols-2 gap-4 md:grid-cols-5"
				>
					{#each portfolioData.commercials as comm (comm.title)}
						<article
							class="relative flex aspect-video flex-col justify-end overflow-hidden rounded-lg border border-slate/10 bg-linen p-6
              {comm.featured ? 'row-span-2 md:col-span-2' : ''} group"
						>
							{#if comm.img}
								<enhanced:img
									src={comm.img}
									class="absolute inset-0 h-full w-full object-cover opacity-20 transition-opacity duration-500 group-hover:opacity-40"
									alt={comm.title}
								/>
							{/if}
							<h4
								class="relative z-10 font-syne font-bold whitespace-pre-line text-charcoal {comm.featured
									? 'text-3xl'
									: ''}"
							>
								{comm.title}
							</h4>
							{#if comm.campaign}
								<p class="relative z-10 mt-2 font-sans font-bold text-ember">{comm.campaign}</p>
							{/if}
						</article>
					{/each}
				</div>
			{:else if activeTab === 'print'}
				<div
					in:fade={{ duration: 400 }}
					out:fade={{ duration: 400 }}
					class="col-start-1 row-start-1 grid grid-cols-1 gap-6 md:grid-cols-3"
				>
					{#each portfolioData.print as item (item.title)}
						<article class="group relative aspect-3/4 overflow-hidden rounded-lg bg-linen">
							{#if item.img}
								<enhanced:img
									src={item.img}
									class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 {item.grayscale
										? 'grayscale filter'
										: ''}"
									alt={item.title}
								/>
							{/if}
							<div
								class="absolute right-6 bottom-6 left-6 rounded bg-pure-white/90 p-4 text-center backdrop-blur"
							>
								<h4 class="font-syne font-bold text-charcoal">{item.title}</h4>
							</div>
						</article>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	/* Utility class to hide scrollbar but keep horizontal scrolling on mobile tabs */
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.hide-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}
</style>
