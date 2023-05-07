import bcryptjs from 'bcryptjs'

export const bcrypt = (password) => {
  const salt = bcryptjs.genSaltSync()
  return bcryptjs.hashSync(password, salt)
}
