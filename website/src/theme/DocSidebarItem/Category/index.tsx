import type { WrapperProps } from "@docusaurus/types";
import type CategoryType from "@theme/DocSidebarItem/Category";
import Category from "@theme-original/DocSidebarItem/Category";

type Props = WrapperProps<typeof CategoryType>;

export default function CategoryWrapper(props: Props) {
	const { customProps } = props.item;

	return (
		<>
			{customProps?.showStaticLabel && customProps?.staticLabel ? (
				<small className="sidebar__category-label text-primary">
					{customProps.staticLabel.toString()}
				</small>
			) : null}
			<Category {...props} />
		</>
	);
}