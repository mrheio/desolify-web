import CustomError, { CustomErrorProps } from './CustomError';

class DbOpError extends CustomError {
	constructor({ name, message }: CustomErrorProps) {
		super({ name, message });
	}
}

export type ItemAlreadyExistsProps = {
	name?: string;
	message?: string;
	id?: string;
};

export class ItemAlreadyExists extends DbOpError {
	constructor({ name, message, id }: ItemAlreadyExistsProps) {
		super({ name: name ?? 'item-already-exists', message: message ?? `Item with id ${id} already exists` });
	}
}

export class GameAlreadyExists extends ItemAlreadyExists {
	constructor(id: string) {
		super({ name: 'game-already-exists', message: `Game with id ${id} already exists` });
	}
}
