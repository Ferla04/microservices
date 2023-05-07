import { Router } from 'express'
import { createUser, deleteUser, getUsers, updateUser, userLogin } from '../controllers/user.controller.js'
import { validatorHandler } from '../../../middleware/validator.handler.js'
import { createUserSchema, deleteUserSchema, updateUserSchema, userLoginSchema } from '../schemas/user.schema.js'
import { validateJWT } from '../../../middleware/jwt.validator.js'

const router = Router()

router
  .post('/login', validatorHandler(userLoginSchema), userLogin)
  .use(validateJWT)
  .get('/:email?', getUsers)
  .post('/', validatorHandler(createUserSchema), createUser)
  .put('/:email', validatorHandler(updateUserSchema), updateUser)
  .delete('/:email', validatorHandler(deleteUserSchema), deleteUser)

export default router
