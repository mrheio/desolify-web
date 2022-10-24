import CustomError, { CustomErrorProps } from '../CustomError';

export type DbErrorProps = CustomErrorProps;

export default class DbError extends CustomError {
	constructor({ name, message }: DbErrorProps) {
		super({ name, message });
	}
}
