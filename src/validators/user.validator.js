import Boom from '@hapi/boom'
import { Users } from '../modules/users/models/users.model.js'

export const existingUser = async (email) => {
  const user = await Users.findByPk(email)
  if (!user) throw Boom.notFound('Usuario no encontrado')
  return user
}
