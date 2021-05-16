import React from "react";
import { useField } from "formik";

const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className="flex flex-col m-2">
			<label htmlFor={props.id || props.name}>{label}</label>
			<input {...field} {...props} />
			{meta.touched && meta.error ? <div>{meta.error}</div> : null}
		</div>
	);
};

export default Input;
