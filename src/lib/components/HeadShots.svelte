<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// Images
	import look1 from '$lib/assets/headshots/img2.jpg?enhanced&w=800;1024';
	import look2 from '$lib/assets/headshots/img3.jpg?enhanced&w=600;800';
	import look3 from '$lib/assets/headshots/img4.jpg?enhanced&w=600;800';
	import look4 from '$lib/assets/headshots/img5.jpeg?enhanced&w=600;800';
	import look6 from '$lib/assets/headshots/img1.jpg?enhanced&w=800;1024';
	import look7 from '$lib/assets/headshots/img7.jpg?enhanced&w=600;800';
	import look8 from '$lib/assets/headshots/img8.jpg?enhanced&w=600;800';

	let activeLook = $state('INTRO REEL');
	let progress = $state(0);

	$effect(() => {
		gsap.registerPlugin(ScrollTrigger);

		let mm = gsap.matchMedia();

		mm.add(
			{
				isDesktop: '(min-width: 768px)',
				isMobile: '(max-width: 767px)'
			},
			(context) => {
				const isDesktop = context.conditions?.isDesktop;

				const masterTimeline = gsap.timeline({
					scrollTrigger: {
						trigger: '#headshots-reel',
						start: 'top top',
						end: 'bottom bottom',
						scrub: 1,
						pin: '.sticky-viewport',
						pinSpacing: false,
						invalidateOnRefresh: true,
						fastScrollEnd: true,
						onUpdate: (self) => {
							progress = Math.round(self.progress * 100);
						}
					}
				});

				// Intro
				masterTimeline.to('#intro-card', {
					opacity: 0,
					y: -50,
					scale: 0.95,
					duration: 2,
					ease: 'power2.out',
					onStart: () => {
						activeLook = 'INTRO REEL';
					}
				});

				// Look 1
				masterTimeline.fromTo(
					'#photo-1',
					{ y: '120vh', scale: 0.7, opacity: 0, autoAlpha: 0 },
					{
						y: '0vh',
						scale: 1,
						opacity: 1,
						autoAlpha: 1,
						duration: 4,
						ease: 'power2.out',
						onStart: () => {
							activeLook = 'LOOK 01 // DRAMATIC';
							gsap.to('#ambient-glow', { background: 'rgba(244, 196, 48, 0.08)', duration: 0.5 });
						}
					}
				);
				masterTimeline.to('#photo-1', { scale: 1.1, duration: 2, ease: 'none' });
				masterTimeline.to('#photo-1', {
					scale: 1.5,
					opacity: 0,
					autoAlpha: 0,
					duration: 3,
					ease: 'power2.in'
				});

				// Looks 2, 3, 4 (Collage)
				if (isDesktop) {
					masterTimeline.set(['#photo-2', '#photo-3', '#photo-4'], {
						y: '110vh',
						opacity: 0,
						autoAlpha: 1
					});
					masterTimeline.to('#photo-2', {
						y: '0vh',
						opacity: 1,
						duration: 3.5,
						ease: 'power2.out',
						onStart: () => {
							activeLook = 'LOOK 02 // COLLAGE';
							gsap.to('#ambient-glow', { background: 'rgba(255, 255, 255, 0.05)', duration: 0.5 });
						}
					});
					masterTimeline.to(
						'#photo-3',
						{ y: '0vh', opacity: 1, duration: 3.5, ease: 'power2.out' },
						'-=3'
					);
					masterTimeline.to(
						'#photo-4',
						{ y: '0vh', opacity: 1, duration: 3.5, ease: 'power2.out' },
						'-=1'
					);
					masterTimeline.to(['#photo-2', '#photo-3', '#photo-4'], {
						y: '-10vh',
						duration: 2,
						ease: 'none'
					});
					masterTimeline.to(['#photo-2', '#photo-3', '#photo-4'], {
						opacity: 0,
						y: '-50vh',
						duration: 3,
						ease: 'power2.in',
						autoAlpha: 0
					});
				} else {
					// Mobile sequential stacked card deck peeling
					masterTimeline.set(['#photo-2', '#photo-3', '#photo-4'], {
						y: '110vh',
						x: '0vw',
						opacity: 0,
						autoAlpha: 1
					});
					// Photo 2 enters
					masterTimeline.to('#photo-2', {
						y: '0vh',
						opacity: 1,
						duration: 3.5,
						ease: 'power2.out',
						onStart: () => {
							activeLook = 'LOOK 02A // SINCERE';
							gsap.to('#ambient-glow', { background: 'rgba(255, 255, 255, 0.05)', duration: 0.5 });
						}
					});
					masterTimeline.to('#photo-2', { y: '0vh', duration: 1.5 }); // Hold to view

					// Photo 3 enters as Photo 2 slides out left
					masterTimeline.to('#photo-3', {
						y: '0vh',
						opacity: 1,
						duration: 3.5,
						ease: 'power2.out',
						onStart: () => {
							activeLook = 'LOOK 02B // THOUGHTFUL';
						}
					});
					masterTimeline.to(
						'#photo-2',
						{
							x: '-100vw',
							rotation: -15,
							opacity: 0,
							duration: 3.5,
							ease: 'power2.inOut'
						},
						'-=3.5'
					);
					masterTimeline.to('#photo-3', { y: '0vh', duration: 1.5 }); // Hold to view

					// Photo 4 enters as Photo 3 slides out right
					masterTimeline.to('#photo-4', {
						y: '0vh',
						opacity: 1,
						duration: 3.5,
						ease: 'power2.out',
						onStart: () => {
							activeLook = 'LOOK 02C // RAW';
						}
					});
					masterTimeline.to(
						'#photo-3',
						{
							x: '100vw',
							rotation: 15,
							opacity: 0,
							duration: 3.5,
							ease: 'power2.inOut'
						},
						'-=3.5'
					);
					masterTimeline.to('#photo-4', { y: '0vh', duration: 1.5 }); // Hold to view

					// Photo 4 slides out
					masterTimeline.to('#photo-4', {
						opacity: 0,
						y: '-50vh',
						duration: 3.5,
						ease: 'power2.in',
						autoAlpha: 0
					});
				}

				// Look 3 & 4 (Split Slider)
				masterTimeline.set('#photo-split-container', { opacity: 1, autoAlpha: 1 });
				masterTimeline.fromTo(
					'#photo-7',
					{ x: '-80vw', opacity: 0 },
					{
						x: '0vw',
						opacity: 1,
						duration: 4.5,
						ease: 'power3.out',
						onStart: () => {
							activeLook = 'LOOKS 03 & 04 // FULL SPECTRUM';
						}
					}
				);
				masterTimeline.fromTo(
					'#photo-8',
					{ x: '80vw', opacity: 0 },
					{ x: '0vw', opacity: 1, duration: 4.5, ease: 'power3.out' },
					'-=4.5'
				);
				masterTimeline.to(['#photo-7', '#photo-8'], { scale: 1.05, duration: 3, ease: 'none' });
				masterTimeline.to('#photo-split-container', {
					opacity: 0,
					y: -100,
					duration: 4,
					ease: 'power2.in'
				});

				// Look 5 (Spotlight Reveal)
				masterTimeline.set('#photo-6-container', { opacity: 1, autoAlpha: 1 });
				masterTimeline.fromTo(
					'#photo-6-img-container',
					{ clipPath: 'circle(0% at 50% 50%)' },
					{
						clipPath: 'circle(75% at 50% 50%)',
						duration: 5,
						ease: 'power1.inOut',
						onStart: () => {
							activeLook = 'LOOK 05 // SPOTLIGHT REVEAL';
						}
					}
				);
				masterTimeline.fromTo(
					'#photo-6-label',
					{ opacity: 0, scale: 0.9, y: 50 },
					{ opacity: 1, scale: 1, y: 0, duration: 2.5, ease: 'power2.out' },
					'-=3'
				);
				masterTimeline.to('#photo-6-img-container', {
					clipPath: 'circle(0% at 50% 50%)',
					duration: 4,
					ease: 'power2.in'
				});
				masterTimeline.to('#photo-6-label', { opacity: 0, duration: 2 }, '-=3');
				masterTimeline.to('#photo-6-container', {
					opacity: 0,
					autoAlpha: 0,
					duration: 1,
					onComplete: () => {
						activeLook = 'REEL COMPLETED';
					}
				});
			}
		);

		return () => {
			mm.revert();
		};
	});
