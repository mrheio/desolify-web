import { FirebaseError } from 'firebase/app';
import AuthError from './AuthError';
import CustomError from './CustomError';
import { DbError, ItemAlreadyExists } from './db';
import { GameAlreadyExists } from './game';

export const isFirebaseError = (err: any): err is FirebaseError => {
	return err.code && err.code.startsWith('auth/');
};

export const isCustomError = (err: any): err is CustomError => {
	return err instanceof CustomError;
};

export const isAuthError = (err: any): err is AuthError => {
	return err instanceof AuthError;
};

export const isDbError = (err: any): err is DbError => {
	return err instanceof DbError;
};

export const isItemAlreadyExistsError = (err: any): err is ItemAlreadyExists => {
	return err instanceof ItemAlreadyExists;
};

export const isGameAlreadyExistsError = (err: any): err is GameAlreadyExists => {
	return err instanceof GameAlreadyExists;
};

export const maybeConvertFirebaseError = (error: unknown): CustomError | unknown => {
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
};
