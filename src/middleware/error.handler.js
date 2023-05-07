import { ValidationError } from 'sequelize'
import { errorResponse } from '../utils/response.js'

export const logErrors = (err, req, res, next) => {
  console.error(err)
  next(err)
}

export const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err
    const data = Object.keys(err?.data || {})?.length ? err.data : null
    return errorResponse(res, output.statusCode, output.payload.message, null, data)
  }
  next(err)
}

// eslint-disable-next-line n/handle-callback-err
export const errorHandler = (err, req, res, next) => {
  errorResponse(res, 500, 'Error inesperado...')
}

export const error404 = (req, res) => {
  return errorResponse(res, 404, 'URL is not valid, please check the API documentation')
}

export const ormErrorHandler = (err, req, res, next) => {
  if (!(err instanceof ValidationError)) {
    return next(err)
  }
  errorResponse(res, 400, err.message)
}
