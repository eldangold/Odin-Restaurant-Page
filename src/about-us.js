export default function renderAboutUs() {
  const content = document.createElement("div");
  content.innerHTML = `
  <strong>Welcome to Orient Essence, where the vibrant flavors of China and the delicate artistry of Japan come together in perfect harmony.</strong>
  <p>Our passion is to bring you an unforgettable dining experience rooted in tradition, yet reimagined for the modern taste. From sizzling stir-fries crafted in the fiery heart of the wok to the subtle elegance of hand-rolled sushi, every dish is prepared with the freshest ingredients and the utmost care. Whether you're craving the bold spices of Sichuan cuisine or the refined simplicity of nigiri, we invite you to explore a culinary journey across East Asia — no passport required. At Orient Essence, food is more than a meal — it's a celebration of culture, craftsmanship, and connection. Taste the tradition. Savor the moment.</p>
  `;
  content.id = "content";
  document.getElementById("content-wrapper").innerHTML = "";
  document.getElementById("content-wrapper").appendChild(content);
  document.getElementById("about-us").classList.add("active");
}
