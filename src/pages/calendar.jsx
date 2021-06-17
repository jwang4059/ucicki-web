import React from "react";
import Layout from "../components/layout";
import Calendar from "../components/calendar";

export async function getServerSideProps(context) {
	return {
		props: {}, // will be passed to the page component as props
	};
}

const CalendarPage = () => {
	return (
		<Layout>
			<Calendar />
		</Layout>
	);
};

export default CalendarPage;
