import Document from '@models/Document';
import { QueryConstraint } from 'firebase/firestore';

export default interface BaseRepository<T extends Document> {
	getAll(): Promise<T[]>;
	getById(id: string): Promise<T | null>;
	getWhere(...where: QueryConstraint[]): Promise<T[]>;
	add(data: T): Promise<void>;
	update(newData: T): Promise<void>;
	deleteById(id: string): Promise<void>;
	deleteWhere(...where: QueryConstraint[]): Promise<void>;
}
