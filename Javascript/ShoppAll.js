
// let cartCount = 0;
// function updateCart() {
//     const cartCountElement = document.querySelector('.cart-count');
//     const checkoutTotalElement = document.querySelector('.checkout-total');

 
//     cartCountElement.textContent = cartCount;
//     let totalPrice = 0; 

//     checkoutTotalElement.textContent = `$${totalPrice.toFixed(2)}`;
// }


// const checkoutBtn = document.querySelector('.checkout-btn');
// checkoutBtn.addEventListener('click', () => {
  
//     window.location.href = 'checkout.html';
// });


// const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');


// addToCartButtons.forEach(addToCartButton => {
//     addToCartButton.addEventListener('click', () => {
      
//         cartCount++;

  
//         updateCart();
//     });
// });


// const cartIcon = document.getElementById('cart-icon');
// cartIcon.addEventListener('click', () => {
    
//     console.log('Cart icon clicked!');
// });
// ---------------------------------------------------------------------------------------------------------
const addToCartButton = document.querySelector('.add-to-cart-btn');
const sidebar = document.querySelector('.sidebar');

// Add click event listener to "Add to Cart" button
addToCartButton.addEventListener('click', () => {
    // Toggle the 'hidden' class on the sidebar to show/hide it
    // sidebar.classList.toggle('hidden');
    sidebar.classList.remove('hidden');
});
