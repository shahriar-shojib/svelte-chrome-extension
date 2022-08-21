import { crx } from '@crxjs/vite-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import buildTimeImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import cssnano from 'cssnano';
import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig((config) => {
	return {
		plugins: [
			svelte(),
			crx({
				manifest,
			}),
		],
		css: {
			postcss: {
				plugins: [tailwindcss, buildTimeImport, ...(config.command === 'build' ? [cssnano] : [])],
			},
			devSourcemap: true,
		},
	};
});
