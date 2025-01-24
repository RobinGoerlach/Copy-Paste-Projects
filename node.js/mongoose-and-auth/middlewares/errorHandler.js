// File: errorHandler.js
// Description: Middleware to handle errors in the application by logging them and sending a structured response to the client.

export const errorHandler = (err, req, res, next) => {
  console.log(err.stack); // Log the error stack for debugging purposes
  res.status(err.statusCode || 500).json({
    // Send a response with the error status code or 500 (Internal Server Error)
    error: err.message, // Include the error message in the response
  });
};
