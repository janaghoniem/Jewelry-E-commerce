
let cartCount = 0;
function updateCart() {
    const cartCountElement = document.querySelector('.cart-count');
    const checkoutTotalElement = document.querySelector('.checkout-total');

 
    cartCountElement.textContent = cartCount;
    let totalPrice = 0; 

    checkoutTotalElement.textContent = `$${totalPrice.toFixed(2)}`;
}


const checkoutBtn = document.querySelector('.checkout-btn');
checkoutBtn.addEventListener('click', () => {
  
    window.location.href = 'checkout.html';
});


const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');


addToCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', () => {
      
        cartCount++;

  
        updateCart();
    });
});


const cartIcon = document.getElementById('cart-icon');
cartIcon.addEventListener('click', () => {
    
    console.log('Cart icon clicked!');
});
