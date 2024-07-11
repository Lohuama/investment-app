
import nextJest from 'next/jest.js'
import { type } from 'os'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = {
  preset: ['ts-jest',"@babel/preset-env", "@babel/preset-react", "@babel/preset-flow"],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
};


export default createJestConfig(config)



