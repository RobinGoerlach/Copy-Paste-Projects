// File: asyncHandler.js
// Description: Utility function to handle asynchronous middleware and route handlers by catching errors and passing them to the next middleware.

function asyncHandler(fn) {
  return function (req, res, next) {
    return Promise.resolve(fn(req, res, next)) // Resolve the promise returned by the handler function
      .catch(next); // Pass any error to the next middleware (error handler)
  };
}

export default asyncHandler; // Export the async handler utility
