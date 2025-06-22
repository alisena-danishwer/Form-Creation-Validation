document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Select the form and feedback div
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Step 2: Add event listener to form
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Step 3: Retrieve and trim inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Step 4: Initialize validation status
        let isValid = true;
        const messages = [];

        // Step 5: Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Step 6: Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must contain both '@' and '.' characters.");
        }

        // Step 7: Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Step 8: Display feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // Red color for error
        }
    });
});
