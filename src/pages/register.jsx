import React, { useState } from "react";
import { useRouter } from "next/router";
import { parseISO } from "date-fns";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Layout from "../components/layout";
import Input from "../components/input";
import Button from "../components/button";

const RegisterFormValidation = Yup.object({
	firstName: Yup.string()
		.max(20, "Must be 15 characters or less")
		.required("Required"),
	lastName: Yup.string()
		.max(20, "Must be 20 characters or less")
		.required("Required"),
	dob: Yup.date().required("Required"),
	phone: Yup.string().matches(
		/^[1-9]\d{2}-\d{3}-\d{4}/,
		"Invalid phone number format"
	),
	email: Yup.string()
		.matches(
			/(\W|^)[\w.-]{0,25}@uci\.edu(\W|$)/,
			"Must be valid UCI email address"
		)
		.required("Required"),
	password: Yup.string()
		.min(8, "Must be at least 8 characters")
		.required("Required"),
	passwordConfirmation: Yup.string()
		.min(8, "Must be at least 8 characters")
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required("Required"),
});

const RegisterPage = () => {
	const router = useRouter();
	const [error, setError] = useState("");

	// Should add a handle error function for serverside errors
	const onSubmit = async (values, { setSubmitting }) => {
		const response = await fetch("http://localhost:4000/register", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...values,
				userId: values.email.substring(0, values.email.indexOf("@uci.edu")),
				dob: parseISO(values.dob),
			}),
		});
		const data = await response.json();

		if (data.status === "success") {
			router.push("/");
		} else {
			setError(data.message);
		}

		setSubmitting(false);
	};

	return (
		<Layout>
			<h1>Registration Form</h1>
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
					<h2>Basic Information</h2>
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
					<h2>Contact Information</h2>
					<Input
						label="Phone Number (Optional): "
						name="phone"
						type="tel"
						placeholder="949-824-5011"
					/>
					<Input
						label="Email Address: "
						name="email"
						type="email"
						placeholder="petr@uci.edu"
					/>
					<h2>Password Creation</h2>
					<Input label="Password: " name="password" type="password" />
					<Input
						label="Confirm Password: "
						name="passwordConfirmation"
						type="password"
					/>
					<div className="text-center">
						<Button type="submit">Submit</Button>
					</div>
					{error ? (
						<p className="text-center text-red-700 text-sm font-medium">
							{error}
						</p>
					) : null}
				</Form>
			</Formik>
		</Layout>
	);
};

export default RegisterPage;
