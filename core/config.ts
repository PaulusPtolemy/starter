type EnvironmentType = 'development' | 'stage' | 'production'

interface IAppConfig {
    FRONTEND_API_BASE_URL: string,
    ENVIRONMENT: EnvironmentType,
}

const appConfig: IAppConfig = {
    FRONTEND_API_BASE_URL: process.env.FRONTEND_API_BASE_URL || '',
    ENVIRONMENT: (process.env.ENVIRONMENT || process.env.NODE_ENV || 'production') as EnvironmentType,
}

export default appConfig
