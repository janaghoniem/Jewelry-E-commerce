
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

// ------------------header------------------------------
document.addEventListener('DOMContentLoaded', function () {

  //nav bar scroll
  window.addEventListener('scroll', function () {
      const header = document.querySelector('header');
      const headerTop = document.getElementById('header-top');

      const headerMiddle = document.getElementById('header-middle');
      const sideicon = document.getElementById('side-icon');
      const middleDiv = document.getElementById('top-move-on-scroll');
      const headerBottom = document.getElementById('header-bottom');
      const logo = document.getElementById('logo');
      const searchButton = document.getElementById('search-button');
      const searchbutton2 = document.getElementById('search-button2');

      if (window.scrollY > 0) {
          header.classList.remove('header-unscrolled');
          header.classList.add('header-scrolled');

          searchButton.style.display = 'none';
          sideicon.style.color = 'black';

          middleDiv.style.display = 'flex';

          headerTop.style.display = 'none';

          middleDiv.classList.remove('header-top-unscrolled');
          middleDiv.classList.add('header-top-scrolled');

          headerMiddle.style.justifyContent = 'space-between';

          logo.classList.remove('logo-unscrolled');
          logo.classList.add('logo-scrolled');

          headerBottom.classList.remove('header-bottom-unscrolled');
          headerBottom.classList.add('header-bottom-scrolled');
      } else {
          header.classList.remove('header-scrolled');
          header.classList.add('header-unscrolled');

          if (!this.window.width < 1090) {
              searchButton.style.display = 'flex';
              middleDiv.style.display = 'none';
          }


          sideicon.style.color = 'white';

          headerTop.style.display = 'flex';

          middleDiv.classList.remove('header-top-unscrolled');
          middleDiv.classList.remove('header-top-scrolled');

          headerMiddle.style.justifyContent = 'center';

          logo.classList.remove('logo-scrolled');
          logo.classList.add('logo-unscrolled');

          headerBottom.classList.add('header-bottom-unscrolled');
          headerBottom.classList.remove('header-bottom-scrolled');
      }
      
  });

  //nav bar extension on hover
  const navigationLinks = document.querySelectorAll('#header-bottom .navigation .extension');
  const headerExtension = document.getElementById('header-bottom-anchor-extension');
  const exitButton = document.getElementById('exit-extension-button');
  let mouseOverLink = false; //in case el user alternated between el links besor3a msh 3aizeen flickering

  if (exitButton) {
      exitButton.addEventListener('click', () => {
          mouseOverLink = false;
          console.log('exit button clicked');
          headerExtension.style.display = 'none';
      });
  }

  navigationLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
          mouseOverLink = true;
          headerExtension.style.display = 'block';
      });

      link.addEventListener('mouseleave', () => {
          mouseOverLink = false;
          setTimeout(() => {
              if (!mouseOverLink) {
                  headerExtension.style.display = 'none';
              }
          }, 500);
      });
  });

  headerExtension.addEventListener('mouseenter', () => {
      mouseOverLink = true;
  });

  headerExtension.addEventListener('mouseleave', () => {
      mouseOverLink = false;
      setTimeout(() => {
          if (!mouseOverLink) {
              headerExtension.style.display = 'none';
          }
      }, 30);
  });

  //responiveness
  function toggleMenu() {
      var nav = document.querySelector('.navigation');
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  }
});