import React from "react";
import Layout from "../../components/layout";
import EventCard from "../../components/eventCard";

const ProgramCard = ({ title, description, imgSrc, imgAlt }) => {
	return (
		<section className="p-6 bg-gray-300 grid gap-4">
			<h3 className="text-center text-lg font-semibold">{title}</h3>
			<div className="flex justify-center items-center">
				<img
					className="h-48 w-48 object-cover"
					src={imgSrc}
					alt={imgAlt || title || ""}
				/>
			</div>
			<p>{description}</p>
		</section>
	);
};

const FundraisingPage = () => {
	return (
		<Layout title="Leadership">
			<div className="max-w-7xl mx-auto">
				<h1 className="py-6 text-center text-3xl font-extrabold">
					Fundraising
				</h1>
				<article className="grid gap-4">
					<section className="p-6">
						<h2 className="mb-2 text-lg font-bold">About Fundraising</h2>
						<p>
							Collectively, the California-Nevada-Hawaii District supports three
							different organizations through our fundraising endeavors. These
							District Fundraising Initiatives (DFIs) are the Pediatric Trauma
							Program (PTP), the Kiwanis Family House (KFH), and the
							Environmental Defense Fund.
						</p>
						<p>
							Fundraising events are events that Circle K members attend to
							raise money for a variety of charitable programs. It is a great
							way to meet new people from all across the Circle K universe while
							helping a good cause!
						</p>
					</section>
					<div className="p-6 grid gap-4 md:grid-cols-3">
						<ProgramCard
							title="Pediatric Trauma Program"
							imgSrc="https://i1.wp.com/cnhcirclek.github.io/Images/Logos/icon_kidsc.png"
							description="Pediatric Trauma remains the leading cause of death and injury
								among children ages 14 and under in the United States. The
								mission of the Pediatric Trauma Program (PTP) is to develop
								local projects which will reduce the number of children who are
								killed or injured by trauma, ensuring all children live happy,
								healthy and safe lives. Funds are directed towards promoting
								community outreach, assisting partner hospitals, and providing
								advanced medical training for doctors. Ultimately, the goal of
								PTP is to prevent unintentional injury and death and to provide
								safety items for children around the world."
						/>
						<ProgramCard
							title="Kiwanis Family House"
							imgSrc="https://i2.wp.com/cnhcirclek.github.io/Images/Logos/icon_kfhc.png"
							description="The Kiwanis Family House seeks to provide temporary housing and
								support for families of severely ill or injured children being
								treated at the UC Davis Medical Center in Sacramento, CA or at
								Shriners Hospital. This low-cost housing can be especially
								important for families who must frequently travel long distances
								for treatment or must accommodate for extended treatment
								periods. Funds raised for this cause help to provide additional
								resources and to provide convenient, restful, secure, and low
								cost temporary housing for these families so that they may
								support their loved ones."
						/>
						<ProgramCard
							title="Environmental Defense Fund"
							imgSrc="https://i.imgur.com/LqSMUnm.png"
							description="Environmental Defense Fund's mission is to preserve the natural
								systems on which all life depends. Guided by science and
								economics, EDF finds practical and lasting solutions to the most
								serious environmental problems. Specific areas include: climate,
								oceans, ecosystems and health."
						/>
					</div>
				</article>
				<article className="grid gap-4 p-6">
					<h2 className="text-center text-xl font-bold">Fundraising Events</h2>
					<EventCard
						title="Crazy Kompetition for Infants (CKI) South"
						location="Stanton Park | District Event"
						description="Crazy Kompetition for Infants (CKI) is an annual event that raises money for Pediatric Trauma Program (PTP) through a series of fun, competitive mini-games and relays. CKI South attracts Circle K clubs from all around Southern California and Nevada to have fun and support a great cause."
						testimonials={[
							{
								name: "Michael Acasio",
								quote:
									"CKI South is an amazing event that brings together the ENTIRE southern half of the CNH District to play games in a collective effort to fundraise. The games change every year and offer solid, team-building challenges that allow people to grow closer to one another. It is an event that I look forward to every year because of all the fun and excitement it provides.",
							},
						]}
					/>
					<EventCard
						title="CK-Idol"
						location="Club Event"
						description="CK-Idol is an annual beauty pageant that UCI CKI holds, where we invite contestants from each family and schools outside of UCI. It is a fun event where we get to see some cool performances from the contestants, play mini games with the contestants, participate in raffles, and much more! Each year, there is a theme that goes along with the pageant, and the contestants have to act as a character according to the theme!"
					/>
					<EventCard
						title="Dance For A Chance (DFAC)"
						location="Club Event"
						description="Dance for a Chance is a six-hour dance marathon hosted by UC Irvine Circle K. In addition to six hours of dancing, Dance for a Chance also features everything from food to face painting and even live performances from some of UC Irvine's most talented dance crews. The best part about Dance for a Chance is that it's also a fundraiser, and all of the proceeds of the event will be donated to one of our DFIs."
						testimonials={[
							{
								name: "Joyce Wang",
								quote:
									"Dance for a Chance allows the club to come together to work on a large-scale fundraising project. It promotes service while allowing its participants to have fun on the dance floor with their friends. It helps foster our UCI Circle K community, but also the Irvine community at large.",
							},
						]}
					/>
					<EventCard
						title="Change Thru Games"
						location="Club Event"
						website="https://www.ucicirclek.com/ctg/"
						description="You can be a game changer! Change Thru Games is a 24-hour video game marathon brought to you by UCI Circle K! We’ll be playing a host of different games for your entertainment, all for the sake of raising money for charity."
					/>
				</article>
			</div>
		</Layout>
	);
};

export default FundraisingPage;
