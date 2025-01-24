/*
 * Filename: greet.js
 * Description: Defines controllers for handling greeting-related requests.
 */

// Sends a general greeting message.
const generalGreet = (req, res) => {
  res.send('Hello world!');
};

// Sends a personalized greeting based on the request body.
const greetWithName = (req, res) => {
  const { name } = req.body;
  res.send(`Hello ${name}`);
};

// Sends a personalized greeting with name and email.
const greetWithNameAndEmail = (req, res) => {
  const { name, email } = req.body;
  res.send(`Hello ${name}. Your email is ${email}`);
};

export { generalGreet, greetWithName, greetWithNameAndEmail };
