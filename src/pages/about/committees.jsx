import React from "react";
import Layout from "../../components/layout";

const CommitteeSection = ({ name, heads, children, imgSrc, imgAlt }) => {
	return (
		<section className="flex flex-col md:flex-row justify-center items-center bg-gray-200 mb-8 rounded-md shadow-md md:p-4">
			<div className="flex-shrink-0">
				<img
					className="w-full md:w-72 md:h-48 object-cover md:mr-4"
					src={imgSrc}
					alt={imgAlt || name || ""}
				/>
			</div>
			<div className="flex-grow flex-flex-col p-2">
				<h2 className="text-xl text-blue-900 font-semibold mb-2">{name}</h2>
				<span className="block mb-4">
					Heads: <em>{heads}</em>
				</span>
				{children}
			</div>
		</section>
	);
};

const CommitteesPage = () => {
	return (
		<Layout>
			<div className="p-6">
				<article className="mb-4">
					<h1 className="text-4xl text-center font-bold mb-2">
						About Club Committees
					</h1>
					<p>
						As one of the largest clubs on campus, it is difficult to get
						everything done alone. That is why we have committee meetings to
						give our members a chance to directly get involved with our club!
						Each committee specializes in one particular aspect of our club, and
						once in a while we'll even hold workshops to help you guys develop
						your personal skills! Here is a look at some of our club committees.
						Check out our calendar for times!
					</p>
				</article>
				<article>
					<CommitteeSection
						name="Fundraising Committee"
						heads="Alexis Bright and Hillary Le"
						imgSrc="https://i.imgur.com/48mQ2HX.jpg"
					>
						<p className="mb-2">
							"The Fun-D-raising committee works to bring everything from small
							to large scale fundraisers such as Variety Show and Mr. CKI to
							life that help support Circle K International's District
							Fundraising Initiatives (DFIs) of the term. This term, the
							Fun-D-raising committee is also working to improve the quality and
							quantity of our events for our members!"
						</p>
						<p className="mb-2">
							"Responsibilities vary in different aspects of the club and in
							fundraising committee those tasks tend to gravitate towards
							team-building. As we worked on a few small and large scales
							fundraisers for the club, I began appreciating what each
							individual in the committee was able to contribute to the table
							while also expanding our own learning experiences."
						</p>
						<p className="mb-2">
							-Kathy Nguyen (Fundraising Committee Member Spring 2019 and 2020){" "}
						</p>
					</CommitteeSection>
					<CommitteeSection
						name="Kiwanis Family Committee"
						heads="Celina Tiqui and Kimhuy Ngo"
						imgSrc="https://i.imgur.com/Xj1wuA0.jpg"
					>
						<p>
							"The K-fam committee is about discussing future events that
							members would like to participate in with our local Kiwanis
							family. Also, it is to discuss and provide more information for
							members that would like to volunteer in service events involving
							the Kiwanians or our club in general." Make sure to check out
							these pages: Kiwanis, Circle K International, Kiwanis Aktion Club,
							Kiwanis Builders Club, Kiwanis Kids!
						</p>
					</CommitteeSection>
					<CommitteeSection
						name="Technology Internship Program (TIP)"
						heads="Tin Luu and Travis Nguyen"
						imgSrc="https://i.imgur.com/Y3xFFfG.jpgG"
					>
						<p>
							"In the Technology Internship Program, you will be working with
							the Technology chair directly on the website’s features while
							updating the website content with your peers. No programming
							experience is required, but everyone will get the chance to code
							something if they wish! Visit the TIP page for more information!"
						</p>
					</CommitteeSection>
					<CommitteeSection
						name="Change Thru Games (DLC)"
						heads="James Molamphy"
						imgSrc="https://i.imgur.com/MUPJ2ls.jpg"
					>
						<p>
							“Change Thru Games (CTG) Committee works together to put on a
							12-hour video game marathon. Members can come to CTG to play video
							games, play board games, dare the committee, and participate in
							tournaments. For more information, check out our Facebook page!"
						</p>
					</CommitteeSection>
					<CommitteeSection
						name="Dance for a Chance"
						heads="Yvonne Dai"
						imgSrc="https://i.imgur.com/nag1cym.jpg"
					>
						<p>
							"Dance for a Chance is a four hour dance festival and fundraiser
							that takes place in spring quarter. The event includes dancing,
							performances, booths, food and much more!"
						</p>
					</CommitteeSection>
					<CommitteeSection
						name="Hunger Over Easy"
						heads=" Terry Nguyen"
						imgSrc="https://i.imgur.com/MUhr0T0.png"
					>
						<p>
							“Hunger Over Easy is a six-hour, Chopped-style competition. First
							started in 2016, Hunger Over Easy has attracted ‘aspiring chefs’
							to join together and become the best. Want to participate? Feel
							free to become a fellow chef on the cutting board or the planning
							board! Committee applications coming soon in Fall Quarter 2020.”
						</p>
					</CommitteeSection>
				</article>
			</div>
		</Layout>
	);
};

export default CommitteesPage;
