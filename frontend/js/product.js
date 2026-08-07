const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const API_URL = `http://localhost:5000/api/products/${id}`;

const getProduct = async () => {
    try {
        const response = await fetch(API_URL);
        const product = await response.json();

        showProduct(product);
    } catch(error){
        console.log(error);
    }
}

const showProduct = (product) => {
    document.querySelector("#image").src =
        `${product.image}`;

    document.querySelector("#name").textContent =
        product.name;

    document.querySelector("#price").textContent =
        `S/. ${product.price}`;

    document.querySelector("#material").textContent =
        product.material;

    document.querySelector("#description").textContent =
        product.description;
}

getProduct();