<script lang="ts">
	const marqueeItems = [
		{ id: 1, name: 'Kaalipotka' },
		{ id: 2, name: 'ImMATURE' },
		{ id: 3, name: 'Pad Man' },
		{ id: 4, name: 'Breathe: Into the Shadows' },
		{ id: 5, name: 'Jugaadistan' },
		{ id: 6, name: '@himikatalksf1' },
		{ id: 7, name: 'Bristol Old Vic' },
		{ id: 8, name: 'The Danceworx' }
	];

	const displayItems = [
		...marqueeItems,
		...marqueeItems.map((item) => ({
			...item,
			id: item.id + marqueeItems.length
		}))
	];
</script>

<div class="marquee-strip overflow-hidden bg-charcoal py-3.5 whitespace-nowrap">
	<div class="marquee-inner inline-flex animate-marquee gap-10">
		{#each displayItems as item (item.id)}
			<span
				class="flex items-center gap-10 font-syne text-[0.75rem] font-bold tracking-[0.18em] text-goldenrod uppercase"
			>
				{item.name}
				<span class="dot text-ember">✦</span>
			</span>
		{/each}
	</div>
</div>
