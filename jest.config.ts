import type { Config } from 'jest'

const config: Config = {
preset: 'ts-jest/presets/default-esm',
testEnvironment: 'jsdom',
setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
extensionsToTreatAsEsm: ['.ts', '.tsx'],
moduleNameMapper: {
'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
'\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/src/tests/__mocks__/fileMock.ts'
},
transform: {
'^.+\\.(ts|tsx)$': [
  'ts-jest',
  {
    useESM: true,
    tsconfig: '<rootDir>/tsconfig.json'
  }
]
}
}
export default config
