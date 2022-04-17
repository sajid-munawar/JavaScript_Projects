// const form = document.getElementById('form');
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// Function to check if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.addEventListener("submit", function (e) {
  // Stop page from reloading on submit
  e.preventDefault();

  // Check to see if fields meet required field requirement
  // Check if username input is empty
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  } // Check if username input is empty
    if (email.value === "") {
      showError(email, "Email is required");
    } else if (!isValidEmail(email.value)) {
      showError(email, "Email is invalid");
    } else {
      showSuccess(email);
    }// Check if username input is empty
  if (password.value === "") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  } // Check if username input is empty
  if (password2.value === "") {
    showError(password2, "Confirm password is required");
  } else {
    showSuccess(password2);
  }
});
