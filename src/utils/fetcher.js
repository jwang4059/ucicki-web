import useSWR from "swr";

const fetcher = async (url) => {
	const response = await fetch(url, {
		credentials: "include",
	});
	const data = await response.json();
	return data;
};

export const useUser = () => {
	const { data, error } = useSWR(
		`${process.env.NEXT_PUBLIC_HOST}/user/info`,
		fetcher
	);

	return {
		data,
		isLoading: !error && !data,
		isError: error || data?.status === "failed",
	};
};
