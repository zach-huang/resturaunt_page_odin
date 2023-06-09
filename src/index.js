import about, { displayAbout, hideAbout } from "./about.js";
import contact from "./contact.js";
import menu, { displayMenu, hideMenu } from "./menu.js";
import home, { displayHome, hideHome } from "./home.js";
import "./styles/styles.css";
import logoImage from "./content/logo.png";
let currentPage = "";

const btnHome = document.createElement("button");
const btnMenu = document.createElement("button");
const btnAbout = document.createElement("button");
const btnContact = document.createElement("button");
const content = document.getElementById("content");
const navigation = document.createElement("div");
const buttonContainer = document.createElement("div");

navigation.setAttribute("id", "navigation");
content.appendChild(navigation);

const logo = document.createElement("img");
logo.src = logoImage;
logo.setAttribute("id", "logo");
navigation.appendChild(logo);

buttonContainer.setAttribute("id", "button_container");
navigation.appendChild(buttonContainer);

btnHome.innerText = "Home";
btnHome.setAttribute("id", "home");
btnHome.classList.add("nav_button");
btnHome.addEventListener("click", setHome);
buttonContainer.appendChild(btnHome);

btnMenu.innerText = "Menu";
btnMenu.setAttribute("id", "menuBTN");
btnMenu.classList.add("nav_button");
btnMenu.addEventListener("click", setMenu);
buttonContainer.appendChild(btnMenu);

btnAbout.innerText = "About";
btnAbout.setAttribute("id", "about");
btnAbout.classList.add("nav_button");
btnAbout.addEventListener("click", setAbout);
buttonContainer.appendChild(btnAbout);

btnContact.innerText = "Contact";
btnContact.setAttribute("id", "contact");
btnContact.classList.add("nav_button");
btnContact.onclick = contact;
buttonContainer.appendChild(btnContact);

displayHome();
currentPage = "home";

function setMenu() {
  if (currentPage === "home") {
    hideHome();
    currentPage = "";
    displayMenu();
    currentPage = "menu";
  } else if (currentPage === "about") {
    hideAbout();
    currentPage = "";
    displayMenu();
    currentPage = "menu";
  } else return;
}

function setHome() {
  if (currentPage === "menu") {
    hideMenu();
    currentPage = "";
    displayHome();
    currentPage = "home";
  } else if (currentPage === "about") {
    hideAbout();
    currentPage = "";
    displayHome();
    currentPage = "home";
  } else return;
}
function setAbout() {
  if (currentPage === "menu") {
    hideMenu();
    currentPage = "";
    displayAbout();
    currentPage = "about";
  } else if (currentPage === "home") {
    hideHome();
    currentPage = "";
    displayAbout();
    currentPage = "about";
  } else return;
}
