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
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function isValidPassword(password) {
        return (password.length >= 8);
    }

    function noErrorStyling(field) {
        field.style.borderColor = 'silver';
        field.style.backgroundColor = 'transparent';
    }

    //validate login
    const loginSubmitButton = document.getElementById('login-form-button');
    const loginFormEmailField = document.getElementById('login-form-email-field');
    const loginFormEmailError = document.getElementById('login-form-email-error');
    const loginFormPasswordField = document.getElementById('login-form-password-field');
    const loginFormPasswordError = document.getElementById('login-form-password-error');

    let requiredFieldError = "Required Field.";
    let invalidEmailError = "Invalid E-mail Address";
    let invalidPasswordError = "Use 8 or more characters";

    function validateLogin() {
        let valid = true;
        loginFormEmailError.textContent = '';
        loginFormPasswordError.textContent = '';
        
        noErrorStyling(loginFormEmailField);
        noErrorStyling(loginFormPasswordField);

        if(loginFormEmailField.value === ""){
            loginFormEmailField.style.borderColor = 'red';
            loginFormEmailError.textContent = requiredFieldError;
            valid = false;
        } else if (!isValidEmail(loginFormEmailField.value.trim())){
            loginFormEmailError.textContent = invalidEmailError;
            valid = false;
        } 

        if (loginFormPasswordField.value === "") {
            loginFormPasswordField.style.borderColor = 'red';
            loginFormPasswordError.textContent = requiredFieldError;
            valid = false;
        }else if (!isValidPassword(loginFormPasswordField.value.trim())){
            loginFormPasswordError.textContent = invalidPasswordError;
            valid = false;
        }

        return valid;
    }

    loginSubmitButton.addEventListener('click', () => {
        if(!validateLogin())
            event.preventDefault();
    });

    //Validate sign-up
    const createAccountSubmitButton = document.getElementById('create-account-button');
    const signUpFormFirstNameField = document.getElementById('sign-up-first-name-field');
    const signUpFormFirstNameError= document.getElementById('sign-up-first-name-error');
    const signUpFormLastNameField = document.getElementById('sign-up-last-name-field');
    const signUpFormLastNameError= document.getElementById('sign-up-last-name-error');
    const signUpFormEmailField = document.getElementById('sign-up-email-field');
    const signUpFormEmailError = document.getElementById('sign-up-email-error');
    const signUpFormConfirmEmailField = document.getElementById('sign-up-confirm-email-field');
    const signUpFormConfirmEmailError = document.getElementById('sign-up-confirm-email-error');
    const signUpFormPasswordField = document.getElementById('sign-up-password-field');
    const signUpFormPasswordError = document.getElementById('sign-up-password-error');
    const signUpFormConfirmPasswordField = document.getElementById('sign-up-confirm-password-field');
    const signUpFormConfirmPasswordError = document.getElementById('sign-up-confirm-password-error');

    let emailConfirmationError = "The E-mail confirmation does not match your E-mail address.";
    let passwordConfirmationError = "The password confirmation does not match your entered password."

    function validateSignUp() {
        let valid = true;
        signUpFormFirstNameError.textContent = '';
        signUpFormLastNameError.textContent = '';
        signUpFormEmailError.textContent = '';
        signUpFormPasswordError.textContent = '';
        signUpFormConfirmEmailError.textContent = '';
        signUpFormConfirmPasswordError.textContent = '';

        noErrorStyling(signUpFormFirstNameField);
        noErrorStyling(signUpFormLastNameField);
        noErrorStyling(signUpFormEmailField);
        noErrorStyling(signUpFormPasswordField);
        noErrorStyling(signUpFormConfirmEmailField);
        noErrorStyling(signUpFormConfirmPasswordField);

        if(signUpFormFirstNameField.value === ""){
            signUpFormFirstNameField.style.borderColor = 'red';
            signUpFormFirstNameField.style.backgroundColor = 'rgb(255, 242, 242)';
            signUpFormFirstNameError.textContent = requiredFieldError;
            valid = false;
        }
        if(signUpFormLastNameField.value === ""){
            signUpFormLastNameField.style.borderColor = 'red';
            signUpFormLastNameField.style.backgroundColor = 'rgb(255, 242, 242)';
            signUpFormLastNameError.textContent = requiredFieldError;
            valid = false;
        }

        if(signUpFormEmailField.value === ""){
            signUpFormEmailField.style.borderColor = 'red';
            signUpFormEmailField.style.backgroundColor = 'rgb(255, 242, 242)';
            signUpFormEmailError.textContent = requiredFieldError;
            valid = false;
        } else if (!isValidEmail(signUpFormEmailField.value.trim())){
            signUpFormEmailField.style.borderColor = 'red';
            signUpFormEmailField.style.backgroundColor = 'rgb(255, 242, 242)';
            signUpFormEmailError.textContent = invalidEmailError;
            valid = false;
        }
        if(signUpFormConfirmEmailField.value === ""){
            signUpFormConfirmEmailField.style.borderColor = 'red';
            signUpFormConfirmEmailField.style.backgroundColor = 'rgb(255, 242, 242)';
            signUpFormConfirmEmailError.textContent = requiredFieldError;
            valid = false;
        } else if (signUpFormEmailField.value !== signUpFormConfirmEmailField){
            signUpFormConfirmEmailField.style.borderColor = 'red';
            signUpFormConfirmEmailField.style.backgroundColor = 'rgb(255, 242, 242)';
            signUpFormConfirmEmailError.textContent = emailConfirmationError;
            valid = false;
        }
        if(signUpFormPasswordField.value === ""){
            signUpFormPasswordField.style.borderColor = 'red';
            signUpFormPasswordField.style.backgroundColor = 'rgb(255, 242, 242)';
            signUpFormPasswordError.textContent = requiredFieldError;
            valid = false;
        } else if (!isValidPassword(signUpFormPasswordField.value.trim())){
            signUpFormPasswordField.style.borderColor = 'red';
            signUpFormPasswordField.style.backgroundColor = 'rgb(255, 242, 242)';
            signUpFormPasswordError.textContent = invalidPasswordError;
            valid = false;
        }
        if(signUpFormConfirmPasswordField.value === ""){
            signUpFormConfirmPasswordField.style.borderColor = 'red';
            signUpFormConfirmPasswordField.style.backgroundColor = 'rgb(255, 242, 242)';
            signUpFormConfirmPasswordError.textContent = requiredFieldError;
            valid = false;
        } else if (signUpFormConfirmPasswordField.value !== signUpFormPasswordField){
            signUpFormConfirmPasswordField.style.borderColor = 'red';
            signUpFormConfirmPasswordField.style.backgroundColor = 'rgb(255, 242, 242)';
            signUpFormConfirmPasswordError.textContent = passwordConfirmationError;
            valid = false;
        }

        return valid;
    }

    createAccountSubmitButton.addEventListener('click', () => {
        if(!validateSignUp())
            event.preventDefault();
    });

    //exiting el popup login
    const exitPopupButton = document.getElementById('exit-popup-button');

    exitPopupButton.addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });

    
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
});