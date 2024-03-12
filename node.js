const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // TODO: Implement your database check here.
    // For now, let's assume these are the correct credentials.
    if (username === 'user1' && password === 'password123') {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Server running
    on port ${port}`);
});

// Serve the HTML, JS, and CSS files
app.use(express.static('path_to_your_static_files')); // Replace with the path to your static files
