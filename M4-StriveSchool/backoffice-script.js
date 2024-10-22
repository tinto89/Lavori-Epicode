const apiURL = "https://striveschool-api.herokuapp.com/api/product/";
const apiToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzE2YWFiODNkYmUxNDAwMTUxNTRkMjIiLCJpYXQiOjE3Mjk1Mzg3NDQsImV4cCI6MTczMDc0ODM0NH0.KNlMzgJWaZuT-NcpAQjLOp0G-Ok2iDEm8fpryHA9hpE";

function createProduct(name, description, brand, imageUrl, price) {
  const newProduct = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: parseFloat(price),
  };

  fetch(apiURL, {
    method: "POST",
    headers: {
      Authorization: apiToken,
      "Content-type": "application/json",
    },
    body: JSON.stringify(newProduct),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore durante aggiunta al DB");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Prodotto aggiunto con successo:", data);
    })
    .catch((error) => {
      console.error("Errore:", error);
    });
}

const productForm = document.getElementById("productForm");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name, description, brand, imageUrl, price } = productForm.elements;
  createProduct(
    name.value,
    description.value,
    brand.value,
    imageUrl.value,
    price.value
  );
  productForm.reset();
});
