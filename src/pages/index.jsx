import React from "react";
import Layout from "../components/layout";

const Hour = ({ name, src, hours }) => {
	return (
		<div className="flex flex-col items-center mx-4">
			<img
				className="h-48 w-48 object-cover rounded-full"
				src={src}
				alt={name}
			/>
			<span className="text-lg font-bold">{name}</span>
			<span>{hours}</span>
		</div>
	);
};

const IndexPage = () => {
	return (
		<Layout>
			<article>
				<section>{/* Carousel for Announcements */}</section>
				<section>
					<h1>Welcome to UCI Circle K!</h1>
					<p>
						This is THE BEST organization on campus! Feel free to explore the
						website to learn more about us! If you have any questions, contact a
						board member or family head. For any concerns about the website
						please contact the Technology chairs Steven Lam and Thomas Reynolds.
						Want to hang out online? Join our DISCORD! Click Here! (People are
						usually on at midnight) Join a voice channel! (We probably don't
						bite) Want to join? First register an account and then fill out the
						application! We have 13 LEGENDARY families that you can join. If you
						want to learn more about them, click on their family emblems! (Pages
						are still being worked on, but will be updated by the end of the
						summer!)
					</p>
				</section>
				<section>{/* Family */}</section>
				<section>{/* Service */}</section>
				<section className="text-center">
					<h2>Club Hours</h2>
					<div className="flex flex-col md:flex-row justify-center">
						<Hour
							name="Service"
							src="https://i.imgur.com/ZdpG13B.jpg"
							hours={0}
						/>
						<Hour
							name="Leadership"
							src="https://i.imgur.com/B4fFWI0.jpg"
							hours={0}
						/>
						<Hour
							name="Fellowship"
							src="https://i.imgur.com/iVHuukZ.jpg"
							hours={0}
						/>
					</div>
				</section>
				<section>{/*Member of the Week/ Citrus of the Month */}</section>
				<section>{/* Suggestions */}</section>
			</article>
		</Layout>
	);
};

export default IndexPage;
