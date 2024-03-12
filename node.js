const express = require('express');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Fake "database" of user credentials
const userDatabase = {
  'user1': bcrypt.hashSync('password123', 10),
  'user2': bcrypt.hashSync('password223', 10),
  'user3': bcrypt.hashSync('password323', 10)
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = userDatabase[username];
  
  // Check if the password matches the one in the "database"
  if (hashedPassword && bcrypt.compareSync(password, hashedPassword)) {
    // Passwords match
    res.status(200).send({ message: 'Login successful', redirectUrl: '/dashboard.html' });
  } else {
    // Passwords don't match
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
