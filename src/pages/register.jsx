import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import Layout from "../components/layout";

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

const RegisterFormValidation = Yup.object({
	firstName: Yup.string()
		.max(15, "Must be 15 characters or less")
		.required("Required"),
	lastName: Yup.string()
		.max(20, "Must be 20 characters or less")
		.required("Required"),
	dob: Yup.date().required("Required"),
	phone: Yup.string().matches(
		/^[1-9]\d{2}-\d{3}-\d{4}/,
		"Invalid phone number format"
	),
	email: Yup.string().email("Invalid email address").required("Required"),
	password: Yup.string()
		.min(8, "Must be at least 8 characters")
		.required("Required"),
	passwordConfirmation: Yup.string()
		.min(8, "Must be at least 8 characters")
		.oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const RegisterPage = () => {
	const onSubmit = (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
	};

	return (
		<Layout>
			<h1>Sign Up</h1>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					dob: "",
					phone: "",
					email: "",
					password: "",
					passwordConfirmation: "",
				}}
				validationSchema={RegisterFormValidation}
				onSubmit={onSubmit}
			>
				<Form autoComplete="off">
					<Input
						label="First Name: "
						name="firstName"
						type="text"
						placeholder="Peter"
					/>
					<Input
						label="Last Name: "
						name="lastName"
						type="text"
						placeholder="Anteater"
					/>
					<Input label="Date of Birth: " name="dob" type="date" />
					<Input
						label="Phone Number: "
						name="phone"
						type="tel"
						placeholder="510-123-4567"
					/>
					<Input
						label="Email Address: "
						name="email"
						type="email"
						placeholder="petr@uci.edu"
					/>
					<Input label="Password: " name="password" type="password" />
					<Input
						label="Confirm Password: "
						name="passwordConfirmation"
						type="password"
					/>
					<div className="text-center">
						<button
							className="bg-blue-700 text-white rounded-sm shadow-sm px-4 py-2 m-2"
							type="submit"
						>
							Submit
						</button>
					</div>
				</Form>
			</Formik>
		</Layout>
	);
};

export default RegisterPage;
