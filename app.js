const form = document.getElementById("form");
const input = document.getElementById("text");
const button = document.querySelector(".submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    showAlert("error", "Please provide a valid email adress", "block");
    input.style.border = "1px solid red";
    alertTimeout();
    input.focus();
  } else {
    checkEmail(input);
    input.value = "";
  }
});

function alertTimeout() {
  setTimeout(() => {
    input.style.border = "";
  }, 2000);
}

function showAlert(input, message, show) {
  const error = document.querySelector(".alert");
  error.classList.add(`${input}`);
  error.textContent = `${message}`;
  error.style.display = `${show}`;

  setTimeout(() => {
    error.textContent = "none";
    error.style.display = " none";
  }, 2000);
}

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    // validMessage();
    showAlert("success", "You have successfully signed up", "block");
  } else {
    // invalidMessage();
    showAlert("error", "Please provide a valid email adress", "block");
  }
}
