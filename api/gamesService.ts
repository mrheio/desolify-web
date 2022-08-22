import { where } from 'firebase/firestore';
import { createGame, getGameId } from '../models/game';
import CustomError from '../utils/errors/CustomError';
import { gamesRepository, teamsRepository } from './firestoreRepository';

export type AddGameFormData = {
	name: string;
	teamSize: string;
};

const createGamesService = () => {
	const getGames$ = () => {
		return gamesRepository.getAll$();
	};

	const getGames = async () => {
		return gamesRepository.getAll();
	};

	const addGame = async ({ name, teamSize }: AddGameFormData) => {
		const parsedTeamSize = parseInt(teamSize);

		if (parsedTeamSize < 2) {
			throw CustomError.teamSizeTooSmall();
		}

		const res = await gamesRepository.getWhere(where('name', '==', name));

		if (res.length) {
			throw CustomError.gameAlreadyExists(res[0]);
		}

		const game = createGame({
			id: getGameId(name),
			name,
			teamSize: parsedTeamSize,
			createdAt: Date.now(),
		});
		const addedGame = await gamesRepository.add(game);
		return addedGame;
	};

	const deleteGame = async (id: string) => {
		await teamsRepository.deleteWhere(where('gameId', '==', id));
		await gamesRepository.deleteById(id);
	};

	return { getGames, getGames$, addGame, deleteGame };
};

export const gamesService = createGamesService();
