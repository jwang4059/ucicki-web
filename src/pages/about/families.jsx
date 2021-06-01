import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Layout from "../../components/layout";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Carousel = () => {
	return (
		<Swiper
			id="familiesCarousel"
			tag="section"
			wrapperTag="ul"
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
		>
			<SwiperSlide tag="li">
				<div className="flex justify-center items-center">
					<img className="h-72 w-96 object-cover" src="" alt="" />
				</div>
			</SwiperSlide>

			<SwiperSlide tag="li">
				<div className="flex justify-center items-center">
					<img className="h-72 w-96 object-cover" src="" alt="" />
				</div>
			</SwiperSlide>
		</Swiper>
	);
};

const FamiliesPage = () => {
	return (
		<Layout title="Families">
			<Carousel />
			<div></div>
		</Layout>
	);
};

export default FamiliesPage;
