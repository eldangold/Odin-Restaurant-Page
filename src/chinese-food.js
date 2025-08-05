export default function renderChineseFood() {
  const content = document.createElement("div");
  content.innerHTML = `
        <div class="meal-container">
        <img class="meal-photo" src="https://cdn.apartmenttherapy.info/image/upload/f_jpg%2Cq_auto%3Aeco%2Cc_fill%2Cg_auto%2Cw_1500%2Car_1%3A1/k%2F2023-05-mapo-tofu%2Fmapo-tofu-017">
        <div class="meal-info">
            <h2 class="meal-title">Mapo Tofu</h2>
            <p class="meal-description">
                Silky tofu cubes simmered with minced pork (or beef) in a spicy, numbing sauce made from Sichuan doubanjiang and Sichuan peppercorns—aromatic, deeply umami, and beautifully bold in flavor.
            </p>
            <div class="meal-buttons">
                <span class="meal-price">20 USD/350g</span>
                <button class="meal-order-button">Order now</button>
            </div>
        </div>
    </div>
    <div class="meal-container">
        <img class="meal-photo" src="https://www.onceuponachef.com/images/2018/05/Kung-Pao-Chicken-16-1200x1480.jpg">
        <div class="meal-info">
            <h2 class="meal-title">Kung Pao Chicken</h2>
            <p class="meal-description">
                Tender chicken stir-fried with crunchy peanuts, scallions, and dried chilies tossed in a savory, slightly tangy sauce. A signature dish from Sichuan, famous for its mouth‑numbing (málà) spices.
            </p>
            <div class="meal-buttons">
                <span class="meal-price">18 USD/300g</span>
                <button class="meal-order-button">Order now</button>
            </div>
        </div>
    </div>
    <div class="meal-container">
        <img class="meal-photo" src="https://cravinghomecooked.com/wp-content/uploads/2024/02/peking-duck-1-19.jpg">
        <div class="meal-info">
            <h2 class="meal-title">Peking Duck</h2>
            <p class="meal-description">
                Whole roasted duck with irresistibly crisp skin and succulent meat, served with thin pancakes, hoisin or plum sauce, cucumber and scallion. A luxurious Beijing classic celebrated for its textures and theatrical presentation.
            </p>
            <div class="meal-buttons">
                <span class="meal-price">12 USD/350g</span>
                <button class="meal-order-button">Order now</button>
            </div>
        </div>
    </div>
    <div class="meal-container">
        <img class="meal-photo" src="https://cdn.apartmenttherapy.info/image/upload/f_jpg%2Cq_auto%3Aeco%2Cc_fill%2Cg_auto%2Cw_1500%2Car_1%3A1/k%2F2023-05-mapo-tofu%2Fmapo-tofu-017">
        <div class="meal-info">
            <h2 class="meal-title">Xiaolongbao (Soup Dumplings)</h2>
            <p class="meal-description">
               Delicate steamed buns filled with pork (or crab) and hot savory broth. As you bite into them, the soup bursts out—rich, tender, and an icon from Shanghai cuisine.
            </p>
            <div class="meal-buttons">
                <span class="meal-price">10 USD/250g</span>
                <button class="meal-order-button">Order now</button>
            </div>
        </div>
    </div>
        </div>
  `
  content.id = "menu-container";
  document.getElementById("content-wrapper").innerHTML = "";
  document.getElementById("content-wrapper").appendChild(content);
  document.getElementById("chinese-food").classList.add("active");
}
