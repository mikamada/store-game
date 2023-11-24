import axios from "axios";

export const fetchFeaturedGame = async () => {
	const rootApi = process.env.NEXT_PUBLIC_API;
	const res = await axios.get(`${rootApi}/players/landingpage`);
	const resAxios = res.data;
	return resAxios.data;
};
