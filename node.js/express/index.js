/*
 * Filename: index.js
 * Description: Entry point for the Express application.
 */

import express from 'express';
import { generalMiddlewareOne, generalMiddlewareTwo } from './middlewares/generalMiddleware.js';
import greetRouter from './routers/greetRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const port = 3000;

// Parses incoming JSON requests.
app.use(express.json());

// General middleware for logging and request processing.
app.use(generalMiddlewareOne);
app.use(generalMiddlewareTwo);

// Routes for '/greet'.
app.use('/greet', greetRouter);

// Error handling middleware.
app.use(errorHandler);

// Start the server on the specified port.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
