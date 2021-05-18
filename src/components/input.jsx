import React from "react";
import { useField } from "formik";

const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="flex flex-col m-2">
			<label
				className="block text-sm font-medium text-gray-700"
				htmlFor={props.id || props.name}
			>
				{label}
			</label>
			<input
				className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? <div>{meta.error}</div> : null}
		</div>
	);
};

export default Input;
