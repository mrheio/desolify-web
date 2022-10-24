import Game, { GameRawData } from 'models/Game';
import { GameAlreadyExists, ItemAlreadyExists } from 'utils/errors';
import { gamesRepository } from './FirestoreRepository';

class GamesService {
	async addGame(data: GameRawData) {
		const game = new Game(data);
		try {
			await gamesRepository.add(game);
		} catch (error) {
			if (error instanceof ItemAlreadyExists) {
				throw new GameAlreadyExists(game.id);
			}
			throw error;
		}
	}
}

const gamesService = new GamesService();

export default gamesService;
