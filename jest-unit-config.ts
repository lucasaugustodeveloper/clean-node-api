import config from './jest.config'

const unitConfig = { ...config, testMatch: null }

unitConfig.testMatch = ['**/*.spec.ts']

export default unitConfig
