const viewPasscodeInput = document.querySelector(".pssWordInput input");
const viewPasscode = document.querySelector(".eye");
const unviewPasscode = document.querySelector(".eyeoff");

viewPasscode.addEventListener("click", () => {
  viewPasscodeInput.type = "text";
  unviewPasscode.style.display = "block";
  viewPasscode.style.display = "none";
});

unviewPasscode.addEventListener("click", () => {
  viewPasscodeInput.type = "password";
  unviewPasscode.style.display = "none";
  viewPasscode.style.display = "block";
});
