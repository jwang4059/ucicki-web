import React from "react";
import NextLink from "next/link";
import cn from "classnames";

const AnchorTag = React.forwardRef(
	({ className, onClick, href, children }, ref) => {
		return (
			<a className={className} href={href} onClick={onClick} ref={ref}>
				{children}
			</a>
		);
	}
);

const Link = ({
	className,
	href,
	children,
	external = false,
	colored = false,
	...props
}) => {
	const classes = cn(className, { "text-blue-700 hover:underline": colored });

	if (external) {
		return (
			<a
				className={classes}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				{...props}
			>
				{children}
			</a>
		);
	}

	return (
		<NextLink href={href} passHref>
			<AnchorTag className={classes} {...props}>
				{children}
			</AnchorTag>
		</NextLink>
	);
};

export default Link;
