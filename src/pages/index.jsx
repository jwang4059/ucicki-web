import React from "react";
import Layout from "../components/layout";
import cn from "classnames";

const Section = ({
	title,
	text,
	imageSrc,
	imageAlt,
	textColor = "text-black",
	bgColor = "bg-white",
	reverse = false,
}) => {
	const contentDirection = !reverse ? "md:flex-row" : "md:flex-row-reverse";
	const textMargin = !reverse ? "md:mr-6" : "md:ml-6";

	return (
		<section className={cn("flex justify-center p-6", textColor, bgColor)}>
			<div
				className={cn(
					"flex flex-col justify-center w-full max-w-6xl",
					contentDirection
				)}
			>
				<div
					className={cn(
						"flex-grow flex flex-col justify-center mb-6",
						textMargin
					)}
				>
					<h2 className="text-2xl font-bold">{title}</h2>
					<p className="text-lg my-2">{text}</p>
				</div>
				<div className="flex-shrink-0 flex justify-center items-center md:w-1/2">
					<img
						className="w-full max-w-xl object-cover"
						src={imageSrc}
						alt={imageAlt}
					/>
				</div>
			</div>
		</section>
	);
};

const IndexPage = () => {
	return (
		<Layout>
			<article>
				<section className="relative md:-mt-24">
					<div className="bg-black h-full w-full absolute z-10 bg-opacity-50 flex justify-center items-center">
						<h1 className="text-white text-4xl md:text-6xl text-center font-extrabold">
							Welcome to UCI Circle K
						</h1>
					</div>
					<img
						className="max-h-screen w-full object-cover"
						src="https://i.imgur.com/3C2TLj9.jpg"
						alt=""
					/>
				</section>
				<section className="text-center p-6">
					<p className="text-lg">
						UCI Circle K is a community service organization that focuses on the
						following 3 tenets: Service, Leadership, and Fellowship.
					</p>
				</section>
				<section className="flex justify-center p-6">
					<div className="max-w-6xl">
						<h2 className="text-2xl font-bold">What do we do?</h2>
						<p className="text-lg my-2">
							As one of the largest club on campus, we offer a little bit of
							everything for everyone. Whether you're trying to meet new people,
							learn new skills, or help out the community, we have events,
							workshops, and socials to help you do just that. Feel free to
							explore our website and check out our events if you are interested
							and want to learn more.
						</p>
					</div>
				</section>
				<Section
					title="Find a home away from home"
					text="Meeting new people can be challenging, especially at such a
								large school. To help you fit in and find people you click with
								easier, UCI Circle K offers 13 different families that you can
								join. Each family has a different feel and its own unique
								quirks."
					imageSrc="https://lh3.googleusercontent.com/pw/ACtC-3dMdzdbM1PsaRbUlFHOwuUppfa-9paH_RF13CQtpWtK92M11gQ4GUZByhzwWsr9K9o7-Zn5Gp-KIrzoka2u0wlJIYJ0MGPwzdHOf6vrNJveEVir2p3TBeBSg_WKT1-mOEEQYT66LyXEjmnWSb3_xbvZ=w1250-h938-no?authuser=0"
					imgAlt="Fam Pic"
					textColor="text-white"
					bgColor="bg-blue-700"
				/>
				<Section
					title="Develop and Grow"
					text="Blah Blah Blah join committees!!!"
					imageSrc="https://i.imgur.com/sTh5PNL.jpg"
					imgAlt="Service Pic"
					textColor="text-black"
					bgColor="bg-white"
					reverse
				/>
				<Section
					title="Give back to the community"
					text="UCI Circle K is a community service organization. This means we
								offer weekly service projects for members who want to give back
								to the community. You are NOT obligated to attend ANY service
								events, but it is definitely a worth while experience and a good
								way to meet new people."
					imageSrc="https://lh3.googleusercontent.com/pw/ACtC-3fMExUl82zv2EmdeGkxYohJnsyKNQ04c69M3t7MHMJvlFwa7UW1BZOBA-NJFCA39_E4eJ9hmI50QvyW0xx1wnAvgf9AUH47NIDDBBdcuNnpZo9Ll4Bl1zwo23noHQ-q_JNDqFYHMnUIJIZt7EUDeCM4=w1250-h938-no?authuser=0"
					imgAlt="Service Pic"
					textColor="text-white"
					bgColor="bg-green-600"
				/>
				<section className="flex justify-center p-6">
					<div className="max-w-6xl">
						<h2 className="text-2xl font-bold">Join UCI CKI today!</h2>
						<p className="text-lg my-2">
							If you are ready to join, fill out the registration form. Feel
							free to explore the website to learn more about us! If you have
							any questions, contact a board member or family head. For any
							concerns about the website please contact the Technology chairs
							Steven Lam and Thomas Reynolds.
						</p>
					</div>
				</section>
			</article>
		</Layout>
	);
};

export default IndexPage;
