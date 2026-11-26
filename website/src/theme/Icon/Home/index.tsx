import React, { type ComponentProps } from "react";

// Outlined house from the Rational icon set, instead of Docusaurus's filled one.
export default function IconHome(props: ComponentProps<"svg">) {
	return (
		<svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
			<path
				d="M14 13.3333C14 13.7015 13.7015 14 13.3333 14H2.66667C2.29848 14 2 13.7015 2 13.3333V6.32605C2 6.12032 2.09498 5.92611 2.25737 5.79981L7.59073 1.65166C7.83147 1.46442 8.16853 1.46442 8.40927 1.65166L13.7426 5.79981C13.905 5.92611 14 6.12032 14 6.32605V13.3333ZM12.6667 12.6667V6.6521L8 3.02247L3.33333 6.6521V12.6667H12.6667Z"
				fill="currentColor"
			/>
		</svg>
	);
}
