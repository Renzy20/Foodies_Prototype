function login() {
    var storedEmail = localStorage.getItem('accountEmail');
    var storedPassword = localStorage.getItem('accountPassword');
    
    var enteredEmail = document.getElementById("email").value;
    var enteredPassword = document.getElementById("password").value;
    
    // Check if email and password match the stored values
    if (enteredEmail === storedEmail && enteredPassword === storedPassword) {
        alert("Login successful! Redirecting to the main page...");
        window.location.href = "main.html"; // Redirect to main page
    } else {
        alert("Incorrect email/username or password. Please try again.");
    }

    // Clear the input fields after account creation
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}