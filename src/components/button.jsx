import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ isLoading = false, children, ...props }) => {
	return (
		<button
			className="inline-flex justify-center py-2 px-4 my-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			disabled={isLoading}
			{...props}
		>
			{isLoading ? <FontAwesomeIcon icon="spinner" /> : children}
		</button>
	);
};

export default Button;
