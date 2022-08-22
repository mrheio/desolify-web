export type RequestResponse<T> = {
	statusCode: number;
	name: string;
	message: string;
	payload: T;
};
