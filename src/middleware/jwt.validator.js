import Boom from '@hapi/boom'
import jwt from 'jsonwebtoken'
import env from '../config/index.js'

export const validateJWT = async (req, res, next) => {
  const token = req.header('x-token')

  if (!token) next(Boom.unauthorized('Token no enviado'))

  try {
    const { email } = jwt.verify(token, env.jwt_password)
    req.email = email
    next()
  } catch (error) {
    next(error)
  }
}
