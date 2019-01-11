import dotenv from 'dotenv'

dotenv.config()
const env = process.env.NODE_ENV || 'development'

const baseConf = {
  port: parseInt(process.env.PORT) || 3000,
  env
}

const config = {
  development: {
    ...baseConf
  },
  test: {
    ...baseConf
  }
}

export default config[env]
