import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import EventCard from "../../components/eventCard";

const LeadershipPage = () => {
	return (
		<Layout>
			<SEO title="Leadership" />
			<div className="max-w-7xl mx-auto">
				<h1 className="p-6 text-center text-3xl font-extrabold">Leadership</h1>
				<article className="grid gap-4 p-6">
					<section>
						<h2 className="mb-2 text-xl font-bold">What is Leadership?</h2>
						<p>
							More than a passive definition, Leadership is an active tenet of
							Circle K International. Regardless of title or position,
							leadership is about personal growth, learning new sets of skills,
							and implementing those skills to help your club and serve your
							organization. The unique experiences offered by Circle K truly
							develop and bring out the leader within each individual.
						</p>
					</section>
					<section>
						<h2 className="mb-2 text-xl font-bold">Committees</h2>
						<p>
							One of the easiest ways to start developing your leadership is by
							attending open committee meetings. Circle K has many committees
							that each concentrate on a specific area of our club, so there is
							bound to be one committee that will peak your interest. Cooperate
							with the committee heads as well as the other committee members to
							develop your own personal skills and contribute in making the
							club's experience even better for everyone. For more information,
							check out the club committee page!
						</p>
					</section>
				</article>
				<article className="grid gap-4 p-6">
					<h2 className="text-center text-xl font-bold">District Events</h2>
					<EventCard
						title="Fall Training Conference (FTC)"
						subheading="Sonora, CA | District Event"
						website="http://ftc.cnhcirclek.org/"
						imgSrc="https://i.imgur.com/UrV9X18.jpg"
						imgClass="w-full max-w-md object-cover"
						description="Come on set sail with Cal-Nev-Ha this November at Sonora. Join us as we leave on a voyage across the seven seas and learn about what Circle K has to offer. Returning member? Explore the depths the oceans and delve deep into this year's workshops and learn more about not just Circle K, but also about yourself. Come out and have fun with us as we set sail on this amazing journey to explore the tenets of Service, Leadership, Fellowship, and Spirit! Get formally inducted into Circle K International! Attend workshops and learn more about what Circle K can do for you, enjoy a full day of fun, games, campfire skits, and dancing, make friends, build relationships, and grow as a leader in a variety of different activities!"
						testimonials={[
							{
								name: "Angelina Chanthanouvong",
								quote:
									"Fall Training Conference was the first exposure that I had to the entire CNH Circle K District. This was the event that solidified my love for Circle K and encouraged me to go above and beyond in the organization. I am so thankful for the people that I met at FTC and for the love and support from the entire district",
							},
							{
								name: "Kyle Dimla",
								quote:
									"Fall Training Conference was simply amazing. I met so many friendly and welcoming people, cheered my heart out not only for UCI Circle K but for other clubs and divisions, and reunited with friends from Key Club. Dancing in the campfire skit with UCI CKI made my FTC experience even more wonderful!",
							},
							{
								name: "Alex D. Nguyen",
								quote: `My Fall Training Conference experience can be described as "magical." When I was a first year, I didn't get the opportunity to attend and be a part of special traditions that FTC had to offer members, but by being on the planning side of things this term, I was able to understand and witness the magic of this event offered our members. Planned and geared towards new members, FTC 2016 was a 3-day, 2-night, tropical experience in Sonora, CA that had workshops, campfire skits, awards, divisional bonding, service projects, scavenger hunts, slideshows, and so much more! This year, the event was planned by our District Fall Training Conference Chair, Claire Lee from UC Berkeley Circle K. Amongst her committee we had two of our very own members involved with the planning of the event, which includes Josh Montefalcon and Priscilla Lu. These people did an amazing job and making this event come to life this year as a tropical resort in the mountains. FTC is truly an event that inspires you to do more and get more involved! If you didn't get a chance to go this year, then should go next year. The magic never ends and it just keeps getting better! This year's FTC is my last one and although it flew by quick, I am thankful for the experience I had as a Club President, Lieutenant Governor, and District Governor at this event because each year showed me a different side to the event and inspired me to do more for my members.`,
							},
						]}
					/>
					<EventCard
						title="District Convention (DCON)"
						subheading="Los Angeles, CA | District Event"
						website="http://dcon.cnhcirclek.org/"
						imgSrc="https://i.imgur.com/rxwBAvt.jpg"
						imgClass="w-full max-w-md object-cover"
						description="DCON is a weekend long event to give recognition to our Circle K members who went above and beyond in any of our three tenets: service, leadership, and fellowship. Celebrate and recognize a year's worth of accomplishments, engage in plenty of educational opportunities with the avaiable workshops that provide the knowledge for you to share with your clubs, elect our new leaders for the following year, and build lifelong friendships with other members from across California, Nevada, and Hawaii. Join us at one of our district's largest events and summon the spirit to a thrilling weekend!"
						testimonials={[
							{
								name: "Joseph Castro",
								quote:
									"My most memorable part about DCON was when UC Riverside approached us and we did the Burger Cheer so successfully! An hour before dinner, I remember brushing up on the burger cheer with our fellow UCI members and even taught our new Botellaly counter cheer cause I had a feeling they would initiate it once the Awards ceremony was over. In the end, we killed it and both UC Riverside & UC Irvine gave some Magic Oasis love to show off our awesome spirit and sportsmanship!",
							},
							{
								name: "Derek Tran",
								quote:
									"DCON may be an expensive price to pay, but it is honestly one of the best experiences in Circle K. I love celebrating all the things that our club accomplished during the year and thinking about all the people that I've met, especially among all the other Circle K schools in California, Nevada and Hawaii. I feel like once you go to DCON, you will feel so much pride for your school, division and district, and come back to share that pride with your home club.",
							},
						]}
					/>
					<EventCard
						title="Spring Training Conference (STC)"
						subheading="Fullerton, CA | District Event"
						website="https://stc.cnhcirclek.org/"
						imgSrc="https://i.imgur.com/XeQuHC5.jpg"
						imgClass="w-full max-w-md object-cover"
						description="STC is an amazing opportunity to make real world connections with our CKI network and to develop your leadership skills. Through workshops that pertain to respective positions, personal and professional development, and your interests, there are many opportunities to grow and meet CKI members from throughout the district."
						testimonials={[
							{
								name: "Alan Nguyen",
								quote:
									"Spring Training Conference North/South (STC) is a district event in which all of California-Nevada-Hawaii Circle K members come together to be educated about the aspects of Circle. This is one of the first district events I have attended when the new Circle K term began and this event has been really insightful to learn how to be a better general member, how to get involved in district, etc. It is such an important event especially for new officers in the next term to learn to become better leaders for their club. Overall, I appreciate this event that I have attended for the purpose of gaining insights of Circle K International.",
							},
							{
								name: "Cristian Palomo",
								quote:
									"Spring Training Conference is a unique experience that offers opportunities for learning and growth like District Convention does but on a smaller and more intimate scale. One of my favorite parts of the experience is that you get the opportunity to meet members from other clubs and also get to learn from their experiences. If that sounds even the slightest bit interesting to you, I highly recommend you attend the event!",
							},
						]}
					/>
				</article>
				<article className="grid gap-4 p-6">
					<h2 className="text-center text-xl font-bold">Club Events</h2>
					<EventCard
						title="General Member Leadership Retreat"
						subheading="San Diego, CA | Club Event"
						imgSrc="https://i.imgur.com/keikrpd.jpg"
						imgClass="w-full max-w-md object-cover"
						description="Grow and develop your leadership skills in this one weekend trip with many other UCICKI members. Attend workshops hosted by your very own fellow members as they help you expand your potential as a leader. It is still a retreat, so build those long-lasting relationships by having fun and bonding as one big Circle K family."
						testimonials={[
							{
								name: "Marvin Bolainez",
								quote:
									"General Member Leadership Retreat was my last Circle K event of 2016, and it was a very inspirational experience. As a general member I had only a slight glimpse of the leadership opportunities offered in our club. By the end of the retreat not only did I make new friendships but I also strengthened others. Overall, I left GMLR with information about leadership opportunities at different levels of Circle K International and with new skills to be successful in future leadership roles",
							},
							{
								name: "Kevin Carizon",
								quote:
									"Planning General Member Leadership retreat was one of the most rewarding experiences I’ve had in CKI. I was able to witness the growth of many members in this retreat. The members participated in team-building activities, attended workshops, and formed discussion groups. I was continually impressed with the leadership skills the members presented throughout the whole weekend. I know the members who attended will do great things in the future within and outside of the club.",
							},
						]}
					/>
				</article>
			</div>
		</Layout>
	);
};

export default LeadershipPage;
