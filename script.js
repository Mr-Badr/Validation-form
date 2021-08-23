const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

const checkInputs = () => {
  // Get the values from the inputs
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const emailValue = email.value.trim();

  if (usernameValue === "") {
    showError(username, "Username cannot be blank");
  } else {
    showSuccessFor(username);
  }

  if (emailValue === "") {
    showError(email, "Email cannot be blank");
  } else if (!emailValidation(emailValue)) {
    showError(email, "Not a valid email");
  } else {
    showSuccessFor(email);
  }

  if (passwordValue === "") {
    showError(password, "Password cannot be blank");
  } else {
    showSuccessFor(password);
  }

  if (password2Value === "") {
    showError(password2, "Password2 cannot be blank");
  } else if (passwordValue !== password2Value) {
    showError(password2, "Passwords does not match");
  } else {
    showSuccessFor(password2);
  }
};

const showError = (input, message) => {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
};

function showSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

const emailValidation = (input) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
