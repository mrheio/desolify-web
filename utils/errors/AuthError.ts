import CustomError, { CustomErrorProps } from './CustomError';

export type AuthErrorProps = CustomErrorProps;

export default class AuthError extends CustomError {
	constructor({ name, message }: AuthErrorProps) {
		super({ name, message });
	}
}
