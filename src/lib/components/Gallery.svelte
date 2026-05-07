<script lang="ts">
	import g1 from '$lib/assets/gallery1.jpg?enhanced&w=320;480;640;800;1024;1280;1440';
	import g2 from '$lib/assets/gallery2.jpg?enhanced&w=320;480;640;800;1024;1280;1440';
	import g3 from '$lib/assets/gallery3.jpg?enhanced&w=320;480;640;800;1024;1280;1440';
	import g4 from '$lib/assets/gallery4.jpg?enhanced&w=320;480;640;800;1024;1280;1440';
	import g5 from '$lib/assets/gallery5.jpg?enhanced&w=320;480;640;800;1024;1280;1440';
	import g6 from '$lib/assets/gallery6.jpg?enhanced&w=320;480;640;800;1024;1280;1440';
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);
	let scrollContainer: HTMLDivElement;
	let isDown = $state(false);
	let startX: number;
	let scrollLeft: number;

	const images = [
		{ id: 1, src: g1, alt: 'Himika Bose gallery image 1' },
		{ id: 2, src: g2, alt: 'Himika Bose gallery image 2' },
		{ id: 3, src: g3, alt: 'Himika Bose gallery image 3' },
		{ id: 4, src: g4, alt: 'Himika Bose gallery image 4' },
		{ id: 5, src: g5, alt: 'Himika Bose gallery image 5' },
		{ id: 6, src: g6, alt: 'Himika Bose gallery image 6' }
	];

	let containerOffset: number;

	function handleMouseDown(e: MouseEvent) {
		isDown = true;
		containerOffset = scrollContainer.offsetLeft;
		startX = e.pageX - containerOffset;
		scrollLeft = scrollContainer.scrollLeft;
	}

	function handleMouseLeave() {
		isDown = false;
	}

	function handleMouseUp() {
		isDown = false;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - containerOffset;
		const walk = (x - startX) * 1.5;
		scrollContainer.scrollLeft = scrollLeft - walk;
	}
</script>

<section
	id="gallery"
	use:reveal={(v) => (visible = v)}
	class="gallery bg-white px-6 py-16 md:px-14 md:py-24"
>
	<div class="gallery-header mb-12">
		<p
			class="section-eyebrow mb-4 font-syne text-[0.65rem] font-bold tracking-[0.3em] text-ember uppercase transition-all duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			Gallery
		</p>
		<h2
			class="section-title text-clamp-title font-syne leading-[1.1] font-extrabold tracking-tight transition-all delay-100 duration-800 {visible
				? 'translate-y-0 opacity-100'
				: 'translate-y-7 opacity-0'}"
		>
			Behind the <em class="font-display font-normal text-ember not-italic">Frame</em>
		</h2>
	</div>

	<div
		bind:this={scrollContainer}
		class="gallery-scroll no-scrollbar flex cursor-grab gap-3 overflow-x-auto pb-2 transition-all delay-200 duration-800 active:cursor-grabbing {visible
			? 'translate-y-0 opacity-100'
			: 'translate-y-7 opacity-0'}"
		role="slider"
		aria-valuenow="0"
		aria-label="Image gallery"
		onmousedown={handleMouseDown}
		onmouseleave={handleMouseLeave}
		onmouseup={handleMouseUp}
		onmousemove={handleMouseMove}
		tabindex="0"
	>
		{#each images as img (img.id)}
			<enhanced:img
				src={img.src}
				alt={img.alt}
				sizes="(min-width: 768px) 400px, 260px"
				class="gallery-img h-65 w-auto max-w-none shrink-0 object-cover saturate-[0.82] transition-all duration-400 hover:scale-[1.02] hover:saturate-[1.15] md:h-100"
			/>
		{/each}
	</div>
</section>

<style>
	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}

	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
