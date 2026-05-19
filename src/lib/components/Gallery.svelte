<script lang="ts">
	import g1 from '$lib/assets/gallery1.jpg?enhanced&w=320;480;640;800;1024;1280;1440';
	import g2 from '$lib/assets/gallery2.jpg?enhanced&w=320;480;640;800;1024;1280;1440';
	import g3 from '$lib/assets/gallery3.jpg?enhanced&w=320;480;640;800;1024;1280;1440';
	import g4 from '$lib/assets/gallery4.jpg?enhanced&w=320;480;640;800;1024;1280;1440';
	import g5 from '$lib/assets/gallery5.jpg?enhanced&w=320;480;640;800;1024;1280;1440';
	import g6 from '$lib/assets/gallery6.jpg?enhanced&w=320;480;640;800;1024;1280;1440';
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const images = [
		{ id: 1, src: g1, alt: 'Himika Bose gallery image 1' },
		{ id: 2, src: g2, alt: 'Himika Bose gallery image 2' },
		{ id: 3, src: g3, alt: 'Himika Bose gallery image 3' },
		{ id: 4, src: g4, alt: 'Himika Bose gallery image 4' },
		{ id: 5, src: g5, alt: 'Himika Bose gallery image 5' },
		{ id: 6, src: g6, alt: 'Himika Bose gallery image 6' }
	];

	// Duplicate images for a seamless infinite loop
	const displayImages = [
		...images,
		...images.map((img) => ({
			...img,
			id: img.id + images.length
		}))
	];
</script>

<section
	id="gallery"
	use:reveal={(v) => (visible = v)}
	class="gallery overflow-hidden bg-white px-6 py-16 md:px-14 md:py-24"
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

	<!-- Marquee Container -->
	<div
		class="gallery-marquee-wrapper relative w-full overflow-hidden transition-all delay-200 duration-800 {visible
			? 'translate-y-0 opacity-100'
			: 'translate-y-7 opacity-0'}"
	>
		<div
			class="gallery-marquee-inner flex w-fit animate-marquee gap-4 hover:[animation-play-state:paused]"
		>
			{#each displayImages as img (img.id)}
				<div class="gallery-img-item shrink-0">
					<enhanced:img
						src={img.src}
						alt={img.alt}
						sizes="(min-width: 768px) 400px, 260px"
						class="gallery-img h-65 w-auto object-cover saturate-[0.82] transition-all duration-400 hover:scale-[1.02] hover:saturate-[1.15] md:h-100"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}
</style>
