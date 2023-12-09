import axios from "axios";
import { callAPI } from "../config/api";
import { CheckoutTypes } from "./data-types";
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

export const setCheckout = async (data: CheckoutTypes) => {
	const url = `${rootApi}/players/checkout`;
	return callAPI({
		url,
		method: "POST",
		data,
		token: true,
	});
};

export const getMemberOverview = async () => {
	const url = `${rootApi}/players/dashboard`;
	return callAPI({
		url,
		method: "GET",
		token: true,
	});
};
