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
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
			<link rel="manifest" href="/site.webmanifest"/>
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
			<meta name="apple-mobile-web-app-title" content="UCI Circle K"/>
			<meta name="application-name" content="UCI Circle K"/>
			<meta name="msapplication-TileColor" content="#ffc40d"/>
			<meta name="theme-color" content="#ffffff"/>
		</Head>
	);
};

export default SEO;
