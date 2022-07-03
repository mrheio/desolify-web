import { createDocument, DocumentModel } from './document';

export type Team = DocumentModel & {
    name: string;
    slots: number;
    freeSlots: number;
    filledSlots: number;
    gameId: string;
    uid: string;
    members: string[];
};

export const createTeam = ({
    id,
    name,
    slots,
    freeSlots,
    filledSlots,
    gameId,
    uid,
    members,
    createdAt,
}: Team): Team => {
    return {
        ...createDocument({ id, createdAt }),
        name: name,
        slots: slots,
        freeSlots: freeSlots,
        filledSlots: filledSlots,
        gameId: gameId,
        uid: uid,
        members: members,
    };
};
