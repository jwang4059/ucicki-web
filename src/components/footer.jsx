import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ href, icon }) => (
	<a href={href} target="__blank" rel="noreferrer">
		<div className="w-12 h-12 flex justify-center items-center p-2 border-2 m-2 bg-gray-200 border-white rounded-full">
			<FontAwesomeIcon className="w-6 h-6" icon={icon} />
		</div>
	</a>
);

const Emblem = ({ href, src, alt }) => (
	<a href={href} target="__blank" rel="noreferrer">
		<Image src={src} alt={alt} width="96" height="96" />
	</a>
);

const Kiwani = ({ href, icon, children }) => (
	<div className="flex justify-center items-center">
		<Icon href={href} icon={icon} />
		<a className="text-white" href={href} target="__blank" rel="noreferrer">
			{children}
		</a>
	</div>
);

const FooterSection = ({ title, children }) => (
	<section>
		<span className="text-white font-bold">{title}</span>
		{children}
	</section>
);

const Footer = (props) => {
	return (
		<footer {...props}>
			<section className="grid grid-cols-1 md:grid-cols-3 text-center bg-gray-500 p-6">
				<FooterSection title="Kiwanis">
					<div className="p-2">
						<Kiwani
							href="http://www.kiwanisclublakeforest.org/"
							icon={["fas", "leaf"]}
						>
							Lake Forest
						</Kiwani>
						<Kiwani
							href="https://sites.google.com/site/kiwanisofnewportbeach/"
							icon={["fas", "anchor"]}
						>
							CDM/Newport
						</Kiwani>
					</div>
				</FooterSection>
				<FooterSection title="Circle K">
					<div className="flex flex-wrap md:flex-nowrap md:flex-1 justify-center space-x-2 p-2">
						<Emblem
							href="https://www.facebook.com/groups/cnhckicitrus/"
							src="/citrus_emblem.png"
							alt="Citrus Division Emblem"
						/>
						<Emblem
							href="http://www.circlek.org/"
							src="/cki_emblem.png"
							alt="Circle K International Emblem"
						/>
						<Emblem
							href="http://www.cnhcirclek.org/"
							src="/cnh_emblem.png"
							alt="Cal-Nev-Ha District Emblem"
						/>
					</div>
				</FooterSection>
				<FooterSection title="Connect With UCI CKI">
					<div className="flex flex-wrap justify-center items-center p-2">
						<Icon href="#" icon={["fas", "users"]} />
						<Icon
							href="http://www.ucicirclek.com/facebook/"
							icon={["fab", "facebook"]}
						/>
						<Icon
							href="http://www.ucicirclek.com/instagram/"
							icon={["fab", "instagram"]}
						/>
						<Icon
							href="http://www.ucicirclek.com/snapchat/"
							icon={["fab", "snapchat"]}
						/>
						<Icon
							href="http://www.ucicirclek.com/youtube/"
							icon={["fab", "youtube"]}
						/>
						<Icon
							href="https://discord.com/invite/whW56nJ"
							icon={["fab", "discord"]}
						/>
					</div>
				</FooterSection>
			</section>
			<section className="bg-yellow-300 p-6">
				<p className="text-center uppercase">
					?? 2013-{new Date().getFullYear()} Circle K International at University
					of california, Irvine ?? All Rights Reserved
				</p>
			</section>
		</footer>
	);
};

export default Footer;
