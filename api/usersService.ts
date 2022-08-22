import { AppUserRoles, createUser } from '../models/user';
import { usersRepository } from './firestoreRepository';

export type AddUserData = {
	id: string;
	email: string;
	username: string;
	roles?: AppUserRoles;
	createdAt?: number;
};

const createUsersService = () => {
	const getUsers$ = () => {
		return usersRepository.getAll$();
	};

	const addUser = async ({ id, email, username, roles, createdAt }: AddUserData) => {
		const user = createUser({
			id,
			email,
			username,
			roles: roles ?? { admin: false },
			createdAt: createdAt ?? Date.now(),
		});
		await usersRepository.add(user);
	};

	return { getUsers$, addUser };
};

export const usersService = createUsersService();
