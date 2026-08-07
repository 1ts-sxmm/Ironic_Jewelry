const API_URL = "http://localhost:5000/api/products";

const getProducts = async () => {
    console.log("Buscando productos...");

    try {
        const response = await fetch(API_URL);
        console.log("Respuesta:", response);

        const products = await response.json();
        console.log("Productos:", products);

        showProducts(products);
    } catch(error) {
        console.error("Error:", error);
    }
};

const showProducts = (products) => {
    const container = document.querySelector("#products-container");
    container.innerHTML = "";

    products.forEach(product => {
        container.innerHTML += `
            <a href="product.html?id=${product.id}" class="block">

                <div class="group cursor-pointer">

                    <div class="
                        aspect-[4/5]
                        overflow-hidden
                        bg-gray-100
                        rounded-lg
                    ">
                        <img 
                            class="
                                w-full
                                h-full
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-110
                            "
                            src="${product.image}"
                            alt="${product.name}"
                        >
                    </div>

                    <div class="mt-4">

                        <p class="text-xs uppercase tracking-widest text-yellow-600">
                            ${product.category}
                        </p>

                        <h3 class="text-xl font-semibold mt-2">
                            ${product.name}
                        </h3>

                        <p class="mt-2 text-gray-700">
                            S/. ${product.price}
                        </p>

                    </div>

                </div>

            </a>
            `;
    });
};

getProducts();