import SearchBar from "@theme/SearchBar";
import clsx from "clsx";
import type { ReactNode } from "react";

// The offline-search SearchBar in a field: typing previews matching docs inline
// (autocomplete dropdown). Styled by .searchField in src/css/search.css.
export default function SearchField({
	className,
}: {
	className?: string;
}): ReactNode {
	return (
		<search className={clsx("searchField", className)}>
			<svg
				className="searchField__icon"
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
			<SearchBar />
		</search>
	);
}
