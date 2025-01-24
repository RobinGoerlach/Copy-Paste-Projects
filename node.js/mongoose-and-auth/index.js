// File: index.js
// Description: Entry point of the application. Sets up middleware, routes, and starts the server.

import cors from "cors"; // Enables cross-origin resource sharing
import cookieParser from "cookie-parser"; // Parses cookies in incoming requests
import express from "express"; // Framework for building web applications
import "./db/dbConnection.js"; // Connects to the MongoDB database
import { errorHandler } from "./middlewares/errorHandler.js"; // Custom error handler middleware
import authRouter from "./routers/authRouter.js"; // Router for authentication routes

const app = express(); // Creates an Express application
const port = 3000; // Port number for the server

// Middleware for enabling CORS with specific options
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    credentials: true, // Include credentials such as cookies in requests
  })
);
app.use(cookieParser()); // Middleware to parse cookies
app.use(express.json()); // Middleware to parse incoming JSON payloads

// Mount the auth router at the '/auth' path
app.use("/auth", authRouter);

// Middleware to handle errors
app.use(errorHandler);

// Start the server and listen on the specified port
app.listen(port, () => console.log(`The server is running on port:${port}`));
