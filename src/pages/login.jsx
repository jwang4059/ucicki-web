import React, { useState } from "react";
import Link from "../components/link";
import { Formik, Form, useField } from "formik";
import Layout from "../components/layout";

const Input = ({ label, ...props }) => {
	const [field] = useField(props);

	return (
		<div className="rounded-md shadow-sm -space-y-px">
			<div>
				<label className="sr-only" htmlFor={props.id || props.name}>
					{label}
				</label>
				<input
					className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
					{...field}
					{...props}
				/>
			</div>
		</div>
	);
};

const LoginPage = () => {
	const [error, setError] = useState(null);

	const onSubmit = async (values, { setSubmitting }) => {
		setError(null);
		const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/login`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		});
		const data = await response.json();

		if (data.status === "success") {
			window.location.assign("/");
		} else {
			setError(data.message);
		}

		setSubmitting(false);
	};

	return (
		<Layout title="Login">
			<div className="min-h-screen flex justify-center p-6">
				<div className="w-full max-w-xl">
					<div className="h-28 p-6">
						<h1 className="text-center text-3xl font-extrabold text-gray-900">
							Sign in to your account
						</h1>
						{error ? (
							<p className="text-center text-red-700 p-2">{error}</p>
						) : null}
					</div>
					<Formik
						initialValues={{
							userId: "",
							password: "",
						}}
						onSubmit={onSubmit}
					>
						<Form className="my-4" autoComplete="off">
							<Input
								label="UCInetID"
								name="userId"
								type="text"
								placeholder="UCInetID"
								required
							/>
							<Input
								label="Password"
								name="password"
								type="password"
								placeholder="Password"
								required
							/>
							<div>
								<button
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-6"
									type="submit"
								>
									Submit
								</button>
							</div>
						</Form>
					</Formik>
					<div className="flex flex-wrap justify-between my-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">
						<div className="mr-8 mb-2">
							<Link href="/forgot-password">Forgot Password?</Link>
						</div>
						<div>
							<Link href="/register">Don't have an account? Sign up!</Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default LoginPage;
