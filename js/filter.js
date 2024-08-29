// script.js
document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: 'Laptop', category: 'electronics', price: 900, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Shirt', category: 'fashion', price: 30, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Vacuum Cleaner', category: 'home', price: 150, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Headphones', category: 'electronics', price: 120, image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Sneakers', category: 'fashion', price: 60, image: 'https://via.placeholder.com/150' },
    ];

    const categoryFilter = document.getElementById('category');
    const priceRangeFilter = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    const applyFiltersButton = document.getElementById('apply-filters');
    const productsContainer = document.getElementById('products');
    const filterToggle = document.getElementById('filter-toggle');
    const sidebar1 = document.getElementById('sidebar1');

    filterToggle.addEventListener('click', function () {
        sidebar1.classList.toggle('show');
    });

    function displayProducts(filteredProducts) {
        productsContainer.innerHTML = '';
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: $${product.price}</p>
            `;
            productsContainer.appendChild(productElement);
        });
    }

    function filterProducts() {
        const selectedCategory = categoryFilter.value;
        const selectedPrice = parseInt(priceRangeFilter.value);

        const filteredProducts = products.filter(product => {
            return (selectedCategory === 'all' || product.category === selectedCategory) &&
                   product.price <= selectedPrice;
        });

        displayProducts(filteredProducts);
    }

    priceRangeFilter.addEventListener('input', function () {
        priceValue.textContent = `$${priceRangeFilter.value}`;
    });

    applyFiltersButton.addEventListener('click', filterProducts);

    displayProducts(products); // Display all products by default
});
