import notesRouter from './modules/notes/routes/index.js'
import usersRouter from './modules/users/routes/index.js'

export default function (app) {
  app.use('/notes', notesRouter)
  app.use('/users', usersRouter)
}
