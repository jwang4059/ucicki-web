import React from "react";
import { useField } from "formik";

const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="flex flex-col md:flex-row justify-start h-24">
			<div className="flex-shrink-0 mb-2 md:mb-0">
				<label
					className="text-sm text-gray-700"
					htmlFor={props.id || props.name}
				>
					{label}
				</label>
			</div>
			<div className="flex-grow">
				<input
					className="w-full shadow-sm rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
					{...field}
					{...props}
				/>
				{meta.touched && meta.error ? (
					<span className="block text-sm text-red-700 ">{meta.error}</span>
				) : null}
			</div>
		</div>
	);
};

export default Input;
