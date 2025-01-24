/*
 * Filename: specificMiddleware.js
 * Description: Contains specific middleware functions for request processing.
 */

const middlewareOne = (req, res, next) => {
  console.log('In specific middleware');
  next(); // Passes control to the next middleware.
};

const middlewareTwo = (req, res, next) => {
  console.log('In specific middleware2');
  next(); // Passes control to the next middleware.
};

export { middlewareOne, middlewareTwo };
