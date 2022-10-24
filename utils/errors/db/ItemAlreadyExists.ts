import DbError from './DbError';

export type ItemAlreadyExistsProps = {
	name?: string;
	message?: string;
	id?: string;
};

export default class ItemAlreadyExists extends DbError {
	constructor({ name, message, id }: ItemAlreadyExistsProps) {
		super({
			name: name ?? 'item-already-exists',
			message: message ?? `Item with id ${id} already exists`,
		});
	}
}
