import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import EventCard from "../../components/eventCard";

const IntroSection = ({ title, text }) => {
	return (
		<section>
			<h2 className="mb-2 text-xl font-bold">{title}</h2>
			<p className="text-base font-medium">{text}</p>
		</section>
	);
};

const ServicePage = () => {
	return (
		<Layout>
			<SEO title="Service" />
			<div className="max-w-7xl mx-auto">
				<h1 className="p-6 text-center text-3xl font-extrabold">Service</h1>
				<article className="grid gap-4 p-6">
					<IntroSection
						title="What is Service?"
						text="As one of the three tenets, service is the fundamental element of
						Circle K International. Collectively, through service, Circle K
						members make an impact on their campuses and communities. Without
						service, Circle K International would be just another campus
						activity. College students are making the world a better place one
						service project at a time by volunteering at various local
						institutions. Members can also discover their love for service by
						doing service projects. They can do service projects with other
						schools around the Citrus Division and beyond. Together, Circle
						K'ers truly make a difference in the community."
					/>
					<IntroSection
						title="Service Initiatives"
						text="Each year, the Cal-Nev-Ha District of Circle K adopts and works
							toward a new District Service Initiative (DSI). A DSI is our
							district’s service goal to promote within the club and educate the
							members about. It’s up to the club’s service chairs to come up
							with activities, events and service that relate or contribute to
							our DSI such as table-top service projects or workshops pertaining
							to the DSI. The purpose of the DSI is to help spread awareness to
							issues that our world is currently facing. In years past, our DSIs
							have ranged from Leaping Towards Literacy (2014-2015), Hope for
							the Homeless (2015-2016), Serve to Conserve: Planet Conservation
							(2016-2017), Be the Change - Personal Health (2017-2018), Helping
							Those With Disabilities (2018-2019), and last year’s term had the
							challenge of taking on the DSI of Focusing on Education. For this
							year, the district has chosen the DSI to be Environmental
							Sustainability."
					/>
					<IntroSection
						title="What is Environmental Sustainability?"
						text="Environmental sustainability is responsibly interacting with the
							planet to maintain natural resources and avoid jeopardizing the
							ability for future generations to meet their needs."
					/>
					<IntroSection
						title="How can YOU make a difference?"
						text="With endless service and leadership opportunities in Circle K,
							there are so many ways that you can contribute to the DSI this
							year! From chairing service projects to planning tabletop service
							projects related to the DSI, you can make a difference regardless
							of how you do it. Whether you’re creating your own project from
							scratch or working with non-profit organizations focused on
							awareness, every step that CNH Circle K takes towards the
							initiative, we thank you for your passion and dedication towards
							serving our community and helping us reach our goal as a district!"
					/>
				</article>
				<article className="grid gap-4 p-6">
					<h2 className="text-center text-xl font-bold">District Events</h2>
					<EventCard
						title="District Large Scale Service Project (DLSSP)"
						subheading="District Event"
						description="CNH Circle K holds a DLSSP event related to its District Service
							Initiative to help the community in many ways. In 2020, members
							will serve to conserve by removing weeds and restoring ecological
							areas so that those areas can once again become green."
					/>
					<EventCard
						title="Divisional Service Projects"
						subheading="District Event"
						description="Divisional Service Projects are projects where Citrus Circle K
							members work closely with other organizations in order to help our
							community. Such projects promote networking throughout the
							division in order to achieve a higher goal of helping our local
							community. Divisional Service Projects include marathons, special
							olympics, helping homeless shelters, OC Food Bank, and other
							volunteer events."
					/>
				</article>
				<article className="p-6">
					<h2 className="text-center text-xl font-bold mb-6">Club Events</h2>
					<div className="grid md:grid-cols-2 md:gap-x-6">
						<div className="grid gap-6 mb-6">
							<EventCard
								title="Spring Into Service"
								subheading="UCI | Club Event"
								description="Spring Into Service is UCI Circle K's special week to jumpstart
							service for the first week of a new term! Members and non-members
							learn about the service events and projects the club has to offer,
							such as Tabitha's Blessings, on-campus cleanup, and the
							Environmental Nature Center. Members can also learn more about the
							new board and the events they plan to offer. Other activities
							include tabling and fundraisers."
							/>
							<EventCard
								title="Tabitha's Blessings Food Distribution"
								subheading="Civic Center (Santa Ana) | Club Event"
								website="http://www.tabithasblessings.org/"
								imgSrc="https://i.imgur.com/7Zl7ZLF.jpg"
								imgClass="w-64 max-w-sm object-cover"
								description="Tabitha's Blessings is devoted to providing food, hygiene products, and other supportive services to the homeless and those who live at or below the poverty level. Volunteers hand out food to homeless individuals in the city of Santa Ana."
								testimonials={[
									{
										name: "Tony Keo",
										quote:
											"Tabitha's Blessings makes a person crave for more service. It's such a warm feeling to share smiles with those in need. That's how I know it made an impact. Tabitha's is one of the many service events that make you want to come back after graduating.",
									},
								]}
							/>
							<EventCard
								title="South County Outreach "
								subheading="SCO Center | Club Event"
								website="http://www.sco-oc.org/"
								imgSrc="https://i.imgur.com/V23VACC.jpg"
								imgClass="w-64 max-w-sm object-cover"
								description="South County Outreach distributes nearly one million pounds of emergency, non-perishable and fresh food to an average of 9,000 families annually. Volunteers help in their warehouse."
							/>
							<EventCard
								title="Hemopet"
								subheading="Hemopet Canine Blood Bank (Garden Grove) | Club Event"
								website="http://www.hemopet.org/"
								description="Hemopet is a full-service facility consisting of an animal blood bank, greyhound rescue and adoption, and specialty veterinary diagnostic laboratory. Volunteers help walk and play with the greyhounds to keep them happy, healthy, and ready for adoption."
								testimonials={[
									{
										name: "Luci Villasenor",
										quote:
											"I enjoyed this event because animals are an enormous part of my life. Although the greyhounds can't literally tell us 'Hey, thanks for walking me today', you can tell that they really feel loved by the way they wag their tails and get excited when they see us. Those moments are what make waking up at 8AM worth it",
									},
									{
										name: "Raymond Ta",
										quote:
											"I like dogs. I'm glad to have come out for Hemopet because I had a lot of fun. It also felt good to do service alongside great individuals.",
									},
								]}
							/>
						</div>
						<div className="grid gap-6">
							<EventCard
								title="Girls Incorporated"
								subheading="Pomona Elementary (Costa Mesa) | Club Event"
								website="http://www.girlsinc.org/"
								imgSrc="https://i.imgur.com/Tn4IIsA.png"
								imgClass="w-64 max-w-sm object-cover"
								description="Girls Inc. inspires all girls to be strong, smart, and bold, providing more than 140,000 girls across the U.S. and Canada with life-changing experiences and solutions to the unique challenges girls face. The Girls Inc. Experience consists of people, an environment, and programming that, together, empower girls to succeed. Volunteers read with girls in grades 1 through 3 in small groups to allow them to practice their English skills."
								testimonials={[
									{
										name: "Winnie Lam",
										quote:
											"I think the most rewarding thing about this service project is seeing how much the girls improve and grow in their reading and writing skills. When I started, one of the girls I tutored read picture books and now she's reading big chapter books. It makes me proud seeing how much they develop in a short amount of time!",
									},
								]}
							/>
							<EventCard
								title="Save Our Youth"
								subheading="SOY Center (Costa Mesa) | Club Event"
								website="http://save-our-youth.org/"
								imgSrc="https://i.imgur.com/w5vcWP7.png"
								imgClass="w-64 max-w-sm object-cover"
								description="Save Our Youth (SOY) empowers the youth of Newport Mesa to make positive decisions in life through a variety of programs including academic, dance, art, music, health, fitness, and student empowerment. Volunteers help tutor children and teenagers by talking to them, helping them on homework, and make sure that they stay focused on their academics."
								testimonials={[
									{
										name: "Jessica Camacho",
										quote:
											"As a first generation, low-income student, I love tutoring at SOY because I get to help out those students who were once in my position. Whether it is tutoring them in a subject they’re struggling in or just talking to the students, you can create a great impact that can change the rest of their lives",
									},
								]}
							/>
							<EventCard
								title="Child Creativity Lab"
								subheading="Orange County | Club Event"
								website="http://childcreativitylab.org/"
								imgSrc="https://i.imgur.com/1iWvrcA.png"
								imgClass="w-64 max-w-sm object-cover"
								description="The Child Creativity Lab's mission is to nurture the creative mindset of our children in the headwinds of the busy lifestyles of working parents, the consuming technology culture of our youth, and standardized testing for purposes of enhancing problem solving, critical thinking, divergent thinking, and ability to innovate. Volunteers help lead the workshops and interact with kids to provide them with a fun and educational learning experience."
								testimonials={[
									{
										name: "Jenny Li",
										quote:
											"Child Creativity Lab is one of my favorite service events. Seeing the children's excitement and enthusiasm as they worked together to create art is really touching and I'm glad that I was able to help foster creativity in young children.",
									},
								]}
							/>
						</div>
					</div>
				</article>
			</div>
		</Layout>
	);
};

export default ServicePage;
