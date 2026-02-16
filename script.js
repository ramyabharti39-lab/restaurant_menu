// Filter menu
function filterMenu(category) {
  const items = document.querySelectorAll(".menu-item");

  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  // Active button highlight
  document.querySelectorAll(".filter-bar button").forEach(btn => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
}

// Static cart simulation
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(name + " added to cart.");
}