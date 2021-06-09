import React from "react";
import NextLink from "next/link";

const AnchorTag = React.forwardRef(
	({ className, onClick, href, children }, ref) => {
		return (
			<a className={className} href={href} onClick={onClick} ref={ref}>
				{children}
			</a>
		);
	}
);

const Link = ({ className, href, children, external = false, ...props }) => {
	if (external) {
		return (
			<a className={className} href={href} {...props}>
				{children}
			</a>
		);
	}

	return (
		<NextLink href={href} passHref>
			<AnchorTag className={className} {...props}>
				{children}
			</AnchorTag>
		</NextLink>
	);
};

export default Link;
