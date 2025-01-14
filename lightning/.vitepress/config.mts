import { defineConfig } from 'vitepress';
import { sidebar } from './sidebar.mts';

export default defineConfig(
	{
		appearance: 'dark',
		assetsDir: 'assets',
		base: '/lightning',
		cleanUrls: true,
		description: 'documentation for lightning',
		ignoreDeadLinks: true,
		lang: 'en-US',
		head: [['link', { rel: 'icon', href: '/lightning/favicon.ico' }]],
		title: 'lightning',
		themeConfig: {
			logo: {
				dark: '/brand/logo_monocolor_light.svg',
				light: '/brand/logo_monocolor_dark.svg',
				alt: 'lightning',
			},
			nav: [
				{ text: 'About', link: '/about' },
				{ text: 'Users Guide', link: '/users/', activeMatch: '^/users/' },
				{
					text: 'Hosting Docs',
					link: '/hosting/',
					activeMatch: '^/hosting/',
				},
				{
					text: 'Developer Docs',
					link: '/developer/',
					activeMatch: '^/developer/',
				},
			],
			search: {
				provider: 'local',
			},
			sidebar,
			socialLinks: [
				{
					icon: 'github',
					link: 'https://github.com/williamhorning/bolt',
				},
			],
			notFound: {
				quote:
					'Not all who wander are lost, but those who are can find their way back, or get struck by lightning.',
			},
		},
		markdown: {
			languageAlias: {
				'pwsh': 'sh'
			}
		}
	},
);
