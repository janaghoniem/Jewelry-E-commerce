document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    //     var indianButton = document.querySelector(".collection-button");

    //     indianButton.addEventListener("click", function (e) {
    //         e.preventDefault();
    //         window.location.href = "EditCollection.html";
    //     });

    // const editform=document.querySelector(".form-container.first form");
    // const submitbutton= document.getElementById("submitButton");

    // submitbutton.addEventListener("click", function(event){
    // event.preventDefualt();
    // editform.submit();
    // window.location.href = "EditCollection.html";

    // });
    // editform.addEventListener("submit", function(event){

    // });


});

function toggleMenu() {
    var nav = document.querySelector('.navigation');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

// function dragNdrop(event){
//     event.preventDefault();
//     var file=event.dataTransfer.files[0];
//     var reader=new FileReader();

//     reader.onload=function(e){
//         var previewDiv=document.querySelector('.preview');
//         previewDiv.innerHTML='<img src="'+e.target.result+'"/>';
//     }
//     reader.readAsDataURL(file);
// }

"use strict";
function dragNdrop(event) {
    var fileName = URL.createObjectURL(event.target.files[0]);
    var preview = document.getElementById("preview");
    var previewImg = document.createElement("img");
    previewImg.setAttribute("src", fileName);
    preview.innerHTML = "";
    preview.appendChild(previewImg);
    var pictureValidation = document.querySelector('.picture-validation');
    pictureValidation.innerHTML = 'Picture you uploaded';

    var suc = document.querySelector('.successful');
    suc.innerHTML = 'Uploaded successfully';

    var suc1 = document.querySelector('.s');
    suc1.innerHTML = 'Click on edit button to view image';
}
function drag() {
    document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
    document.getElementById('uploadFile').parentNode.className = 'dragBox';
}

function checkConditions() {
    var inputField = document.querySelector('input[type=text]');
    var textareaField = document.querySelector('textarea');
    var uploadFile = document.getElementById('uploadFile');
    var sureMessage = document.querySelector('.sure');
    var imgLandingLabel = document.querySelector('label[for=img-landing]');
    var imgLandingCheckbox = document.getElementById('img-landing');

    if (inputField.value === "" || textareaField.value === "" || uploadFile.value === "") {
        if (inputField.value === "" && textareaField.value === "" && uploadFile.value === "") {
            sureMessage.innerHTML = "You left all fields empty, nothing is changed";
            return false;
        } else if (inputField.value === "" && textareaField.value === "" && uploadFile.value !== "") {
            sureMessage.innerHTML = "You only uploaded a picture to change";


            imgLandingCheckbox.style.display = "inline-block";
            imgLandingLabel.style.display = "inline-block";
        } else {
            sureMessage.innerHTML = "You left some empty fields unchanged";
        }
    }
}

function redirect() {
    console.log("redirect function is called");
    var inputField = document.querySelector('input[type=text]');
    var textareaField = document.querySelector('textarea');
    var uploadFile = document.getElementById('uploadFile');
    var sureMessage = document.querySelector('.sure');

    if (inputField.value === "" || textareaField.value === "" || uploadFile.value === "") {
        if (inputField.value === "" && textareaField.value === "" && uploadFile.value === "") {
            sureMessage.innerHTML = "You left all fields empty, nothing is changed";
            return false;
        } else if (inputField.value === "" && textareaField.value === "" && uploadFile.value !== "") {
            sureMessage.innerHTML = "You only uploaded a picture to change";
        } else {
            sureMessage.innerHTML = "You left some empty fields unchanged";
        }
    }

    if (inputField.value !== "" || textareaField.value !== "" || uploadFile.value !== "") {
        window.location.href = "../HTML/admin-collections.html";
    }
}

function TextOnly(event) {
    const keyCode = event.keyCode || event.which;

    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
        return true;
    } else {
        event.preventDefalt();
        return false;
    }
}
