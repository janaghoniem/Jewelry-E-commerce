"use strict";
function dragNdrop(event) {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("preview");
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName);
    preview.innerHTML = "";
    preview.appendChild(previewImg);
}
function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}

function update() {
    var x = document.getElementById('productNameInput').value;
    document.getElementById('productName').innerText=x;
    return false;
}

// document.addEventListener('DOMContentLoaded',function(){
// var productNameInput=documen.getElementById('productNameInput');
// productNameInput.addEventListener('input',function(){
//     var productName=this.value;
//     document.getElementById('productName').innerText=productName
// })
// });