<script lang="ts">
	import img1 from '$lib/assets/f1videos/img1.jpg?enhanced';
	import img2 from '$lib/assets/f1videos/img2.jpg?enhanced';
	import img3 from '$lib/assets/f1videos/img3.jpg?enhanced';
	import img4 from '$lib/assets/f1videos/img4.jpg?enhanced';
	import img5 from '$lib/assets/f1videos/img5.jpg?enhanced';
	import img6 from '$lib/assets/f1videos/img6.jpg?enhanced';
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const videos = [
		{
			id: 1,
			image: img1,
			link: 'https://www.instagram.com/reel/DE1hftsp-Wo/'
		},
		{
			id: 2,
			image: img2,
			link: 'https://www.instagram.com/reels/DNm2lhWJQws/'
		},
		{
			id: 3,
			image: img3,
			link: 'https://www.instagram.com/reels/DVkvAhtRjwt/'
		},
		{
			id: 4,
			image: img4,
			link: 'https://www.instagram.com/reels/DRlxM1TCc98/'
		},
		{
			id: 5,
			image: img5,
			link: 'https://www.instagram.com/reels/DWEN_7TiSh7/'
		},
		{
			id: 6,
			image: img6,
			link: 'https://www.instagram.com/reels/DZSk6Gqod2D/'
		}
	];

	// Slider state
	let currentIndex = $state(0);
	let isDragging = $state(false);
	let dragStartX = $state(0);
	let dragDelta = $state(0);
	let isHovered = $state(false);

	// Responsive: items per page driven by window width
	let itemsPerPage = $state(1);

	function updateItemsPerPage() {
		const w = window.innerWidth;
		if (w >= 1024) itemsPerPage = 6;
		else if (w >= 768) itemsPerPage = 3;
		else itemsPerPage = 1;
	}

	$effect(() => {
		updateItemsPerPage();
		window.addEventListener('resize', updateItemsPerPage);
		return () => window.removeEventListener('resize', updateItemsPerPage);
	});

	let maxIndex = $derived(Math.max(0, videos.length - itemsPerPage));

	function next() {
		currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
	}

	function goTo(i: number) {
		currentIndex = Math.min(Math.max(0, i), maxIndex);
	}

	// Autoplay — only active when there are multiple stops
	const AUTOPLAY_MS = 3000;
	let autoplayTimer: ReturnType<typeof setInterval> | null = null;

	function startAutoplay() {
		if (maxIndex === 0) return;
		autoplayTimer = setInterval(() => {
			if (!isHovered && !isDragging) next();
		}, AUTOPLAY_MS);
	}

	function stopAutoplay() {
		if (autoplayTimer !== null) {
			clearInterval(autoplayTimer);
			autoplayTimer = null;
		}
	}

	$effect(() => {
		// Re-start whenever maxIndex changes (e.g. window resize changes breakpoint)
		stopAutoplay();
		startAutoplay();
		return () => stopAutoplay();
	});

	// Pointer drag / swipe
	function onPointerDown(e: PointerEvent) {
		isDragging = true;
		dragStartX = e.clientX;
		dragDelta = 0;
		(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
	}

	function onPointerMove(e: PointerEvent) {
		if (!isDragging) return;
		dragDelta = e.clientX - dragStartX;
	}

	function onPointerUp() {
		if (!isDragging) return;
		isDragging = false;
		if (dragDelta < -50) next();
		else if (dragDelta > 50) currentIndex = Math.max(0, currentIndex - 1);
		dragDelta = 0;
		// Reset the autoplay timer after a manual swipe
		stopAutoplay();
		startAutoplay();
	}

	// Each slide occupies (100 / itemsPerPage)% of the viewport
	let slideWidthPct = $derived(100 / itemsPerPage);
	let translateX = $derived(
		isDragging
			? `calc(${-currentIndex * slideWidthPct}% + ${dragDelta}px)`
			: `${-currentIndex * slideWidthPct}%`
	);
</script>

<section
	id="f1-videos"
	use:reveal={(v) => (visible = v)}
	class="f1-videos bg-[#0f0f0f] px-6 py-16 md:px-14 md:py-24"
>
	<!-- Header -->
	<div class="f1-videos-header mb-12">
		<p
			class="section-eyebrow mb-4 font-syne text-[0.65rem] font-bold tracking-[0.3em] text-vermillion uppercase transition-all duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			@himikatalksf1
		</p>
		<h2
			class="section-title text-clamp-title mb-6 font-syne leading-[1.1] font-extrabold tracking-tight text-white transition-all delay-100 duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			Best F1 <em class="font-display font-normal text-vermillion not-italic">Content</em>
		</h2>
	</div>

	<!-- Carousel -->
	<div
		role="group"
		aria-label="F1 Reels Carousel"
		class="carousel-container relative transition-all delay-200 duration-800 {visible
			? 'translate-y-0 opacity-100'
			: 'translate-y-7 opacity-0'}"
		onmouseenter={() => (isHovered = true)}
		onmouseleave={() => (isHovered = false)}
	>
		<!-- Viewport clips the overflowing slides -->
		<div
			class="carousel-viewport overflow-hidden"
			role="region"
			aria-label="F1 Reels Carousel"
			onpointerdown={onPointerDown}
			onpointermove={onPointerMove}
			onpointerup={onPointerUp}
			onpointercancel={onPointerUp}
		>
			<!-- Track: total width = number of slides × slide-width -->
			<div
				class="carousel-track -mx-2 flex"
				style="transform: translateX({translateX}); transition: {isDragging
					? 'none'
					: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)'};"
			>
				{#each videos as video (video.id)}
					<!-- Each slide is exactly 1 / itemsPerPage of the viewport -->
					<div class="carousel-slide shrink-0 px-2" style="width: {slideWidthPct}%;">
						<div
							class="f1-reel-item group relative aspect-9/16 cursor-grab overflow-hidden bg-[#1a1a1a] select-none active:cursor-grabbing"
						>
							<div
								class="f1-reel-item-inner absolute inset-0 flex items-center justify-center bg-linear-to-br from-[#1a1a1a] to-[#2d1010]"
							>
								<enhanced:img
									src={video.image}
									alt="F1 Reel thumbnail"
									class="f1-reel-thumbnail pointer-events-none absolute inset-0 h-full w-full object-cover brightness-[0.5] saturate-50 transition-all duration-400 group-hover:scale-104 group-hover:brightness-[0.4] group-hover:saturate-80"
								/>

								<div
									class="f1-reel-overlay absolute inset-0 flex flex-col items-center justify-center gap-3 p-4"
								>
									<a
										href={video.link}
										target="_blank"
										rel="external"
										class="f1-reel-play flex size-12 items-center justify-center rounded-full border-2 border-vermillion bg-vermillion/20 text-base text-white no-underline transition-all duration-300 group-hover:scale-110 group-hover:bg-vermillion"
										aria-label="Play Instagram Reel"
									>
										▶
									</a>
									<div
										class="f1-reel-label text-center font-syne text-[0.6rem] font-bold tracking-[0.12em] text-white/60 uppercase"
									>
										Watch on Instagram
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Dot indicators – one dot per possible stop -->
	{#if maxIndex > 0}
		<div
			class="carousel-dots mt-8 flex items-center justify-center gap-2"
			role="tablist"
			aria-label="Carousel navigation"
		>
			{#each Array.from({ length: maxIndex + 1 }, (_, index) => index) as index (index)}
				<button
					role="tab"
					aria-selected={index === currentIndex}
					aria-label="Go to slide {index + 1}"
					onclick={() => goTo(index)}
					class="dot rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-vermillion {index ===
					currentIndex
						? 'h-1.5 w-6 bg-vermillion'
						: 'h-1.5 w-1.5 bg-white/25 hover:bg-white/50'}"
				></button>
			{/each}
		</div>
	{/if}
</section>

<style>
	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}

	.carousel-viewport {
		/* Allow vertical page scroll while we capture horizontal swipe */
		touch-action: pan-y;
		cursor: grab;
		user-select: none;
	}

	.carousel-viewport:active {
		cursor: grabbing;
	}

	.carousel-track {
		will-change: transform;
	}
</style>
