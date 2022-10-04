import AppUser, { AppUserRawData } from '@models/AppUser';
import { appUsersRepository } from './FirestoreRepository';

class AppUsersService {
	async addUser(userData: AppUserRawData) {
		const user = new AppUser(userData);
		await appUsersRepository.add(user);
	}
}

const appUsersService = new AppUsersService();

export default appUsersService;
