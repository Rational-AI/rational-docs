import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Brand from "@site/src/components/Brand";
import SearchField from "@site/src/components/SearchField";
import Layout from "@theme/Layout";

type CardItem = {
	label: string;
	to: string;
};

type Category = {
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
		title: translate({ id: "home.title.get-started", message: "Get started" }),
		description: translate({
			id: "home.description.build-your-first-assistant-then-take-a-t",
			message:
				"Build your first assistant, then take a tour of the modules in the top navigation.",
		}),
		to: "/operational-guides/get-started",
		items: [
			{
				label: translate({ id: "home.link.quickstart", message: "Quickstart" }),
				to: "/operational-guides/get-started",
			},
			{
				label: translate({
					id: "home.link.quickstart-for-administrators",
					message: "Quickstart for administrators",
				}),
				to: "/operational-guides/quickstart-admin",
			},
			{
				label: translate({
					id: "home.link.quickstart-for-developers",
					message: "Quickstart for developers",
				}),
				to: "/operational-guides/quickstart-developer",
			},
			{
				label: translate({
					id: "home.link.the-modules",
					message: "The modules",
				}),
				to: "/cr/Chats",
			},
		],
	},
	{
		title: translate({
			id: "home.title.use-rational-ai",
			message: "Use Rational AI",
		}),
		description: translate({
			id: "home.description.step-by-step-guides-to-chat-build-knowle",
			message:
				"Step-by-step guides to chat, build Knowledge bases and touchpoints, connect data and channels, and work with agents.",
		}),
		to: "/operational-guides/chat-experience",
		items: [
			{
				label: translate({ id: "home.link.use-chat", message: "Use Chat" }),
				to: "/operational-guides/chat-experience",
			},
			{
				label: translate({
					id: "home.link.create-a-knowledge",
					message: "Create a Knowledge",
				}),
				to: "/operational-guides/create-knowledge",
			},
			{
				label: translate({
					id: "home.link.integrate-external-data",
					message: "Integrate external data",
				}),
				to: "/operational-guides/integrate-data",
			},
			{
				label: translate({
					id: "home.link.configure-touchpoints",
					message: "Configure touchpoints",
				}),
				to: "/operational-guides/configure-touchpoints",
			},
			{
				label: translate({
					id: "home.link.manage-channels",
					message: "Manage channels",
				}),
				to: "/operational-guides/manage-channels",
			},
		],
	},
	{
		title: translate({
			id: "home.title.administration-security",
			message: "Administration & security",
		}),
		description: translate({
			id: "home.description.install-and-run-rational-ai-manage-peopl",
			message:
				"Install and run Rational AI, manage people and roles, govern AI use, and keep your data compliant.",
		}),
		to: "/operational-guides/on-premises-installation",
		items: [
			{
				label: translate({
					id: "home.link.manage-roles-and-users",
					message: "Manage roles and users",
				}),
				to: "/operational-guides/roles-and-users",
			},
			{
				label: translate({
					id: "home.link.monitor-usage-and-cost",
					message: "Monitor usage and cost",
				}),
				to: "/operational-guides/governance",
			},
			{
				label: translate({
					id: "home.link.data-retention",
					message: "Data retention",
				}),
				to: "/operational-guides/data-retention",
			},
			{
				label: translate({
					id: "home.link.audit-trail",
					message: "Audit trail",
				}),
				to: "/operational-guides/audit-trail",
			},
			{
				label: translate({
					id: "home.link.your-on-premises-installation",
					message: "Your on-premises installation",
				}),
				to: "/operational-guides/on-premises-installation",
			},
		],
	},
	{
		title: translate({ id: "home.title.developers", message: "Developers" }),
		description: translate({
			id: "home.description.call-rational-ai-from-your-own-code-and",
			message:
				"Call Rational AI from your own code, and extend it with your own extensions.",
		}),
		to: "/operational-guides/api-access",
		items: [
			{
				label: translate({
					id: "home.link.quickstart-for-developers",
					message: "Quickstart for developers",
				}),
				to: "/operational-guides/quickstart-developer",
			},
			{
				label: translate({
					id: "home.link.access-rational-ai-via-api",
					message: "Access Rational AI via API",
				}),
				to: "/operational-guides/api-access",
			},
			{
				label: translate({
					id: "home.link.build-an-extension",
					message: "Build an extension",
				}),
				to: "/operational-guides/build-an-extension",
			},
			{
				label: translate({
					id: "home.link.deploy-models-via-api",
					message: "Deploy models via API",
				}),
				to: "/operational-guides/api/deploy-open-source-models",
			},
		],
	},
	{
		title: translate({ id: "home.title.concepts", message: "Concepts" }),
		description: translate({
			id: "home.description.learn-the-ideas-behind-the-platform-so-t",
			message:
				"Learn the ideas behind the platform, so the rest of the docs make sense.",
		}),
		to: "/concepts/Touchpoint",
		items: [
			{
				label: translate({
					id: "home.link.retrieval-augmented-generation",
					message: "Retrieval-augmented generation",
				}),
				to: "/concepts/RAG",
			},
			{
				label: translate({
					id: "home.link.touchpoints",
					message: "Touchpoints",
				}),
				to: "/concepts/Touchpoint",
			},
			{
				label: translate({ id: "home.link.knowledge", message: "Knowledge" }),
				to: "/concepts/Knowledge",
			},
			{
				label: translate({ id: "home.link.glossary", message: "Glossary" }),
				to: "/reference/glossary",
			},
		],
	},
	{
		title: translate({ id: "home.title.help", message: "Help" }),
		description: translate({
			id: "home.description.find-the-fix-for-a-problem-by-its-sympto",
			message:
				"Find the fix for a problem by its symptom or error message, and check the limits you can run into.",
		}),
		to: "/troubleshooting",
		items: [
			{
				label: translate({
					id: "home.link.troubleshooting",
					message: "Troubleshooting",
				}),
				to: "/troubleshooting",
			},
			{
				label: translate({
					id: "home.link.error-messages",
					message: "Error messages",
				}),
				to: "/reference/error-messages",
			},
			{
				label: translate({
					id: "home.link.limits-and-quotas",
					message: "Limits and quotas",
				}),
				to: "/reference/limits",
			},
		],
	},
];

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
				<div className="homeHero__content">
					<Brand />
					<h1 className="homeHero__title">
						<Translate id="home.hero.title">
							Support &amp; documentation
						</Translate>
					</h1>
					<SearchField />
					{/* TODO: when the docs get an AI chat, bring back "or chat with our AI"
					    here and in i18n/it/code.json ("o chatta con la nostra AI"). */}
					<p className="homeHero__subtitle">
						<Translate id="home.hero.subtitle">
							Stuck on something or getting started? Search the documentation to
							find help.
						</Translate>
					</p>
				</div>
			</div>
		</section>
	);
}

function CategoryCard({ category }: { category: Category }) {
	const inner = (
		<>
			<div className="homeCard__header">
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
