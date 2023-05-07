import Jwt from 'jsonwebtoken'
import env from '../config/index.js'

export const generateJwt = (payload) => {
  return new Promise((resolve, reject) => {
    Jwt.sign(payload, env.jwt_password, {
      expiresIn: '4h'
    }, (error, token) => {
      if (error) return reject(error)
      resolve(token)
    })
  })
}
