// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
// function filterFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("myDropdown");
//     a = div.getElementsByTagName("a");
//     for (i = 0; i < a.length; i++) {
//       txtValue = a[i].textContent || a[i].innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         a[i].style.display = "";
//       } else {
//         a[i].style.display = "none";
//       }
//     }
// }
function showAlert() {
    alert("Item added to cart!");
  }
  function closeSlide() {
      document.getElementById("touch").checked = false;
      document.getElementById("touch2").checked = false; 
      document.getElementById("touch4").checked = false; 
  
  }
  
  function closeSlideAndUncheck() {
      document.getElementById("touch4").checked = false; 
      document.getElementById("touch2").checked = false; 
      document.getElementById("touch").checked = false; 
  
      var checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach(function(checkbox) {
          checkbox.checked = false;
      });
  }
  function addToCart(){
    var popup = document.createElement("div");
    popup.classList.add("popupMessage");
    popup.textContent= "Added to cart";
    document.body.appendChild(popup);

    setTimeout(function(){
        popup.style.display="block";
    },100);

    setTimeout(function(){
        popup.style.display="none";
        popup.parentNode.removeChild(popup);
    },2000);

   
}

  
  
    document.addEventListener('DOMContentLoaded', function() {
      
      //nav bar scroll
      window.addEventListener('scroll', function() {
          const header = document.querySelector('header');
          const headerTop = document.getElementById('header-top');
          const headerMiddle = document.getElementById('header-middle');
          const middleDiv = document.getElementById('top-move-on-scroll');
          const headerBottom = document.getElementById('header-bottom');
          const logo = document.getElementById('logo');
          const searchButton = document.getElementById('search-button');
          const headerTopParagraphs = headerTop.querySelectorAll('p');
      
          if (window.scrollY > 0) {
              header.classList.remove('header-unscrolled');
              header.classList.add('header-scrolled');
      
              middleDiv.innerHTML = headerTop.innerHTML;
              headerTop.style.display = 'none';
      
              middleDiv.classList.remove('header-top-unscrolled');
              middleDiv.classList.add('header-top-scrolled');
      
              headerMiddle.style.justifyContent = 'space-between';
      
              logo.classList.remove('logo-unscrolled');
              logo.classList.add('logo-scrolled');
      
              searchButton.classList.remove('search-button-unscrolled');
              searchButton.classList.add('search-button-scrolled');
      
              headerTopParagraphs.forEach(paragraph => {
                  paragraph.style.display = 'none';
              });
      
              headerBottom.classList.remove('header-bottom-unscrolled');
              headerBottom.classList.add('header-bottom-scrolled');
          } else {
              header.classList.remove('header-scrolled');
              header.classList.add('header-unscrolled');
      
              middleDiv.innerHTML = '';
              headerTop.style.display = 'flex';
  
              middleDiv.classList.remove('header-top-unscrolled');
              middleDiv.classList.remove('header-top-scrolled');
      
              headerMiddle.style.justifyContent = 'center';
      
              logo.classList.remove('logo-scrolled');
              logo.classList.add('logo-unscrolled');
      
              searchButton.classList.add('search-button-unscrolled');
              searchButton.classList.remove('search-button-scrolled');
      
              headerTopParagraphs.forEach(paragraph => {
                  paragraph.style.display = 'inline';
              });
      
              headerBottom.classList.add('header-bottom-unscrolled');
              headerBottom.classList.remove('header-bottom-scrolled');
          }
      });
      
      // 7agat el search
      const searchButton = document.getElementById('search');
      const searchField = document.getElementById('searchField');
      const searchDiv = document.getElementById('search-button');
      let buttonCount = 0;
  
      // search functionality
      if (searchButton && searchField) { // fy reference error -  debugging statement
          searchButton.addEventListener('click', expandSearch);
          console.log("clicked1");
      }
  
      function expandSearch() {
          console.log("clicked2");
          if (buttonCount === 0) {
              searchDiv.style.width = '200px';
              searchField.style.width = '200px';
              searchDiv.style.border = '1px solid #F6E8C0';
              buttonCount++;
          } else if (buttonCount === 1) {
              searchDiv.style.border = 'none';
              searchField.style.width = '0px';
              searchDiv.style.width = '40px';
              buttonCount--;
          }
      }
      function isInViewport(element, buffer = 35) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= -buffer &&
            rect.left >= -buffer &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + buffer &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) + buffer
        );
    }
    function toggleMenu(){
         var nav= document.querySelector('.navigation'); 
         nav.style.display=nav.style.display==='block'? 'none' :'block'; 
    }    
    
    // Function to handle scroll event
    // Function to handle scroll event
// Function to handle scroll event
function handleScroll() {
    const items = document.querySelectorAll('.item');

    items.forEach((item) => {
        if (isInViewport(item, 200)) { // Adjust the buffer value as needed
            item.classList.add('show'); // Add 'show' class if item is in view
        }
    });
}


    
    // Event listener for scroll event
    window.addEventListener('scroll', handleScroll);
    

      //automatically alternate between slides
      
      //categories hovering
      document.querySelectorAll('.categories div').forEach(item => {
          const img = item.querySelector('.img img');
          const category = item.className.split(' ')[0];
      
          //hover lel entire div
          item.addEventListener('mouseenter', function() {
              img.src = `../images/Landing/exp/${category}2.jpg`;
          });
      
          item.addEventListener('mouseout', function() {
              img.src = `../images/Landing/exp/${category}1.png`;
          });
      
          //hover lel image nafsaha
          const imgDiv = item.querySelector('.img');
          if (imgDiv) {
              img.addEventListener('mouseenter', function() {
                  img.src = `../images/Landing/exp/${category}2.jpg`;
              });
      
              img.addEventListener('mouseout', function() {
                  img.src = `../images/Landing/exp/${category}1.jpg`;
              });
          }
      });
  });
  