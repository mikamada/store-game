import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
interface callAPIProps extends AxiosRequestConfig {
	token?: boolean;
}

export const callAPI = async ({ url, method, data, token }: callAPIProps) => {
	let headers = {};
	if (token) {
		const tokenCookie = Cookies.get("token");
		const jwtToken = atob(tokenCookie!);
		headers = {
			Authorization: `Bearer ${jwtToken}`,
		};
	}
	const response = await axios({
		url,
		method,
		data,
		headers,
	}).catch((err) => err.response);

	if (response.status > 300) {
		const res = {
			error: true,
			message: response.data.message,
			data: null,
		};

		return res;
	}

	const res = {
		error: false,
		message: response.data.message,
		data: response.data.data,
	};

	return res;
};
