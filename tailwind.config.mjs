/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				bg: token('bg'),
				surface: token('surface'),
				fg: token('fg'),
				muted: token('muted'),
				line: token('line'),
				accent: token('accent'),
			},
			fontFamily: {
				sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
			},
			maxWidth: {
				page: '72rem',
			},
		},
	},
	plugins: [],
};
