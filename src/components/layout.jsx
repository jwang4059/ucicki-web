import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUsers, faLeaf, faAnchor } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

library.add(fab, faUsers, faLeaf, faAnchor);

export const siteTitle = "UCICKI Website";

const Layout = ({ children }) => {
	return (
		<>
			<Head></Head>
			<div className="flex flex-col min-h-screen">
				<div className="flex-grow min-h-screen ">
					<Header />
					<main>{children}</main>
				</div>
				<Footer className="flex-shrink-0" />
			</div>
		</>
	);
};

export default Layout;
