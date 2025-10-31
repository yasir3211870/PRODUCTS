const api = "https://fakestoreapi.com/products";

async function loadProducts() {
  try {
    const res = await fetch(api);
    const data = await res.json();
    displayProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    document.getElementById("productContainer").innerHTML = 
      `<div class="text-center text-danger">Failed to load products 😞</div>`;
  }
}

function displayProducts(products) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("col-md-3", "col-sm-6");

    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body d-flex flex-column">
          <h6 class="card-title">${product.title}</h6>
          <p class="card-text text-muted small">${product.category}</p>
          <p class="price">$${product.price}</p>
          <button class="btn btn-primary mt-auto">Add to Cart</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

loadProducts();
