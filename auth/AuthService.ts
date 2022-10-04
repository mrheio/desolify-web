import { firebaseAuth } from '@configs/firebase.config';
import CustomError from '@utils/errors/CustomError';
import appUsersService from 'database/AppUsersService';
import { appUsersRepository } from 'database/FirestoreRepository';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export type LoginProps = {
	email: string;
	password: string;
};

export type RegisterProps = {
	email: string;
	username: string;
	password: string;
};

class AuthService {
	async getUser() {
		const user = firebaseAuth.currentUser;
		return user != null ? appUsersRepository.getById(user.uid) : null;
	}

	async logInWithEmailAndPassword({ email, password }: LoginProps) {
		try {
			await signInWithEmailAndPassword(firebaseAuth, email, password);
		} catch (error) {
			throw CustomError.maybeConvertFirebaseError(error);
		}
	}

	async register({ email, username, password }: RegisterProps) {
		try {
			const {
				user: { uid: id },
			} = await createUserWithEmailAndPassword(firebaseAuth, email, password);
			await appUsersService.addUser({ id, email, username });
		} catch (error) {
			throw CustomError.maybeConvertFirebaseError(error);
		}
	}

	async logOut() {
		await signOut(firebaseAuth);
	}
}

export const authService = new AuthService();
