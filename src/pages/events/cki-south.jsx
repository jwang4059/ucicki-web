import React from "react";
import Layout from "../../components/layout";
import Link from "../../components/link";

const CKISouthPage = () => {
	return (
		<Layout title="CKI South">
			<div className="max-w-7xl mx-auto">
				<h1 className="p-6 text-center text-3xl font-extrabold">
					Crazy Kompetition for Infants
				</h1>
				<img
					className="w-full"
					src="https://crazykomp.cnhcirclek.org/Assets/banner.png"
					alt=""
				/>
				<div className="p-6">
					<p className="p-4 text-center rounded-3xl border-2 border-blue-500">
						Due to the on-going COVID 19 situation, CKI South and CKI North are
						merged into one online event!
					</p>
				</div>
				<div className="p-6 grid gap-x-4 gap-y-8 md:grid-cols-12">
					<article className="md:col-span-4 md:self-start grid gap-4">
						<section className="grid gap-2">
							<h2 className="text-xl font-bold">Registration</h2>
							<ul className="ml-6 list-disc">
								<li>Early Registration (CHECK OR PAYPAL ONLY)</li>
								<li>Teams (of 6 people): $30/team </li>
								<li>Alternates/Individual Sign-Ups: $5/person</li>
								<li>Spectators: $5/person </li>
								<li>MUST BE RECEIVED BY Friday, October 10th</li>
								<li>(Contact our Club President to register!)</li>
							</ul>
						</section>
						<section className="grid gap-2">
							<h2 className="text-xl font-bold">Forms</h2>
							<div>
								<h3>Registration Form:</h3>
								<Link href="tinyurl.com/crazykomp2020" external colored>
									tinyurl.com/crazykomp2020
								</Link>
							</div>
						</section>
						<section className="grid gap-2">
							<h2 className="text-xl font-bold">Official Sites</h2>
							<div>
								<h3>CKI South Website:</h3>
								<Link href="https://crazykomp.cnhcirclek.org/" external colored>
									https://crazykomp.cnhcirclek.org/
								</Link>
							</div>
							<div>
								<h3>Event Facebook Page:</h3>
								<Link
									href="https://www.facebook.com/events/788737535285682"
									external
									colored
								>
									https://www.facebook.com/events/788737535285682
								</Link>
							</div>
						</section>
					</article>
					<article className="md:col-span-8 md:self-start grid gap-4">
						<section>
							<h2 className="mb-2 text-xl font-bold">About</h2>
							<p>
								Crazy Kompetition for Infants South (CKI South) is an annual
								event that raises money for the Pediatric Trauma Program (PTP)
								through a series of fun, competitive games and relays. Compete
								against other members from the Southern half of the CNH CKI
								District, support an amazing cause, and see which team will be
								the last one standing! This event typically takes place
								mid-October.
							</p>
						</section>
						<section>
							<h2 className="mb-2 text-xl font-bold">
								Pediatric Trauma Program (PTP)
							</h2>
							<p>
								Every year, unintentional injury results in more childhood
								deaths under the age of 14 than any other cause -- including
								disease, homicide, and suicide. However, 90% of these injuries
								are preventable! The Pediatric Trauma Program was created by the
								CNH Kiwanis Foundation in order to decrease the number of
								childhood deaths that are caused by unintentional physical
								injury and trauma. Money donated to PTP is used to provide
								appropriate medical training for doctors, provide safety
								equipment to young children, and fund grants to our six partner
								hospitals.
							</p>
						</section>
						<section>
							<h2 className="mb-2 text-xl font-bold">Teams</h2>
							<p>
								Members will have the opportunity to create teams of 6 (with the
								option of 1 alternate) and compete against teams from all over
								the southern half of the District! There will be 6 different
								games that will test each team's abilities, and the top teams
								will proceed to Semi-Finals and Finals.
							</p>
						</section>
						<section>
							<h2 className="mb-2 text-xl font-bold">Judges</h2>
							<p>
								Help ensure that Crazy Komp games run smoothly and are scored
								fairly, and receive service hours for your assistance! Please
								note that spots for judges are limited, and that signing up to
								be a judge does not exempt you from paying or registering for
								the event. Judges MUST attend an online training webinar (date
								TBD), as well as a Judges Meeting on the day of the event.{" "}
							</p>
						</section>
						<section>
							<h2 className="mb-2 text-xl font-bold">Spectator</h2>
							<p>
								Support your teams on the sidelines and cheer them on the way to
								success! Spectators help liven the mood and motivate fellow
								teammates to think quicker, react faster, and act smarter. All
								spectators must not interfere with other teams' performances in
								the spirit of good sportsmanship.
							</p>
						</section>
					</article>
				</div>
			</div>
		</Layout>
	);
};

export default CKISouthPage;
