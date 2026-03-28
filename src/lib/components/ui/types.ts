import type { Snippet } from 'svelte';

// Visual treatment — HOW it looks
export type Variant = 'filled' | 'tonal' | 'outline' | 'ghost' | 'link';

// Semantic intent — WHY it looks that way
export type Tone = 'neutral' | 'critical' | 'success' | 'caution' | 'info';

// Consistent sizing
export type Size = 'sm' | 'md' | 'lg';

// Shared by all interactive components
export type InteractiveProps = {
	variant?: Variant;
	tone?: Tone;
	size?: Size;
	disabled?: boolean;
	class?: string;
	children?: Snippet;
};

// Shared by all form controls
export type FormControlProps = {
	label?: string;
	error?: string;
	description?: string;
	required?: boolean;
	readonly?: boolean;
	disabled?: boolean;
	name?: string;
	id?: string;
};
