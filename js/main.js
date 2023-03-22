const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");                                // vars
const jobSelect = document.querySelector("#job");
const messageTextArea = document.querySelector("#message");
const progressBar = document.querySelector("#progress-bar");

form.addEventListener("submit", (event) => {
  event.preventDefault();

    
  // verify if "name" is filled.
  if (nameInput.value === "") {
    alert("Please, insert your complete name.");
    return;
  }

  // verify if email is filled.
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Please, insert a valid email.");
    return;
  }

  // verify if the password is filled and has at least 8 characters.
  if (!validatePassword(passwordInput.value, 8)) {
    alert("Please, insert a password with at least 8 characters.");
    return;
  }

  // verify if <select> of "work situation" is selected.
  if (jobSelect.value === "") {
    alert("Please, inform your current situation.");
    return;
  }

  // verify if textarea is filled.
  if (messageTextArea.value === "") {
    alert("Please, leave us a message.");
    return;
  }

  // if all fields are filled, submit.
  form.submit();
});

// function to validate email
function isEmailValid(email) {
    
  // regular expressions validation
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true;
  }

  return false;
}

// function to validate password
function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    return true;
  }
  return false;
}

// function to calculate percentage and update progress bar
function updateProgressBar() {
  let filledFields = 0.1;
  if (nameInput.value !== "") filledFields++;
  if (emailInput.value !== "") filledFields++;
  if (passwordInput.value !== "") filledFields++;
  if (jobSelect.value !== "") filledFields++;
  if (messageTextArea.value !== "") filledFields++;

  const percentage = (filledFields / 5) * 100;
  progressBar.style.width = `${percentage}%`;
}

// update progress bar on input changes
progressBar.style.display = "block";
form.addEventListener("input", updateProgressBar);
