const apiURL = "https://striveschool-api.herokuapp.com/api/product";
const apiToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzE2YWFiODNkYmUxNDAwMTUxNTRkMjIiLCJpYXQiOjE3Mjk1Mzg3NDQsImV4cCI6MTczMDc0ODM0NH0.KNlMzgJWaZuT-NcpAQjLOp0G-Ok2iDEm8fpryHA9hpE";
const products = document.getElementById("products");

// GET con stampa sul DOM
function getProducts() {
  fetch(apiURL, {
    headers: {
      Authorization: apiToken,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore del server");
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((product) => {
        const productsDiv = document.createElement("div");
        productsDiv.classList.add("card", "m-2", "on-page-products");
        productsDiv.style.width = "18rem";
        productsDiv.innerHTML = `<img src="${product.imageUrl}" class="p-2 object-fit-cover my-1" alt="${product.name}">
  <div class="card-body d-flex flex-column justify-content-between">
    <h4 class="card-title product-name">${product.name}</h4>
    <h6 class="card-title product-brand my-3">Marca: ${product.brand}</h6>
    <p class="card-text">${product.price}€</p>
    <a href="./details.html?id=${product._id}" class="btn btn-primary">Details</a>
  </div>
</div>`;
        products.appendChild(productsDiv);
      });
    })
    .catch((error) => console.error("Error:", error));
}

//  GET all'avvio
getProducts();

// filtro con la barra di ricerca
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = searchBar.elements["searchInput"].value.toLowerCase();
  const onPageProducts = document.querySelectorAll(".on-page-products");
  let noResult = true;
  onPageProducts.forEach((product) => {
    const productName = product
      .querySelector(".product-name")
      .textContent.toLowerCase();
    const brandName = product
      .querySelector(".product-brand")
      .textContent.toLowerCase();
    if (productName.includes(searchInput) || brandName.includes(searchInput)) {
      product.style.display = "block";
      noResult = false;
    } else product.style.display = "none";
  });
  if (noResult) {
    alert("Nessun prodotto trovato!");
    location.reload();
  }

  searchBar.reset();
});
