// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	srcDir: './src',
	output: 'static',
	site: 'https://williamhorning.eu.org/',
	build: {
		format: 'preserve',
		inlineStylesheets: 'never',
	},
	trailingSlash: 'ignore',
	experimental: {
		contentIntellisense: true,
	},
	prefetch: false,
	integrations: [
		starlight({
			title: 'lightning',
			titleDelimiter: '-',
			description: 'documentation for lightning',
			disable404Route: true,
			logo: {
				src: './public/assets/lightning/wordmark_white.svg',
				alt: 'lightning',
				replacesTitle: true,
			},
			favicon: '/assets/lightning/logo_monocolor_dark.svg',
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: '/assets/docs.css',
					},
				},
			],
			components: {
				SiteTitle: './src/components/DocsSiteTitle.astro',
			},
			social: {
				github: 'https://github.com/williamhorning/bolt',
			},
			sidebar: [
				{
					label: 'Lightning',
					collapsed: false,
					items: [
						{
							label: 'About',
							slug: 'lightning/about',
						},
						{
							label: 'Bolt',
							link: '/bolt',
						},
						{
							label: 'Github Repo',
							link: 'https://github.com/williamhorning/bolt',
						},
						{
							label: 'William Horning',
							link: '/',
						},
					],
				},
				{
					label: 'Users Guide',
					collapsed: false,
					items: [
						{ label: 'Start', slug: 'lightning/users' },
						'lightning/users/commands',
						'lightning/users/settings',
					],
				},
				{
					label: 'Hosting',
					collapsed: false,
					items: [
						{ label: 'Start', slug: 'lightning/hosting' },
						'lightning/hosting/database',
						'lightning/hosting/plugins',
						'lightning/hosting/configuration',
						'lightning/hosting/legacy-migrations',
						'lightning/hosting/deno',
						'lightning/hosting/docker',
					],
				},
				{
					label: 'Developers',
					collapsed: false,
					items: [
						{ label: 'Start', slug: 'lightning/developer' },
						'lightning/developer/security',
					],
				},
			],
		}),
		mdx(),
	],
	vite: {
		resolve: {
			alias: {
				fs: 'node:fs',
				url: 'node:url',
				path: 'node:path',
			},
		},
	},
});
