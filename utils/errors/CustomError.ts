import { FirebaseError } from 'firebase/app';
import AuthError from './AuthError';

function isFirebaseError(err: any): err is FirebaseError {
	return err.code && err.code.startsWith('auth/');
}

export const isCustomError = (err: any): err is CustomError => {
	return err instanceof CustomError;
};

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

	static maybeConvertFirebaseError(error: unknown): CustomError | unknown {
		if (isFirebaseError(error)) {
			switch (error.code) {
				case 'auth/email-already-in-use':
				case 'auth/email-already-exists': {
					return new AuthError({
						name: 'email-already-in-use',
						message: 'An account with this email already exists',
					});
				}
				case 'auth/user-not-found':
				case 'auth/wrong-password': {
					return new AuthError({
						name: 'user-not-found',
						message: 'A user with these credentials does not exist',
					});
				}
				case 'auth/invalid-email': {
					return new AuthError({
						name: 'invalid-email',
						message: 'Invalid email format',
					});
				}
				case 'auth/too-many-requests': {
					return new AuthError({
						name: 'too-many-requests',
						message: 'You have tried too many times. Please wait a bit and try again.',
					});
				}
				case 'auth/user-already-exists': {
					return new AuthError({
						name: 'user-already-exists',
						message: 'An account with this email already exists',
					});
				}
				default: {
					return error;
				}
			}
		}

		return error;
	}
}
