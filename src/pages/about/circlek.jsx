import React from "react";
import Layout from "../../components/layout";

const Tenet = ({ title, text, imageSrc, imageAlt }) => (
	<section className="flex flex-col justify-center items-center p-6">
		<h3 className="text-xl font-semibold">{title}</h3>
		<img className="w-1/3" src={imageSrc} alt={imageAlt || title || ""} />
		<p>{text}</p>
	</section>
);

const Branch = ({ title, text }) => (
	<section className="flex flex-col justify-center items-center p-6 my-4">
		<h2 className="text-2xl font-bold mb-2">{title}</h2>
		<p>{text}</p>
	</section>
);
const AboutPage = () => {
	return (
		<Layout title="About">
			<section className="relative md:-mt-24">
				<div className="bg-black h-full w-full absolute z-10 bg-opacity-50 flex justify-center items-center">
					<h1 className="text-white text-4xl md:text-6xl text-center font-extrabold">
						About Circle K
					</h1>
				</div>
				<img
					className="max-h-screen w-full object-cover"
					src="https://i.imgur.com/3C2TLj9.jpg"
					alt=""
				/>
			</section>
			<section className="flex justify-center p-6">
				<div className=" max-w-6xl">
					<h2 className="text-xl font-bold mb-2">
						About Circle K International
					</h2>
					<p>
						Circle K International (CKI) is the premier collegiate and
						university community service, leadership development, and friendship
						organization in the world. With more than 13,770 members in 17
						nations, CKI is making a positive impact on the world every day.
					</p>
				</div>
			</section>
			<div className="md:flex md:justify-center md:items-center">
				<div className="md:max-w-6xl md:grid md:grid-cols-12 md:gap-4">
					<article className="bg-blue-200 md:col-span-5">
						<section className="flex flex-col justify-center items-center p-6">
							<img
								className="w-1/3"
								src="https://i.imgur.com/8SAo106.png"
								alt="Circle K International Emblem"
							/>
							<h2 className="text-xl font-bold">The 3 Tenets of Circle K</h2>
						</section>
						<Tenet
							title="Service"
							text="As one of the three tenets, service is the fundamental element of Circle K. Through service, we are making the world a better place one service project at a time. Together, Circle K truly makes a difference in the community."
							imageSrc="https://i.imgur.com/IuIosul.png"
						/>
						<Tenet
							title="Leadership"
							text="Through the mission and vision of the organization, Circle K is
						dedicated to the realization of humankind’s potential. The unique
						experiences offered by Circle K truly develop and bring out the
						leader within each individual."
							imageSrc="https://i.imgur.com/BC76JTV.png"
						/>
						<Tenet
							title="Fellowship"
							text="If there is one thing that Circle K knows best, it is fellowship.
						With each element and aspect of Circle K, members experience
						genuine fellowship and develop life-long relationships with fellow
						collegians, advisors, Kiwanians, and citizens in their communities."
							imageSrc="https://i.imgur.com/k2SzIgT.png"
						/>
					</article>
					<article className="bg-yellow-100 md:col-span-7 flex flex-col justify-center">
						<section className="flex flex-col justify-center items-center p-6 my-4">
							<h2 className="text-2xl font-bold">UCI Circle K</h2>
							<p>
								UCI Circle K is proud to be the largest Circle K club in the
								world with over 400 paying members. Last year, we completed over
								35,000 hours of service, leadership, and fellowship. Our weekly
								service projects include walking dogs at our local animal
								shelter, tutoring high school kids after class, and cleaning
								books ready to be donated to children in need. We also attend
								various local events throughout the year, including volunteering
								at OC Night Market, Disneyland, and Santa Ana Zoo. For more
								information about our events, click on the tabs above or visit
								our <span className="text-blue-700">calendar</span>!
							</p>
						</section>
						<Branch
							title="Citrus Division"
							text="UCI Circle K is part of the Citrus Division of Circle K clubs that encompasses CSU Fullerton, Chapman University, Golden West College, Irvine Valley College, Orange Coast College, Saddleback College, Santa Ana College, Soka University of America, and Whittier College Circle K's. This makes Citrus one of the largest divisions in the CNH District in terms of both the number of clubs and number of members."
						/>
						<Branch
							title="CNH District"
							text="The Citrus Division, and by extension UCI Circle K, is a part of the CNH District Circle K, which encompasses all 9 Circle K divsions found across California, Nevada, and Hawaii. The other 8 divisons are Capital, Central Coast, Desert Oasis, Foothill, Golden Gate, Metro, Paradise, and Sunset. Every year, all 9 divisions get together for several district-wide events, including Fall Training Conference and DLSSP."
						/>
						<Branch
							title="Kiwanis International"
							text="Kiwanis International is where everything comes together. Every Key Club, KIWINS, and Circle K are a part of the Kiwanis Family. Kiwanis focuses on changing the world through acts of service and accomplishes its goals through watching over its leadership service programs like Circle K."
						/>
					</article>
				</div>
			</div>
			<section className="flex flex-col justify-center items-center p-6">
				<h2 className="text-2xl font-bold">How Do I Join UCI Circle K?</h2>
				<p>
					Complete the <span className="text-blue-700">online application</span>
					! We look forward to meeting you!
				</p>
			</section>
		</Layout>
	);
};

export default AboutPage;
