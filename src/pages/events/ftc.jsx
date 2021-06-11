import React from "react";
import Layout from "../../components/layout";
import Link from "../../components/link";

const FTCPage = () => {
	return (
		<Layout title="FTC">
			<div className="max-w-7xl mx-auto">
				<h1 className="py-6 text-center text-3xl font-extrabold">
					Fall Training Conference
				</h1>
				<div>
					<img src="https://i.imgur.com/xxXlExL.png" alt="" />
				</div>
				<p className="p-4 m-6 text-center rounded-3xl border-2 border-blue-500">
					Registration for FTC will be starting soon! Keep an eye out for
					updates!
				</p>
				<div className="p-6 grid gap-4 md:grid-cols-12">
					<article className="md:col-span-4 md:self-start grid gap-4">
						<section>
							<h2 className="text-xl font-bold">Registration</h2>
							<ul className="ml-6 list-disc">
								<li>Registration for FTC starts at 5:30PM</li>
								<li>Opening Session starts at 9:00PM on Friday.</li>
								<li>Departure will be at 10:30AM on Sunday.</li>
								<li>
									Location:Old Oak Ranch Conference Center 15250 Old Oak Ranch
									Rd, Sonora, CA 95370
								</li>
							</ul>
						</section>
						<section>
							<h2 className="text-xl font-bold">Required Forms</h2>
							<div>
								<h3>Code of Conduct</h3>
								<Link
									href="https://drive.google.com/file/d/13TSZQ6Y2KG4A-vlCDGlj2wI66yKzov1N/view?usp=sharing"
									external
									colored
								>
									Official Code of Conduct
								</Link>
							</div>
							<div>
								<h3>Waiver Form:</h3>
								<Link
									href="https://drive.google.com/file/d/1EELH1zVeBC9r3KTAolJxBWOqlDc-hfR5/view?usp=sharing"
									external
									colored
								>
									Official Waiver
								</Link>
							</div>
						</section>
						<section>
							<h2 className="text-xl font-bold">Official Sites</h2>
							<div>
								<h3>FTC Website:</h3>
								<Link href="https://ftc.cnhcirclek.org/" external colored>
									https://ftc.cnhcirclek.org/
								</Link>
							</div>
						</section>
					</article>
					<article className="md:col-span-8 grid gap-4">
						<section>
							<h2 className="text-xl font-bold">What is FTC?</h2>
							<p>
								FTC stands for Fall Training Conference. Fall Training
								Conference is a three-day, two-night event held at Old Oak Ranch
								in which members of the CNH District come together to learn more
								about Circle K International, meet members from around the
								district, and develop as members and leaders within this
								organization. For many new members, Fall Training Conference is
								their first large-scale district-wide Circle K event and their
								first time seeing the impact that our organization can make. FTC
								typically is held on the first weekend of November.
							</p>
						</section>
						<section>
							<h2 className="text-xl font-bold">How Can I Get Involved?</h2>
							<p>
								FTC offers a variety of ways to get involved! Some examples
								include SAA (Sergeant-At-Arms), Workshop Hosts, Team Captains,
								DJs, Talent Acts, Media, and Technology!
							</p>
						</section>
						<section>
							<h2 className="text-xl font-bold">Sergeant-At-Arms (SAA)</h2>
							<p>
								SAAs are volunteers responsible for knowing and enforcing the
								Code of Conduct and the Old Oak Ranch Camp Guidelines. They make
								sure all attendees abide by the rules at all times, ensure a
								safe environment for attendees, and offer assistance to members
								in any way that they can! For every 4 members of a club that
								attends, that club must provide an SAA.
							</p>
						</section>
					</article>
				</div>
			</div>
		</Layout>
	);
};

export default FTCPage;
