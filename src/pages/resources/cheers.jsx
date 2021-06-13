import React from "react";
import Layout from "../../components/layout";
import Link from "../../components/link";

const YouTube = ({ src }) => (
	<div className="flex-1 max-w-4xl">
		<div className="aspect-w-16 aspect-h-9">
			<iframe
				src={src}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
		</div>
	</div>
);

const MainCheer = ({ title, demo, children }) => (
	<section className="bg-gray-100 p-6">
		<h3 className="text-center text-lg font-semibold mb-4">{title}</h3>
		<div className="grid md:grid-cols-12 gap-4 md:gap-12">
			<div className="md:col-span-8 md:self-center flex justify-center items-center">
				<YouTube src={demo} />
			</div>
			<div className="md:col-span-4 md:self-center grid gap-4 ">{children}</div>
		</div>
	</section>
);

const SideCheer = ({ title, children }) => (
	<section className="bg-gray-100 p-6">
		<h3 className="text-center text-lg font-semibold mb-4">{title}</h3>
		{children}
	</section>
);

const CheersPage = () => {
	return (
		<Layout title="Cheers">
			<div className="max-w-7xl mx-auto">
				<h1 className="p-6 text-center text-3xl font-extrabold">Cheers</h1>
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
				<article className="grid gap-8 p-6">
					<h2 className="text-center text-xl font-bold">Main Cheers</h2>
					<MainCheer
						title="How Do You Feel?"
						demo="https://www.youtube.com/embed/TbGv_sPU9Co"
					>
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
					</MainCheer>
					<MainCheer
						title="Stomp The Yard"
						demo="https://www.youtube.com/embed/6iUjmlosXcQ"
					>
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
					</MainCheer>
					<MainCheer
						title="Botellaly"
						demo="https://www.youtube.com/embed/vshhZfxTR68"
					>
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
					</MainCheer>
				</article>
				<article className="grid gap-8 p-6">
					<h2 className="text-center text-xl font-bold">Other Cheers</h2>
					<div className="grid gap-4 md:grid-cols-4">
						<SideCheer title="Annoying obnoxious">
							<p>
								L: WHAT DO THEY CALL US?!?! <br />
								E: WHAT DO THEY CALL US? <br />
								L: UCI ANNOOYYYYYINGGG~! UCI OBNOXXIOUSSSS~! <br />
								E: UCI ANNOOYYYYINGGGG~! UCI OBNOXXIOUSSS~! <br />
								High-pitched: ANNOYING ANNOYING!! <br />
								Low-pitched: OBNOXIOUS OBNOXIOUS!! <br />
								[repeat] <br />
							</p>
						</SideCheer>
						<SideCheer title="Show them some love">
							<p>
								L: UCI let’s show them some love! <br />
								E: Aww~ (make a heart with hands) <br />
								L: EVEN MORE LOVE! <br />
								E: AWW~ (make heart with body) <br />
								L: EVEN THE MOREST OF LOVE!!!! <br />
								E: AWWWWWWWWWW~~~ (make a heart with someone else) <br />
							</p>
						</SideCheer>
						<SideCheer title="Salutations">
							<p>
								L: UCI SAY HI! <br />
								E: HAAAAAIIIII! *wave hi* <br />
								L: UCI SAY BYE!!! <br />
								E: BAAAAAIIIII!!!! *wave bye* <br />
							</p>
						</SideCheer>

						<SideCheer title="Give ‘em the finger">
							<p>
								L: UCI! Give ‘em the finger! <br />
								E: *thumbs up* <br />
								L: NO! The OTHER finger! <br />
								E: *two thumbs up* <br />
							</p>
						</SideCheer>
					</div>
				</article>
				<article className="grid gap-8 p-6">
					<h2 className="text-center text-xl font-bold">
						Citrus Cheers (divisional)
					</h2>
					<div className="grid gap-4 md:grid-cols-4">
						<SideCheer title="Little Huts Remix">
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
						</SideCheer>
						<SideCheer title="Zesty Beat">
							<p>
								L: Hey Citrus, drop them Zesty beats! <br />
								E: Citrus sour, Citrus sweet <br />
								E: Citrus cuties got that beat <br />
								E: CIT - RUS Citrus cuties got some zest! <br />
								E: *2-3-4-2 clap* <br />
								E: Go Citrus! <br />
							</p>
						</SideCheer>
						<SideCheer title="Citrus is Best">
							<p>
								L: Whoooo’s best?? <br />
								E: C - IT - RUS <br />
								E: Citrus Cuties are the best! <br />
								E: C - IT - RUS <br />
								E: Citrus Cuties are the best! (x2) <br />
								E: Goooooo Citrus! <br />
							</p>
						</SideCheer>
						<SideCheer title="Citrus juiced!">
							<p>
								L: Give it a boost <br />
								E: CITRUS JUICED!!!! <br />
							</p>
						</SideCheer>
					</div>
				</article>
				<div className="text-center p-6">
					<Link
						href="https://docs.google.com/document/d/1vWPYlhE4kGMzeVAZQglh6DWSBqQQTNo4UwWCFjUCMcU/edit?usp=sharing"
						external
						colored
					>
						Click here for more cheers!
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export default CheersPage;
