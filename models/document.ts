import { DocumentSnapshot } from 'firebase/firestore';
import AppUser from './AppUser';
import Game from './Game';
import Team from './Team';

export enum Model {
	AppUser,
	Game,
	Team,
}

export default abstract class Document {
	id: string;
	createdAt: number;

	constructor(id: string, createdAt: number) {
		this.id = id;
		this.createdAt = createdAt;
	}

	static deserialize(doc: DocumentSnapshot, model: Model) {
		switch (model) {
			case Model.AppUser: {
				return AppUser.fromDocument(doc);
			}
			case Model.Game: {
				return Game.fromDocument(doc);
			}
			case Model.Team: {
				return Team.fromDocument(doc);
			}
			default: {
				throw Error('Unknown model');
			}
		}
	}
}
