const apiURL = "https://striveschool-api.herokuapp.com/api/product/";
const apiToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzE2YWFiODNkYmUxNDAwMTUxNTRkMjIiLCJpYXQiOjE3Mjk1Mzg3NDQsImV4cCI6MTczMDc0ODM0NH0.KNlMzgJWaZuT-NcpAQjLOp0G-Ok2iDEm8fpryHA9hpE";
const products = document.getElementById("products");

function getProducts() {
  fetch(apiURL, {
    headers: {
      Authorization: apiToken,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        const productsDiv = document.createElement("div");
        productsDiv.classList.add("card", "m-2");
        productsDiv.style.width = "18rem";
        productsDiv.innerHTML = `<img src="${product.imageUrl}" class="card-img-top p-2" alt="${product.name}">
  <div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.description}</p>
    <p class="card-text">${product.price}€</p>
    <a href="./details.html?id=${product._id}" class="btn btn-primary">Details</a>
  </div>
</div>`;
        products.appendChild(productsDiv);
      });
    })
    .catch((error) => console.error("Error:", error));
}
getProducts();
