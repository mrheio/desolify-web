import { NextApiRequest, NextApiResponse } from 'next';
import { usersRepository } from '../../../api/firestoreRepository';
import { firebaseAdminAuth } from '../../../configs/firebase.admin.config';

const deleteUser = async (uid: string) => {
    await usersRepository.deleteById(uid);
    await firebaseAdminAuth.deleteUser(uid);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const {
        method,
        query: { uid },
    } = req;

    if (method === 'DELETE') {
        if (typeof uid === 'string') {
            await deleteUser(uid);
            return res
                .status(204)
                .json({ message: `User with id ${uid} deleted` });
        }
    }
};

export default handler;
