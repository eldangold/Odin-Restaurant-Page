export default function renderAboutUs() {
  const content = document.createElement("div");
  content.textContent = "About Us";
  document.getElementById("content").innerHTML = "";
  document.getElementById("content").appendChild(content);
  document.getElementById("about-us").classList.add("active");
}
