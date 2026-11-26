import type { WrapperProps } from "@docusaurus/types";
import SearchField from "@site/src/components/SearchField";
import type MainType from "@theme/DocRoot/Layout/Main";
import Main from "@theme-original/DocRoot/Layout/Main";
import type { ReactNode } from "react";

// Docs pages: search floats at the bottom center (there is no top bar).
export default function MainWrapper(
	props: WrapperProps<typeof MainType>,
): ReactNode {
	return (
		<>
			<Main {...props} />
			<SearchField className="searchField--floating" />
		</>
	);
}
