export default function renderJapaneseFood() {
  const content = document.createElement("div");
  content.textContent = "Japanese Food";
  document.getElementById("content").innerHTML = "";
  document.getElementById("content").appendChild(content);
}
