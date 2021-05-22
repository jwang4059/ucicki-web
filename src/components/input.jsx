import React from "react";
import { useField } from "formik";

const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="flex flex-col md:flex-row justify-start h-22 md:h-16">
			<div className="flex-shrink-0 w-48 ">
				<label
					className="text-sm font-medium text-gray-700 mb-2"
					htmlFor={props.id || props.name}
				>
					{label}
				</label>
			</div>
			<div className="flex-grow ">
				<input
					className="w-full shadow-sm rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
					{...field}
					{...props}
				/>
				{meta.touched && meta.error ? (
					<span className="block text-sm font-medium text-red-700 ">
						{meta.error}
					</span>
				) : null}
			</div>
		</div>
	);
};

export default Input;
