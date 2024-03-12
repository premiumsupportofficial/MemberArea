document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Retrieve user input
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check credentials
    if ((username === 'user1' && password === 'password123') || 
        (username === 'user2' && password === 'password223')) {
        // Credentials are correct, navigate to another page
        window.location.href = 'dashboard.html'; // Assuming 'welcome.html' is the page to navigate to
    } else {
        // Credentials are incorrect, show an error message or handle accordingly
        alert('Invalid username or password!');
    }
});
