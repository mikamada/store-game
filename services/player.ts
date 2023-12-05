import axios from "axios";
const rootApi = process.env.NEXT_PUBLIC_API;

export const fetchFeaturedGame = async () => {
	const res = await axios.get(`${rootApi}/players/landingpage`);
	const resAxios = res.data;
	return resAxios.data;
};

export const detailVoucher = async (id: string) => {
	const res = await axios.get(`${rootApi}/players/${id}/detail`);
	const resAxios = res.data;
	return resAxios.data;
};

export const getGameCategory = async () => {
	const res = await axios.get(`${rootApi}/players/category`);
	const resAxios = res.data;
	return resAxios.data;
};
