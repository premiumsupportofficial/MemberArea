document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Send these values to your backend server
  fetch('/login', { // Make sure this matches the route on your server
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`,
  })
  .then(response => response.json())
  .then(data => {
    if (data.message === 'Login successful') {
      // Redirect to the dashboard.html page
      window.location.href = data.redirectUrl;
    } else {
      alert(data.message); // Show an error message
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
