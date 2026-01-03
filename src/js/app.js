// JavaScript code for the e-commerce website
document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-list');
    const cart = [];
    
    // Fetch products from JSON file
    fetch('./data/products.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productCard = createProductCard(product);
                productContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));

    // Function to create a product card
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        card.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product));
        return card;
    }

    // Function to add product to cart
    function addToCart(product) {
        cart.push(product);
        updateCartDisplay();
    }

    // Function to update cart display
    function updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.length;
    }
});