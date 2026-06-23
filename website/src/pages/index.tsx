import { useCallback, useState } from "react";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";

type CardItem = {
	label: string;
	to: string;
};

type Category = {
	icon: string;
	title: string;
	pages: string;
	description: string;
	to?: string;
	items: CardItem[];
	comingSoon?: boolean;
};

const CATEGORIES: Category[] = [
	// Hidden for now — re-enable when the product pages are ready.
	// {
	// 	icon: "⚡️",
	// 	title: "Getting started",
	// 	pages: "5 products",
	// 	description:
	// 		"Get to know the Rational products, what they do, and who they are for, before you start building.",
	// 	comingSoon: true,
	// 	items: [
	// 		{ label: "Rational AI", to: "#" },
	// 		{ label: "Rational Knowledge", to: "#" },
	// 		{ label: "Rational Gen", to: "#" },
	// 		{ label: "Rational BI", to: "#" },
	// 		{ label: "Rational Core", to: "#" },
	// 	],
	// },
	{
		icon: "🎛️",
		title: "Control Room",
		pages: "8 pages",
		description:
			"Understand every module of the platform and what every control in the settings section does.",
		to: "/category/ai-control-room",
		items: [
			{ label: "Chat", to: "/cr/Chats" },
			{ label: "Knowledge", to: "/cr/Knowledge" },
			{ label: "Conversations", to: "/cr/Conversations" },
			{ label: "Governance", to: "/cr/Governance" },
			{ label: "Settings", to: "/category/settings" },
		],
	},
	{
		icon: "🛠️",
		title: "Operational guides",
		pages: "30+ pages",
		description:
			"Follow step-by-step procedures to complete common tasks from start to finish.",
		to: "/category/operational-guides",
		items: [
			{ label: "Get started", to: "/operational-guides/get-started" },
			{
				label: "Integrate external data",
				to: "/operational-guides/integrate-data",
			},
			{ label: "Create a workflow", to: "/operational-guides/create-workflow" },
			{
				label: "Create a processing rule",
				to: "/operational-guides/create-processing-rule",
			},
			{
				label: "Create a knowledge",
				to: "/operational-guides/create-knowledge",
			},
		],
	},
	{
		icon: "📖",
		title: "Concepts",
		pages: "22 pages",
		description:
			"Learn the ideas behind the platform, so the rest of the docs make sense.",
		to: "/category/concepts",
		items: [
			{ label: "GenAI", to: "/concepts/Generative-AI" },
			{ label: "Natural Language Processing", to: "/concepts/NLP" },
			{ label: "Large Language Models", to: "/concepts/LLMs" },
			{ label: "Model architecture", to: "/concepts/Model-architecture" },
			{ label: "Context windows", to: "/concepts/Context-window" },
		],
	},
];

function SearchIcon() {
	return (
		<svg
			className="homeSearch__icon"
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<circle cx="11" cy="11" r="7" />
			<line x1="21" y1="21" x2="16.65" y2="16.65" />
		</svg>
	);
}

function DocIcon() {
	return (
		<svg
			className="homeCard__listIcon"
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
			<polyline points="14 2 14 8 20 8" />
			<line x1="8" y1="13" x2="16" y2="13" />
			<line x1="8" y1="17" x2="13" y2="17" />
		</svg>
	);
}

function Hero() {
	const [query, setQuery] = useState("");
	const history = useHistory();
	const searchPath = useBaseUrl("/search");

	const onSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			const trimmed = query.trim();
			// Offline full-text search page provided by
			// @easyops-cn/docusaurus-search-local at /search?q=...
			history.push(
				trimmed ? `${searchPath}?q=${encodeURIComponent(trimmed)}` : searchPath,
			);
		},
		[history, query, searchPath],
	);

	return (
		<section className="homeHero">
			<div className="homeHero__inner">
				<div
					className="homeHero__bg"
					aria-hidden="true"
					style={{ backgroundImage: "url('/img/hero-bg.jpg')" }}
				/>
				<div className="homeHero__content">
					<h1 className="homeHero__title">
					<Translate id="home.hero.title">Support &amp; documentation</Translate>
				</h1>
				<p className="homeHero__subtitle">
					<Translate id="home.hero.subtitle">
						Stuck on something or getting started? Browse our documentation or
						chat with our AI to find help.
					</Translate>
				</p>
				<form className="homeSearch" onSubmit={onSubmit} role="search">
					<SearchIcon />
					<input
						className="homeSearch__input"
						type="search"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder={translate({
							id: "home.search.placeholder",
							message: "Search...",
						})}
						aria-label={translate({
							id: "home.search.placeholder",
							message: "Search...",
						})}
					/>
				</form>
				</div>
			</div>
		</section>
	);
}

function CategoryCard({ category }: { category: Category }) {
	const inner = (
		<>
			<div className="homeCard__header">
				<span className="homeCard__icon">{category.icon}</span>
				<div className="homeCard__heading">
					<span className="homeCard__title">{category.title}</span>
					<span className="homeCard__pages">{category.pages}</span>
				</div>
				{category.comingSoon && (
					<span className="homeCard__chip">
						<Translate id="home.card.comingSoon">Coming soon</Translate>
					</span>
				)}
			</div>
			<p className="homeCard__body">{category.description}</p>
			<ul className="homeCard__list">
				{category.items.map((item) => (
					<li className="homeCard__listItem" key={item.label}>
						<DocIcon />
						<span>{item.label}</span>
					</li>
				))}
			</ul>
			{category.to && (
				<span className="homeCard__cta">
					<Translate id="home.card.cta">Go to section</Translate>
					<span className="homeCard__arrow" aria-hidden="true">
						{" →"}
					</span>
				</span>
			)}
		</>
	);

	if (category.comingSoon || !category.to) {
		return (
			<div
				className="homeCard homeCard--disabled"
				aria-disabled="true"
			>
				{inner}
			</div>
		);
	}

	return (
		<Link className="homeCard" to={category.to}>
			{inner}
		</Link>
	);
}

export default function Home(): React.ReactElement {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Layout
			title={translate({
				id: "home.meta.title",
				message: "Support & documentation",
			})}
			description={siteConfig.tagline}
		>
			<Head>
				<link
					rel="preload"
					as="image"
					href="/img/hero-bg.jpg"
					type="image/jpeg"
				/>
			</Head>
			<main className="homeMain">
				<Hero />
				<section className="homeCategories">
					<h2 className="homeCategories__title">
						<Translate id="home.categories.title">Document categories</Translate>
					</h2>
					<div className="homeGrid">
						{CATEGORIES.map((category) => (
							<CategoryCard category={category} key={category.title} />
						))}
					</div>
				</section>
			</main>
		</Layout>
	);
}
