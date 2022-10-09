import { DocumentSnapshot } from 'firebase/firestore';
import Document from './Document';

export const getGameId = (name: string) => name.split(' ').join('_');
export const getGameName = (id: string) => id.split('_').join(' ');

export type GameProps = {
	id: string;
	name: string;
	maxPlayersInTeam: number;
	createdAt: number;
};

export default class Game extends Document {
	name: string;
	maxPlayersInTeam: number;

	constructor({ id, name, maxPlayersInTeam, createdAt }: GameProps) {
		super(id, createdAt);
		this.name = name;
		this.maxPlayersInTeam = maxPlayersInTeam;
	}

	static fromDocument(doc: DocumentSnapshot) {
		const data = doc.data();
		return new Game(data as GameProps);
	}
}
