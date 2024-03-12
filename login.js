document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Send these values to your backend server
    fetch('https://your-backend-service.com/login', { // Use your actual backend URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
    })
    .then(response => {
        if(response.ok) {
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid credentials');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});


// // login.js
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     // This should be an endpoint on your server
//     fetch('/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username: username, password: password }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         if(data.success) {
//             // Replace 'dashboard.html' with the page you want to navigate to
//             window.location.href = '/dashboard.html';
//         } else {
//             // Handle login failure (e.g., incorrect username/password)
//             alert('Invalid credentials');
//         }
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
// });

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     // Hardcoded user credentials (for demonstration only, insecure)
//     var hardcodedUsername = 'user1';
//     var hardcodedPassword = 'password123';

//     if(username === hardcodedUsername && password === hardcodedPassword) {
//         // Redirect to the dashboard page
//         window.location.href = 'dashboard.html';
//     } else {
//         alert('Invalid credentials');
//     }
// });









