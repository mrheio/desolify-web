import { createDocument, DocumentModel } from './document';

export type Game = DocumentModel & { name: string; teamSize: number };

export const getGameId = (name: string) => name.split(' ').join('_');
export const getGameName = (id: string) => id.split('_').join(' ');

export const createGame = ({ id, name, teamSize, createdAt }: Game): Game => {
    return {
        ...createDocument({ id, createdAt }),
        name: name,
        teamSize: teamSize,
    };
};
