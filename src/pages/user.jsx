import React from "react";
import { useUser } from "../utils/fetcher";
import Date from "../components/date";
import Layout from "../components/layout";

const Contribution = ({ classes, name, hours }) => {
	return (
		<div
			className={`flex flex-col text-center text-white shadow-xl rounded-md py-2 mx-2 my-4 ${classes}`}
		>
			<span>{hours}</span>
			<span>{name}</span>
		</div>
	);
};

const User = () => {
	const { data, isLoading, isError } = useUser();

	if (isError) return <div>failed to load</div>;
	if (isLoading) return <div>loading...</div>;

	const fullName = `${data.first_name} ${data.last_name}`;

	return (
		<Layout>
			<section>
				<h1>{fullName}</h1>
				<p>
					Member since <Date dateString={data.created_at} />
				</p>
			</section>
			<section>
				<h2>Account Summary</h2>
				<p>You have not paid your dues</p>
				<p>You are not part of a family</p>
				<p>Is this information incorrect? Contact your Family Head!</p>
			</section>
			<section className="text-lg my-8">
				<div>
					<Contribution classes="bg-gray-500" name="fellowship" hours={0} />
					<Contribution classes="bg-blue-500" name="service" hours={0} />
					<Contribution classes="bg-yellow-400" name="leadership" hours={0} />
				</div>
				<div>
					<Contribution classes="bg-gray-500" name="attended" hours={0} />
					<Contribution classes="bg-blue-500" name="chaired" hours={0} />
				</div>
				<div>
					<span className="block text-center text-white bg-yellow-400 shadow-sm rounded-md py-4 m-2">
						MRP Standing: Not Achieved
					</span>
				</div>
			</section>
		</Layout>
	);
};

export default User;
