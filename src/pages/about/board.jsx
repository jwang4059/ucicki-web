import React from "react";
import Layout from "../../components/layout";

const Profile = ({ name, position, email, imgSrc, imgAlt }) => (
	<section className="flex flex-col md:flex-row p-2">
		<div className="flex-shrink-0 flex justify-center items-center">
			<img
				className="w-48 h-48 object-cover rounded-full mb-2"
				src={imgSrc}
				alt={imgAlt || name || ""}
			/>
		</div>
		<div className="flex-grow flex flex-col justify-center items-center text-center">
			<h4 className="text-lg font-bold">{name}</h4>
			<em>{position}</em>
			<span>{email}</span>
		</div>
	</section>
);

const BoardSection = ({ title, children }) => {
	return (
		<article className="mb-8">
			<h3 className="text-center text-xl font-bold mb-4">{title}</h3>
			<div className="grid gap-4 md:grid-cols-2">{children}</div>
		</article>
	);
};

const BoardPage = () => {
	return (
		<Layout title="Board">
			<div className="max-w-7xl mx-auto">
				<h1 className="p-6 text-center text-3xl font-extrabold">
					UCI Circle K Board
				</h1>
				<article className="grid gap-4 p-6">
					<h2 className="text-xl font-bold">About Board Members</h2>
					<p>
						UCI Circle K's Board is a group of current members who are dedicated
						to guiding and serving the club. By upholding the three tenets of
						Circle K International (service, leadership, and fellowship), they
						are able to create new opportunities for general members and help
						enhance their college experience.
					</p>
					<p>
						UCI Circle K's board is composed of three different groups. These
						three groups are known as the Elective Board, the Appointed Board,
						and the Family Heads. Each group is in charge of a different aspect
						of the club and work together to give members the best possible
						experience. Although they are separated into three different groups,
						each board member is responsible for fulfilling their positiion,
						providing for their family, organizing family socials, and serving
						as role models and mentors to their littles.
					</p>
					<p>
						To learn more about the board, feel free to reach out and contact
						them.
					</p>
				</article>
				<BoardSection title="Executive Board">
					<Profile
						name="Ruhiyah Pareja"
						position="President"
						email="pres.ucicki@gmail.com"
						imgSrc="https://cdn.discordapp.com/attachments/700983942467289119/748329235952959518/image1.jpg"
					/>
					<Profile
						name="An Le"
						position="Vice President of Administration"
						email="ucicki.vpa@gmail.com"
						imgSrc="https://i.imgur.com/ZqPKf7O.jpg"
					/>
					<Profile
						name="Kimhuy Ngo"
						position="Vice President of Service"
						email="ucickivps@gmail.com"
						imgSrc="https://i.imgur.com/Z4V2utQ.png"
					/>
					<Profile
						name="Brian Duong"
						position="Secretary"
						email="ucicki.secretary@gmail.com"
						imgSrc="https://i.imgur.com/5yPfJMN.jpg?1"
					/>
					<Profile
						name="Seth Roberts"
						position="Treasurer"
						email="ckitreasurer.uci@gmail.com"
						imgSrc="https://i.imgur.com/HXuOqZh.jpg?1"
					/>
				</BoardSection>
				<BoardSection title="Appointed Board">
					<Profile
						name="Izzabella Ramiscal"
						position="Fundraising Chair"
						email="fundraising.ucicki@gmail.com"
						imgSrc="https://i.imgur.com/ehKiico.jpg"
					/>
					<Profile
						name="Jess Banh"
						position="Fundraising Chair"
						email="fundraising.ucicki@gmail.com"
						imgSrc="https://i.imgur.com/43aUQPI.jpg"
					/>
					<Profile
						name="Emily Yan"
						position="Kiwanis Family Chair"
						email="kfam.ucicki@gmail.com"
						imgSrc="https://i.imgur.com/gp6Cqiz.jpeg"
					/>
					<Profile
						name="Shania Relucio"
						position="Kiwanis Family Chair"
						email="kfam.ucicki@gmail.com"
						imgSrc="https://i.imgur.com/PgtEfMi.jpg"
					/>
					<Profile
						name="Valerie Nguyen"
						position="Membership Development and Education Chair"
						email="ckiucimde@gmail.com"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Kathy Nguyen"
						position="Membership Development and Relations Chair"
						email="ckiucimde@gmail.com"
						imgSrc="https://i.imgur.com/xKjFENU.jpg"
					/>
					<Profile
						name="Kit Ma"
						position="Membership Programs Chair"
						email="ucicki.mpc@gmail.com"
						imgSrc="https://i.imgur.com/BTHCHbz.jpg"
					/>
					<Profile
						name="Cynthia Yu"
						position="News Editor Chair"
						email="media.ucicki@gmail.com"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Albert Jon Osongco"
						position="Public Relations Chair"
						email="ucicki.publicrelations@gmail.com"
						imgSrc="https://i.imgur.com/vt3ssgj.jpg"
					/>
					<Profile
						name="Jay Han"
						position="Public Relations Chair"
						email="ucicki.publicrelations@gmail.com"
						imgSrc="https://i.ibb.co/Db9k645/Me-1.jpg"
					/>
					<Profile
						name="Reena Murray"
						position="Scrapbook Chair"
						email="media.ucicki@gmail.com"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Isoo Yoon"
						position="Single Service Chair"
						email="singleservice.ucicki@gmail.com"
						imgSrc="https://i.imgur.com/q19WpeB.png"
					/>
					<Profile
						name="Mercy Phuthama"
						position="Single Service Chair"
						email="singleservice.ucicki@gmail.com"
						imgSrc="https://i.imgur.com/WNj2gtI.png"
					/>
					<Profile
						name="Diana Nguyen"
						position="Spirit Social Chair"
						email="ucicki.spiritsocial@gmail.com"
						imgSrc="https://i.imgur.com/dIP6gxc.png"
					/>
					<Profile
						name="Jessica Lam"
						position="Spirit Social Chair"
						email="ucicki.spiritsocial@gmail.com"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Steven Lam"
						position="Technology Chair"
						email="technology.ucicki@gmail.com"
						imgSrc="https://i.imgur.com/UeYliqV.png"
					/>
					<Profile
						name="Thomas Reynolds"
						position="Technology Chair"
						email="technology.ucicki@gmail.com"
						imgSrc="https://i.imgur.com/WCGoTsW.jpg"
					/>
					<Profile
						name="Kevin Wong"
						position="Videographer Chair"
						email="media.ucicki@gmail.com"
						imgSrc="https://i.imgur.com/7SrLubA.jpg"
					/>
				</BoardSection>
				<BoardSection title="Family Heads">
					<Profile
						name="Adeline Cheng"
						position="Family Head"
						email="adelinc1@uci.edu"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Amanda Lin"
						position="Family Head"
						email="alin90727@gmail.com"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Ashwin Nambiar"
						position="Family Head"
						email="ashwinrn@uci.edu"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Brandon Kincaid"
						position="Family Head"
						email="kincaidb@uci.edu"
						imgSrc="https://i.imgur.com/8yqBuTM.jpg"
					/>
					<Profile
						name="Coby Saykouman"
						position="Family Head"
						email="cobysay@gmail.com"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Danny Yi"
						position="Family Head"
						email="dtyi@uci.edu"
						imgSrc="https://i.imgur.com/aY5pfnF.jpg"
					/>
					<Profile
						name="David Yu"
						position="Family Head"
						email="davidy9@uci.edu"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Edith Crisostomo"
						position="Family Head"
						email="eacrisos@uci.edu"
						imgSrc="https://i.imgur.com/5g2LoTk.jpg"
					/>
					<Profile
						name="Hayden Poulain"
						position="Family Head"
						email="hpoulain@uci.edu"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Hema Merugumala"
						position="Family Head"
						email="hmerugum@uci.edu"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Jessica Medina"
						position="Family Head"
						email="jcmedin2@uci.edu"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Joyce Wu"
						position="Family Head"
						email="joycew11@uci.edu"
						imgSrc="https://i.imgur.com/csYzF9U.jpg"
					/>
					<Profile
						name="Katherine Hoang"
						position="Family Head"
						email="yourstrulykatherine@gmail.com"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Keith Wong"
						position="Family Head"
						email="keithmw1@uci.edu"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Kelsy Gonzalez"
						position="Family Head"
						email="kelsyrg@uci.edu"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Quinny Cao"
						position="Family Head"
						email="caoql@uci.edu"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Rishi Godugu"
						position="Family Head"
						email="godugu.rishi@gmail.com"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
					<Profile
						name="Terry Nguyen"
						position="Family Head"
						email="terryhn1@uci.edu"
						imgSrc="https://i.imgur.com/rPBoSfBt.jpg"
					/>
					<Profile
						name="Zitong Xie"
						position="Family Head"
						email="ZitongX1@uci.edu"
						imgSrc="https://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					/>
				</BoardSection>
			</div>
		</Layout>
	);
};

export default BoardPage;
