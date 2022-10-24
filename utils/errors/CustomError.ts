export type CustomErrorProps = {
	name: string;
	message: string;
};

export default class CustomError extends Error {
	name: string;

	constructor({ name, message }: CustomErrorProps) {
		super(message);
		this.name = name;
	}
}
