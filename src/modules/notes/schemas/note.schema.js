import Joi from 'joi'

const id = Joi.number()
const title = Joi.string()
const description = Joi.string()
const userEmail = Joi.string()

export const createNoteSchema = Joi.object({
  title: title.required(),
  description: description.required(),
  userEmail: userEmail.required()
})

export const updateNoteSchema = Joi.object({
  id: id.required(),
  title,
  description
})

export const deleteNoteSchema = Joi.object({
  id: id.required()
})
