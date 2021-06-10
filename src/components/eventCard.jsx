import React from "react";

const EventCard = ({
	title,
	location,
	website,
	description,
	imgSrc,
	imgAlt,
	imgClass,
	testimonials,
}) => {
	return (
		<section className="bg-gray-300 grid gap-4 rounded-md shadow-md p-6 mb-6">
			{imgSrc && (
				<div className="flex justify-center items-center">
					<img className={imgClass} src={imgSrc} alt={imgAlt || title || ""} />
				</div>
			)}
			<div className="flex flex-col">
				<h3 className="text-lg font-semibold">{title}</h3>
				{location && <span className="text-sm">{location}</span>}
				{website && (
					<a
						className="text-blue-700"
						href={website}
						target="_blank"
						rel="noopener noreferrer"
					>
						Website
					</a>
				)}
			</div>
			<p className="text-base font-medium">{description}</p>
			{testimonials && (
				<div>
					<h4 className="mb-2 font-semibold">Testimonials</h4>
					{testimonials.map((item) => (
						<div key={item.name} className="mb-4">
							<p className="mb-2 italic">"{item.quote}"</p>
							<span>- {item.name}</span>
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default EventCard;
