export default {
    roots: ['<rootDir>/src'], // Root of your project
    testRegex: '(/.*\\.test)\\.(ts|tsx)$', // To find the files to test with these extensions
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // This file will be executed once the environment is setup
    testEnvironment: 'jest-environment-jsdom', // Specify the test environment
};
