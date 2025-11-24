import axios from "axios";

import { BASE_URL } from "@/constants/url";
export const instance = axios.create({
	baseURL: BASE_URL,
});

export const get = async <T>(...args: Parameters<typeof instance.get>) => {
	try {
		const response = await instance.get<T>(...args);
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
