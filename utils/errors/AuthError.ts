import CustomError, { CustomErrorProps } from './CustomError';

export default class AuthError extends CustomError {
	constructor({ name, message }: CustomErrorProps) {
		super({ name, message });
	}
}
