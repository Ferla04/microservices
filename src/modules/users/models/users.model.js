import { DataTypes } from 'sequelize'
import { sequelize } from '../../../database/connection.js'
import { bcrypt } from '../../../utils/bcrypt.js'

const tableName = 'users'
export const Users = sequelize.define(tableName, {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    // eslint-disable-next-line space-before-function-paren
    set(value) {
      this.setDataValue('email', value.toLowerCase().trim())
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    // eslint-disable-next-line space-before-function-paren
    set(value) {
      this.setDataValue('name', value.toLowerCase().trim())
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    // eslint-disable-next-line space-before-function-paren
    set(value) {
      this.setDataValue('password', bcrypt(value))
    }
  }
}, {
  schema: 'public',
  timestamps: false,
  tableName
})

Users.sync({ alter: true })
