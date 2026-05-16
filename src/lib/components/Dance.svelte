<script lang="ts">
  import dance1 from '$lib/assets/dance1.jpg?enhanced&w=480;640;800;1024;1280;1440';
  import dance2 from '$lib/assets/dance2.jpg?enhanced&w=320;480;640;800;1024';
  import dance3 from '$lib/assets/dance3.jpg?enhanced&w=320;480;640;800;1024';
  import dance4 from '$lib/assets/dance4.jpg?enhanced&w=320;480;640;800;1024';
  import dance5 from '$lib/assets/dance5.jpg?enhanced&w=320;480;640;800;1024';
  import { reveal } from '$lib/actions/reveal';

  let visible = $state(false);
  let activeImage = $state<number | null>(null);
  let mouseX = $state(0);
  let mouseY = $state(0);

  const danceStyles = [
    'Jazz',
    'Contemporary',
    'Ballet',
    'Bollywood',
    'Hip Hop',
    'Social dancing',
    'Lyrical'
  ];

  const timeline = [
    {
      year: '2009–2018',
      desc: 'The Danceworx India — Specialized in Jazz, Contemporary, and Ballet.'
    },
    {
      year: '2012–2014',
      desc: 'Kingdom of Dreams — Jhumroo · ~100 shows as a Dancer at India’s first live entertainment destination.'
    },
    {
      year: '2015–2017',
      desc: 'Teaching Kids Ballet · 2 years — The Danceworx'
    },
    {
      year: '2017–2019',
      desc: 'Teaching Adults Jazz · 2 years — The Danceworx'
    }
  ];

  function handleMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX = x * 0.05;
    mouseY = y * 0.05;
  }

  function handleMouseLeave() {
    mouseX = 0;
    mouseY = 0;
  }
</script>

<section
  id="dance"
  use:reveal={(v) => (visible = v)}
  class="dance-section bg-canvas px-6 py-20 md:px-14 md:py-32"
