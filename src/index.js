import "./style.css";
import renderHomePage from "./home.js";
import renderChineseFood from "./chinese-food.js";
import renderJapaneseFood from "./japanese-food.js";
import renderAboutUs from "./about-us.js";

document.getElementById("home").addEventListener("click", renderHomePage);
document
  .getElementById("chinese-food")
  .addEventListener("click", renderChineseFood);
document
  .getElementById("japanese-food")
  .addEventListener("click", renderJapaneseFood);
document.getElementById("about-us").addEventListener("click", renderAboutUs);
