// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jacdac.github.io',
	base: '/jacdac-docs',
	integrations: [
		starlight({
			title: 'Jacdac Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/jacdac/jacdac-docs' }],
			sidebar: [
				{
					label: 'Docs',
					items: [
						{ label: 'Home', slug: 'index' },
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Getting Started',
					items: [{ autogenerate: { directory: 'start' } }],
				},
				{
					label: 'FAQ',
					items: [{ autogenerate: { directory: 'faq' } }],
				},
				{
					label: 'Device Development',
					items: [{ autogenerate: { directory: 'ddk' } }],
				},
				{
					label: 'Clients',
					items: [{ autogenerate: { directory: 'clients' } }],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
