import Joi from 'joi'

const email = Joi.string().email()
const name = Joi.string().min(3)
const password = Joi.string().min(6)

export const userLoginSchema = Joi.object({
  email: email.required(),
  password: password.required()
})

export const createUserSchema = Joi.object({
  email: email.required(),
  name: name.required(),
  password: password.required()
})

export const updateUserSchema = Joi.object({
  email: email.required(),
  name,
  password
})

export const deleteUserSchema = Joi.object({
  email: email.required()
})
