import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";

const LogoutPage = () => {
	const router = useRouter();
	const [error, setError] = useState(null);

	useEffect(() => {
		const logout = async () => {
			const response = await fetch("http://localhost:4000/logout", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const data = await response.json();

			if (data.status === "success") {
				router.push("/");
			} else {
				setError(data.message);
			}
		};

		logout();
	}, [router]);

	return (
		<Layout>
			<p>You are being logged out, please wait.</p>
			<p>(Click here, if not redirected within 5 seconds)</p>
			{error ? (
				<p className="text-center text-red-700 text-sm font-medium">{error}</p>
			) : null}
		</Layout>
	);
};

export default LogoutPage;
