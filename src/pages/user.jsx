import React from "react";
import { useUser } from "../utils/fetcher";
import Date from "../components/date";
import Layout from "../components/layout";

const Contribution = ({ classes, name, hours }) => {
	return (
		<div
			className={`flex flex-col text-white shadow-xl rounded-md py-2 mx-2 my-4 ${classes}`}
		>
			<span>{hours}</span>
			<span>{name}</span>
		</div>
	);
};

const UserSection = ({ data }) => {
	const fullName = `${data.first_name} ${data.last_name}`;

	return (
		<article className="text-center text-lg">
			<section className="my-8">
				<h1 className="text-6xl font-bold my-4">{fullName}</h1>
				<p>
					Member since <Date dateString={data.created_at} />
				</p>

				<img
					className="my-4"
					src="http://www.ucicirclek.com/public/assets2/img/default_pic20_21.png"
					alt="Profile"
				/>
			</section>
			<section className="my-8">
				<h2 className="text-4xl underline my-2">Account Summary</h2>
				<p>You have not paid your dues.</p>
				<p>You are not part of a family.</p>
				<div className="text-base my-2">
					<p>Is this information incorrect?</p>
					<p> Contact your Family Head!</p>
				</div>
			</section>
			<section className="my-8">
				<div className="my-8">
					<Contribution classes="bg-gray-500" name="fellowship" hours={0} />
					<Contribution classes="bg-blue-500" name="service" hours={0} />
					<Contribution classes="bg-yellow-400" name="leadership" hours={0} />
				</div>
				<div>
					<Contribution classes="bg-gray-500" name="attended" hours={0} />
					<Contribution classes="bg-blue-500" name="chaired" hours={0} />
				</div>
				<div>
					<span className="block text-white bg-yellow-400 shadow-sm rounded-md py-4 m-2">
						MRP Standing: Not Achieved
					</span>
				</div>
			</section>
		</article>
	);
};

const UserPage = () => {
	const { data, isLoading, isError } = useUser();

	let content;

	if (isError) {
		content = <div>failed to load</div>;
	} else if (isLoading) {
		content = <div>loading...</div>;
	} else {
		content = <UserSection data={data} />;
	}

	return <Layout>{content}</Layout>;
};

export default UserPage;
