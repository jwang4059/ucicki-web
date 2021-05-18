import React, { useState } from "react";
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
			setError(data.message || "Invalid user credentials");
		}
		setSubmitting(false);
	};

	return (
		<Layout>
			<div>
				<h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Sign in to your account
				</h1>
				<p className="text-center text-red-700 text-sm font-medium">{error}</p>
				<div className="m-4">
					<Formik
						initialValues={{
							userId: "",
							password: "",
						}}
						onSubmit={onSubmit}
					>
						<Form autoComplete="off">
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
							<div className="text-center">
								<button
									className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-4"
									type="submit"
								>
									Submit
								</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</Layout>
	);
};

export default LoginPage;
