import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Layout from "../components/layout";
import Input from "../components/input";
import Button from "../components/button";
import { useRouter } from "next/router";

const ForgotPasswordFormValidation = Yup.object({
	email: Yup.string().email("Invalid email address").required("Required"),
});

const ForgotPasswordPage = () => {
	const router = useRouter();
	const [submitted, setSubmitted] = useState(false);

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
		setSubmitted(true);
	};

	return (
		<Layout>
			<div className="min-h-screen">
				<div className="flex justify-center">
					<div className="w-full max-w-2xl mx-4 my-6">
						<h1 className="text-center text-3xl font-extrabold text-gray-900 mb-4">
							Reset Password
						</h1>
						<Formik
							initialValues={{
								email: "",
							}}
							validationSchema={ForgotPasswordFormValidation}
							onSubmit={onSubmit}
						>
							{({ isSubmitting, values }) =>
								!submitted ? (
									<Form autoComplete="off">
										<Input label="Email Address: " name="email" type="email" />
										<div className="text-center">
											<Button type="submit">Submit</Button>
										</div>
									</Form>
								) : (
									<div className="text-center">
										<p className="bg-green-200 border-green-500 border-2 py-2">
											Password Reset Email sent
										</p>
										<p>{`Instructions for resetting your password have been sent to ${values.email}`}</p>
										<Button
											isLoading={isSubmitting}
											onClick={() => router.push("/")}
										>
											Return to Main
										</Button>
									</div>
								)
							}
						</Formik>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ForgotPasswordPage;
