import React from "react";
import Layout from "../../components/layout";

const Profile = ({ name, position, email, imgSrc, imgAlt }) => (
	<div className="flex flex-col bg-blue-300 p-2 my-2">
		<div className="flex-shrink-0 flex justify-center items-center">
			<img
				className="w-64 h-64 object-cover rounded-full"
				src={imgSrc}
				alt={imgAlt || name || ""}
			/>
		</div>
		<div className="flex-grow flex flex-col justify-center items-center">
			<h4 className="text-lg font-bold">{name}</h4>
			<em>{position}</em>
			<span>{email}</span>
		</div>
	</div>
);

const BoardPage = () => {
	return (
		<Layout>
			<div className="flex justify-center items-center p-6">
				<div className="max-w-6xl">
					<h1 className="text-3xl font-extrabold mb-4">UCI Circle K Board</h1>
					<h2 className="text-2xl font-bold mb-2">About Board Members</h2>
					<p className="text-lg">
						The Circle K Executive and Appointed Board is composed of members
						who are dedicated to guiding their fellow members the three tenets
						of Circle K International, service, leadership, and fellowship,
						through opportunities in an effort to create a worthwhole college
						experience. Each board member is in charge of a different aspect of
						the club, and together form the backbone of UCI Circle K. Click on
						each board member to see his or her Circle K profile page!
					</p>
					<section>
						<h3 className="text-xl font-bold text-center mb-4">
							Executive Board
						</h3>
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
					</section>
					<section>
						<h3 className="text-center text-lg font-bold">Appointed Board</h3>
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
							imgSrc="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/156131828_1530302193839118_2261226965479439910_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=2LvkoBdAipwAX-wbDP1&_nc_ht=scontent-lax3-2.xx&oh=ba25349bf700cfc3a2a85fddab354759&oe=60C3A212"
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
						{/* <Profile
							name=""
							position=""
							email=""
							imgSrc=""
						/> */}
					</section>
				</div>
			</div>
		</Layout>
	);
};

export default BoardPage;
