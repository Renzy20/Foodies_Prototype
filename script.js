function validatePassword() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Check if any of the input fields are empty
    if (email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all the fields.");
        return; // Stop further execution if fields are empty
    }

    // Validate if passwords match
    if (password === confirmPassword) {
        alert("Passwords match! Account has been created (this is a simulation).");
        saveAccount(); 
    } else {
        alert("Passwords do not match. Please try again.");
    }
}

// Simulate saving the account
function saveAccount() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // In a real scenario, you'd save the account data to a server, but we will just log it here.
    console.log("Account saved: ", { email: email, password: password });
    
    // You could also store account info locally in the browser using localStorage (for demonstration only)
    // Store account info in localStorage
    localStorage.setItem('accountEmail', email);
    localStorage.setItem('accountPassword', password);
    alert("Account info saved to local storage (for demo purposes).");

     // Clear the input fields after account creation
     document.getElementById("email").value = "";
     document.getElementById("password").value = "";
     document.getElementById("confirmPassword").value = "";
}
