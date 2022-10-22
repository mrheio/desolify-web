import { DocumentSnapshot } from 'firebase/firestore';
import Document from './Document';

export type AppUserRoles = {
	admin: boolean;
};

export type AppUserRawData = {
	id?: string;
	email: string;
	username: string;
	roles?: AppUserRoles;
	createdAt?: number;
};

export default class AppUser extends Document {
	email: string;
	username: string;
	roles: AppUserRoles;

	constructor({ id, email, username, roles, createdAt }: AppUserRawData) {
		super(id ?? '', createdAt ?? Date.now());
		this.email = email;
		this.username = username;
		this.roles = roles ?? { admin: false };
	}

	static fromDocument(doc: DocumentSnapshot) {
		const data = doc.data();
		return new AppUser(data as AppUserRawData);
	}
}
