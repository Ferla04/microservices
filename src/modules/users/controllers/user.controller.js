import Boom from '@hapi/boom'
import bcryptjs from 'bcryptjs'
import { Users } from '../models/users.model.js'
import { catchAsync } from '../../../utils/catchAsycn.js'
import { successResponse } from '../../../utils/response.js'
import { existingUser } from '../../../validators/user.validator.js'
import { generateJwt } from '../../../utils/jwt.js'

export const userLogin = catchAsync(async (req, res) => {
  const user = await existingUser(req.body?.email)
  const validatePasword = bcryptjs.compareSync(req.body.password, user.password)
  if (!validatePasword) throw Boom.unauthorized('Usuario o/y constraseña no valido')

  const token = await generateJwt({ email: req.body.email })
  successResponse(res, 200, token)
})

export const getUsers = catchAsync(async (req, res) => {
  const email = req.params?.email
  const result = await (email ? existingUser(email) : Users.findAll())
  successResponse(res, 200, result)
})

export const createUser = catchAsync(async (req, res) => {
  const { email } = req
  const user = await Users.findByPk(email)

  if (user) throw Boom.badRequest('Email ya existente')
  const result = await Users.create(req.body)
  successResponse(res, 201, result)
})

export const updateUser = catchAsync(async (req, res) => {
  const { email } = req.params
  const user = await existingUser(email)
  user.update(req.body)
  successResponse(res, 200, 'Usuario actualizado')
})

export const deleteUser = catchAsync(async (req, res) => {
  const { email } = req.params
  const user = await existingUser(email)
  user.destroy()
  successResponse(res, 200, 'Usuario eliminado')
})
