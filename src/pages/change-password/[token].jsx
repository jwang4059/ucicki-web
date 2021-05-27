import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Error from "next/error";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Layout from "../../components/layout";
import Input from "../../components/input";
import Button from "../../components/button";

const ChangePasswordFormValidation = Yup.object({
	password: Yup.string()
		.min(8, "Must be at least 8 characters")
		.required("Required"),
	passwordConfirmation: Yup.string()
		.min(8, "Must be at least 8 characters")
		.oneOf([Yup.ref("password"), null], "Passwords must match")
		.required("Required"),
});

const ChangePasswordPage = () => {
	const router = useRouter();
	const [token, setToken] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(true); // Makes sure token is valid before loading page
	const [errorCode, setErrorCode] = useState(null); // Error code if token is invalid
	const [serverError, setServerError] = useState(""); // Used to display errors from server

	useEffect(() => {
		const validateToken = async () => {
			const response = await fetch(
				"http://localhost:4000/change-password-token",
				{
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						token: router.query.token,
					}),
				}
			);
			setErrorCode(response.ok ? null : response.status);
			setIsLoading(false);
		};

		if (router.isReady && router.query.token) {
			setToken(router.query.token);
			validateToken();
		}
	}, [router]);

	const onSubmit = async (values, { setSubmitting }) => {
		const response = await fetch("http://localhost:4000/change-password", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ...values, token }),
		});
		const data = await response.json();

		if (data.status === "success") {
			setSubmitted(true);
		} else {
			setServerError(data.message);
		}

		setSubmitting(false);
	};

	if (errorCode) {
		return <Error statusCode={errorCode} />;
	}

	if (isLoading) {
		return null;
	}

	return (
		<Layout>
			<div className="min-h-screen">
				<div className="flex justify-center">
					<div className="w-full max-w-2xl mx-4 my-6">
						<h1 className="text-center text-3xl font-extrabold text-gray-900 mb-4">
							Create New Password
						</h1>
						<Formik
							initialValues={{
								password: "",
								passwordConfirmation: "",
							}}
							validationSchema={ChangePasswordFormValidation}
							onSubmit={onSubmit}
						>
							{({ isSubmitting }) =>
								!submitted ? (
									<Form autoComplete="off">
										<Input label="Password: " name="password" type="password" />
										<Input
											label="Confirm Password: "
											name="passwordConfirmation"
											type="password"
										/>
										<div className="text-center">
											<Button type="submit">Submit</Button>
										</div>
										{serverError ? (
											<p className="text-center text-red-700 text-sm font-medium">
												{serverError}
											</p>
										) : null}
									</Form>
								) : (
									<div className="text-center">
										<p className="bg-green-200 border-green-500 border-2 py-2">
											Password has been updated
										</p>
										<Button
											isLoading={isSubmitting}
											onClick={() => router.push("/login")}
										>
											Go to Login
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

export default ChangePasswordPage;
