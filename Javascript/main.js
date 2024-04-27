// function dropMenu() {
//     var x = document.getElementById("navigation");
//     if (x.className === "navigation") {
//       x.className += " responsive";
//     } else {
//       x.className = "navigation";
//     }
//   }
// function dropMenu() {
//   var x = document.querySelector(".navigation");
//   if (x.classList.contains("responsive")) {
//       x.classList.remove("responsive");
//   } else {
//       x.classList.add("responsive");
//   }
// }
document.addEventListener("DOMContentLoaded", function (){
    const container = document.querySelector('.Collection-container');
    const cards = document.querySelectorAll('.collection-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let scrollPosition = 0;

    updateScroll();
    prevBtn.addEventListener('click', scrollLeft);
    nextBtn.addEventListener('click', scrollRight);

    function updateScroll() {
        container.scrollLeft = scrollPosition;
    }
    function scrollLeft(){
        scrollPosition-=320;
        if(scrollPosition<0){
            scrollPosition=0;
        }
    }
    function scrollRight(){
        scrollPosition+=320;
        const maxScroll=container.scrollWidth-container.clientWidth;
    if(scrollPosition>maxScroll){
        scrollPosition=maxScroll;
    }
    updateScroll();
    }

});


let imgWrappers = document.getElementsByClassName('img-wrapper faster');
window.addEventListener('scroll', () => {
    let value = window.scrollX;
    for (let i = 0; i < imgWrappers.length; i++) {
        imgWrappers[i].style.right = value * 1.5 + 'px';
    }
})
