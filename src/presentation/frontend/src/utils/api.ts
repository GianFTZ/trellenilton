import axios from "axios";

const URL = "http://localhost:3000/api";

const api = axios.create({
	baseURL: URL,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "*",
		"Access-Control-Allow-Headers": "*",
	},
});
api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response && error.response.status) {
			console.log(error.response.data);
		}
		return Promise.reject(error);
	}
);

export const fetcher = async (url: string, opts?: any) => {
	try {
		const response = await api.get(url, opts);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const poster = async (url: string, data: any) => {
	try {
		const response = await api.post(url, data);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const updated = async (
	url: string,
	data: {
		id: string;
		board: { name: string };
	}
) => {
	try {
		console.log("data", data);
		const response = await api.put(url, { id: data.id, board: data.board });
		console.log("response", response);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const deleted = async (
	url: string,
	data: {
		id: string;
		board: { deleted: boolean };
	}
) => {
	try {
		const response = await axios.delete(`${URL}${url}`, {
			data,
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const deletedColumn = async (
	url: string,
	data: {
		id: string;
		column: { deleted: boolean };
	}
) => {
	try {
		const response = await axios.delete(`${URL}${url}`, {
			data,
		});
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export const updatedColumn = async (
	url: string,
	data: {
		id: string;
		column: { name: string };
	}
) => {
	try {
		const response = await api.put(url, { id: data.id, column: data.column });
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

export default api;
