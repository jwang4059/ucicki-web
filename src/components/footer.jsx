import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ href, icon }) => (
	<a href={href} target="__blank" rel="noreferrer">
		<div className="flex justify-center items-center h-11 w-11 p-2 border-2 m-2 bg-gray-200 border-white rounded-full">
			<FontAwesomeIcon icon={icon} />
		</div>
	</a>
);

const Emblem = ({ href, src, alt }) => (
	<a href={href} target="__blank" rel="noreferrer">
		<img className="h-24 w-24 m-2" src={src} alt={alt} />
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
			<section className="bg-gray-400 flex flex-col text-center">
				<FooterSection title="Kiwanis">
					<div className="p-2">
						<Kiwani href="http://www.kiwanisclublakeforest.org/" icon="leaf">
							Lake Forest
						</Kiwani>
						<Kiwani
							href="https://sites.google.com/site/kiwanisofnewportbeach/"
							icon="anchor"
						>
							CDM/Newport
						</Kiwani>
					</div>
				</FooterSection>
				<FooterSection title="Circle K">
					<div className="flex justify-center p-2">
						<Emblem
							href="https://www.facebook.com/groups/cnhckicitrus/"
							src="https://i.imgur.com/fsG85vT.png"
							alt="Citrus Division Emblem"
						/>
						<Emblem
							href="http://www.circlek.org/"
							src="https://www.ucicirclek.com/public/css/cki_emblem.png"
							alt="Circle K International Emblem"
						/>
						<Emblem
							href="http://www.cnhcirclek.org/"
							src="https://www.ucicirclek.com/public/css/cnh_emblem.png"
							alt="Cal-Nev-Ha District Emblem"
						/>
					</div>
				</FooterSection>
				<FooterSection title="Connect With UCI CKI">
					<div className="flex justify-center items-center p-2">
						<Icon href="#" icon="users" />
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
			<section className="bg-yellow-300">
				<span className="block text-center uppercase p-2">
					© 2013-{new Date().getFullYear()} Circle K International at University
					of california, Irvine · All Rights Reserved
				</span>
			</section>
		</footer>
	);
};

export default Footer;
