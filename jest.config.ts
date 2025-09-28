import type { Config } from 'jest'

const config: Config = {
testEnvironment: 'jsdom',
setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
moduleNameMapper: {
'\\.(css|less|scss|sass)$': 'identity-obj-proxy'
},
transform: {
'^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }]
}
}
export default config