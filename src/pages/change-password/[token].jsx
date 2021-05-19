import React, { useState } from "react";
import { useRouter } from "next/router";
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
	const [error, setError] = useState("");

	// Page should be 404 error if not in server

	const token =
		typeof router.query.token === "string" ? router.query.token : "";

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
			router.push("/");
		} else {
			setError(data.message);
		}

		setSubmitting(false);
	};

	return (
		<Layout>
			<h1>Create New Password</h1>
			<Formik
				initialValues={{
					password: "",
					passwordConfirmation: "",
				}}
				validationSchema={ChangePasswordFormValidation}
				onSubmit={onSubmit}
			>
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

export default ChangePasswordPage;
