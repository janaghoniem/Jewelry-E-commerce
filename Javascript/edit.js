document.addEventListener("DOMContentLoaded",function(){
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });
    
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
});

function toggleMenu(){
    var nav= document.querySelector('.navigation');
    nav.style.display=nav.style.display==='block'? 'none' :'block';
}