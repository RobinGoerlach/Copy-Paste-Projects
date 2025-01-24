// File: dbConnection.js
// Description: Establishes a connection to the MongoDB database using Mongoose.

import mongoose from "mongoose"; // Import Mongoose for database interaction

// Connect to the MongoDB database using the connection string from environment variables
try {
  await mongoose.connect(process.env.MONGO_URI); // Use the MONGO_URI environment variable for the connection string
  console.log("Connected to DB"); // Log success message upon successful connection
} catch (error) {
  console.error("Failed to connect to DB"); // Log error message if the connection fails
}
