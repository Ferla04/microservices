import { Sequelize } from 'sequelize'
import env from '../config/index.js'

const URI = `postgres://${env.pg_db_user}:${env.pg_db_password}@${env.pg_db_host}:${env.pg_db_port}/${env.pg_db_name}`
export const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  timezone: 'America/Bogota',
  logging: false
})

try {
  await sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
