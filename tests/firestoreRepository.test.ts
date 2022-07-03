import { RulesTestEnvironment } from '@firebase/rules-unit-testing';
import { describe } from '@jest/globals';
import { createFirestoreRepository } from '../api/firestoreRepository';
import { createUserFromData, UserData, UserModel } from '../models/user';
import { setup } from './helpers';

let testEnv: RulesTestEnvironment;

let usersRepository = createFirestoreRepository<UserData, UserModel>(
    'users',
    createUserFromData
);

beforeAll(async () => {
    testEnv = await setup();
});

describe('initialize test env', () => {
    test('add user to db', async () => {
        await usersRepository.add({
            id: '1',
            email: 'test@gmail.com',
            username: 'test',
        });

        const res = await usersRepository.getById('1');
        console.log(res);
        expect(res.username).toBe('test');
    });
});
