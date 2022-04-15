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

form.addEventListener("submit", function (e) {
  // Stop page from reloading on submit
    console.log('aa');
  e.preventDefault();

  // Check to see if fields meet required field requirement
  // Check if username input is empty
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  } // Check if username input is empty
  if (email.value === "") {
    showError(email, "email is required");
  } else {
    showSuccess(email);
  } // Check if username input is empty
  if (password.value === "") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  } // Check if username input is empty
  if (password2.value === "") {
    showError(password2, "password2 is required");
  } else {
    showSuccess(password2);
  }
});
