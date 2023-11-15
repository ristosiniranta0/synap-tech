/* Filename: ComplexCode.js
   Content: A sophisticated and elaborate code demonstrating a web application for an online store, including user authentication, product listing, cart management, and order placement.
*/

// Global Variables
let loggedInUser = null;
let products = [];
let cart = [];

// User Authentication
function login(username, password) {
  // Authenticate the user
  if (username === "admin" && password === "123") {
    loggedInUser = username;
    console.log("Login successful!");
  } else {
    console.log("Invalid credentials, please try again.");
  }
}

function logout() {
  loggedInUser = null;
  cart = [];
  console.log("Logout successful!");
}

function isLoggedIn() {
  return loggedInUser !== null;
}

// Product Management
function addProduct(name, price) {
  const product = {
    id: products.length + 1,
    name,
    price
  };
  products.push(product);
  console.log(`Product '${name}' added successfully.`);
}

function removeProduct(id) {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    const product = products[index];
    products.splice(index, 1);
    console.log(`Product '${product.name}' removed successfully.`);
  } else {
    console.log(`Product with ID ${id} does not exist.`);
  }
}

function getProducts() {
  return products;
}

// Cart Management
function addToCart(productId) {
  if (!isLoggedIn()) {
    console.log("Please login first.");
    return;
  }
  
  const product = products.find(p => p.id === productId);
  if (!product) {
    console.log(`Product with ID ${productId} does not exist.`);
    return;
  }

  cart.push(product);
  console.log(`Product '${product.name}' added to cart successfully.`);
}

function removeFromCart(productId) {
  const index = cart.findIndex(product => product.id === productId);
  if (index !== -1) {
    const product = cart[index];
    cart.splice(index, 1);
    console.log(`Product '${product.name}' removed from cart successfully.`);
  } else {
    console.log(`Product with ID ${productId} does not exist in the cart.`);
  }
}

function viewCart() {
  return cart;
}

// Order Placement
function placeOrder() {
  if (!isLoggedIn()) {
    console.log("Please login first.");
    return;
  }

  if (cart.length === 0) {
    console.log("Cart is empty. Nothing to order.");
    return;
  }

  console.log("Order placed successfully!");
  console.log(`Order details: ${JSON.stringify(cart)}`);
  cart = [];
}

// Usage Example
login("admin", "123");
addProduct("Shirt", 24.99);
addProduct("Pants", 34.99);
console.log("Products:", getProducts());
addToCart(1);
addToCart(3);
console.log("Cart:", viewCart());
removeFromCart(2);
placeOrder();
logout();