<script lang="ts">
	import f1vids1 from '$lib/assets/f1vids1.jpg?enhanced';
	import f1vids2 from '$lib/assets/f1vids2.jpg?enhanced';
	import f1vids3 from '$lib/assets/f1vids3.jpg?enhanced';
	import f1vids4 from '$lib/assets/f1vids4.jpg?enhanced';
	import { reveal } from '$lib/actions/reveal';

	let visible = $state(false);

	const videos = [
		{
			id: 1,
			image: f1vids1,
			link: 'https://www.instagram.com/himikatalksf1/reel/DN2TYed0kQR/',
			delay: '0'
		},
		{
			id: 2,
			image: f1vids2,
			link: 'https://www.instagram.com/himikatalksf1/reel/DVaYq27CQ-V/',
			delay: 'delay-100'
		},
		{
			id: 3,
			image: f1vids3,
			link: 'https://www.instagram.com/himika_bose/reel/DV-dPkekfVp/',
			delay: 'delay-200'
		},
		{
			id: 4,
			image: f1vids4,
			link: 'https://www.instagram.com/himika_bose/reel/DRMB2NkkU5r/',
			delay: 'delay-300'
		},
		{
			id: 5,
			image: f1vids2,
			link: 'https://www.instagram.com/himikatalksf1/reel/DVaYq27CQ-V/',
			delay: 'delay-400'
		},
	];
</script>

<section
	id="f1-videos"
	use:reveal={(v) => (visible = v)}
	class="f1-videos bg-[#0f0f0f] px-6 pt-20 pb-28 md:px-14"
>
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

	<div class="f1-reels-grid grid grid-cols-2 gap-4 lg:grid-cols-5">
		{#each videos as video (video.id)}
			<div
				class="f1-reel-item group relative aspect-9/16 overflow-hidden bg-[#1a1a1a] transition-all duration-800 {video.delay} {visible
					? 'translate-y-0 opacity-100'
					: 'translate-y-7 opacity-0'}"
			>
				<div
					class="f1-reel-item-inner absolute inset-0 flex items-center justify-center bg-linear-to-br from-[#1a1a1a] to-[#2d1010]"
				>
					<enhanced:img
						src={video.image}
						alt="F1 Reel thumbnail"
						class="f1-reel-thumbnail absolute inset-0 h-full w-full object-cover brightness-[0.5] saturate-50 transition-all duration-400 group-hover:scale-104 group-hover:brightness-[0.4] group-hover:saturate-80"
					/>

					<div
						class="f1-reel-overlay absolute inset-0 flex flex-col items-center justify-center gap-3 p-4"
					>
						<a
							href={video.link}
							target="_blank"
							rel="external"
							class="f1-reel-play flex h-11 w-11 items-center justify-center rounded-full border-2 border-vermillion bg-vermillion/20 text-base text-white no-underline transition-all duration-300 group-hover:scale-110 group-hover:bg-vermillion"
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
		{/each}
	</div>
</section>

<style>
	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}
</style>
