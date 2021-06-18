import React from "react";
import SwiperCore, { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

SwiperCore.use([Navigation, A11y]);

const FamilyCard = ({ title, names, imgSrc, imgAlt }) => {
	return (
		<div className="flex flex-col p-2">
			<div className="flex justify-center items-center mb-2">
				<img
					className="w-36 h-auto rounded-full"
					src={imgSrc}
					alt={imgAlt || title || ""}
				/>
			</div>
			<div className="flex flex-col justify-center items-center text-center">
				<h3 className="text-lg font-bold">{title}</h3>
				{names.map((name) => (
					<span key={`${title}-${name}`}>{name}</span>
				))}
			</div>
		</div>
	);
};

const FamiliesPage = () => {
	return (
		<Layout>
			<SEO title="Families" />
			<div className="max-w-7xl mx-auto">
				<h1 className="p-6 text-center text-3xl font-extrabold">Families</h1>
				<article className="p-6">
					<h2 className="mb-2 text-xl font-bold">About Families</h2>
					<p>
						The UCI Circle K family system provides general members an
						opportunity to develop a more personal connection with other members
						of the club. Each family consists of three bigs and a number of
						littles, and it is the goal of UCI Circle K to cultivate and foster
						the growth of each family to become better leaders in the community.
						Click on each family emblem to learn more about each family!
					</p>
				</article>
				<article>
					<section className="my-12 md:hidden">
						<Swiper
							id="familiesCarousel"
							tag="section"
							wrapperTag="ul"
							navigation
							scrollbar={{ draggable: true }}
						>
							<SwiperSlide tag="li">
								<FamilyCard
									title="Apollo"
									names={["Jonathan Estrada", "Chaya Pearl", "Tin Luu"]}
									imgSrc="https://imgur.com/ftvBwxK.png"
								/>
							</SwiperSlide>
							<SwiperSlide tag="li">
								<FamilyCard
									title="Atlas"
									names={["Hillary Le", "Elton Chang", "Brian Nguyen"]}
									imgSrc="https://imgur.com/D162X5U.png"
								/>
							</SwiperSlide>
							<SwiperSlide tag="li">
								<FamilyCard
									title="Cerberus"
									names={["Ruhiyah Pareja", "Seth Roberts", "Kyle Saychareun"]}
									imgSrc="https://imgur.com/HrCw1KI.png"
								/>
							</SwiperSlide>
							<SwiperSlide tag="li">
								<FamilyCard
									title="Demeter"
									names={["Alexis Bright", "Andy Huynh", "Quincy Cao"]}
									imgSrc="https://imgur.com/80MmYMe.png"
								/>
							</SwiperSlide>
							<SwiperSlide tag="li">
								<FamilyCard
									title="Dionysus"
									names={["Terry Nguyen", "Diane Zheng", "Camelle Tieu"]}
									imgSrc="https://imgur.com/014fwww.png"
								/>
							</SwiperSlide>
							<SwiperSlide tag="li">
								<FamilyCard
									title="Dryad"
									names={["Travis Nguyen", "Ngan Nguyen", "An Le"]}
									imgSrc="https://imgur.com/ODKCC3e.png"
								/>
							</SwiperSlide>
							<SwiperSlide tag="li">
								<FamilyCard
									title="Hermes"
									names={["Ana Ela Palo", "Caleb Bertumen", "Brian Duong"]}
									imgSrc="https://imgur.com/ML41LPL.png"
								/>
							</SwiperSlide>
							<SwiperSlide tag="li">
								<FamilyCard
									title="Medusa"
									names={["Noelle Heerd", "Rachel Lau", "Derek Baylis "]}
									imgSrc="https://imgur.com/mZy7OCu.png"
								/>
							</SwiperSlide>
							<SwiperSlide tag="li">
								<FamilyCard
									title="Morpheus"
									names={["Tiffany Nguyen", "Chapman Li", "David Taing "]}
									imgSrc="https://i.imgur.com/5NNuiDr.png"
								/>
							</SwiperSlide>
							<SwiperSlide tag="li">
								<FamilyCard
									title="Oracle"
									names={["Mai Vo", "Joshua Hsin", "James Cortes "]}
									imgSrc="https://imgur.com/IBItFRX.png"
								/>
							</SwiperSlide>
							<SwiperSlide tag="li">
								<FamilyCard
									title="Pandora"
									names={["Natashza Trejo", "Kimhuy Ngo", "Khang Vo "]}
									imgSrc="https://imgur.com/gLS9jxE.png"
								/>
							</SwiperSlide>
							<SwiperSlide tag="li">
								<FamilyCard
									title="Poseidon"
									names={[
										"Celina Tiqui",
										"Motana Phoupraseut",
										"Rebecca Richards ",
									]}
									imgSrc="https://imgur.com/VfF36vN.png"
								/>
							</SwiperSlide>
							<SwiperSlide tag="li">
								<FamilyCard
									title="Zephyr"
									names={["Emily Gao", "Kenneth Seng", "Kit Ma "]}
									imgSrc="https://imgur.com/QS0po4I.png"
								/>
							</SwiperSlide>
						</Swiper>
					</section>
					<section className="hidden md:grid md:grid-cols-10 md:grid-rows-3 md:gap-8 p-6">
						<div className="col-start-2 col-end-4 row-start-1 row-end-2">
							<FamilyCard
								title="Apollo"
								names={["Jonathan Estrada", "Chaya Pearl", "Tin Luu"]}
								imgSrc="https://imgur.com/ftvBwxK.png"
							/>
						</div>
						<div className="col-start-4 col-end-6 row-start-1 row-end-2">
							<FamilyCard
								title="Atlas"
								names={["Hillary Le", "Elton Chang", "Brian Nguyen"]}
								imgSrc="https://imgur.com/D162X5U.png"
							/>
						</div>
						<div className="col-start-6 col-end-8 row-start-1 row-end-2">
							<FamilyCard
								title="Cerberus"
								names={["Ruhiyah Pareja", "Seth Roberts", "Kyle Saychareun"]}
								imgSrc="https://imgur.com/HrCw1KI.png"
							/>
						</div>
						<div className="col-start-8 col-end-10 row-start-1 row-end-2">
							<FamilyCard
								title="Demeter"
								names={["Alexis Bright", "Andy Huynh", "Quincy Cao"]}
								imgSrc="https://imgur.com/80MmYMe.png"
							/>
						</div>
						<div className="col-start-1 col-end-3 row-start-2 row-end-3">
							<FamilyCard
								title="Dionysus"
								names={["Terry Nguyen", "Diane Zheng", "Camelle Tieu"]}
								imgSrc="https://imgur.com/014fwww.png"
							/>
						</div>
						<div className="col-start-3 col-end-5 row-start-2 row-end-3">
							<FamilyCard
								title="Dryad"
								names={["Travis Nguyen", "Ngan Nguyen", "An Le"]}
								imgSrc="https://imgur.com/ODKCC3e.png"
							/>
						</div>
						<div className="col-start-5 col-end-7 row-start-2 row-end-3">
							<FamilyCard
								title="Hermes"
								names={["Ana Ela Palo", "Caleb Bertumen", "Brian Duong"]}
								imgSrc="https://imgur.com/ML41LPL.png"
							/>
						</div>
						<div className="col-start-7 col-end-9 row-start-2 row-end-3">
							<FamilyCard
								title="Medusa"
								names={["Noelle Heerd", "Rachel Lau", "Derek Baylis "]}
								imgSrc="https://imgur.com/mZy7OCu.png"
							/>
						</div>
						<div className="col-start-9 col-end-11 row-start-2 row-end-3">
							<FamilyCard
								title="Morpheus"
								names={["Tiffany Nguyen", "Chapman Li", "David Taing "]}
								imgSrc="https://i.imgur.com/5NNuiDr.png"
							/>
						</div>
						<div className="col-start-2 col-end-4 row-start-3 row-end-4">
							<FamilyCard
								title="Oracle"
								names={["Mai Vo", "Joshua Hsin", "James Cortes "]}
								imgSrc="https://imgur.com/IBItFRX.png"
							/>
						</div>
						<div className="col-start-4 col-end-6 row-start-3 row-end-4">
							<FamilyCard
								title="Pandora"
								names={["Natashza Trejo", "Kimhuy Ngo", "Khang Vo "]}
								imgSrc="https://imgur.com/gLS9jxE.png"
							/>
						</div>
						<div className="col-start-6 col-end-8 row-start-3 row-end-4">
							<FamilyCard
								title="Poseidon"
								names={[
									"Celina Tiqui",
									"Motana Phoupraseut",
									"Rebecca Richards ",
								]}
								imgSrc="https://imgur.com/VfF36vN.png"
							/>
						</div>
						<div className="col-start-8 col-end-10 row-start-3 row-end-4">
							<FamilyCard
								title="Zephyr"
								names={["Emily Gao", "Kenneth Seng", "Kit Ma "]}
								imgSrc="https://imgur.com/QS0po4I.png"
							/>
						</div>
					</section>
				</article>
			</div>
		</Layout>
	);
};

export default FamiliesPage;
