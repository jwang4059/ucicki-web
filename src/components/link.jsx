import React from "react";
import NextLink from "next/link";

const AnchorTag = React.forwardRef(({ onClick, href, children }, ref) => {
	return (
		<a href={href} onClick={onClick} ref={ref}>
			{children}
		</a>
	);
});

const Link = ({ href, children }) => {
	return (
		<NextLink href={href} passHref>
			<AnchorTag>{children}</AnchorTag>
		</NextLink>
	);
};

export default Link;
