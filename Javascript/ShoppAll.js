
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
// const addToCartButton = document.querySelector('.add-to-cart-btn');
// const sidebar = document.querySelector('.sidebar');

// // Add click event listener to "Add to Cart" button
// addToCartButton.addEventListener('click', () => {
//     // Toggle the 'hidden' class on the sidebar to show/hide it
//     // sidebar.classList.toggle('hidden');
//     sidebar.classList.remove('hidden');
// });
// ------------------------pagination------------------------------------
let pages = document.getElementsByClassName("pagination-item");
let nextBtn = document.querySelector(".btn-next");
let previousBtn = document.querySelector(".btn-previous");
let firstBtn = document.querySelector(".btn-first");
let lastBtn = document.querySelector(".btn-last");

let currentPage = 1;
let totalPages = 5;

const activePage = (event) => {
  /**disable previous and first button if current page value is 1 */
  if (currentPage === 1) disablePreviousAndFirstBtn();

  /**disable next and last button if current page value is 5 */
  if (currentPage === totalPages) disableNextAndLastBtn();

  /**set current page value when clicked on page link*/
  currentPage = event.target.value;

  /**apply 'active' class on clicked page link*/
  addActive(event.target);
};

const prev = () => {
  currentPage--;
  addActive(pages[currentPage - 1]);
};

const next = () => {
  currentPage++;
  addActive(pages[currentPage - 1]);
};

const first = () => {
  enableNextAndLastBtn();
  disablePreviousAndFirstBtn();

  currentPage = 1;
  addActive(pages[currentPage - 1]);
};

const last = () => {
  disableNextAndLastBtn();

  currentPage = totalPages;
  addActive(pages[currentPage - 1]);
};

const removeActive = (list) => {
  if (currentPage === 1) disablePreviousAndFirstBtn();
  else enablePreviousAndFirstBtn();

  if (currentPage === totalPages) disableNextAndLastBtn();
  else enableNextAndLastBtn();

  /**removes 'active' class from all page links*/
  for (l of list) l.classList.remove("active");
};

const addActive = (element) => {
  removeActive(pages);

  /**add 'active' class on current page linkw*/
  element.classList.add("active");
};

const disableNextAndLastBtn = () => {
  nextBtn.disabled = true;
  lastBtn.disabled = true;
};

const enableNextAndLastBtn = () => {
  nextBtn.disabled = false;
  lastBtn.disabled = false;
};

const disablePreviousAndFirstBtn = () => {
  previousBtn.disabled = true;
  firstBtn.disabled = true;
};

const enablePreviousAndFirstBtn = () => {
  previousBtn.disabled = false;
  firstBtn.disabled = false;
};

disablePreviousAndFirstBtn();

function addToCart(){
  var popup = document.createElement("div");
  popup.classList.add("popupMessage");
  popup.textContent= "Added to cart";
  document.body.appendChild(popup);

  // var windowwidth = window.innerWidth;
  // var popupwidth = popup.offsetWidth;
  // var leftposition = (windowwidth - popupwidth)/2;

  // var scrollY = window.scrollY || window.pageYOffset;


  // popup.style.top = scrollY + "px";
  // popup.style.left = leftposition + "50%";



  setTimeout(function(){
      popup.style.display="block";
  },100);

  setTimeout(function(){
      popup.style.display="none";
      popup.parentNode.removeChild(popup);
  },2000);

 
}
