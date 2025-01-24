// File: User.js
// Description: Mongoose schema and model definition for the User entity, representing user details in the database.

import mongoose from "mongoose"; // Import Mongoose for database interaction

const { Schema, model } = mongoose; // Destructure Schema and model from Mongoose

// Define the user schema
const userSchema = new Schema({
  firstName: {
    type: String, // Data type for the first name
    required: [true, "Please enter a first name"], // Validation: field is required
    maxLength: 30, // Validation: maximum length
  },
  lastName: {
    type: String, // Data type for the last name
    required: true, // Validation: field is required
    maxLength: 30, // Validation: maximum length
  },
  email: {
    type: String, // Data type for the email
    required: true, // Validation: field is required
  },
  age: {
    type: Number, // Data type for the age
    required: true, // Validation: field is required
  },
  isAdmin: {
    type: Boolean, // Data type indicating if the user is an admin
    required: true, // Validation: field is required
  },
  password: {
    type: String, // Data type for the password
    minLength: 8, // Validation: minimum length
    required: true, // Validation: field is required
    select: false, // Exclude this field by default in query results
  },
});

const User = model("user", userSchema); // Create the User model using the schema

export default User; // Export the User model for use in other parts of the application
