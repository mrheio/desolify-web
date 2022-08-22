import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	query,
	QueryConstraint,
	setDoc,
	updateDoc,
} from 'firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { map } from 'rxjs';
import { firestore } from '../configs/firebase.config';
import { DocumentModel } from '../models/document';
import { createGame, Game } from '../models/game';
import { createTeam, Team } from '../models/team';
import { AppUser, createUser } from '../models/user';

export const createFirestoreRepository = <T extends DocumentModel>(
	collectionPath: string,
	converter: (data: any) => T,
) => {
	const collectionRef = collection(firestore, collectionPath);

	const getAll = async () => {
		const res = await getDocs(collectionRef);
		const docs = res.docs;
		return docs.map((doc) => converter(doc.data()));
	};

	const getAll$ = () => {
		const data$ = collectionData(query(collectionRef));
		return data$.pipe(map((val) => val.map((e) => converter(e))));
	};

	const getById = async (id: string) => {
		const res = await getDoc(doc(collectionRef, id));
		return res.exists() ? converter(res.data()) : null;
	};

	const getById$ = (id: string) => {
		const data$ = docData(doc(collectionRef, id));
		return data$.pipe(map(converter));
	};

	const getWhere = async (...where: QueryConstraint[]) => {
		const q = query(collectionRef, ...where);
		const res = await getDocs(q);
		return res.docs.map((doc) => converter(doc.data()));
	};

	const getWhere$ = (...where: QueryConstraint[]) => {
		const q = query(collectionRef, ...where);
		return collectionData(q).pipe(map((val) => val.map((e) => converter(e))));
	};

	const add = async (data: T) => {
		const model = converter(data);
		if (model.id === '') {
			await addDoc(collectionRef, model);
			return model;
		}
		await setDoc(doc(collectionRef, model.id), model);
		return model;
	};

	const update = async (newData: T) => {
		const model = converter(newData);
		await updateDoc(doc(collectionRef, model.id), model);
		return model;
	};

	const deleteById = async (id: string) => {
		await deleteDoc(doc(collectionRef, id));
	};

	const deleteWhere = async (...where: QueryConstraint[]) => {
		const q = query(collectionRef, ...where);
		const res = await getDocs(q);
		for (const doc of res.docs) {
			await deleteDoc(doc.ref);
		}
	};

	return {
		getAll,
		getAll$,
		getById,
		getById$,
		getWhere,
		getWhere$,
		add,
		update,
		deleteById,
		deleteWhere,
	};
};

export const usersRepository = createFirestoreRepository<AppUser>('users', createUser);

export const gamesRepository = createFirestoreRepository<Game>('games', createGame);

export const teamsRepository = createFirestoreRepository<Team>('teams', createTeam);
