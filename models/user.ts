import { createDocument, DocumentModel } from './document';

export type AppUserRoles = {
    admin: boolean;
};

export type AppUser = DocumentModel & {
    email: string;
    username: string;
    roles: AppUserRoles;
};

export const createUser = ({
    id,
    email,
    username,
    roles,
    createdAt,
}: AppUser): AppUser => {
    return {
        ...createDocument({ id, createdAt }),
        email,
        username,
        roles,
    };
};
