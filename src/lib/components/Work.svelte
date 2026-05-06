<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	interface CreditItem {
		year: string;
		title: string;
		role: string;
		type: string;
		link?: string;
	}

	interface ReelItem {
		label: string;
		sub: string;
		link: string;
	}

	let visible = $state(false);
	let activeTab = $state<'films' | 'series' | 'short' | 'commercials'>('films');

	const tabs = [
		{ id: 'films' as const, label: 'Films' },
		{ id: 'series' as const, label: 'Web & TV Series' },
		{ id: 'short' as const, label: 'Short Films' },
		{ id: 'commercials' as const, label: 'Commercials' }
	];

	const credits: Record<'films' | 'series' | 'short' | 'commercials', CreditItem[]> = {
		films: [
			{
				year: '2018',
				title: 'Pad Man',
				role: 'Supporting Role',
				type: 'Film',
				link: 'https://www.google.com/search?q=Pad+Man+2018+film'
			},
			{
				year: '2020',
				title: 'Jai Mummy Di',
				role: 'Role',
				type: 'Film',
				link: 'https://www.google.com/search?q=Jai+Mummy+Di+2020+film'
			},
			{
				year: '2020',
				title: 'Valiyaperunnal',
				role: 'Female Lead — Pooja',
				type: 'Malayalam Film',
				link: 'https://www.google.com/search?q=Valiyaperunnal+2020+Malayalam+film'
			}
		],
		series: [
			{
				year: '2018–Present',
				title: 'ImMATURE',
				role: 'Nandini / Natasha — 10 episodes',
				type: 'Amazon',
				link: 'https://www.google.com/search?q=ImMATURE+web+series+Amazon'
			},
			{
				year: '2019',
				title: 'The Insiders',
				role: 'Shravya Sharma — 5 episodes',
				type: 'TV',
				link: 'https://www.google.com/search?q=The+Insiders+2019+TV+series'
			},
			{
				year: '2020',
				title: 'MTV Nishedh',
				role: 'Laxmi — 14 episodes',
				type: 'MTV',
				link: 'https://www.google.com/search?q=MTV+Nishedh+web+series'
			},
			{
				year: '2020',
				title: 'The Glitch',
				role: 'Role',
				type: 'YouTube',
				link: 'https://www.google.com/search?q=The+Glitch+2020+YouTube+series'
			},
			{
				year: '2021',
				title: 'Breathe: Into the Shadows',
				role: 'Rahila Kaul — 5 episodes',
				type: 'Amazon',
				link: 'https://www.google.com/search?q=Breathe+Into+the+Shadows+Amazon+Prime'
			},
			{
				year: '2022',
				title: 'Jugaadistan',
				role: 'Aarti Chatterjee — 8 episodes',
				type: 'Lionsgate',
				link: 'https://www.google.com/search?q=Jugaadistan+Lionsgate+Play+series'
			},
			{
				year: '2022',
				title: 'Feels Like Home',
				role: 'Dhriti — 12 episodes',
				type: 'Lionsgate',
				link: 'https://www.google.com/search?q=Feels+Like+Home+Lionsgate+Play+series'
			},
			{
				year: '2024',
				title: 'Canteen Honors',
				role: 'Role — 6 episodes',
				type: 'The Timeliners',
				link: 'https://www.google.com/search?q=Canteen+Honors+The+Timeliners+YouTube'
			},
			{
				year: '2024',
				title: 'Highway Love Season 2',
				role: 'Nidhi — 6 episodes',
				type: 'Amazon',
				link: 'https://www.google.com/search?q=Highway+Love+Season+2+Amazon'
			},
			{
				year: '2026',
				title: 'Kaalipotka',
				role: 'Rinku',
				type: 'Bengali Series',
				link: 'https://www.google.com/search?q=Kaalipotka+Bengali+series+2026'
			}
		],
		short: [
			{
				year: '2016',
				title: 'Abnormal',
				role: 'Available on Hotstar & YouTube',
				type: 'Short Film',
				link: 'https://www.google.com/search?q=Abnormal+2016+short+film+Hotstar'
			},
			{
				year: '2021',
				title: 'The Tipping Point',
				role: 'Lead',
				type: 'Short Film',
				link: 'https://www.google.com/search?q=The+Tipping+Point+2021+short+film'
			},
			{
				year: '2022',
				title: 'What If I Fail',
				role: 'Jaanvi · Dir. Kiran Nagdev · Film Festivals',
				type: 'Short Film',
				link: 'https://www.google.com/search?q=What+If+I+Fail+2022+short+film+Kiran+Nagdev'
			}
		],
		commercials: [
			{ year: '—', title: 'Cadbury', role: 'TVC', type: 'Film' },
			{ year: '—', title: 'Airtel × iPhone', role: 'TVC', type: 'OTT' },
			{ year: '—', title: 'Garnier', role: 'TVC', type: 'Film' },
			{ year: '—', title: 'Fastrack Watches', role: 'TVC', type: 'Film' },
			{ year: '—', title: 'Micromax', role: 'TVC', type: 'OTT' },
			{ year: '—', title: 'Coffee Bite', role: 'TVC', type: 'Film' },
			{ year: '—', title: 'OYO Rooms', role: 'TVC', type: 'YouTube' }
		]
	};

	const reels: ReelItem[] = [
		{
			label: 'Dramatic Showreel',
			sub: 'Watch on YouTube',
			link: 'https://www.youtube.com/watch?v=AA2OU8OmjOE'
		},
		{
			label: 'Commercial Showreel',
			sub: 'Watch on YouTube',
			link: 'https://www.youtube.com/watch?v=adqYdvppiDA'
		}
	];

	function getPlatformClass(type: string) {
		const t = type.toLowerCase();
		if (t.includes('amazon') || t.includes('lionsgate') || t.includes('mtv') || t.includes('ott'))
			return 'bg-ember/20 text-ember';
		if (t.includes('film')) return 'bg-goldenrod/15 text-goldenrod';
		if (t.includes('youtube') || t.includes('yt') || t.includes('timeliners'))
			return 'bg-lagoon/20 text-[#5ecfbf]';
		return 'bg-white/7 text-white/50';
	}
