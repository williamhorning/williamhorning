import { generateSidebar } from 'vitepress-sidebar';
import type { DefaultTheme } from 'vitepress/theme-without-fonts';

const generated = generateSidebar([
	{
		documentRootPath: 'lightning/users',
		basePath: '/users/',
		resolvePath: '/users/',
		useTitleFromFileHeading: true,
		rootGroupLink: '/',
		rootGroupText: 'Users Guide',
	},
	{
		documentRootPath: 'lightning/hosting',
		basePath: '/hosting/',
		resolvePath: '/hosting/',
		useTitleFromFileHeading: true,
		rootGroupLink: '/',
		rootGroupText: 'Hosting Docs',
		sortMenusByName: true,
	},
	{
		documentRootPath: 'lightning/developer',
		basePath: '/developer/',
		resolvePath: '/developer/',
		useTitleFromFileHeading: true,
		rootGroupLink: '/',
		rootGroupText: 'Developer Docs',
	},
]) as DefaultTheme.SidebarMulti & {
	[path: string]: { items: DefaultTheme.SidebarItem[]; base: string };
};

export const sidebar: DefaultTheme.SidebarMulti = {
	...generated,
	'/': {
		base: '/',
		items: [
			{
				text: 'Lightning',
				link: '?',
				items: [
					{ link: 'about', text: 'About' },
					{
						text: 'Bolt',
						base: 'https://williamhorning.eu.org',
						link: '/bolt',
					},
					{
						text: 'Github Repo',
						base: 'https://github.com/',
						link: 'williamhorning/bolt',
						rel: 'noopener noreferrer',
						target: '_blank',
					},
					{
						text: 'William Horning',
						base: 'https://williamhorning.eu.org',
						link: '/',
					},
				],
				collapsed: false,
			},
			{
				text: 'Users Guide',
				link: 'users',
				base: '/users/',
				items: generated['/users/'].items[0].items,
			},
			{
				text: 'Hosting Docs',
				link: 'hosting',
				base: '/hosting/',
				items: generated['/hosting/'].items[0].items,
			},
			{
				text: 'Developer Docs',
				link: 'developer',
				base: '/developer/',
				items: generated['/developer/'].items[0].items,
			},
		],
	},
};
