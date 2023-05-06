function validateEmail() {
  const emailInput = document.querySelector(".enter-email");
  const enteredEmail = emailInput.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validEmail.test(enteredEmail)) {
    alert("Congratulations!");
    return true;
  } else {
    alert("Invalid operation pleas try again");
    return false;
  }
}
