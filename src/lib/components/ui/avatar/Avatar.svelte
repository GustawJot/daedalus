<script lang="ts">
	import type { Snippet } from 'svelte';

	export type AvatarSize = 'sm' | 'default' | 'lg';

	type Props = {
		src?: string | null;
		alt?: string;
		fallback?: string;
		size?: AvatarSize;
		class?: string;
	};

	let {
		src = null,
		alt = '',
		fallback = '',
		size = 'default',
		class: className = ''
	}: Props = $props();

	let imageError = $state(false);
	let imageLoaded = $state(false);

	function handleError() {
		imageError = true;
	}

	function handleLoad() {
		imageLoaded = true;
	}

	$effect(() => {
		// Reset states when src changes
		if (src) {
			imageError = false;
			imageLoaded = false;
		}
	});

	let showFallback = $derived(!src || imageError);
</script>

<span class="avatar size-{size} {className}" role="img" aria-label={alt || fallback}>
	{#if !showFallback}
		<img
			{src}
			{alt}
			class="avatar-image"
			class:loaded={imageLoaded}
			onload={handleLoad}
			onerror={handleError}
		/>
	{/if}
	{#if showFallback || !imageLoaded}
		<span class="avatar-fallback" aria-hidden={!showFallback}>
			{fallback}
		</span>
	{/if}
</span>

<style>
	.avatar {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		overflow: hidden;
		background-color: hsl(var(--muted));
		color: hsl(var(--muted-foreground));
		font-family: var(--font-sans, system-ui, sans-serif);
		font-weight: 500;
		flex-shrink: 0;
		vertical-align: middle;
	}

	.size-sm {
		width: 2rem;
		height: 2rem;
		font-size: 0.75rem;
	}

	.size-default {
		width: 2.5rem;
		height: 2.5rem;
		font-size: 0.875rem;
	}

	.size-lg {
		width: 3rem;
		height: 3rem;
		font-size: 1rem;
	}

	.avatar-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
		opacity: 0;
		transition: opacity var(--transition-fast, 150ms) ease;
	}

	.avatar-image.loaded {
		opacity: 1;
	}

	.avatar-fallback {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		text-transform: uppercase;
		user-select: none;
		-webkit-user-select: none;
	}
</style>
