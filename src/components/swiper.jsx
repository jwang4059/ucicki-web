import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Carousel = () => {
	return (
		<Swiper
			tag="section"
			wrapperTag="ul"
			navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
		>
			<SwiperSlide tag="li">
				<img
					className="w-full h-72 object-cover"
					src="https://i.imgur.com/3C2TLj9.jpg"
					alt=""
				/>
			</SwiperSlide>

			<SwiperSlide tag="li">
				<img
					className="w-full h-72 object-cover"
					src="https://lh3.googleusercontent.com/pw/ACtC-3f8TcqxHZXiKEh55ew9g1XGQ9Vge6QGCJZAqp-OqxSCYgXD7rjYwDpITXXZVvvqLr_1CirY6XJk2NAOtB0C7ix2vmvYWxxyePU1kFj2BoJ5iCLWPCLVGOI02lwhYLjOx9Xp-WYdWGWfe5wvaE5oOmWN=w1250-h938-no?authuser=0"
					alt=""
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default Carousel;
