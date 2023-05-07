import { DataTypes } from 'sequelize'
import { sequelize } from '../../../database/connection.js'

const tableName = 'notes'
export const Notes = sequelize.define(tableName, {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date()
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: { tableName: 'users' },
      key: 'email'
    },
    onUpdate: 'cascade',
    onDelete: 'cascade'
  }
}, {
  schema: 'public',
  timestamps: false,
  tableName
})

Notes.sync({ alter: true })
