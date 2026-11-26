import React, { type ComponentProps } from "react";

// Outlined triangle, to match the outlined note and tip icons (Docusaurus ships it filled).
export default function AdmonitionIconWarning(props: ComponentProps<"svg">) {
	return (
		<svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
			<path
				fillRule="evenodd"
				d="M8 1 15.5 14.5H.5zm0 2.6L2.7 13.2h10.6zM7.35 6h1.3v3.8h-1.3zm0 4.7h1.3V12h-1.3z"
			/>
		</svg>
	);
}
