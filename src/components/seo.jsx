import React from "react";
import Head from "next/head";

const defaultTitle = "UCI Circle K";
const defaultDescription =
	"UCI Circle K is a community service organization that focuses on service, leadership, and fellowship. We are one of the largest club on UCI campus with over 400 paying members.";

const SEO = ({ title, description = "" }) => {
	const metaDescription = description || defaultDescription;

	return (
		<Head>
			<title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="author" content="John Wang" />
			<meta
				name="keywords"
				content="circle k international, uci, ucicki, service organization, community service, volunteer, nonprofit, service, leadership, fellowship"
			/>
			<meta name="description" content={metaDescription} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={metaDescription} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="ucicirclek.xyz" />
			<meta
				property="og:image"
				content="https://www.ucicirclek.com/public/assets/img/petey.png"
			/>
		</Head>
	);
};

export default SEO;
