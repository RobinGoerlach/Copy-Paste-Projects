// File: ErrorResponse.js
// Description: Custom error class for standardizing error handling throughout the application.

class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message); // Call the parent class constructor with the error message
    this.statusCode = statusCode; // Assign a status code to the error
  }
}

export default ErrorResponse; // Export the custom error class
