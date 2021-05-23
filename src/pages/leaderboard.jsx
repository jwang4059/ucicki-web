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

const Leaderboard = () => {
	return (
		<Layout>
			<section>{/*Member of the Week/ Citrus of the Month */}</section>
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
		</Layout>
	);
};

export default Leaderboard;
