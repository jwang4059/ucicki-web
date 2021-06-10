import React from "react";
import Layout from "../../components/layout";
import EventCard from "../../components/eventCard";

const FellowshipPage = () => {
	return (
		<Layout title="Leadership">
			<div className="max-w-7xl mx-auto">
				<h1 className="py-6 text-center text-3xl font-extrabold">Fellowship</h1>
				<article className="grid gap-4">
					<section className="p-6">
						<h2 className="mb-2 text-lg font-bold">What is Fellowship?</h2>
						<p>
							If there is one thing that Circle K knows best, it's fellowship.
							Members get the chance to build connections and develop life-long
							relationships with fellow collegians, advisors, Kiwanians, and
							citizens in their communities.
						</p>
						<p>
							For starters, UCI Circle K has a family system where members are
							joined with their potential “brothers” and “sisters”. To help new
							(and returning) littles settle into their new families, the bigs
							of each family plan out social events as well as encourage
							participation in the club-wide events. For many members, this
							system has fostered long-term relationships and provided a
							welcoming support system for everyone.
						</p>
						<p>
							For those that are excited to meet more people in Circle K, the
							mentor-mentee program pairs new Circle K members with older Circle
							K members. This allows newer members to learn more about what
							Circle K has to offer them while bonding with their mentors.
						</p>
						<p>
							Throughout the year, UCI Circle K plans many club-wide events, big
							and small, to promote a strong sense of companionship and the
							tight bond that each member will experience during their time in
							the club (which will hopefully transfer into their time at UCI) ;)
						</p>
					</section>
				</article>
				<article className="grid gap-4 p-6">
					<h2 className="text-center text-xl font-bold">Club Events</h2>
					<EventCard
						title="Snocial"
						location="Big Bear Lake | Club Event"
						description="Do you want to build a snowman? Take a break from school and go on a weekend adventure! Snocial is a 3-day-long weekend event that takes place every winter in Big Bear. Join your fellow Circle K members and have fun in the snow! Enjoy snowball fights, snow tubing, snowman making, and hanging out in a huge cabin! Food and transportation are included. Bond with Circle K members from every family, make new friends, and participate in leadership exercises to help you grow as a person!"
						testimonials={[
							{
								name: "Kimberly Bui",
								quote:
									"Snocial was probably one of my favorite social events for me. It is nice to give yourself time to enjoy yourself, your friends, and nature despite it occurring during the quarter. You may think you don’t have time for it because you have to study, but you know what, YOLO!",
							},
						]}
					/>
					<EventCard
						title="Assassins"
						location="UCI | Club Event"
						description="You’re alone in a dark room. A light turns on, revealing a table and on top of it, a folder. You pick up the folder and open it. Inside is a photo of a person you don’t recognize. You then hear an ominous voice and it shakes you to your very core: “This contract’s big. Don’t pass this up.” In this “deadly” game, become part of a team of Circle K members that has only one goal in mind: “eliminate” the opposition and win. Work together with your fellow teammates to “attack” other teams but be aware of who you trust. Get “killed” and you’re out of the game. “Kill weapon” is designated each week. GLHF."
						testimonials={[
							{
								name: "William Le",
								quote:
									"Playing assassins was pretty fun, it was my first time so it was a great experience even though I died within the first hour. Even though we had to carry really silly items, I still thought assassins was a great event",
							},
						]}
					/>
					<EventCard
						title="Family Day"
						location="Mason Park / Corona Del Mar | Club Event"
						description="STC is an amazing opportunity to make real world connections with our CKI network and to develop your leadership skills. Through workshops that pertain to respective positions, personal and professional development, and your interests, there are many opportunities to grow and meet CKI members from throughout the district."
						testimonials={[
							{
								name: "Jeffrey Moreno",
								quote:
									"My first ever family day was honestly a lot of fun to not only participate in, but also to help plan! Getting to see everyone represent their own family in such bright colors and all decked out really brought a smile to my face! It was honestly really cool to see so many people come out to play games and try to show off how well they can work together with their sibs and bigs! It’s honestly just a really fun day all around getting to play some field games, which is a nice change of pace from the usual indoor setting we tend to be in. It’s not often that you can just goof around and play some games during school so the fact that so many people came out was really refreshing and nice! I love the fact that people can be playfully competitive one second playing capture the big and yet super chill and relaxed enjoying a nice meal together the next. The thing I truly loved about this event is that it really offers more interaction with other people outside of your own family! I really enjoyed getting to meet new people and it was nice to catch up with people I hadn’t seen in a while! It’s honestly just such a fun event and I can’t wait for the next one!",
							},
							{
								name: "Alan Nguyen",
								quote:
									"Family day is a joyous day of being with our families and our Circle K family. This day is filled with positive energy, radiant love, and a whole lot of fun. Family Day is a special day of powerful bonding, humorous activities, and creating a 'home' feeling within our families and UCI Circle K",
							},
						]}
					/>
					<EventCard
						title="General Member Retreat"
						description="General Member Retreat is a summer-only event dedicated to thanking all the general members for their efforts through service, leadership and fellowship for the Circle K term. This event also welcomes any incoming freshmen interested to learn more about UCI Circle K as well as CKI alumni who just want to hang out. Last year, the venue was in a beach house located in Oxnard, CA. The amazing Member and Development Relations chairs customize this retreat to make it as fun and inviting to everyone in Circle K and with a variety of activities planned each time, get ready for good times and great laughs."
					/>
				</article>
				<article>
					<section className="p-6">
						<h2 className="text-center text-xl font-bold">Quarterly Socials</h2>
						<p>
							Exam season is coming. You’ve pulled one too many all-nighters and
							now you’re looking for a way to restrain yourself from going
							(potentially) insane. Hoo boy, does UCI CKI have the solution for
							you! Every quarter the wonderful social chair(s) plan destressing
							events where all members get to partake in fun activities such as
							painting, having ice cream and donuts, or hunting for items in
							Downtown Disney. During finals week of every quarter, Green
							Thrones (@ UCI Student Center) welcomes all members who need a
							quiet place to study as well as to take a break from finals in
							general. Whether you’re feeling tuckered out from studying or just
							wanting to release some steam, go to these events and possibly
							meet someone new from Circle K; who knows?
						</p>
					</section>
					<section className="p-6 grid gap-4 md:grid-cols-3">
						<img
							className="h-64 w-full max-w-lg mx-auto object-cover"
							src="https://i.imgur.com/GUI9sP3.jpg"
							alt="Broomball"
						/>
						<img
							className="h-64 w-full max-w-lg mx-auto object-cover"
							src="https://i.imgur.com/WiEJTuo.jpg"
							alt="Scavenger Hunt"
						/>
						<img
							className="h-64 w-full max-w-lg mx-auto object-cover"
							src="https://i.imgur.com/6UOu9DP.jpg"
							alt="Seaside Donuts"
						/>
					</section>
				</article>
				<article>
					<section className="p-6">
						<h2 className="text-center text-xl font-bold">Collab Socials</h2>
						<p>
							UCI CKI extends a welcoming hand not only to members within the
							club, but also to the other colleges that belong in the Cal-Nev-Ha
							district. Besides, it wouldn't hurt to say hi or socialize with
							our fellow non-UCI Kiwanians once in a while right? There aren't
							many opportunities outside of DCON and TCs that we get to interact
							with members outside of UCI. Thus, there are collab socials! Just
							like the socials that are held for UCI CKI members, these collab
							socials are sometimes bigger but offer the same amount of fun and
							quality time. Whether it's munching on delicious donuts at Seaside
							Bakery or enjoying a cold ice cream cone at Afters, you still get
							to bond with the people around you. So, if you can’t make it to
							DCON or the TCs and still want to meet new people within the
							district, give these socials a go! :D
						</p>
					</section>
					<div className="p-6 grid gap-4 md:grid-cols-2">
						<EventCard
							title="UCICKI Visits..."
							location="Orange Coast College and Others | Club Event"
							description="Have you ever wondered about the other colleges that are part of the Cal-Nev-Ha district and how they run their Circle K’s? Are you down to meeting fellow Circle-Kers from different campuses? Well, any of the UCICKI Visits… are good opportunities to do so! They’re one-night events in which a group of UCI Circle-Kers travel to one of the other Cal-Nev-Ha colleges, attend one of their general meetings, and have a fun time. This is a great way for UCI Circle-Kers to meet and bond with other Circle-Kers outside of UCI."
							testimonials={[
								{
									name: "Lianne Larkin",
									quote:
										"Visiting other school's club meetings is always a fun way to branch out and meet new people. One of the more memorable club meetings I visited was at Saddleback Community College. We were a few minutes late to their meeting since we got the room number confused (LMAO), but when we finally showed up everyone was super warm and welcoming. We played a fun ice breaker to get everyone more comfortable with one another. After we all had a good laugh, we sat down and listened to their club updates. It's always interesting to hear what other clubs are up to and to see how they help the community. Once the meeting was over, Saddleback Circle K hosted a single service event making PTP dolls. This gave us the opportunity to get to know each other even more and do some service for those in need!",
								},
							]}
						/>
						<EventCard
							title="Key to College"
							location="UCI | Club Event"
							description="Key to College is a fun day where members from our club host a variety of activities and workshops to help prepare high school students for all things college related. We cover things including the application process, personal management, campus life, and even cultural diversity! This is a great opportunity to meet new people and learn some of the many things we have learned since coming to college."
							testimonials={[
								{
									name: "Francisco Sepulveda",
									quote:
										"The event was great, I was given the chance to listen to the stories and learn from the experiences of the speakers. For example, there was this specific story that a speaker spoke about - he was going to work late when he saw a lost dog with a collar at the gate before leaving home. He wanted to help but couldn't since he was late. He made it clear that if we were better at time management, we could avoid the feeling of regret for not helping the dog.",
								},
							]}
						/>
					</div>
				</article>
			</div>
		</Layout>
	);
};

export default FellowshipPage;