>
  <div class="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
    <!-- Content -->
    <div class="flex flex-col">
      <p
        class="section-eyebrow mb-4 font-syne text-[0.65rem] font-bold tracking-[0.3em] text-ember uppercase transition-all duration-800 {visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-7 opacity-0'}"
      >
        Dance
      </p>
      <h2
        class="section-title text-clamp-title mb-6 font-syne leading-[1.1] font-extrabold tracking-tight transition-all delay-100 duration-800 {visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-7 opacity-0'}"
      >
        Trained Since<br /><em class="font-display font-normal text-ember not-italic">age 8</em>
      </h2>

      <div
        class="transition-all delay-200 duration-800 {visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-7 opacity-0'}"
      >
        <p class="section-body mb-8 text-[0.95rem] leading-[1.85] font-light text-slate">
          Dance isn't just something Himikaa does — it's how she moved into the world of
          storytelling. With 7 years of training, 20 years of dancing and professional performance, her
          background in movement informs every role she takes on screen.
        </p>

        <!-- Styles Chips -->
        <div class="dance-styles mb-10 flex flex-wrap gap-2">
          {#each danceStyles as style (style)}
            <span
              class="bg-charcoal px-4 py-2 font-syne text-[0.62rem] font-bold tracking-wider text-goldenrod uppercase transition-all duration-300 hover:bg-lagoon hover:text-white"
            >
              {style}
            </span>
          {/each}
        </div>
      </div>

      <!-- Timeline -->
      <div
        class="dance-timeline flex flex-col transition-all delay-300 duration-800 {visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-7 opacity-0'}"
      >
        {#each timeline as item (item.year + item.desc)}
          <div class="timeline-item flex gap-6 border-b border-linen py-5 last:border-0 md:gap-10">
            <div
              class="timeline-year min-w-20 font-syne text-[0.7rem] font-extrabold tracking-wider text-lagoon"
            >
              {item.year}
            </div>
            <div class="timeline-desc text-[0.88rem] leading-relaxed text-slate">
              {item.desc}
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Images Group (Interactive & Parallax) -->
    
    <div
      class="dance-images relative min-h-75 w-full transition-all duration-800 {visible
        ? 'translate-y-0 opacity-100'
        : 'translate-y-7 opacity-0'}"
      onmousemove={handleMouseMove}
      onmouseleave={handleMouseLeave}
      role="group"
    >
      <!-- Peeking Image 1 (Top Left) -->
      <div
        role="button"
        tabindex="0"
        class="absolute -top-1/4 -left-4 md:-top-12 md:-left-8 w-[40%] md:w-[35%] border-4 border-canvas shadow-lg transition-all duration-500 ease-out cursor-pointer {activeImage === 3 ? 'z-50 scale-105 shadow-2xl' : 'z-0 hover:scale-[1.02]'}"
        style="transform: translate3d({mouseX * -1.5}px, {mouseY * -1.5}px, 0);"
        onclick={() => activeImage = activeImage === 3 ? null : 3}
        onkeydown={(e) => e.key === 'Enter' && (activeImage = 3)}
        onmouseenter={() => activeImage = 3}
        onmouseleave={() => activeImage = null}
      >
        <enhanced:img class="w-full h-auto object-cover" src={dance2} alt="Dance pose peeking left" sizes="(min-width: 768px) 20vw, 40vw" />
      </div>

      <!-- Peeking Image 2 (Top Right) -->
      <div
        role="button"
        tabindex="0"
        class="absolute -top-6 -right-4 md:-top-10 md:-right-8 w-[38%] md:w-[32%] border-4 border-canvas shadow-lg transition-all duration-500 ease-out cursor-pointer {activeImage === 4 ? 'z-50 scale-105 shadow-2xl' : 'z-0 hover:scale-[1.02]'}"
        style="transform: translate3d({mouseX * 2}px, {mouseY * 2}px, 0);"
        onclick={() => activeImage = activeImage === 4 ? null : 4}
        onkeydown={(e) => e.key === 'Enter' && (activeImage = 4)}
        onmouseenter={() => activeImage = 4}
        onmouseleave={() => activeImage = null}
      >
        <enhanced:img class="w-full h-auto object-cover" src={dance4} alt="Dance pose peeking right" sizes="(min-width: 768px) 20vw, 40vw" />
      </div>

      <!-- Main Center Image -->
      <div
        role="button"
        tabindex="0"
        class="relative left-[20%] w-[45%] transition-all duration-500 ease-out cursor-pointer {activeImage === 1 ? 'z-50 scale-[1.02] shadow-2xl' : 'z-40 shadow-xl'}"
        style="transform: translate3d({mouseX * 0.5}px, {mouseY * 0.5}px, 0);"
        onclick={() => activeImage = activeImage === 1 ? null : 1}
        onkeydown={(e) => e.key === 'Enter' && (activeImage = 1)}
        onmouseenter={() => activeImage = 1}
        onmouseleave={() => activeImage = null}
      >
        <enhanced:img class="w-full h-auto" src={dance1} alt="Main dance pose" sizes="(min-width: 768px) 40vw, 85vw" />
      </div>

      <!-- Secondary Image (Bottom Right) -->
      <div
        role="button"
        tabindex="0"
        class="absolute -right-2 bottom-[-10%] md:right-0 md:bottom-[-15%] w-[55%] border-4 md:border-6 border-canvas shadow-xl transition-all duration-500 ease-out cursor-pointer {activeImage === 2 ? 'z-50 scale-105 shadow-2xl' : 'z-20 hover:scale-[1.02]'}"
        style="transform: translate3d({mouseX * 1.2}px, {mouseY * 1.2}px, 0);"
        onclick={() => activeImage = activeImage === 2 ? null : 2}
        onkeydown={(e) => e.key === 'Enter' && (activeImage = 2)}
        onmouseenter={() => activeImage = 2}
        onmouseleave={() => activeImage = null}
      >
        <enhanced:img class="w-full h-auto" src={dance3} alt="Dance performance" sizes="(min-width: 768px) 30vw, 55vw" />
      </div>

	  <div
        role="button"
        tabindex="0"
        class="absolute -left-2 bottom-[-10%] md:left-0 md:bottom-[-15%] w-[25%] border-4 md:border-6 border-canvas shadow-xl transition-all duration-500 ease-out cursor-pointer {activeImage === 5 ? 'z-50 scale-105 shadow-2xl' : 'z-20 hover:scale-[1.02]'}"
        style="transform: translate3d({mouseX * 1.5}px, {mouseY * 1.5}px, 0);"
        onclick={() => activeImage = activeImage === 5 ? null : 5}
        onkeydown={(e) => e.key === 'Enter' && (activeImage = 5)}
        onmouseenter={() => activeImage = 5}
        onmouseleave={() => activeImage = null}
      >
        <enhanced:img class="w-full h-auto" src={dance5} alt="Dance performance" sizes="(min-width: 768px) 30vw, 55vw" />
      </div>

      <!-- Floating Badge -->
      <!-- <span
        class="dance-badge pointer-events-none absolute top-[78%] -left-4 z-30 bg-lagoon px-2 py-1 font-syne text-[0.5rem] font-extrabold text-white uppercase shadow-lg transition-transform duration-500 ease-out md:px-4 md:py-2 md:text-[0.58rem] md:tracking-[0.15em]"
        style="transform: translate3d({mouseX * 2.5}px, {mouseY * 2.5}px, 0) rotate(2deg);"
      >
        ~100 Stage Shows
      </span> -->
    </div>

	
  </div>
</section>

<style>
  .text-clamp-title {
    font-size: clamp(2rem, 3.5vw, 3.2rem);
  }
</style>