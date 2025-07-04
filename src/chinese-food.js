export default function renderChineseFood() {
  const content = document.createElement("div");
  content.textContent = "Chinese Food";
  document.getElementById("content").innerHTML = "";
  document.getElementById("content").appendChild(content);
  document.getElementById("chinese-food").classList.add("active");
}
