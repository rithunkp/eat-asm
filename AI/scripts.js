let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total;
}

function proceedToCheckout() {
    alert('Proceeding to checkout...');
    // Implement payment gateway integration here
}

function openLogin() {
    alert('Login functionality to be implemented');
    // Implement login modal or redirect
}

function openSignup() {
    alert('Sign Up functionality to be implemented');
    // Implement signup modal or redirect
}

function contactSupport() {
    alert('Contacting support...');
    // Implement support chat or email
}

function editProfile() {
    alert('Edit profile functionality to be implemented');
    // Implement profile editing form
}

function submitReview() {
    alert('Review submitted!');
    // Implement review submission to backend
}

function addMenuItem() {
    alert('Menu item added!');
    // Implement menu item addition to backend
}