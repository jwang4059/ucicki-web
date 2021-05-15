import React from "react";
import { Formik, Field, Form } from "formik";
import Layout from "../components/layout";

const TextField = ({ id, name, label, placeholder }) => (
	<Field name={name}>
		{({ field, form }) => (
			<div>
				<label htmlFor={id}>{label}</label>
				<input {...field} id={id} placeholder={placeholder} />
				<span>{form.errors.name}</span>
			</div>
		)}
	</Field>
);

const RegisterPage = () => {
	return (
		<Layout>
			<h1>Sign Up</h1>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form className="flex flex-col">
					<div>
						<label htmlFor="firstName">First Name: </label>
						<Field id="firstName" name="firstName" placeholder="Peter" />
					</div>

					<div>
						<label htmlFor="lastName">Last Name: </label>
						<Field id="lastName" name="lastName" placeholder="Anteater" />
					</div>

					<div>
						<label htmlFor="email">Email: </label>
						<Field
							id="email"
							name="email"
							placeholder="petey@uci.edu"
							type="email"
						/>
					</div>
					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</Layout>
	);
};

export default RegisterPage;
