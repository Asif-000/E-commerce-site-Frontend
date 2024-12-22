
let cart = [];

// Example products
const products = [
  { id: 1, name: "Product 1", price: 25.99, image: "https://img.freepik.com/free-vector/modern-watch_23-2147517339.jpg?semt=ais_hybrid"},
  { id: 2, name: "Product 2", price: 35.99, image: "https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?semt=ais_hybrid" },
  { id: 3, name: "Product 3", price: 20.99, image: "https://img.freepik.com/premium-vector/realistic-watch-clock-black-face-silver-red-arrow-white-number-with-fabric-strap-isolated-vector_33869-4744.jpg?semt=ais_hybrid" },
  { id: 4, name: "Product 4", price: 18.99, image: "https://img.freepik.com/premium-vector/mechanical-watch-classic-design-realistic-wristwatch-luxury-fashion-object-men-white_87946-6616.jpg?semt=ais_hybrid" },
  { id: 5, name: "Product 5", price: 14.99, image: "https://img.freepik.com/free-photo/closeup-shot-golden-watch-isolated_181624-28492.jpg?semt=ais_hybrid" },
  { id: 6, name: "Product 6", price: 10.99, image: "https://img.freepik.com/premium-vector/classic-design-watch_45098-945.jpg?semt=ais_hybrid" },
];


function renderProducts() {
  const productSection = document.getElementById("product-section");
  const productList = products.map(product => {
    return `
      <div class="dark:bg-gray-900 dark:text-gray-200 bg-white p-6 rounded-lg shadow-lg">
        <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover rounded-md">
        <h2 class="text-xl font-semibold mt-4">${product.name}</h2>
        <p class="text-gray-700 dark:text-gray-200 mt-2">$${product.price.toFixed(2)}</p>
        <button class="dark:bg-gray-700 mt-4 bg-blue-600 text-white py-2 px-4 rounded  hover:bg-blue-400 dark:hover:bg-gray-600" onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  }).join('');
  
  productSection.innerHTML = `
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      ${productList}
    </div>
  `;
}

// Add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  alert(`${product.name} has been added to your cart`);
  updateCartUI();
}

// Update cart UI
function updateCartUI() {
  const cartModal = document.getElementById("cart-modal");
  const cartItemsList = document.getElementById("cart-items");
  const totalAmount = cart.reduce((total, product) => total + product.price, 0);
  
  cartItemsList.innerHTML = cart.map(item => {
    return `
      <li class="flex justify-between items-center">
        <span>${item.name}</span>
        <span>$${item.price.toFixed(2)}</span>
      </li>
    `;
  }).join('');

  // Update total
  const totalElement = cartModal.querySelector('.font-bold');
  totalElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

// Show cart modal
function showCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.classList.remove('invisible', 'opacity-0'); 
  }
  
  // Hide cart modal
  function hideCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.classList.add('invisible', 'opacity-0'); 
  }
  

// Checkout functionality
function checkout() {
  alert("Proceeding to checkout...");
  cart = [];
  updateCartUI();
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
