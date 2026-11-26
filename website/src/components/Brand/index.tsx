import Logo from "@theme/Logo";
import clsx from "clsx";
import type { ReactNode } from "react";

// Wordmark + "DOCS" linking to the docs home, from navbar.logo/title in the config.
// Styled in src/css/navbar.css.
export default function Brand({
	className,
}: {
	className?: string;
}): ReactNode {
	return (
		<Logo
			className={clsx("brand", className)}
			imageClassName="brand__logo"
			titleClassName="brand__docs"
		/>
	);
}
