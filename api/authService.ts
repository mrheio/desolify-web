import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { of, switchMap } from 'rxjs';
import { firebaseAuth } from '../configs/firebase.config';
import CustomError from '../utils/errors/CustomError';
import { usersRepository } from './firestoreRepository';
import { usersService } from './usersService';

export type LoginFormData = {
	email: string;
	password: string;
};

export type RegisterFormData = {
	email: string;
	username: string;
	password: string;
};

const createAuthService = () => {
	const getUser = async () => {
		const user = firebaseAuth.currentUser;
		if (user != null) {
			return usersRepository.getById(user.uid);
		}
		return null;
	};

	const getUser$ = () => {
		return authState(firebaseAuth).pipe(
			switchMap((val) => {
				if (val != null) {
					return usersRepository.getById$(val.uid);
				}
				return of(null);
			}),
		);
	};

	const logInWithEmailAndPassword = async ({ email, password }: LoginFormData) => {
		try {
			await signInWithEmailAndPassword(firebaseAuth, email, password);
		} catch (error) {
			throw CustomError.maybeConvertFirebaseError(error);
		}
	};

	const register = async ({ email, username, password }: RegisterFormData) => {
		try {
			const { user } = await createUserWithEmailAndPassword(firebaseAuth, email, password);
			await usersService.addUser({ id: user.uid, email, username });
		} catch (error) {
			throw CustomError.maybeConvertFirebaseError(error);
		}
	};

	const logOut = async () => {
		await signOut(firebaseAuth);
	};

	return { getUser, getUser$, logInWithEmailAndPassword, register, logOut };
};

export const authService = createAuthService();
