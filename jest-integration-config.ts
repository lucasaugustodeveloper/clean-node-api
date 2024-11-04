import config from './jest.config'

const integrationConfig = { ...config, testMatch: null }

integrationConfig.testMatch = ['**/*.test.ts']

export default integrationConfig
