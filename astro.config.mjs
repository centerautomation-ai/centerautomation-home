// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Canonical origin: used for canonical URLs, absolute OG URLs and the sitemap.
	site: 'https://centerautomation.ai',
	trailingSlash: 'ignore',
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	// Fonts are downloaded at build time and served from this site (no third-party requests).
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Inter',
			cssVariable: '--font-inter',
			weights: ['400 700'],
			styles: ['normal'],
			subsets: ['latin'],
			display: 'swap',
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],
});
