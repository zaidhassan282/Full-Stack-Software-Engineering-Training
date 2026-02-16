// Select form
const form = document.getElementById("form");

// Select inputs
const username = document.getElementById("Username");
const email = document.getElementById("Email");
const phone = document.getElementById("Phone");
const dob = document.getElementById("dob");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const terms = document.getElementById("terms");

// Select message element (outside form)
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // 1️⃣ Stop page reload

  // Reset message
  message.textContent = "";
  message.style.color = "red";

  // 2️⃣ Validation checks
  if (password.value.length < 6) {
    message.textContent = "Password must be at least 6 characters";
    return;
  }

  if (password.value !== confirmPassword.value) {
    message.textContent = "Passwords do not match";
    return;
  }

  if (!terms.checked) {
    message.textContent = "You must agree to the terms and conditions";
    return;
  }

  // 3️⃣ If everything is valid
  message.style.color = "green";
  message.textContent = "Registration successful 🎉";
});
