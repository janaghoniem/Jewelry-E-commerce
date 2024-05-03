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

    // 7agat el carousel
    // const track = document.getElementById("carousel__track");
    // const slides = Array.from(track.children);
    // const nextButton = document.getElementById('carousel__button--right');
    // const prevButton = document.getElementById('carousel__button--left');
    // const dotsNav = document.getElementById('carousel__nav');
    // const dots = Array.from(dotsNav.children);

    // //da in case el user 8ayar el size of the window
    // const slideSize = slides[0].getBoundingClientRect();
    // const slideWidth = slideSize.width;


    // // arrange the slides next to each other
    // // set el slide position for each slide in my carousel
    // slides.forEach((slide, index) =>
    // {
    //     slide.style.left = slideWidth * index + 'px';
    //     if(index)
    //     console.log("slide" + index + " width: " + slide.style.left)
    // });

    // //functions

    // function moveToSlide(track, currentSlide, targetSlide) {
    //     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    //     currentSlide.classList.remove('current-slide');
    //     targetSlide.classList.add('current-slide');
    // }

    // function updateDots(currentDot, targetDot) {
    //     currentDot.classList.remove('current-slide');
    //     targetDot.classList.add('current-slide');
    // }

    // function hideShowArrows (slides, prevButton, nextButton, targetIndex) {
    //     if(targetIndex === 0)
    //     {
    //         prevButton.classList.add('is-hidden');
    //         nextButton.classList.remove('is-hidden');
    //     } else if (targetIndex === slides.length - 1) {
    //         nextButton.classList.add('is-hidden');
    //         prevButton.classList.remove('is-hidden');
    //     } else {
    //         nextButton.classList.remove('is-hidden');
    //         prevButton.classList.remove('is-hidden');
    //     }
    // }

    // //move left, slide to the left
    // prevButton.addEventListener('click', e => {
    //     const currentDot = dotsNav.querySelector('.current-slide');
    //     const prevDot = currentDot.previousElementSibling;
    //     const currentSlide = track.querySelector('.current-slide');
    //     const prevSlide = currentSlide.previousElementSibling;
    //     const prevIndex = slides.findIndex(slide => slide === prevSlide);

    //     moveToSlide(track, currentSlide, prevSlide);
    //     updateDots(currentDot, prevDot);
    //     hideShowArrows(slides, prevButton, nextButton, prevIndex);
    // });

    // //move right, slide to the right
    // nextButton.addEventListener('click', e => {
    //     const currentDot = dotsNav.querySelector('.current-slide');
    //     const nextDot = currentDot.nextElementSibling;
    //     const currentSlide = track.querySelector('.current-slide');
    //     const nextSlide = currentSlide.nextElementSibling;
    //     const nextIndex = slides.findIndex(slide => slide === nextSlide);

    //     moveToSlide(track, currentSlide, nextSlide);
    //     updateDots(currentDot, nextDot);
    //     hideShowArrows(slides, prevButton, nextButton, nextIndex);
    // });


    // //click nav indicator
    // dotsNav.addEventListener('click', e => {
    //     const targetDot = e.target.closest('button');

    //     if(!targetDot) return;

    //     const currentSlide = track.querySelector('.current-slide');
    //     const currentDot = dotsNav.querySelector('.current-slide');
    //     const targetIndex = dots.findIndex(dot => dot === targetDot)
    //     const targetSlide = slides[targetIndex];
    //     moveToSlide(track, currentSlide, targetSlide);
    //     updateDots(currentDot, targetDot);
    //     hideShowArrows(slides, prevButton, nextButton, targetIndex);
    // });

    //automatically alternate between slides
    
    //categories hovering
    document.querySelectorAll('.item').forEach(item => {
        const primaryimg = item.querySelector('.primary-img');
        const secondaryimg = item.querySelector('.secondary-img');
        const anchor = item.querySelector('a');
    
        //hover lel entire div
        anchor.addEventListener('mouseenter', function() {
            // img.src = `../images/Landing/exp/${category}2.jpg`;
            primaryimg.style.opacity = '0';
            secondaryimg.style.opacity = '1';
        });

        anchor.addEventListener('mouseout', function() {
            primaryimg.style.opacity = '1';
            secondaryimg.style.opacity = '0';
        });
    });
});
