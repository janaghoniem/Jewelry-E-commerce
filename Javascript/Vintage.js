window.onscroll = function() {myFunction()};

var text = document.getElementById("collection-info");
var sticky = text.offsetTop;
function myFunction(){
    if(window.pageYOffset > sticky){
        text.classList.add("sticky");
    } else{
        text.classList.remove("sticky");
    }
}