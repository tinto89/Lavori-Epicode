const apiURL = "https://striveschool-api.herokuapp.com/api/product";
const apiToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzE2YWFiODNkYmUxNDAwMTUxNTRkMjIiLCJpYXQiOjE3Mjk1Mzg3NDQsImV4cCI6MTczMDc0ODM0NH0.KNlMzgJWaZuT-NcpAQjLOp0G-Ok2iDEm8fpryHA9hpE";

const products = document.getElementById("product-details");

// GET con stampa sul DOM
function getProducts(id) {
  fetch(`${apiURL}/${id}`, {
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
    .then((id) => {
      const productsDiv = document.createElement("div");
      productsDiv.classList.add(
        "m-2",
        "d-flex",
        "align-items-center",
        "h-50",
        "my-4"
      );
      productsDiv.innerHTML = `<img src="${id.imageUrl}" class="w-25" alt="${id.name}">
        <p class="m-3">${id.description}</p>`;
      products.appendChild(productsDiv);
    })
    .catch((error) => console.error("Error:", error));
}

// prendo il paramentro id dall'URL e lo passo alla fetch
function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}
const id = getParameterByName("id");

if (id) {
  getProducts(id);
} else {
  console.error("ID del prodotto non trovato nell'URL");
}
