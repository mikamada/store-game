import { LoginTypes } from "./data-types";
const rootApi = process.env.NEXT_PUBLIC_API;
import { callAPI } from "../config/api";

export const setSignUp = async (data: FormData) => {
	const url = `${rootApi}/auth/signup`;

	return callAPI({
		url,
		method: "POST",
		data,
	});
};

export const setSignIn = async (data: LoginTypes) => {
	const url = `${rootApi}/auth/signin`;

	return callAPI({
		url,
		method: "POST",
		data,
	});
};
