import Link from "@docusaurus/Link";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type Item = { label: string; to: string };

// Renders related concepts as clickable chips. Pair with a `## Connects to`
// heading so the section still shows in the page table of contents.
export default function ConnectsTo({ items }: { items: Item[] }): ReactNode {
	if (!items?.length) return null;
	return (
		<ul className={styles.chips} aria-label="Connects to">
			{items.map((item) => (
				<li key={item.to}>
					<Link className={styles.chip} to={item.to}>
						{item.label}
					</Link>
				</li>
			))}
		</ul>
	);
}
