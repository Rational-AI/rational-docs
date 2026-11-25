import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import SearchBar from "@theme/SearchBar";

type CardItem = {
	label: string;
	to: string;
};

type Category = {
	icon: string;
	title: string;
	description: string;
	to?: string;
	items: CardItem[];
	comingSoon?: boolean;
};

// One card per sidebar section, in sidebar order (website/sidebars.ts).
// No page counts: they went stale with every new page.
const CATEGORIES: Category[] = [
	{
		icon: "🚀",
		title: "Get started",
		description:
			"Build your first assistant, then take a tour of the modules in the top navigation.",
		to: "/operational-guides/get-started",
		items: [
			{ label: "Quickstart", to: "/operational-guides/get-started" },
			{
				label: "Quickstart for administrators",
				to: "/operational-guides/quickstart-admin",
			},
			{
				label: "Quickstart for developers",
				to: "/operational-guides/quickstart-developer",
			},
			{ label: "The modules", to: "/cr/Chats" },
		],
	},
	{
		icon: "🛠️",
		title: "Use Rational AI",
		description:
			"Step-by-step guides to chat, build Knowledge bases and touchpoints, connect data and channels, and work with agents.",
		to: "/operational-guides/chat-experience",
		items: [
			{ label: "Use Chat", to: "/operational-guides/chat-experience" },
			{
				label: "Create a Knowledge",
				to: "/operational-guides/create-knowledge",
			},
			{
				label: "Integrate external data",
				to: "/operational-guides/integrate-data",
			},
			{
				label: "Configure touchpoints",
				to: "/operational-guides/configure-touchpoints",
			},
			{ label: "Manage channels", to: "/operational-guides/manage-channels" },
		],
	},
	{
		icon: "🔐",
		title: "Administration & security",
		description:
			"Install and run Rational AI, manage people and roles, govern AI use, and keep your data compliant.",
		to: "/operational-guides/on-premises-installation",
		items: [
			{
				label: "Manage roles and users",
				to: "/operational-guides/roles-and-users",
			},
			{ label: "Monitor usage and cost", to: "/operational-guides/governance" },
			{ label: "Data retention", to: "/operational-guides/data-retention" },
			{ label: "Audit trail", to: "/operational-guides/audit-trail" },
			{
				label: "Your on-premises installation",
				to: "/operational-guides/on-premises-installation",
			},
		],
	},
	{
		icon: "🧩",
		title: "Developers",
		description:
			"Call Rational AI from your own code, and extend it with your own extensions.",
		to: "/operational-guides/api-access",
		items: [
			{
				label: "Quickstart for developers",
				to: "/operational-guides/quickstart-developer",
			},
			{
				label: "Access Rational AI via API",
				to: "/operational-guides/api-access",
			},
			{
				label: "Build an extension",
				to: "/operational-guides/build-an-extension",
			},
			{
				label: "Deploy models via API",
				to: "/operational-guides/api/deploy-open-source-models",
			},
		],
	},
	{
		icon: "📖",
		title: "Concepts",
		description:
			"Learn the ideas behind the platform, so the rest of the docs make sense.",
		to: "/concepts/Touchpoint",
		items: [
			{ label: "Retrieval-augmented generation", to: "/concepts/RAG" },
			{ label: "Touchpoints", to: "/concepts/Touchpoint" },
			{ label: "Knowledge", to: "/concepts/Knowledge" },
			{ label: "Glossary", to: "/reference/glossary" },
		],
	},
	{
		icon: "🧭",
		title: "Help",
		description:
			"Find the fix for a problem by its symptom or error message, and check the limits you can run into.",
		to: "/troubleshooting",
		items: [
			{ label: "Troubleshooting", to: "/troubleshooting" },
			{ label: "Error messages", to: "/reference/error-messages" },
			{ label: "Limits and quotas", to: "/reference/limits" },
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
						<Translate id="home.hero.title">
							Support &amp; documentation
						</Translate>
					</h1>
					<p className="homeHero__subtitle">
						<Translate id="home.hero.subtitle">
							Stuck on something or getting started? Browse our documentation or
							chat with our AI to find help.
						</Translate>
					</p>
					{/* Reuse the offline-search SearchBar so typing previews matching
					    docs inline (autocomplete dropdown), instead of only redirecting
					    to /search on submit. Styled to fit the hero pill via the
					    .homeSearch overrides in home.css. */}
					<search className="homeSearch">
						<SearchIcon />
						<SearchBar />
					</search>
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
					<li key={item.label}>
						<Link className="homeCard__listItem" to={item.to}>
							<DocIcon />
							<span>{item.label}</span>
						</Link>
					</li>
				))}
			</ul>
			{category.to && (
				<Link className="homeCard__cta" to={category.to}>
					<Translate id="home.card.cta">Go to section</Translate>
					<span className="homeCard__arrow" aria-hidden="true">
						{" →"}
					</span>
				</Link>
			)}
		</>
	);

	if (category.comingSoon || !category.to) {
		return (
			<div className="homeCard homeCard--disabled" aria-disabled="true">
				{inner}
			</div>
		);
	}

	// Not one big link: each quick link and "Go to section" is its own link
	return <div className="homeCard">{inner}</div>;
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
						<Translate id="home.categories.title">
							Document categories
						</Translate>
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
