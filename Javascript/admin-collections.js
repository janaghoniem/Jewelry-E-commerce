function toggleMenu(){
    var nav= document.querySelector('.navigation');
    nav.style.display=nav.style.display==='block'? 'none' :'block';
}

window.addEventListener('resize', function() {
    var nav = document.querySelector('.navigation');
    var screenWidth = window.innerWidth;

    // If screen width is greater than 900 pixels, display the navigation menu
    if (screenWidth > 900) {
        nav.style.display = 'block';
    }
});
// document.addEventListener("DOMContentLoaded", function () {
//     var indianButton = document.querySelector(".collection-button");

//     indianButton.addEventListener("click", function () {
//         window.location.href = "EditCollection.html";
//     });
// });
