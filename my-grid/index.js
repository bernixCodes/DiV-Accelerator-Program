const viewPasscodeInput = document.querySelector(".pssWordInput input");
const viewPasscode = document.querySelector(".eye");
const unviewPasscode = document.querySelector(".eyeoff");
const settingIcon = document.querySelector(".setting-icon");
const optionsDiv = document.querySelector(".options");
const mainDiv = document.querySelector(".main");
const profileDiv = document.querySelector(".profile");
const container = document.querySelector(".container");

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

settingIcon.addEventListener("click", () => {
  optionsDiv.classList.toggle("hideOptionsDiv");
  container.classList.toggle("my");
  mainDiv.classList.toggle("setWidth");
  //   mainDiv.style.background = "red";
  //   profileDiv.style.display = "none";
});