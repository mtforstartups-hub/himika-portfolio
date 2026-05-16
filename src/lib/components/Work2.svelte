<script>
  import { Play, Sparkles, MoveRight } from 'lucide-svelte';

  // --- MOCK DATA ---
  const WORKS_DATA = [
    {
      id: 1,
      title: "NEON HEARTS",
      category: "Film",
      role: "Lead • Mia",
      director: "Sofia Coppola",
      year: "2025",
      color: "#FF00CC", // Hot Pink
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
      size: "normal", // spans 2 columns
    },
    {
      id: 2,
      title: "ECLIPSE",
      category: "TV",
      role: "Series Regular",
      director: "HBO Max",
      year: "2024",
      color: "#00E5FF", // Electric Blue
      image: "https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?q=80&w=1974&auto=format&fit=crop",
      size: "normal",
    },
    {
      id: 3,
      title: "VERSACE",
      category: "Commercial",
      role: "Feature",
      director: "Gordon von Steiner",
      year: "2024",
      color: "#CCFF00", // Acid Green
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop",
      size: "normal",
    },
    {
      id: 4,
      title: "SILENT ECHO",
      category: "Short",
      role: "Lead • Sarah",
      director: "A24 Shorts",
      year: "2023",
      color: "#FF5500", // Bright Orange
      image: "https://images.unsplash.com/photo-1621360811013-c76831f1628c?q=80&w=2070&auto=format&fit=crop",
      size: "normal",
    },
    {
      id: 5,
      title: "MIDNIGHT SUN",
      category: "Film",
      role: "Supporting",
      director: "Denis Villeneuve",
      year: "2023",
      color: "#B200FF", // Neon Purple
      image: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=2070&auto=format&fit=crop",
      size: "normal", // spans 2 rows
    },
    {
      id: 6,
      title: "MIDNIGHT SUN",
      category: "Film",
      role: "Supporting",
      director: "Denis Villeneuve",
      year: "2023",
      color: "#B200FF", // Neon Purple
      image: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=2070&auto=format&fit=crop",
      size: "tall", // spans 2 rows
    },
  ];

  const CATEGORIES = ["All", "Film", "TV", "Commercial", "Short"];

  // Svelte 5 Runes for State Management
  let activeFilter = $state("All");
  let hoveredProject = $state(null);
  let containerRef = $state();

  // Derived state for the filtered works
  let filteredWorks = $derived(
    WORKS_DATA.filter((work) => activeFilter === "All" || work.category === activeFilter)
  );
</script>

<div class="min-h-screen bg-linen text-charcoal overflow-x-hidden selection:bg-[#CCFF00] selection:text-black">

  <!-- --- BACKGROUND DYNAMIC GLOW --- -->
  <div 
    class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-200 rounded-full blur-[150px] opacity-20 pointer-events-none transition-colors duration-700 ease-in-out mix-blend-screen"
    style="
      background-color: {hoveredProject ? hoveredProject.color : '#333'};
      transform: {hoveredProject ? 'translate(-50%, -50%) scale(1.1)' : 'translate(-50%, -50%) scale(1)'};
    "
  ></div>

  <section class="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
    
    <!-- --- HEADER SECTION --- -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
      <div class="relative group cursor-default">
        <h2 class="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-none">
          <span class="block text-transparent stroke-text" style="-webkit-text-stroke: 1px rgba(255,255,255,0.5);">The</span>
          <span class="block text-[#CCFF00] group-hover:text-white transition-colors duration-300">Archive</span>
        </h2>
        <div class="absolute -top-6 -right-12 text-[#FF00CC] animate-spin-slow">
          <Sparkles size={48} strokeWidth={1} />
        </div>
      </div>
      
      <p class="max-w-md text-neutral-400 text-lg md:text-xl font-light">
        A curated selection of cinematic explorations, television appearances, and high-impact commercial collaborations.
      </p>
    </div>

    <!-- --- FILTER NAVIGATION --- -->
    <div class="flex overflow-x-auto no-scrollbar gap-3 mb-12 pb-4">
      {#each CATEGORIES as cat (cat)}
        <button
          onclick={() => activeFilter = cat}
          class="px-3.5 py-1.5 text-[0.6rem] tracking-[0.15em] font-bold uppercase whitespace-nowrap transition-all duration-300 border {
            activeFilter === cat
              ? 'bg-ember text-white border-ember shadow-[0_0_20px_rgba(255,255,255,0.3)]'
              : 'bg-transparent text-ember border-ember hover:border-lagoon hover:text-lagoon'
          }"
        >
          {cat}
        </button>
      {/each}
    </div>

    <!-- --- DYNAMIC MASONRY GRID --- -->
    <div bind:this={containerRef} class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
      {#each filteredWorks as work, index (work.id)}
        <!-- Determine grid span based on the 'size' property -->
        {@const spanClass = 
          work.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
          work.size === 'tall' ? 'md:col-span-1 md:row-span-2' : 
          'md:col-span-1 md:row-span-1'}
        
        <!-- Alternating slight rotations -->
        {@const rotationClass = index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'}

        <div
          role="button"
          tabindex="0"
          onmouseenter={() => hoveredProject = work}
          onmouseleave={() => hoveredProject = null}
          class="group relative overflow-hidden bg-neutral-900 brutal-shadow cursor-pointer {spanClass} {rotationClass}"
          style="box-shadow: {hoveredProject?.id === work.id ? `8px 8px 0px ${work.color}` : 'none'};"
        >
          <!-- --- BACKGROUND IMAGE --- -->
          <div class="absolute inset-0 w-full h-full">
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 z-10 transition-colors duration-500"></div>
            <img
              src={work.image}
              alt={work.title}
              class="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
            />
          </div>

          <!-- --- KINETIC MARQUEE --- -->
          <div class="absolute top-1/2 left-0 w-full -translate-y-1/2 -rotate-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 overflow-hidden pointer-events-none mix-blend-overlay">
            <div class="animate-marquee whitespace-nowrap">
              <span class="text-6xl sm:text-8xl font-black text-white/50 uppercase px-4">
                {work.title} • {work.category} • {work.title} • {work.category} •
              </span>
            </div>
          </div>

          <!-- --- CARD CONTENT --- -->
          <div class="absolute inset-0 z-30 flex flex-col justify-between p-6 sm:p-8">
            
            <!-- Top Row: Category Pill & Play Button -->
            <div class="flex justify-between items-start">
              <span 
                class="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full backdrop-blur-md bg-black/30 border text-white"
                style="
                  color: {hoveredProject?.id === work.id ? work.color : 'white'};
                  border-color: {hoveredProject?.id === work.id ? work.color : 'rgba(255,255,255,0.2)'};
                "
              >
                {work.category}
              </span>
              
              <div class="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <Play fill="white" size={20} class="ml-1" />
              </div>
            </div>

            <!-- Bottom Row: Text Details -->
            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p class="text-white/70 font-mono text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {work.year} // DIR. {work.director}
              </p>
              <h3 class="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-1">
                {work.title}
              </h3>
              <p 
                class="text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
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
      <button class="group relative inline-flex items-center gap-4 px-8 py-5 bg-[#CCFF00] text-black font-black uppercase tracking-widest overflow-hidden rounded-full transition-transform hover:scale-105">
        <span class="relative z-10 flex items-center gap-2">
          View Full Showreel
          <MoveRight class="group-hover:translate-x-2 transition-transform duration-300" />
        </span>
        <!-- Button Hover effect background -->
        <div class="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0 rounded-full"></div>
      </button>
    </div>

  </section>
</div>

<style>
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
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