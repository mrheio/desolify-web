import { DocumentSnapshot } from 'firebase/firestore';
import Document from './Document';

export const getGameId = (name: string) => name.split(' ').join('_');
export const getGameName = (id: string) => id.split('_').join(' ');

export type GameRawData = {
	id: string;
	name: string;
	maxPlayersInTeam: number;
	createdAt: number;
	iconPath?: string;
};

export default class Game extends Document {
	name: string;
	maxPlayersInTeam: number;
	iconPath: string;

	constructor({ id, name, maxPlayersInTeam, createdAt, iconPath }: GameRawData) {
		super(id, createdAt);
		this.name = name;
		this.maxPlayersInTeam = maxPlayersInTeam;
		this.iconPath = iconPath ?? '/';
	}

	static fromDocument(doc: DocumentSnapshot) {
		const data = doc.data();
		return new Game(data as GameRawData);
	}

	toObject(): object {
		return {
			id: this.id,
			name: this.name,
			maxPlayersInTeam: this.maxPlayersInTeam,
			createdAt: this.createdAt,
			iconPath: this.iconPath,
		};
	}
}
