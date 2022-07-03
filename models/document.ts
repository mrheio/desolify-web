export type DocumentModel = {
    id: string;
    createdAt: number;
};

export const createDocument = ({
    id,
    createdAt,
}: DocumentModel): DocumentModel => {
    return { id: id, createdAt: createdAt };
};
