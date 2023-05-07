import express from 'express'
import cors from 'cors'
import env from './config/index.js'
import routes from './routes.js'
import { boomErrorHandler, error404, errorHandler, logErrors, ormErrorHandler } from './middleware/error.handler.js'

const app = express()
app.use(cors(), express.json())
const PORT = env.port ?? 3000

routes(app)
app.use(logErrors)
app.use(boomErrorHandler)
app.use(ormErrorHandler)
app.use(errorHandler)
app.use(error404)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
