import dotenv from 'dotenv'

dotenv.config()

const env = {
  dev: {
    port: process.env.DEV_PORT,
    pg_db_user: process.env.DB_USER,
    pg_db_password: process.env.DB_PASSWORD,
    pg_db_host: process.env.DB_HOST,
    pg_db_port: process.env.DB_PORT,
    pg_db_name: process.env.DB_NAME,
    jwt_password: process.env.JWT_PASSWORD
  },
  prod: {
    port: process.env.PROD_PORT
  }
}

export default env[process.env.NODE_ENV]
