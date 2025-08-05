export default function renderJapaneseFood() {
  const content = document.createElement("div");
  content.innerHTML = `
        <div class="meal-container">
        <img class="meal-photo" src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000370/img/basic/a0000370_main.jpg">
        <div class="meal-info">
            <h2 class="meal-title">Sushi</h2>
            <p class="meal-description">
                Vinegared rice topped or rolled with fresh seafood or vegetables—sushi captures the essence of precision and umami in each artful bite. Often served with soy sauce, wasabi, and pickled ginger. A quintessential symbol of Japanese cuisine.
            </p>
            <div class="meal-buttons">
                <span class="meal-price">16 USD/350g</span>
                <button class="meal-order-button">Order now</button>
            </div>
        </div>
    </div>
    <div class="meal-container">
        <img class="meal-photo" src="https://upload.wikimedia.org/wikipedia/commons/3/3e/GOMOKU_SOBA_%E4%BA%94%E7%9B%AE%E3%81%9D%E3%81%B0.jpg">
        <div class="meal-info">
            <h2 class="meal-title">Ramen</h2>
            <p class="meal-description">
                A comforting bowl of wheat noodles swimming in flavorful broth—be it miso, soy‑based, salt, or rich tonkotsu—topped with sliced pork, scallions, nori, and bamboo shoots. Deeply satisfying and endlessly varied.
            </p>
            <div class="meal-buttons">
                <span class="meal-price">9.95 USD/300g</span>
                <button class="meal-order-button">Order now</button>
            </div>
        </div>
    </div>
    <div class="meal-container">
        <img class="meal-photo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Katsudon_001.jpg/2560px-Katsudon_001.jpg">
        <div class="meal-info">
            <h2 class="meal-title">Katsudon</h2>
            <p class="meal-description">
                Crispy breaded pork cutlet, fried golden and served with shredded cabbage, rice, and tangy tonkatsu sauce. Occasionally topped with egg to become katsudon—a hearty bowl of rice, crispy cutlet, and savory broth.
            </p>
            <div class="meal-buttons">
                <span class="meal-price">15.50 USD/350g</span>
                <button class="meal-order-button">Order now</button>
            </div>
        </div>
    </div>
    <div class="meal-container">
        <img class="meal-photo" src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Chawanmushi_-_Traditional_winter_warmer_-_a_small_bowl_of_steamed_egg_custard_with_ingredients_of_the_season_%2812274312843%29.jpg">
        <div class="meal-info">
            <h2 class="meal-title">Chawanmushi</h2>
            <p class="meal-description">
               A silky, savory steamed egg custard filled with ingredients like shiitake mushrooms, seafood, chicken, and ginkgo nuts. Warm and delicate in texture—often served as part of a refined multi-course meal.
            </p>
            <div class="meal-buttons">
                <span class="meal-price">12.95 USD/450g</span>
                <button class="meal-order-button">Order now</button>
            </div>
        </div>
    </div>
        </div>
  `
  content.id = "menu-container";
  document.getElementById("content-wrapper").innerHTML = "";
  document.getElementById("content-wrapper").appendChild(content);
  document.getElementById("japanese-food").classList.add("active");
}
