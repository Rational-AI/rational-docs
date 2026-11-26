import React, { type ComponentProps } from "react";

// Outlined octagon with "!" from the Rational icon set, instead of Docusaurus's filled triangle.
export default function AdmonitionIconWarning(props: ComponentProps<"svg">) {
	return (
		<svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
			<path d="M10.4867 2H5.51333L2 5.51333V10.4867L5.51333 14H10.4867L14 10.4867V5.51333L10.4867 2ZM12.6667 9.93333L9.93333 12.6667H6.06667L3.33333 9.93333V6.06667L6.06667 3.33333H9.93333L12.6667 6.06667V9.93333Z" />
			<path d="M8 11.3333C8.36819 11.3333 8.66667 11.0349 8.66667 10.6667C8.66667 10.2985 8.36819 10 8 10C7.63181 10 7.33333 10.2985 7.33333 10.6667C7.33333 11.0349 7.63181 11.3333 8 11.3333Z" />
			<path d="M7.33333 4.66667H8.66667V9.33333H7.33333V4.66667Z" />
		</svg>
	);
}
