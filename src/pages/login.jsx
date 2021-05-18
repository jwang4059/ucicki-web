import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Layout from "../components/layout";
import Input from "../components/input";

const LoginFormValidation = Yup.object({
	userId: Yup.string(),
	password: Yup.string(),
});

const LoginPage = () => {
	const onSubmit = async (values, { setSubmitting }) => {
		const response = await fetch("http://localhost:4000/login", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		});
		const data = await response.json();
		if (data !== null) {
			data.forEach(console.log);
		}
		setSubmitting(false);
	};

	return (
		<Layout>
			<h1>Login</h1>
			<Formik
				initialValues={{
					userId: "",
					password: "",
				}}
				validationSchema={LoginFormValidation}
				onSubmit={onSubmit}
			>
				<Form autoComplete="off">
					<Input label="UCInetID: " name="userId" type="text" />
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
