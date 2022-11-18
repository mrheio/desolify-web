import { DocumentSnapshot } from 'firebase/firestore';
import Document from './Document';

export type TeamProps = {
	id: string;
	name: string;
	slots: number;
	freeSlots: number;
	filledSlots: number;
	gameId: string;
	uid: string;
	members: string[];
	createdAt: number;
};

export default class Team extends Document {
	name: string;
	slots: number;
	freeSlots: number;
	filledSlots: number;
	gameId: string;
	uid: string;
	members: string[];

	constructor({ id, name, slots, freeSlots, filledSlots, gameId, uid, members, createdAt }: TeamProps) {
		super(id, createdAt);
		this.name = name;
		this.slots = slots;
		this.freeSlots = freeSlots;
		this.filledSlots = filledSlots;
		this.gameId = gameId;
		this.uid = uid;
		this.members = members;
	}

	static fromDocument(doc: DocumentSnapshot) {
		const data = doc.data();
		return new Team(data as TeamProps);
	}

	toObject(): object {
		throw new Error('Method not implemented.');
	}
}
