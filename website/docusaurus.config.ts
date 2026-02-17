import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "Rational AI",
	tagline: "Your Data, Your AI",
	favicon: "img/favicon.ico",

	// TODO: ALGOLIA SEARCH
	// Theme for algolia search
	// themes: ["@docusaurus/theme-search-algolia"],

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		v4: true, // Improve compatibility with the upcoming Docusaurus v4
	},

	// Set the production url of your site here
	url: "https://docs.rational.is",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "rational-ai", // Usually your GitHub org/user name.
	projectName: "rational-docs", // Usually your repo name.

	onBrokenLinks: "throw",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en", "it"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					// https://docusaurus.io/docs/next/docs-introduction#docs-only-mode
					routeBasePath: "/", // Serve the docs at the site's root

					sidebarPath: "./sidebars.ts",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: false,
				// blog: {
				// 	showReadingTime: true,
				// 	feedOptions: {
				// 		type: ["rss", "atom"],
				// 		xslt: true,
				// 	},
				// 	// Please change this to your repo.
				// 	// Remove this to remove the "edit this page" links.
				// 	editUrl:
				// 		"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				// 	// Useful options to enforce blogging best practices
				// 	onInlineTags: "warn",
				// 	onInlineAuthors: "warn",
				// 	onUntruncatedBlogPosts: "warn",
				// },
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// algolia: {
		//   // TODO: ALGOLIA SEARCH add KEY
		//   // The application ID provided by Algolia
		//   appId: "YOUR_APP_ID",

		//   // TODO: ALGOLIA SEARCH add KEY
		//   // Public API key: it is safe to commit it
		//   apiKey: "YOUR_SEARCH_API_KEY",

		//   // TODO: ALGOLIA SEARCH add NAME
		//   indexName: "YOUR_INDEX_NAME",

		//   // TODO: ALGOLIA SEARCH FIXME: check wanted configuration
		//   // Optional: see doc section below
		//   contextualSearch: true,

		//   // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
		//   // externalUrlRegex: "external\\.com|domain\\.com",

		//   // // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
		//   // replaceSearchResultPathname: {
		//   //   from: "/docs/", // or as RegExp: /\/docs\//
		//   //   to: "/",
		//   // },

		//   // // Optional: Algolia search parameters
		//   // searchParameters: {},

		//   // // Optional: path for search page that enabled by default (`false` to disable it)
		//   // searchPagePath: "search",

		//   // // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
		//   // insights: false,

		//   // // Optional: whether you want to use the new Ask AI feature (undefined by default)
		//   // askAi: "YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID",
		// },
		image: "img/rational-social-card.jpg",
		colorMode: {
			respectPrefersColorScheme: true,
		},
		navbar: {
			title: "Rational AI",
			logo: {
				alt: "Rational AI",
				src: "img/logo.svg",
			},
			items: [
				// {
				// type: 'dropdown',
				// label: 'Documentazione',
				// position: 'left',
				// items: [
				// 	{
				// 	type: 'doc',
				// 	docId: 'quick-start',
				// 	label: 'Intro',
				// 	},
				// 	{
				// 	href: '/docs/concepts/types-of-models',
				// 	label: 'Concepts',
				// 	},
				// ],
				// },
				// {
				// 	type: "docSidebar",
				// 	sidebarId: "docsSidebar",
				// 	position: "left",
				// 	label: "Docs",
				// },
				{
					type: "search",
					position: "left",
				},
				// {
				//   href: "https://github.com/Rational-AI/",
				//   label: "GitHub",
				//   position: "right",
				// },
				// { to: "/blog", label: "Blog", position: "left" },
				{
					type: "docsVersionDropdown",
					position: "right",
				},
				{
					type: "localeDropdown",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "Docs",
							to: "/",
						},
					],
				},
				{
					title: "Resources",
					items: [
						{
							label: "Rational AI",
							to: "https://rational.is",
						},
						// {
						//   label: "Stack Overflow",
						//   href: "",
						// },
						// {
						//   label: "Discord",
						//   href: "",
						// },
						// {
						//   label: "X",
						//   href: "",
						// },
					],
				},
				{
					title: "More",
					items: [
						// {
						// 	label: "Blog",
						// 	to: "/blog",
						// },
						{
							label: "GitHub",
							href: "https://github.com/Rational-AI/",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Rational AI, Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
		docs: {
			sidebar: {
				autoCollapseCategories: true,
			},
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
