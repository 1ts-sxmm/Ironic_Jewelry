const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const API_URL = `https://ironic-jewelry.onrender.com/api/products/${id}`;

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

    const productUrl =
        `${window.location.origin}/product.html?id=${product.id}`;


    // WhatsApp
    const phone = "51902845733";

    const message =
        `Hola, quisiera consultar por la joya "${product.name}".\n\n` +
        `Puedes ver el producto aquí:\n${productUrl}`;


    const whatsappURL =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


    document.querySelector("#whatsapp-button").href =
        whatsappURL;
}

getProduct();