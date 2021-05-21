import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Formik, Form, useField } from "formik";
import Layout from "../components/layout";

const CustomLink = React.forwardRef(({ onClick, href, children }, ref) => {
	return (
		<a href={href} onClick={onClick} ref={ref}>
			{children}
		</a>
	);
});

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
	const router = useRouter();
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

		if (data.status === "success") {
			router.push("/");
		} else {
			setError(data.message);
		}

		setSubmitting(false);
	};

	return (
		<Layout>
			<div>
				<h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Sign in to your account
				</h1>
				{error ? (
					<p className="text-center text-red-700 text-sm font-medium">
						{error}
					</p>
				) : null}
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
					<Link href="/forgot-password" passHref>
						<CustomLink>Forgot Password?</CustomLink>
					</Link>
					<Link href="/register" passHref>
						<CustomLink>Don't have an account? Sign up</CustomLink>
					</Link>
				</div>
			</div>
		</Layout>
	);
};

export default LoginPage;
