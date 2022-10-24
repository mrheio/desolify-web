import { ItemAlreadyExists } from '../db';

export default class GameAlreadyExists extends ItemAlreadyExists {
	constructor(id: string) {
		super({ name: 'game-already-exists', message: `Game with id ${id} already exists` });
	}
}
