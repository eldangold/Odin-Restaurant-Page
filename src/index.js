import "./style.css";
import renderHomePage from "./home.js";
import renderChineseFood from "./chinese-food.js";
import renderJapaneseFood from "./japanese-food.js";
import renderAboutUs from "./about-us.js";

function resetActiveLink() {
  const links = document.querySelectorAll("button");
  links.forEach((link) => {
    link.classList.remove("active");
  });
}

document.getElementById("home").addEventListener("click", () => {
  resetActiveLink();
  renderHomePage();
});
document.getElementById("chinese-food").addEventListener("click", () => {
  resetActiveLink();
  renderChineseFood();
});
document.getElementById("japanese-food").addEventListener("click", () => {
  resetActiveLink();
  renderJapaneseFood();
});
document.getElementById("about-us").addEventListener("click", () => {
  resetActiveLink();
  renderAboutUs();
});

renderHomePage();