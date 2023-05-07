import Boom from '@hapi/boom'
import { catchAsync } from '../../../utils/catchAsycn.js'
import { Users } from '../../users/models/users.model.js'
import { Notes } from '../models/notes.model.js'
import { successResponse } from '../../../utils/response.js'

export const getNotes = catchAsync(async (req, res) => {
  const id = req.params?.id
  const query = req.query
  console.log(query)
  const result = await (id ? Notes.findByPk(id) : Notes.findAll({ where: query }))

  if (!result) throw Boom.notFound('Usuario no encontrado')
  successResponse(res, 200, result)
})

export const createNote = catchAsync(async (req, res) => {
  const user = await Users.findByPk(req.body.userEmail)

  if (!user) throw Boom.notFound('Usuario no encontrado')

  const result = await Notes.create(req.body)
  successResponse(res, 201, result)
})

export const updateNote = catchAsync(async (req, res) => {
  const note = await Notes.findByPk(req.params.id)
  await note.update(req.body)
  successResponse(res, 200, 'Nota actualizada')
})

export const deleteNote = catchAsync(async (req, res) => {
  const note = await Notes.findByPk(req.params.id)
  await note.destroy()
  successResponse(res, 200, 'Nota eliminada')
})
