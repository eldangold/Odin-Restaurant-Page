export default function renderJapaneseFood() {
  const content = document.createElement("div");
  content.textContent = "Japanese Food";
  document.getElementById("content-wrapper").innerHTML = "";
  document.getElementById("content-wrapper").appendChild(content);
  document.getElementById("japanese-food").classList.add("active");
}
