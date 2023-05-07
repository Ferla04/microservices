export const successResponse = (res, statusCode, body, warning = null) => {
  res
    .status(statusCode)
    .json({
      error: null,
      warning,
      body
    })
}

export const errorResponse = (res, statusCode, reason, details = null, data = null) => {
  res
    .status(statusCode)
    .json({
      message: reason,
      details,
      data
    })
}
