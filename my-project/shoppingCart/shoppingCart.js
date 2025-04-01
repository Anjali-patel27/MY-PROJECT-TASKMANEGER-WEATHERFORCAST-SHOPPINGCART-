
let cart = [
    { productName: "Laptop", price: 999.99, quantity: 1 },
    { productName: "Phone", price: 699.99, quantity: 2 },
    { productName: "Headphones", price: 199.99, quantity: 3 }
];

const addProduct = (productName, price, quantity) => {
    cart.push({ productName, price, quantity });
    console.log(`Product "${productName}" added.`);
};

const calculateTotal = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
};

const removeProduct = (productName) => {
    cart = cart.filter(product => product.productName !== productName);
    console.log(`Product "${productName}" removed.`);
};

const displayCart = () => {
    cart.forEach(product => {
        console.log(`Product: ${product.productName}, Price: $${product.price}, Quantity: ${product.quantity}`);
    });
};

export { addProduct, calculateTotal, removeProduct, displayCart };
