import Translate, { translate } from "@docusaurus/Translate";
import { ThemeClassNames, useColorMode } from "@docusaurus/theme-common";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import type { Props } from "@theme/Footer/Layout";
import clsx from "clsx";
import type { ReactNode } from "react";

// Ejected to add the language and theme switches (tabs like rational.is/componenti#tab)
// to the bottom row, right of the logo; the copyright is in the last links column. Styled in src/css/custom.css (MARK: Footer).
function LocaleTabs(): ReactNode {
	const {
		i18n: { currentLocale, locales, localeConfigs },
	} = useDocusaurusContext();
	const alternatePageUtils = useAlternatePageUtils();
	return (
		<nav
			className="tabs-list"
			aria-label={translate({ id: "footer.language", message: "Language" })}
		>
			{locales.map((locale) => (
				// Plain <a>: each locale is a separate build, so the page has to reload
				<a
					key={locale}
					className="tabs-trigger"
					href={alternatePageUtils.createUrl({ locale, fullyQualified: false })}
					hrefLang={localeConfigs[locale]?.htmlLang}
					aria-current={locale === currentLocale ? "page" : undefined}
				>
					{localeConfigs[locale]?.label ?? locale}
				</a>
			))}
		</nav>
	);
}

function ThemeTabs(): ReactNode {
	const { colorModeChoice, setColorMode } = useColorMode();
	const choices = [
		{
			value: "light",
			label: <Translate id="footer.theme.light">Light</Translate>,
		},
		{
			value: "dark",
			label: <Translate id="footer.theme.dark">Dark</Translate>,
		},
		{
			value: null,
			label: <Translate id="footer.theme.system">System</Translate>,
		},
	] as const;
	return (
		<fieldset
			className="tabs-list"
			aria-label={translate({ id: "footer.theme", message: "Theme" })}
		>
			{choices.map(({ value, label }) => (
				<button
					key={value ?? "system"}
					type="button"
					className="tabs-trigger"
					aria-pressed={colorModeChoice === value}
					onClick={() => setColorMode(value)}
				>
					{label}
				</button>
			))}
		</fieldset>
	);
}

export default function FooterLayout({ style, links, logo }: Props): ReactNode {
	return (
		<footer
			className={clsx(ThemeClassNames.layout.footer.container, "footer", {
				"footer--dark": style === "dark",
			})}
		>
			<div className="container container-fluid">
				{links}
				<div className="footer__bottom">
					{logo}
					<div className="footer__switches">
						<LocaleTabs />
						<ThemeTabs />
					</div>
				</div>
			</div>
		</footer>
	);
}
