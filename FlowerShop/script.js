let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  let list = document.getElementById("cart-items");
  let total = 0;

  list.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;
    list.innerHTML += `
      <p>${item.name} - ${item.price}€
      <button onclick="removeItem(${index})">❌</button></p>
    `;
  });

  document.getElementById("total").innerText = total;
  document.getElementById("cart-count").innerText = cart.length;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function openCart() {
  document.getElementById("cart").classList.add("active");
}

function closeCart() {
  document.getElementById("cart").classList.remove("active");
}

function checkout() {
  if (cart.length === 0) {
    alert("Корзина пустая!");
    return;
  }

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;

  if (!name || !phone || !address) {
    alert("Заполни все поля!");
    return;
  }

  cart = [];
  updateCart();
  closeCart();
  openPopup();
}

function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function scrollToCatalog() {
  document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
}

function searchFlowers() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let name = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}