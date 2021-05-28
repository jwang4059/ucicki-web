import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Layout from "../components/layout";
import cn from "classnames";
import Link from "../components/link";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Carousel = () => {
	return (
		<Swiper
			id="homeCarousel"
			tag="section"
			wrapperTag="ul"
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
		>
			<SwiperSlide tag="li">
				<div className="min-w-full min-h-full flex justify-center items-center bg-gray-900 text-white">
					<div className="flex flex-col max-w-6xl m-6">
						<h1 className="text-6xl font-extrabold mb-8">
							Welcome to UCI Circle K Clone
						</h1>
						<Link className="text-3xl font-bold my-2" href="/register">
							Register
						</Link>
						<Link className="text-3xl font-bold my-2" href="/login">
							Login
						</Link>
						<a
							className="text-3xl font-bold my-2"
							href="https://www.ucicirclek.com/"
						>
							Go to original website
						</a>
					</div>
				</div>
			</SwiperSlide>

			<SwiperSlide tag="li">
				<div className="min-w-full min-h-full flex flex-col justify-center items-center text-center pt-24 bg-gray-900 text-white">
					<span className="text-4xl font-bold mb-8">Tech Stack</span>
					<div className="mb-4">
						<span className="text-2xl font-semibold mb-2">Front End</span>
						<ul className="text-lg">
							<li>React.js</li>
							<li>Next.js</li>
							<li>TailwindCSS</li>
						</ul>
					</div>
					<div className="mb-4">
						<span className="text-2xl font-semibold mb-2">Back End</span>
						<ul className="text-lg">
							<li>Node.js</li>
							<li>Express.js</li>
							<li>REST API</li>
						</ul>
					</div>
					<div className="mb-4">
						<span className="text-2xl font-semibold mb-2">Databases</span>
						<ul className="text-lg">
							<li>Redis</li>
							<li>PostgreSQL</li>
						</ul>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

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
					<h2 className="text-2xl font-bold mb-4">{title}</h2>
					<p className="text-lg">{text}</p>
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
				<Carousel />
				<section className="flex justify-center items-center p-6">
					<div className="max-w-6xl">
						<h2 className="text-center text-3xl font-bold mb-4">
							What is UCI Circle K?
						</h2>
						<p className="text-lg">
							UCI Circle K is a community service organization that focuses on
							service, leadership, and fellowship. We are one of the largest
							club on UCI campus with over 400 paying members. As one of the
							largest clubs on campus, we offer a little bit of everything for
							everyone. Whether you're trying to meet new people, learn new
							skills, or help out the community, we have events, workshops, and
							socials to help you do just that. Feel free to explore our website
							and check out our events if you are interested and want to learn
							more.
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
							If you are ready to join, you can fill out the registration form.
							For more information, you can explore the website or check us out
							at one of our events. If you have any questions, contact a board
							member or family head. For any concerns about the website please
							contact the Technology chairs Steven Lam and Thomas Reynolds. Hope
							to see you soon!
						</p>
						<div className="flex justify-center">
							<Link className="w-2/3 max-w-xl my-8" href="/register">
								<button className="w-full py-2 px-4 shadow-sm text-sm font-bold rounded-md text-white bg-indigo-600">
									Register
								</button>
							</Link>
						</div>
					</div>
				</section>
			</article>
		</Layout>
	);
};

export default IndexPage;
