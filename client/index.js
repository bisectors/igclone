//When user clicks
const btnSubmit = document.getElementById("js-button-login")
const txtUsername = document.getElementById("username");
const txtPassword = document.getElementById("password");
const errorMessage = document.getElementById("error-message");


btnSubmit.addEventListener("click", (event) => {
    //1. Prevent form to load
    event.preventDefault();   
    const correctUsername = "123";
    const correctPassword = "123";

    //if both match go to the next page:
    // Check if the entered username and password are correct
    if (txtUsername.value.trim() === correctUsername && txtPassword.value === correctPassword) {
        window.location.href = "feed.html";
    } else {
        // Display an error message
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "<b>Incorrect username or password.<b/>";
    }
})




