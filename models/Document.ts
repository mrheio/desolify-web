// test

export default abstract class Document {
	id: string;
	createdAt: number;

	constructor(id: string, createdAt: number) {
		this.id = id;
		this.createdAt = createdAt;
	}
}
