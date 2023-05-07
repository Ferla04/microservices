import { Router } from 'express'
import { createNote, deleteNote, getNotes, updateNote } from '../controllers/notes.controller.js'
import { validatorHandler } from '../../../middleware/validator.handler.js'
import { createNoteSchema, deleteNoteSchema, updateNoteSchema } from '../schemas/note.schema.js'
import { validateJWT } from '../../../middleware/jwt.validator.js'

const router = Router()

router
  .use(validateJWT)
  .get('/:id?', getNotes)
  .post('/', validatorHandler(createNoteSchema), createNote)
  .put('/:id', validatorHandler(updateNoteSchema), updateNote)
  .delete('/:id', validatorHandler(deleteNoteSchema), deleteNote)

export default router
