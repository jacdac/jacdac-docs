// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
	site: 'https://jacdac.github.io',
	base: '/jacdac-docs',
	vite: {
		define: {
			'process.env': {},
			'process.env.GATSBY_GITHUB_SHA': JSON.stringify(''),
		},
		resolve: {
			alias: {
				gatsby: fileURLToPath(new URL('./src/shims/gatsby.tsx', import.meta.url)),
			},
		},
	},
	integrations: [
		react(),
		starlight({
			title: 'Jacdac Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jacdac/jacdac-docs' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [{ autogenerate: { directory: 'start' } }],
				},
				{
					label: 'Device Dashboard',
					link: '/dashboard/',
				},
				{
					label: 'Device Catalog',
					link: '/devices/',
				},
				{
					label: 'Client Programming',
					items: [{ autogenerate: { directory: 'clients' } }],
				},
				{
					label: 'Service Catalog',
					link: '/services/',
				},
				{
					label: 'Web Tools',
					link: 'https://jacdac.github.io/jacdac-docs/tools/',
				},
				{
					label: 'Device Development',
					items: [{ autogenerate: { directory: 'ddk' } }],
				},
				{
					label: 'Specifications',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
				{
					label: 'FAQ',
					items: [{ autogenerate: { directory: 'faq' } }],
				},
				{
					label: 'Blog',
					link: '/blog/',
				},
			],
		}),
	],
});
