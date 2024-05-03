"use strict";
function dragNdrop(event) {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("preview").innerHTML = filename;
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName);
    preview.innerHTML = "";
    preview.appendChild(previewImg);
}



function displayImg() {

}
function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}

function update() {
    var x = document.getElementById('productNameInput').value;
    document.getElementById('productName').innerText = x;

}

function updatePrice() {
    var y = document.getElementById('productPriceInput').value;
    document.getElementById('productPrice').innerText = y

}

function updateDescription() {
    var y = document.getElementById('productDescriptionI').value;
    document.getElementById('productDescription').innerText = y
    return false;
}

function updateCollection() {

    var z = document.getElementById('productCollectionInput').value;
    if (z == 1) {
        document.getElementById('productCollection').innerText = "Collection 1"
    }
    if (z == 2) {
        document.getElementById('productCollection').innerText = "Collection 2"
    }
    if (z == 3) {
        document.getElementById('productCollection').innerText = "Collection 3";
    }
    if (z == 4) {
        var x =
            document.getElementById('productCollection').innerText = "Collection 4";
    }


}



$(document).ready(function(){
    $(".btn1").click(function(event){
      event.preventDefault(); // Prevent the default form submission behavior
      $(".container").slideUp(function(){
        $(".container2").slideDown(); // Slide down container2 after container1 is hidden
      });
      $(".btn1").hide(); // Hide btn1
      $(".btn2").show(); // Show btn2
    });
    $(".btn2").click(function(){
      $(".container2").slideUp(function(){
        $(".container").slideDown(); // Slide down container1 after container2 is hidden
      });
      $(".btn1").show(); // Show btn1
      $(".btn2").hide(); // Hide btn2
    });
  });
  




// document.addEventListener('DOMContentLoaded',function(){
// var productNameInput=documen.getElementById('productNameInput');
// productNameInput.addEventListener('input',function(){
//     var productName=this.value;
//     document.getElementById('productName').innerText=productName
// })
// });