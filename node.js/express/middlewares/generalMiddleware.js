/*
 * Filename: generalMiddleware.js
 * Description: Contains general middleware functions for request processing.
 */

// Middleware for adding a default username.
const generalMiddlewareOne = (req, res, next) => {
  console.log('Middleware 1');
  req.username = 'anoj'; // Example username.
  next(); // Passes control to the next middleware.
};

// Middleware for overriding the username.
const generalMiddlewareTwo = (req, res, next) => {
  console.log('Middleware 2');
  req.username = 'anojt'; // New username.
  next(); // Passes control to the next middleware.
};

export { generalMiddlewareOne, generalMiddlewareTwo };
