const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // This is where you'd check the credentials.
    // NEVER store plaintext passwords; this is for demonstration only.
    if(username === 'user1' && password === 'password123') {
        res.redirect('/dashboard.html');
    } else {
        res.status(401).send('Login failed');
    }
});

app.use(express.static('public')); // Serve your static files from the "public" directory

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
