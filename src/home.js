export default function renderHomePage() {
  const content = document.createElement("div");
  content.textContent = "Home";
  document.getElementById("content").innerHTML = "";
  document.getElementById("content").appendChild(content);
  document.getElementById("home").classList.add("active");
}