</script>

<section id="headshots-reel" class="relative z-20 h-[500vh] w-full bg-charcoal">
	<div
		class="sticky-viewport flex h-screen w-full flex-col justify-between overflow-hidden bg-charcoal"
	>
		<!-- Dynamic Background Ambient Effect -->
		<div
			class="pointer-events-none absolute inset-0 z-0 bg-linear-to-b from-black/60 via-transparent to-black/80"
		></div>
		<div
			id="ambient-glow"
			class="pointer-events-none absolute top-1/2 left-1/2 h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-goldenrod/5 blur-[120px] transition-all duration-500"
		></div>

		<!-- Top Header & Scrub Progress Indicator -->
		<div
			class="z-20 flex w-full flex-col items-start justify-between gap-4 px-6 pt-24 pb-8 sm:flex-row sm:items-center md:px-12"
		>
			<div>
				<!-- <span class="mb-1 block text-[0.65rem] font-bold tracking-[0.3em] text-goldenrod uppercase"
					>Cinematic Timeline</span
				> -->
				<h2
					class="text-clamp-title font-display leading-[1.1] font-normal tracking-tight text-vermillion not-italic"
				>
					Headshots
				</h2>
			</div>
			<div class="flex w-full items-center gap-4 sm:w-auto">
				<!-- <span class="font-mono text-[10px] tracking-widest text-neutral-400 uppercase"
					>Progress</span
				> -->
				<div class="relative h-0.5 w-32 overflow-hidden rounded-full bg-neutral-800 md:w-48">
					<div
						class="absolute top-0 left-0 h-full bg-linear-to-r from-goldenrod to-goldenrod/60 transition-all duration-100"
						style="width: {progress}%"
					></div>
				</div>
			</div>
		</div>

		<!-- Interactive Screen Showcase Canvas -->
		<div
			class="relative z-10 flex w-full max-w-7xl flex-1 items-center justify-center px-6 md:mx-auto md:px-12"
		>
			<!-- INTRO SLIDE -->
			<div id="intro-card" class="absolute max-w-2xl px-4 text-center">
				<h3
					class="font-syne text-3xl font-extrabold tracking-wide text-white uppercase md:text-5xl"
				>
					The Faces of Character
				</h3>
				<p class="mt-4 text-sm leading-relaxed text-neutral-400 md:text-base">
					Navigate Himika Bose's theatrical portfolios and emotional textures, captured through a
					cinematic lens.
				</p>
			</div>

			<!-- PHOTO 1: Single, Scale & Fade -->
			<div
				id="photo-1"
				class="invisible absolute flex h-fit max-h-[70vh] w-[85vw] max-w-95 cursor-pointer flex-col justify-end overflow-hidden rounded-xl border border-white/10 opacity-0 shadow-2xl shadow-black/80"
			>
				<enhanced:img
					src={look1}
					alt="Dramatic Headshot"
					class="h-full w-full object-contain transition-transform duration-700"
				/>
				<div
					class="absolute inset-0 z-10 bg-linear-to-t from-black/90 via-black/20 to-transparent"
				></div>
				<div class="absolute right-0 bottom-0 left-0 z-20 p-6">
					<span class="mb-1 block font-mono text-[10px] tracking-widest text-goldenrod uppercase"
						>Look 01 // Dramatic</span
					>
					<h4 class="font-syne text-lg font-bold tracking-wider text-white uppercase md:text-xl">
						The Presence
					</h4>
					<p class="mt-1 text-[10px] tracking-wider text-neutral-400 uppercase">
						Intense and high-contrast emotional projection.
					</p>
				</div>
			</div>

			<!-- PHOTO 2, 3, 4: Collage (LOOK 02) -->
			<div
				class="pointer-events-none absolute inset-0 flex items-center justify-center p-4 md:p-12"
			>
				<div
					class="relative flex h-full w-full items-center justify-center md:grid md:max-w-5xl md:grid-cols-3 md:items-start md:gap-8 md:pt-12"
				>
					<div
						id="photo-2"
						class="pointer-events-auto invisible absolute z-10 flex h-fit w-[75vw] max-w-[280px] cursor-pointer items-center justify-center opacity-0 md:relative md:inset-auto md:z-auto md:mt-0 md:w-full md:max-w-none"
					>
						<div
							class="relative w-full -rotate-3 overflow-hidden rounded-lg border border-white/5 shadow-xl shadow-black/60 transition-transform duration-300 hover:scale-[1.02] md:rotate-0"
						>
							<enhanced:img src={look2} alt="Look 2" class="h-auto w-full object-contain" />
							<div class="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-transparent"></div>
							<div class="absolute bottom-0 z-20 p-4">
								<span class="block font-mono text-[8px] tracking-widest text-goldenrod uppercase"
									>Look 02A // Sincere</span
								>
							</div>
						</div>
					</div>

					<div
						id="photo-3"
						class="pointer-events-auto invisible absolute z-20 flex h-fit w-[75vw] max-w-[280px] cursor-pointer items-center justify-center opacity-0 md:relative md:inset-auto md:z-auto md:mt-16 md:w-full md:max-w-none"
					>
						<div
							class="relative w-full rotate-2 overflow-hidden rounded-lg border border-white/5 shadow-xl shadow-black/60 transition-transform duration-300 hover:scale-[1.02] md:rotate-0"
						>
							<enhanced:img src={look3} alt="Look 3" class="h-auto w-full object-contain" />
							<div class="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-transparent"></div>
							<div class="absolute bottom-0 z-20 p-4">
								<span class="block font-mono text-[8px] tracking-widest text-goldenrod uppercase"
									>Look 02B // Thoughtful</span
								>
							</div>
						</div>
					</div>

					<div
						id="photo-4"
						class="pointer-events-auto invisible absolute z-30 flex h-fit w-[75vw] max-w-[280px] cursor-pointer items-center justify-center opacity-0 md:relative md:inset-auto md:z-auto md:mt-32 md:w-full md:max-w-none"
					>
						<div
							class="relative w-full -rotate-1 overflow-hidden rounded-lg border border-white/5 shadow-xl shadow-black/60 transition-transform duration-300 hover:scale-[1.02] md:rotate-0"
						>
							<enhanced:img src={look4} alt="Look 4" class="h-auto w-full object-contain" />
							<div class="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-transparent"></div>
							<div class="absolute bottom-0 z-20 p-4">
								<span class="block font-mono text-[8px] tracking-widest text-goldenrod uppercase"
									>Look 02C // Raw</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- PHOTO 7 & 8: Split Slider (LOOKS 03 & 04) -->
			<div
				id="photo-split-container"
				class="invisible absolute flex h-full w-full flex-col items-center justify-center gap-6 opacity-0 md:flex-row"
			>
				<div
					id="photo-7"
					class="relative h-fit max-h-[60vh] w-[80vw] cursor-pointer overflow-hidden rounded-xl border border-white/5 shadow-xl shadow-black/60 md:w-[320px]"
				>
					<enhanced:img src={look7} alt="Look 7" class="h-full w-full object-contain" />
					<div class="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-transparent"></div>
					<div class="absolute bottom-0 z-20 p-4">
						<span class="block font-mono text-[10px] tracking-widest text-goldenrod uppercase"
							>Look 03 // Intense</span
						>
					</div>
				</div>

				<div
					id="photo-8"
					class="relative h-fit max-h-[60vh] w-[80vw] cursor-pointer overflow-hidden rounded-xl border border-white/5 shadow-xl shadow-black/60 md:w-[320px]"
				>
					<enhanced:img src={look8} alt="Look 8" class="h-full w-full object-contain" />
					<div class="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-transparent"></div>
					<div class="absolute bottom-0 z-20 p-4">
						<span class="block font-mono text-[10px] tracking-widest text-goldenrod uppercase"
							>Look 04 // Enigmatic</span
						>
					</div>
				</div>
			</div>

			<!-- PHOTO 6: Spotlight Reveal (LOOK 05) -->
			<div
				id="photo-6-container"
				class="invisible absolute flex h-full w-full items-center justify-center opacity-0"
			>
				<div
					id="photo-6-label"
					class="pointer-events-none absolute z-10 -translate-y-24 text-center select-none"
				>
					<span class="mb-2 block font-mono text-[10px] tracking-[0.4em] text-goldenrod uppercase"
						>Look 05 // Spotlight</span
					>
					<h4 class="font-syne text-3xl font-black tracking-wider text-white uppercase md:text-5xl">
						Himika Bose
					</h4>
					<div class="mx-auto my-3 h-px w-32 bg-goldenrod/30"></div>
					<p class="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
						The Full Spectrum
					</p>
				</div>
				<div
					id="photo-6-mask-wrapper"
					class="relative h-fit max-h-[80vh] w-[90vw] overflow-hidden rounded-2xl border border-goldenrod/30 shadow-2xl md:w-150"
				>
					<div id="photo-6-img-container" class="relative overflow-hidden">
						<enhanced:img src={look6} alt="Spotlight" class="h-full w-full object-contain" />
					</div>
					<div class="absolute inset-0 z-15 bg-linear-to-t from-neutral-950 via-transparent"></div>
				</div>
			</div>
		</div>

		<!-- Bottom Scroll Instructions -->
		<div
			class="z-20 flex w-full items-center justify-center border-t border-white/5 px-6 py-8 font-mono text-[10px] tracking-widest text-neutral-500 uppercase md:px-12"
		>
			<!-- <div>Scroll down to animate reel</div> -->
			<div id="active-look-label">CURRENT: {activeLook}</div>
			<!-- <div>GSAP Driven Scroller</div> -->
		</div>
	</div>
</section>

<style>
	#headshots-reel {
		background-color: var(--color-charcoal);
	}

	.sticky-viewport {
		background-color: var(--color-charcoal);
	}
	.text-clamp-title {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
	}
</style>
