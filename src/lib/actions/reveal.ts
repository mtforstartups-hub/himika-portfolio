/**
 * Svelte action to trigger a callback when an element enters the viewport.
 * Used for scroll-reveal animations.
 */
export function reveal(node: HTMLElement, onVisible: (visible: boolean) => void) {
	const observer = new IntersectionObserver(
		(entries) => {
			if (entries[0].isIntersecting) {
				onVisible(true);
				observer.unobserve(node);
			}
		},
		{ threshold: 0.1 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
