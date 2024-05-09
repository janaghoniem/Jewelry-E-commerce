//scroll effect

function isInViewport(element){
    const rect= element.getBoundingClientRect();
    console.log(rect);
    return(
        rect.top>=0 &&
        rect.left >=0 &&
        rect.bottom<= (window.innerHeight||document.documentElement.clientHeight)&&
        rect.right<= (window.innerWidth||document.documentElement.clientWidth)


    );
}
function handleScroll(){

const images= document.querySelectorAll('.images-trans');
// let delay=0;
console.log(images);
images.forEach(image=>{
    if(isInViewport(image)){
        // setTimeout(()=>{
        //     image.classList.add('show');
        // },index*200);
    //    delay+=200;
    image.classList.add('show');
    // image.style.opacity='1';
    // image.style.transition='opacity 0.5s ease-in-out';
    // image.style.transform='translateY(0)';
    }
});

}
document.addEventListener('DOMContentLoaded',handleScroll);
window.addEventListener('scroll',handleScroll);

//heart icon "wishlist"

document.addEventListener("DOMContentLoaded",function(){

    const heartIcon=document.getElementById('heartIcon');
     heartIcon.addEventListener("click",function(){
        this.classList.toggle("fa-regular fa-heart");
        thhis.classList.toggle("fa-solid fa-heart");
     });

});

//added to cart popup
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

function addToWishlist(){
    var popup = document.createElement("div");
    popup.classList.add("popupMessage");
    popup.textContent= "Added to wishlist";
    document.body.appendChild(popup);

   
    setTimeout(function(){
        popup.style.display="block";
    },100);

    setTimeout(function(){
        popup.style.display="none";
        popup.parentNode.removeChild(popup);
    },2000);

   
}
