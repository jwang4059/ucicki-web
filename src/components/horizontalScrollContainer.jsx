import React from "react";

const HorizontalScrollContainer = ({ children }) => {
	return (
		<div className="flex flex-nowrap overflow-x-auto overflow-y-hidden p-4">
			{children}
		</div>
	);
};

export default HorizontalScrollContainer;
