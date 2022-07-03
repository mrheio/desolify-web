import { initializeTestEnvironment } from '@firebase/rules-unit-testing';

export const setup = async () => {
    const testEnv = await initializeTestEnvironment({});
    return testEnv;
};
