// File: authRouter.js
// Description: Router for handling authentication-related routes such as signup, signin, signout, and fetching user details.

import { Router } from "express"; // Import the Router class from Express
import {
  getUser, // Controller for fetching user details
  signIn, // Controller for user signin
  signUp, // Controller for user signup
  signOut, // Controller for user signout
} from "../controllers/authController.js"; // Import authentication controllers
import verifyToken from "../middlewares/verifyToken.js"; // Middleware to verify JWT tokens

const authRouter = Router(); // Create a new instance of the Router

// Route for user signup
authRouter.post("/signup", signUp);

// Route for user signin
authRouter.post("/signin", signIn);

// Route for user signout
authRouter.delete("/signout", signOut);

// Route for fetching user details; protected with token verification
authRouter.get("/me", verifyToken, getUser);

export default authRouter; // Export the router instance
