window.addEventListener("load", () => {
  console.log("variable.js is working");

  const switched = document.querySelector(".content .header .switch");
  const menu = document.querySelector("#menu");
  const listItems = document.querySelector(".sidebar ul");

  switched.addEventListener("click", function (e) {
    e.preventDefault();

    document.body.classList.toggle("theme-dark");
  });

  menu.addEventListener("click", () => {
    listItems.classList.toggle("showItems");
  });
});
