import { addProduct, calculateTotal, removeProduct, displayCart } from './shoppingCart.js';

addProduct("Tablet", 299.99, 2);
console.log(`Total Cost: $${calculateTotal()}`);
removeProduct("Phone");
displayCart();
