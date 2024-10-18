// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

const handleNavToggle = () => {
  links.classList.toggle("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
  navToggle.addEventListener("click", handleNavToggle);
});
