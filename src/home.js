export default function renderHomePage() {
  const content = document.createElement("div");
  content.innerHTML = `
    <p>Welcome to Orient Essence. Hungry for something extraordinary? Discover a delicious fusion of Chinese boldness and Japanese elegance — right here at Orient Essence. Explore our diverse menu of fresh sushi, crispy tempura, rich ramen, spicy stir-fries, and comforting wok favorites — all crafted with premium ingredients and a touch of East Asian soul. Whether you're dining in or ordering from home, our food brings the taste of Asia straight to your table.</p>
    <p>We deliver! Fast, fresh, and right to your door. Order online or by phone.</p>
    <div id="opening-hours">
        <strong>Opening Hours:</strong><br>
        <p> Monday – Friday: 11:30 AM – 10:00 PM </p>
        <p> Saturday – Sunday: 12:00 PM – 11:00 PM </p>
    </div>
    <p>Your new favorite meal is just a click — or a visit — away.</p>
`;
  content.id = "content";
  document.getElementById("content-wrapper").innerHTML = "";
  document.getElementById("content-wrapper").appendChild(content);
  document.getElementById("home").classList.add("active");
}
