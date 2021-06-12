import React from "react";
import Layout from "../../components/layout";

const YouTube = ({ src }) => (
	<div className="flex-1 max-w-4xl">
		<div className="aspect-w-16 aspect-h-9">
			<iframe
				src={src}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
	</div>
);

const CheersPage = () => {
	return (
		<Layout title="Cheers">
			<div className=" max-w-7xl mx-auto">
				<h1 className="text-center text-3xl font-extrabold">Cheers</h1>
				<article className="p-6">
					<h2 className="text-center text-xl font-bold mb-2">About Cheers</h2>
					<p>
						At UCI Circle K, spirit is our secret fourth tenet! Our cheers
						embody the sprit and pride we have for our school and for our club.
						More importantly, however, our cheers allow our members to connect
						with not only each other, but with other members from other schools!
						Below are videos of our cheers followed by more cheers at the
						bottom! Watch the videos and learn them all!
					</p>
				</article>
				<article className="mb-12">
					<h2 className="text-center text-xl font-bold mb-4">
						How Do You Feel?
					</h2>
					<div className="flex flex-col md:flex-row">
						<section className="flex-grow flex justify-center items-center">
							<YouTube src="https://www.youtube.com/embed/TbGv_sPU9Co" />
						</section>
						<section className="grid gap-4 p-6">
							<div>
								<p className="text-lg font-semibold">Leader:</p>
								<p>Hey UC Irvine Circle K! How do you feel?</p>
							</div>
							<div>
								<p className="text-lg font-semibold">Everyone:</p>
								<p>
									We feel good! Oh we feel so good! Oh! <br />
									We feel fine! All of the time! <br />
									Hold up! Stop this cheer! <br />
									Don't you know that Irvine's here? <br />
									This is Irvine! When we cheer we have no fear! <br />
									This is Irvine! Want to hear our thunder cheer? <br />
									(Stomp), (Clap), (Stomp) (Stomp) (Clap) <br />
									(Stomp), (Clap), (Stomp) (Stomp) (Clap) <br />
									(Stomp), (Clap), (Stomp) (Stomp) (Clap) <br />
									(Stomp) U-C-I! <br />
									(Stomp), (Clap), (Stomp) (Stomp) (Clap) <br />
									(Stomp), (Clap), (Stomp) (Stomp) (Clap) <br />
									(Stomp), (Clap), (Stomp) (Stomp) (Clap) <br />
									(Stomp) Irvine! <br />
								</p>
							</div>
						</section>
					</div>
				</article>
				<article className="mb-12">
					<h2 className="text-center text-xl font-bold mb-4">Stomp The Yard</h2>
					<div className="flex flex-col md:flex-row-reverse">
						<section className="flex-1 flex justify-center items-center">
							<YouTube src="https://www.youtube.com/embed/6iUjmlosXcQ" />
						</section>
						<section className="grid gap-4 p-6">
							<div>
								<p className="text-lg font-semibold">Leader:</p>
								<p>Hey UCI! Stomp the yard! __________ style!</p>
							</div>
							<div>
								<p className="text-lg font-semibold">Everyone:</p>
								<p>
									One, two, three, four, five, six, seven, eight! <br />
									U! C! I! <br />
									Zot! Zot! Zot! Zot! <br />
									I! <br />
									U-C-I! <br />
								</p>
							</div>
						</section>
					</div>
				</article>
				<article>
					<h2 className="text-center text-xl font-bold mb-4">Botellaly</h2>
					<div className="flex flex-col md:flex-row">
						<section className="flex-grow flex justify-center items-center">
							<YouTube src="https://www.youtube.com/embed/vshhZfxTR68" />
						</section>
						<section className="grid gap-4 p-6">
							<div>
								<p className="text-lg font-semibold">Everyone:</p>
								<p className="mb-4">
									Botellaly! <br />
									(Botellaly!) <br />
									Tellaly tiki taka! <br />
									(Tellaly tiki tak <br />
									Wassa wassa awassa! <br />
									(Wassa wassa awassa!) <br />
									Whoa, oh whoa, oh whoa oh oh! <br />
									(Whoa, oh whoa, oh whoa oh oh!) <br />
								</p>
								<p>
									Botellaly! <br />
									(Botellaly!) <br />
									Tellaly tiki taka! <br />
									(Tellaly tiki taka!) <br />
									Wassa wassa awassa! <br />
									(Wassa wassa awassa!) <br />
									Whoa, oh whoa, oh whoa oh oh! <br />
									(Whoa, oh whoa, oh whoa oh oh!) <br />
								</p>
							</div>
						</section>
					</div>
				</article>
				<article className="p-6">
					<h2 className="mb-6 text-center text-xl font-bold">Other Cheers</h2>
					<div className="grid gap-4 md:grid-cols-2">
						<section>
							<h3 className="text-lg font-semibold">Annoying obnoxious</h3>
							<p>
								L: WHAT DO THEY CALL US?!?! <br />
								E: WHAT DO THEY CALL US? <br />
								L: UCI ANNOOYYYYYINGGG~! UCI OBNOXXIOUSSSS~! <br />
								E: UCI ANNOOYYYYINGGGG~! UCI OBNOXXIOUSSS~! <br />
								High-pitched: ANNOYING ANNOYING!! <br />
								Low-pitched: OBNOXIOUS OBNOXIOUS!! <br />
								[repeat] <br />
							</p>
						</section>
						<section>
							<h3 className="text-lg font-semibold">Show them some love </h3>
							<p>
								L: UCI let’s show them some love! <br />
								E: Aww~ (make a heart with hands) <br />
								L: EVEN MORE LOVE! <br />
								E: AWW~ (make heart with body) <br />
								L: EVEN THE MOREST OF LOVE!!!! <br />
								E: AWWWWWWWWWW~~~ (make a heart with someone else) <br />
							</p>
						</section>
						<section>
							<h3 className="text-lg font-semibold">Salutations</h3>
							<p>
								L: UCI SAY HI! <br />
								E: HAAAAAIIIII! *wave hi* <br />
								L: UCI SAY BYE!!! <br />
								E: BAAAAAIIIII!!!! *wave bye* <br />
							</p>
						</section>
						<section>
							<h3 className="text-lg font-semibold">Give ‘em the finger</h3>
							<p>
								L: UCI! Give ‘em the finger! <br />
								E: *thumbs up* <br />
								L: NO! The OTHER finger! <br />
								E: *two thumbs up* <br />
							</p>
						</section>
					</div>
				</article>
				<article className="grid gap-4 p-6">
					<h2 className="text-center text-xl font-bold">
						Citrus Cheers (divisional)
					</h2>
					<div className="grid gap-4 md:grid-cols-2">
						<section>
							<h3 className="text-lg font-semibold">Little Huts Remix</h3>
							<p>
								L: Does /o\ sign <br />
								E: WE ARE MAGIC <br />
								L: Copyright, remix! <br />
								E: We are Citrus Cuties <br />
								E: We live in them trees <br />
								E: And if you don’t believe us, <br />
								E: Then watch us shake our <br />
								E: Fruits, fruits, fruits for service (x3) <br />
								E: Goooooo Citrus <br />
							</p>
						</section>
						<section>
							<h3 className="text-lg font-semibold">Zesty Beat</h3>
							<p>
								L: Hey Citrus, drop them Zesty beats! <br />
								E: Citrus sour, Citrus sweet <br />
								E: Citrus cuties got that beat <br />
								E: CIT - RUS Citrus cuties got some zest! <br />
								E: *2-3-4-2 clap* <br />
								E: Go Citrus! <br />
							</p>
						</section>
						<section>
							<h3 className="text-lg font-semibold">Citrus is Best</h3>
							<p>
								L: Whoooo’s best?? <br />
								E: C - IT - RUS <br />
								E: Citrus Cuties are the best! <br />
								E: C - IT - RUS <br />
								E: Citrus Cuties are the best! (x2) <br />
								E: Goooooo Citrus! <br />
							</p>
						</section>
						<section>
							<h3 className="text-lg font-semibold">Citrus juiced!</h3>
							<p>
								L: Give it a boost <br />
								E: CITRUS JUICED!!!! <br />
							</p>
						</section>
					</div>
				</article>
			</div>
		</Layout>
	);
};

export default CheersPage;
