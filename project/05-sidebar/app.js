const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");

const handleSideBarToggle = () => {
  sidebar.classList.toggle("show-sidebar");
};

const closeSidebar = () => {
  sidebar.classList.remove("show-sidebar");
};

document.addEventListener("DOMContentLoaded", () => {
  sidebarToggle.addEventListener("click", handleSideBarToggle);
  closeBtn.addEventListener("click", closeSidebar);
});
