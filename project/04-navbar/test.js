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

const createListItems = (data, isSocial = false) => {
  return data.map(({ url, text, link, icon }) => {
    const list = document.createElement("li");
    const a = document.createElement("a");
    a.href = url;

    if (isSocial) {
      const iconElem = document.createElement("i");
      iconElem.classList.add(...icon.split(" "));
      a.appendChild(iconElem);
    } else {
      a.textContent = text;
    }

    list.appendChild(a);
    return list;
  });
};

const links = createListItems(navData.links);
const socialIcons = createListItems(navData.social, true);

links.forEach((item) => navCenter.appendChild(item));
socialIcons.forEach((item) => navCenter.appendChild(item));

navHeader.appendChild(logo);
navHeader.appendChild(navToggle);
navCenter.appendChild(navHeader);
nav.appendChild(navCenter);
