// File: authController.js
// Description: Contains controller functions for user authentication, including signup, signin, signout, and fetching user details.

import User from "../models/User.js"; // Import the User model
import bcrypt from "bcrypt"; // Import bcrypt for password hashing
import asyncHandler from "../utils/asyncHandler.js"; // Import the asyncHandler utility for error handling

// Controller for user signup
export const signUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, age, isAdmin, password } = req.body; // Destructure user details from the request body

  const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt of 10 rounds

  const newUser = await User.create({
    // Create a new user in the database
    firstName,
    lastName,
    email,
    age,
    isAdmin,
    password: hashedPassword, // Store the hashed password
  });

  res.send(newUser); // Send the created user as the response
});

// Controller for user signin
export const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body; // Destructure email and password from the request body

  const user = await User.findOne({ email }).select("+password"); // Find the user by email and include the password in the result

  const isMatch = await bcrypt.compare(password, user.password); // Compare the input password with the stored hashed password

  if (!isMatch) throw new Error("Password is incorrect"); // Throw an error if the passwords do not match

  res.send(user); // Send the user as the response if authentication is successful
});

// Controller for user signout
export const signOut = (req, res) => {
  // Clear the authentication token or cookie
  res.clearCookie("token"); // Example: clearing the token cookie
  res.status(200).send({ message: "Signout successful" }); // Send a success message
};

// Controller for fetching user details
export const getUser = asyncHandler(async (req, res) => {
  const userId = req.user.id; // Assume the user ID is available in req.user (decoded from token)
  const user = await User.findById(userId).select("-password"); // Fetch the user from the database, excluding the password

  if (!user) {
    res.status(404).send({ message: "User not found" }); // Send a 404 error if the user does not exist
    return;
  }

  res.status(200).send(user); // Send the user details as the response
});