</script>

<section
	id="work"
	use:reveal={(v) => (visible = v)}
	class="work bg-charcoal px-6 py-16 text-white md:px-14 md:py-24"
>
	<div class="work-header mb-14">
		<p
			class="section-eyebrow mb-4 font-syne text-[0.65rem] font-bold tracking-[0.3em] text-goldenrod uppercase transition-all duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			Credits
		</p>
		<h2
			class="section-title text-clamp-title font-syne leading-[1.1] font-extrabold tracking-tight transition-all delay-100 duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			The Work
		</h2>
	</div>

	<!-- Tabs -->
	<div
		class="credits-tabs no-scrollbar mb-10 flex overflow-x-auto border-b border-white/12 transition-all delay-200 duration-800 {visible
			? 'translate-y-0 opacity-100'
			: 'translate-y-7 opacity-0'}"
	>
		{#each tabs as tab (tab.id)}
			<button
				class="tab-btn shrink-0 border-b-2 px-5 py-3 font-syne text-[0.68rem] font-bold tracking-[0.2em] uppercase transition-all duration-300 md:px-7 {activeTab ===
				tab.id
					? 'border-goldenrod text-goldenrod'
					: 'border-transparent text-white/40 hover:text-white/70'}"
				onclick={() => (activeTab = tab.id)}
			>
				{tab.label}
			</button>
		{/each}
	</div>

	<!-- List -->
	<div
		class="credits-list flex flex-col transition-all delay-300 duration-800 {visible
			? 'translate-y-0 opacity-100'
			: 'translate-y-7 opacity-0'}"
	>
		{#if activeTab === 'commercials'}
			<p class="mb-8 text-[0.9rem] font-light text-white/50">
				80+ TV commercials across major brands including:
			</p>
		{/if}

		<div class="flex flex-col">
			{#each credits[activeTab] as item (item.title)}
				<div
					class="credit-row grid grid-cols-1 gap-1 border-b border-white/7 py-5 transition-all duration-200 hover:bg-white/3 hover:px-2 md:grid-cols-[1fr_2fr_1.5fr_1fr] md:items-center md:gap-4 md:hover:pl-2"
				>
					<div
						class="credit-year font-syne text-[0.7rem] font-bold tracking-widest text-ember md:mb-0"
					>
						{item.year}
					</div>
					<div class="credit-title font-syne text-[1rem] font-semibold md:text-[0.95rem]">
						{#if item.link}
							<a
								href={item.link}
								target="_blank"
								rel="external"
								class="border-b border-white/15 transition-colors hover:border-goldenrod hover:text-goldenrod"
							>
								{item.title}
							</a>
						{:else}
							{item.title}
						{/if}
					</div>
					<div class="credit-role text-[0.85rem] text-white/50 md:text-[0.82rem]">
						{item.role}
					</div>
					<div
						class="credit-platform mt-2 w-fit rounded-xs px-3 py-1 text-center font-syne text-[0.6rem] font-bold tracking-wider uppercase md:mt-0 md:justify-self-end {getPlatformClass(
							item.type
						)}"
					>
						{item.type}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Showreels -->
	<div
		class="showreels mt-12 grid grid-cols-1 gap-4 transition-all delay-400 duration-800 md:grid-cols-2 {visible
			? 'translate-y-0 opacity-100'
			: 'translate-y-7 opacity-0'}"
	>
		{#each reels as reel (reel.label)}
			<a
				href={reel.link}
				target="_blank"
				rel="external"
				class="reel-card group flex items-center gap-6 border border-white/8 bg-white/4 p-4 no-underline transition-all duration-300 hover:border-ember hover:bg-ember/6 md:p-8"
			>
				<div
					class="reel-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember text-sm text-white transition-transform duration-300 group-hover:scale-110"
				>
					▶
				</div>
				<div>
					<div class="reel-label font-syne text-[0.7rem] font-bold tracking-widest uppercase">
						{reel.label}
					</div>
					<div class="reel-sub mt-1 text-[0.75rem] text-white/40">
						{reel.sub}
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}
</style>
