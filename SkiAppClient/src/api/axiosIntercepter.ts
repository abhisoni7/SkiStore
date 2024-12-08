import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../app/router/Routes";

axios.defaults.baseURL = "http://localhost:5111/api/";

const responsebody = (response: AxiosResponse) => response.data;

const sleep = (time: number) =>
	new Promise((resolve) => setTimeout(resolve, time));

axios.interceptors.response.use(
	async (response) => {
		await sleep(500);
		return response;
	},
	(error: AxiosError) => {
		console.log("Caught by interceptor");
		const { data, status } = error.response as AxiosResponse;

		switch (status) {
			case 400:
				if (data.errors) {
					const modelStateErrors: string[] = [];
					for (const errorKey in data.errors) {
						if (data.errors[errorKey]) {
							modelStateErrors.push(data.errors[errorKey]);
						}
					}
					throw modelStateErrors.flat();
				}

				toast.error(data.title);
				break;
			case 401:
				toast.error(data.title);
				break;
			case 404:
				router.navigate("/not-found");
				break;
			case 500:
				router.navigate("/server-error", { state: { error: data } });
				break;
			default:
				toast.error(data.title);
				break;
		}
		return Promise.reject(error);
	}
);

const requests = {
	get: (url: string) => axios.get(url).then(responsebody),
	post: (url: string, body: object) => axios.get(url, body).then(responsebody),
	put: (url: string, body: object) => axios.get(url, body).then(responsebody),
	delete: (url: string) => axios.get(url).then(responsebody),
};

const catalog = {
	list: () => requests.get("products"),
	details: (id: number) => requests.get(`products/${id}`),
};

const testErrors = {
	get400Errors: () => requests.get("buggy/bad-request"),
	get404Errors: () => requests.get("buggy/not-found"),
	get500Errors: () => requests.get("buggy/server-error"),
	get401Errors: () => requests.get("buggy/unauthorized"),
	getValidationErrors: () => requests.get("buggy/validation-error"),
};

const apiClient = {
	catalog,
	testErrors,
};

export default apiClient;
