import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import Link from "../../components/link";

const DconPage = () => {
	return (
		<Layout>
			<SEO title="Dcon" />
			<div className="max-w-7xl mx-auto">
				<h1 className="p-6 text-center text-3xl font-extrabold">
					District Convention
				</h1>
				<img className="w-full" src="https://i.imgur.com/xxXlExL.png" alt="" />
				<div className="p-6">
					<p className="p-4 text-center rounded-3xl border-2 border-blue-500">
						Due to the on-going COVID 19 situation, DCON may be rescheduled or
						moved online this year.
					</p>
				</div>
				<div className="p-6 grid gap-x-4 gap-y-8 md:grid-cols-12">
					<article className="md:col-span-4 md:self-start grid gap-4">
						<section className="grid gap-2">
							<h2 className="text-xl font-bold">Registration</h2>
							<ul className="ml-6 list-disc">
								<li>Applications/Deadlines</li>
								<li>[TBD] Workshop Host Applications Due</li>
								<li>[TBD] Program Ad Application and Payment Due</li>
								<li>[TBD] Talent Show Applications Due</li>
								<li>[TBD] Opening Slideshow Photo Submission Due</li>
								<li>[TBD] Media Team Applications Due</li>
								<li>[TBD] Early Registration Due</li>
								<li>[TBD] Regular Registration Due</li>
								<li>[TBD] SAA Registration Due</li>
								<li>[TBD] Hotel Registration Due</li>
								<li>[TBD] Last Day to Swap Names</li>
							</ul>
						</section>
						<section className="grid gap-2">
							<h2 className="text-xl font-bold">Official Sites</h2>
							<div>
								<h3>DCON 2020 Website:</h3>
								<Link href="https://dcon.cnhcirclek.org/" external colored>
									https://dcon.cnhcirclek.org/
								</Link>
							</div>
							<div>
								<h3>DCON 2020 Facebook:</h3>
								<Link
									href="https://www.facebook.com/events/2513233622244551/"
									external
									colored
								>
									https://www.facebook.com/events/2513233622244551/
								</Link>
							</div>
						</section>
					</article>
					<article className="md:col-span-8 md:self-start grid gap-4">
						<section>
							<h2 className="mb-2 text-xl font-bold">About</h2>
							<p>
								The CNH Circle K District hosts an annual three day and two
								night event called District Convention for clubs all around the
								district at Riverside, California. Attendees get to learn more
								about all levels of Circle K International, networking with
								professionals, and be educated to become aspiring leaders.
								District Convention is an event where attendees get together and
								celebrate all of the achievements of the district and
								acknowledging all club’s hard work. DCON typically is held a
								week before April, as April signifies the start of the new
								Circle K term.
							</p>
						</section>
						<section>
							<h2 className="mb-2 text-xl font-bold">Get Involved!</h2>
							<p>
								There are plenty of ways to get involved at DCON! You can apply
								to become a workshop host, be part of a talent show, be part of
								the media team, be an SAA (Sergeant at Arms), or submit a
								program ad! More info can be found at{" "}
								<Link
									href="https://dcon.cnhcirclek.org/involve.html"
									external
									colored
								>
									https://dcon.cnhcirclek.org/involve.html
								</Link>
								.
							</p>
						</section>
					</article>
				</div>
			</div>
		</Layout>
	);
};

export default DconPage;
