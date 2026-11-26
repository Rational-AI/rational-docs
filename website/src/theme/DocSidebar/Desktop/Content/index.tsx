import type { WrapperProps } from "@docusaurus/types";
import Brand from "@site/src/components/Brand";
import type ContentType from "@theme/DocSidebar/Desktop/Content";
import Content from "@theme-original/DocSidebar/Desktop/Content";
import type { ReactNode } from "react";

// The brand (home link) on top of the desktop sidebar: there is no top bar there.
export default function ContentWrapper(
	props: WrapperProps<typeof ContentType>,
): ReactNode {
	return (
		<>
			<Brand className="brand--sidebar" />
			<Content {...props} />
		</>
	);
}
