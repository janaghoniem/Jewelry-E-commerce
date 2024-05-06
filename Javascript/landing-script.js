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

    //nav bar extension on hover
    const navigationLinks = document.querySelectorAll('#header-bottom .navigation .extension');
    const headerExtension = document.getElementById('header-bottom-anchor-extension');
    const exitButton = document.getElementById('exit-extension-button');
    let mouseOverLink = false; //in case el user alternated between el links besor3a msh 3aizeen flickering

    exitButton.addEventListener('click', () => {
        mouseOverLink = false;
        console.log('exit button clicked');
        headerExtension.style.display = 'none';
    });

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

    //login - sign-up pop up
    const loginIconTrigger = document.getElementById('login-button');
    const popupContainer = document.getElementById('popup-container');
    const loginButton = document.getElementById('login-nav');
    const loginform = document.getElementById('login-form');
    const createAccountButton = document.getElementById('Create-an-account-nav');
    const createAccountForm = document.getElementById('create-account-form');

    loginIconTrigger.addEventListener('click', () => {
        popupContainer.style.display = 'flex';
    });

    loginButton.addEventListener('click', () => {
        createAccountButton.classList.remove('active');
        createAccountForm.style.display = 'none';

        loginButton.classList.add('active');
        loginform.style.display = 'block';
    });

    createAccountButton.addEventListener('click', () => {
        loginButton.classList.remove('active');
        loginform.style.display = 'none';

        createAccountButton.classList.add('active');
        createAccountForm.style.display = 'block';
    });

    //LOGIN HANDLING
    const loginSubmitButton = document.getElementById('login-form-button');
    const loginFormEmailField = document.getElementById('login-form-email-field');
    const loginFormPasswordField = document.getElementById('login-form-password-field');

    loginSubmitButton.addEventListener('click', () => {
        if(loginFormEmailField.value === ""){
            
        }
    });

    const createAccountSubmitButton = document.getElementById('create-account-button');




    
    // 7agat el search
    const searchButton = document.getElementById('search');
    const searchField = document.getElementById('searchField');
    const searchDiv = document.getElementById('search-button');
    let buttonCount = 0;

    // search functionality
    if (searchButton && searchField) { // fy reference error -  debugging statement
        searchButton.addEventListener('click', expandSearch);
    }

    function expandSearch() {
        console.log("clicked2");
        if (buttonCount === 0) {
            searchDiv.style.width = '200px';
            searchField.style.width = '200px';
            searchDiv.style.border = '1px solid black';
            buttonCount++;
        } else if (buttonCount === 1 && searchField.value == "") {
            searchDiv.style.border = 'none';
            searchField.style.width = '0px';
            searchDiv.style.width = '40px';
            buttonCount--;
        }
        else {
            alert("Hena its supposed to search");
        }
    }

    // 7agat el carousel
    const track = document.getElementById("carousel__track");
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('carousel__button--right');
    const prevButton = document.getElementById('carousel__button--left');
    
    //da in case el user 8ayar el size of the window
    const slideSize = slides[0].getBoundingClientRect();
    const slideWidth = slideSize.width;


    // arrange the slides next to each other
    // set el slide position for each slide in my carousel
    slides.forEach((slide, index) =>
    {
        slide.style.left = slideWidth * index + 'px';
        if(index)
        console.log("slide" + index + " width: " + slide.style.left)
    });

    //functions

    function moveToSlide(track, currentSlide, targetSlide) {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }

    function hideShowArrows (slides, prevButton, nextButton, targetIndex) {
        if(targetIndex === 0)
        {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (targetIndex === slides.length - 1) {
            nextButton.classList.add('is-hidden');
            prevButton.classList.remove('is-hidden');
        } else {
            nextButton.classList.remove('is-hidden');
            prevButton.classList.remove('is-hidden');
        }
    }

    //move left, slide to the left
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);

        moveToSlide(track, currentSlide, prevSlide);
        hideShowArrows(slides, prevButton, nextButton, prevIndex);
    });

    //move right, slide to the right
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);

        moveToSlide(track, currentSlide, nextSlide);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
    });

    
    //categories hovering
    document.querySelectorAll('.item').forEach(item => {
        const primaryimg = item.querySelector('.primary-img');
        const secondaryimg = item.querySelector('.secondary-img');
        const anchor = item.querySelector('a');
    
        //hover lel entire div
        if(primaryimg && secondaryimg)
        {
            anchor.addEventListener('mouseenter', function() {
                // img.src = `../images/Landing/exp/${category}2.jpg`;
                primaryimg.style.opacity = '0';
                secondaryimg.style.opacity = '1';
            });
    
            anchor.addEventListener('mouseout', function() {
                primaryimg.style.opacity = '1';
                secondaryimg.style.opacity = '0';
            });
        }
    });

});
