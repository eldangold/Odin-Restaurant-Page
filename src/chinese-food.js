export default function renderChineseFood() {
  const content = document.createElement("div");
  content.textContent = "Chinese Food";
  document.getElementById("content-wrapper").innerHTML = "";
  document.getElementById("content-wrapper").appendChild(content);
  document.getElementById("chinese-food").classList.add("active");
}
