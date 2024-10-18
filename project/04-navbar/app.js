const navData = {
  links: [
    { url: "index.html", text: "home" },
    { url: "about.html", text: "about" },
    { url: "projects.html", text: "projects" },
    { url: "contact.html", text: "contact" },
  ],
  social: [
    { url: "https://www.twitter.com", icon: "fab fa-facebook" },
    { url: "https://www.twitter.com", icon: "fab fa-twitter" },
    { url: "https://www.twitter.com", icon: "fab fa-behance" },
    { url: "https://www.twitter.com", icon: "fab fa-linkedin" },
    { url: "https://www.twitter.com", icon: "fab fa-sketch" },
  ],
};

const nav = document.querySelector("nav");

const navCenter = document.createElement("div");
navCenter.classList.add("nav-center");

const navHeader = document.createElement("div");
navHeader.classList.add("nav-header");

const logo = document.createElement("img");
logo.src = "./logo.svg";
logo.classList.add("logo");

const navToggle = document.createElement("button");
navToggle.classList.add("nav-toggle");

const barsIcon = document.createElement("i");
barsIcon.classList.add("fas", "fa-bars");

const links = document.createElement("ul");
links.classList.add("links");

const linkList = navData.links.map((item) => {
  const list = document.createElement("li");
  const link = document.createElement("a");
  link.href = item.url;
  link.textContent = item.text;

  list.appendChild(link);
  return list;
});

linkList.forEach((item) => links.appendChild(item));

const socialIcons = document.createElement("ul");
socialIcons.classList.add("social-icons");

const socialList = navData.social.map((item) => {
  const list = document.createElement("li");
  const link = document.createElement("a");
  link.href = item.link;

  const icon = document.createElement("i");
  icon.classList.add(...item.icon.split(" "));

  link.appendChild(icon);
  list.appendChild(link);
  return list;
});

socialList.forEach((item) => socialIcons.appendChild(item));

navToggle.appendChild(barsIcon);
navHeader.appendChild(logo);
navHeader.appendChild(navToggle);

navCenter.appendChild(navHeader);
navCenter.appendChild(links);
navCenter.appendChild(socialIcons);

nav.appendChild(navCenter);

const handleNavToggle = () => {
  links.classList.toggle("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
  navToggle.addEventListener("click", handleNavToggle);
});
