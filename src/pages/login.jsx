import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Layout from "../components/layout";
import Input from "../components/input";

const LoginFormValidation = Yup.object({
	email: Yup.string().matches(
		/(\W|^)[\w.-]{0,25}@uci\.edu(\W|$)/,
		"Must be valid UCI email address"
	),
	password: Yup.string(),
});

const LoginPage = () => {
	const onSubmit = async (values, { setSubmitting }) => {
		const response = await fetch("http://localhost:4000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		});
		const data = await response.json();
		console.log(data);
		setSubmitting(false);
	};

	return (
		<Layout>
			<h1>Login</h1>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={LoginFormValidation}
				onSubmit={onSubmit}
			>
				<Form autoComplete="off">
					<Input label="Email Address: " name="email" type="email" />
					<Input label="Password: " name="password" type="password" />
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

export default LoginPage;
