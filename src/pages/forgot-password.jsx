import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Layout from "../components/layout";
import Input from "../components/input";
import Button from "../components/button";

const ForgotPasswordFormValidation = Yup.object({
	email: Yup.string().email("Invalid email address").required("Required"),
});

const ForgotPasswordPage = () => {
	const onSubmit = async (values, { setSubmitting }) => {
		await fetch("http://localhost:4000/forgot-password", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		});

		setSubmitting(false);
	};

	return (
		<Layout>
			<div className="min-h-screen flex justify-center">
				<div className="w-full max-w-2xl mx-4 my-6">
					<h1 className="text-center text-3xl font-extrabold text-gray-900 mb-4">
						Forgot Password Form
					</h1>
					<Formik
						initialValues={{
							email: "",
						}}
						validationSchema={ForgotPasswordFormValidation}
						onSubmit={onSubmit}
					>
						<Form autoComplete="off">
							<Input label="Email Address: " name="email" type="email" />
							<div className="text-center">
								<Button type="submit">Submit</Button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</Layout>
	);
};

export default ForgotPasswordPage;
