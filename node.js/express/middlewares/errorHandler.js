/*
 * Filename: errorHandler.js
 * Description: Middleware for handling errors in the application.
 */

export const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Logs the error stack trace.
  res.status(err.statusCode || 500).json({ error: err.message }); // Responds with an error message.
};
