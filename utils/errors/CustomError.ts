import { FirebaseError } from 'firebase/app';
import { Game } from '../../models/game';

function isFirebaseError(err: any): err is FirebaseError {
	return err.code && err.code.startsWith('auth/');
}

export const isCustomError = (err: any): err is CustomError => {
	return err instanceof CustomError;
};

type CustomErrorProps = {
	name: string;
	message: string;
};

export default class CustomError extends Error {
	name: string;

	constructor({ name, message }: CustomErrorProps) {
		super(message);
		this.name = name;
	}

	static teamSizeTooSmall() {
		return new CustomError({
			name: 'team-size-too-small',
			message: 'Teams must have at least 2 members',
		});
	}

	static teamSizeOverflow(game: Game) {
		return new CustomError({
			name: 'team-size-overflow',
			message: `Game ${game.name} supports teams up to ${game.teamSize} members`,
		});
	}

	static gameAlreadyExists(game: Game) {
		return new CustomError({
			name: 'game-already-exists',
			message: `Game ${game.name} already exists`,
		});
	}

	static maybeConvertFirebaseError(error: unknown): CustomError | unknown {
		if (isFirebaseError(error)) {
			switch (error.code) {
				case 'auth/email-already-in-use':
				case 'auth/email-already-exists': {
					return new CustomError({
						name: 'email-already-in-use',
						message: 'An account with this email already exists',
					});
				}
				case 'auth/user-not-found':
				case 'auth/wrong-password': {
					return new CustomError({
						name: 'user-not-found',
						message: 'A user with these credentials does not exist',
					});
				}
				case 'auth/invalid-email': {
					return new CustomError({
						name: 'invalid-email',
						message: 'Invalid email format',
					});
				}
				case 'auth/too-many-requests': {
					return new CustomError({
						name: 'too-many-requests',
						message: 'You have tried too many times. Please wait a bit and try again.',
					});
				}
				case 'auth/user-already-exists': {
					return new CustomError({
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
