import {
	addDoc,
	collection,
	CollectionReference,
	deleteDoc,
	doc,
	DocumentSnapshot,
	getDoc,
	getDocs,
	query,
	QueryConstraint,
	setDoc,
} from 'firebase/firestore';
import { ItemAlreadyExists } from 'utils/errors';
import { firestore } from '../configs/firebase.config';
import { AppUser, Document, Game, Team } from '../models';
import BaseRepository from './BaseRepository';

class FirestoreRepository<T extends Document> implements BaseRepository<T> {
	collectionRef: CollectionReference;
	modelCreator: (doc: DocumentSnapshot) => T;

	constructor(collectionPath: string, modelCreator: (doc: DocumentSnapshot) => T) {
		this.collectionRef = collection(firestore, collectionPath);
		this.modelCreator = modelCreator;
	}

	async getAll(): Promise<T[]> {
		const res = await getDocs(this.collectionRef);
		return res.docs.map(this.modelCreator);
	}

	async getById(id: string): Promise<T | null> {
		const res = await getDoc(doc(this.collectionRef, id));
		return res.exists() ? this.modelCreator(res) : null;
	}

	async getWhere(...where: QueryConstraint[]): Promise<T[]> {
		const res = await getDocs(query(this.collectionRef, ...where));
		return res.docs.map(this.modelCreator);
	}

	async add(data: T): Promise<void> {
		const { id } = data;

		if (id === '') {
			await addDoc(this.collectionRef, data);
			return;
		}

		const res = await getDoc(doc(this.collectionRef, id));

		if (res.exists()) {
			throw new ItemAlreadyExists({ id });
		}

		await setDoc(doc(this.collectionRef, data.id), data);
	}

	async update(newData: T): Promise<void> {
		await setDoc(doc(this.collectionRef, newData.id), newData);
	}

	async deleteById(id: string): Promise<void> {
		await deleteDoc(doc(this.collectionRef, id));
	}

	async deleteWhere(...where: QueryConstraint[]): Promise<void> {
		const res = await getDocs(query(this.collectionRef, ...where));
		for (const doc of res.docs) {
			await deleteDoc(doc.ref);
		}
	}
}

export const appUsersRepository = new FirestoreRepository<AppUser>('users', AppUser.fromDocument);

export const gamesRepository = new FirestoreRepository<Game>('games', Game.fromDocument);

export const teamsRepository = new FirestoreRepository<Team>('teams', Team.fromDocument);
