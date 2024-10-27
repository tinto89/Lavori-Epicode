const apiURL = "https://striveschool-api.herokuapp.com/api/product";

const apiToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzE2YWFiODNkYmUxNDAwMTUxNTRkMjIiLCJpYXQiOjE3Mjk1Mzg3NDQsImV4cCI6MTczMDc0ODM0NH0.KNlMzgJWaZuT-NcpAQjLOp0G-Ok2iDEm8fpryHA9hpE";

let productId = null;
let modMode = true;

// funzione per pushare sul database un nuovo articolo
function createProduct(name, description, brand, imageUrl, price) {
  const newProduct = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price,
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
const formButton = document.getElementById("changeButton");

// event listener che cambia in base alle necessità
productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { name, description, brand, imageUrl, price } = productForm.elements;
  if (modMode) {
    createProduct(
      name.value,
      description.value,
      brand.value,
      imageUrl.value,
      price.value
    );
    alert("Prodotto aggiunto al Database");
    productForm.reset();
    location.reload();
  } else
    patchProduct(
      name.value,
      description.value,
      brand.value,
      imageUrl.value,
      price.value,
      productId
    );
});

const products = document.getElementById("backOfficeList");

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
        const productsLi = document.createElement("li");
        productsLi.classList.add("m-4");
        productsLi.innerHTML = `
    <h5>${product.name}</h5>
    <button type="button" onclick="modifyProduct('${product._id}')" class="btn btn-info">Modify</button>
<button type="button" onclick="deleteProduct('${product._id}')" class="btn btn-danger">Delete</button>
  </div>
</div>`;
        products.appendChild(productsLi);
      });
    })
    .catch((error) => console.error("Errore:", error));
}

// chiamo funzione all'avvio
getProducts();

// funzione per eliminare dal database
function deleteProduct(id) {
  fetch(`${apiURL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: apiToken,
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore durante la richiesta DELETE");
      }
    })
    .then(() => {
      console.log("Prodotto eliminato con successo");
      alert("Prodotto eliminato!");
    })
    .then(() => {
      location.reload();
      getProducts();
    })
    .catch((error) => {
      console.error("Errore:", error);
    });
}
// funzione per popolare il form con il prodotto da modificare
function modifyProduct(id) {
  fetch(`${apiURL}/${id}`, {
    headers: {
      Authorization: apiToken,
    },
  })
    .then((response) => {
      if (!response.ok)
        throw new Error("Errore durante il recupero dei dati del prodotto");
      return response.json();
    })
    .then((data) => {
      const { name, description, brand, imageUrl, price } =
        productForm.elements;
      name.value = data.name;
      description.value = data.description;
      brand.value = data.brand;
      imageUrl.value = data.imageUrl;
      price.value = data.price;
      formButton.textContent = "Send modify product on Database";
      productId = id;
      modMode = false;
    })
    .catch((error) => console.error("Errore:", error));
}

// funzione che modifica il valore sul database
function patchProduct(name, description, brand, imageUrl, price, id) {
  const modProduct = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price,
  };
  fetch(`${apiURL}/${id}`, {
    method: "PUT",
    headers: {
      Authorization: apiToken,
      "Content-type": "application/json",
    },
    body: JSON.stringify(modProduct),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Errore durante la richiesta PUT");
      return response.json();
    })
    .then((data) => {
      console.log("Prodotto aggiornato con successo:", data);
      alert("Prodotto modificato con successo!");
    })
    .then(() => {
      location.reload();
      getProducts();
    })
    .catch((error) => console.error("Errore:", error));
}
