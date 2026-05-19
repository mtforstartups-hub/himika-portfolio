<script>
	import { Play, Sparkles, MoveRight } from 'lucide-svelte';

	// --- MOCK DATA ---
	const WORKS_DATA = [
		{
			id: 1,
			title: 'NEON HEARTS',
			category: 'Film',
			role: 'Lead • Mia',
			director: 'Sofia Coppola',
			year: '2025',
			color: '#FF00CC', // Hot Pink
			image:
				'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop',
			size: 'normal' // spans 2 columns
		},
		{
			id: 2,
			title: 'ECLIPSE',
			category: 'TV',
			role: 'Series Regular',
			director: 'HBO Max',
			year: '2024',
			color: '#00E5FF', // Electric Blue
			image:
				'https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?q=80&w=1974&auto=format&fit=crop',
			size: 'normal'
		},
		{
			id: 3,
			title: 'VERSACE',
			category: 'Commercial',
			role: 'Feature',
			director: 'Gordon von Steiner',
			year: '2024',
			color: '#CCFF00', // Acid Green
			image:
				'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop',
			size: 'normal'
		},
		{
			id: 4,
			title: 'SILENT ECHO',
			category: 'Short',
			role: 'Lead • Sarah',
			director: 'A24 Shorts',
			year: '2023',
			color: '#FF5500', // Bright Orange
			image:
				'https://images.unsplash.com/photo-1621360811013-c76831f1628c?q=80&w=2070&auto=format&fit=crop',
			size: 'normal'
		},
		{
			id: 5,
			title: 'MIDNIGHT SUN',
			category: 'Film',
			role: 'Supporting',
			director: 'Denis Villeneuve',
			year: '2023',
			color: '#B200FF', // Neon Purple
			image:
				'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=2070&auto=format&fit=crop',
			size: 'normal' // spans 2 rows
		},
		{
			id: 6,
			title: 'MIDNIGHT SUN',
			category: 'Film',
			role: 'Supporting',
			director: 'Denis Villeneuve',
			year: '2023',
			color: '#B200FF', // Neon Purple
			image:
				'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=2070&auto=format&fit=crop',
			size: 'tall' // spans 2 rows
		}
	];

	const CATEGORIES = ['All', 'Film', 'TV', 'Commercial', 'Short'];

	// Svelte 5 Runes for State Management
	let activeFilter = $state('All');
	let hoveredProject = $state(null);
	let containerRef = $state();

	// Derived state for the filtered works
	let filteredWorks = $derived(
		WORKS_DATA.filter((work) => activeFilter === 'All' || work.category === activeFilter)
	);
</script>

<div
	class="min-h-screen overflow-x-hidden bg-canvas text-charcoal selection:bg-[#CCFF00] selection:text-black"
>
	<!-- --- BACKGROUND DYNAMIC GLOW --- -->
	<div
		class="pointer-events-none fixed top-1/2 left-1/2 size-200 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 mix-blend-screen blur-[150px] transition-colors duration-700 ease-in-out"
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
				<h2 class="text-6xl leading-none font-black tracking-tighter uppercase sm:text-8xl">
					<span
						class="stroke-text block text-transparent"
						style="-webkit-text-stroke: 1px rgba(255,255,255,0.5);">The</span
					>
					<span class="block text-[#CCFF00] transition-colors duration-300 group-hover:text-white"
						>Archive</span
					>
				</h2>
				<div class="animate-spin-slow absolute -top-6 -right-12 text-[#FF00CC]">
					<Sparkles size={48} strokeWidth={1} />
				</div>
			</div>

			<p class="max-w-md text-lg font-light text-neutral-400 md:text-xl">
				A curated selection of cinematic explorations, television appearances, and high-impact
				commercial collaborations.
			</p>
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
					role="button"
					tabindex="0"
					onmouseenter={() => (hoveredProject = work)}
					onmouseleave={() => (hoveredProject = null)}
					class="group brutal-shadow relative cursor-pointer overflow-hidden bg-neutral-900 {spanClass} {rotationClass}"
					style="box-shadow: {hoveredProject?.id === work.id
						? `8px 8px 0px ${work.color}`
						: 'none'};"
				>
					<!-- --- BACKGROUND IMAGE --- -->
					<div class="absolute inset-0 h-full w-full">
						<div
							class="absolute inset-0 z-10 bg-black/40 transition-colors duration-500 group-hover:bg-black/10"
						></div>
						<img
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
								{work.year} // DIR. {work.director}
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
		<div class="mt-20 flex justify-center">
			<button
				class="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#CCFF00] px-8 py-5 font-black tracking-widest text-black uppercase transition-transform hover:scale-105"
			>
				<span class="relative z-10 flex items-center gap-2">
					View Full Showreel
					<MoveRight class="transition-transform duration-300 group-hover:translate-x-2" />
				</span>
				<!-- Button Hover effect background -->
				<div
					class="absolute inset-0 z-0 translate-y-full rounded-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0"
				></div>
			</button>
		</div>
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
	.clip-diagonal {
		clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
	}

	/* Custom scrollbar for hiding horizontal scroll but keeping functionality */
	:global(.no-scrollbar::-webkit-scrollbar) {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
