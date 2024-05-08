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
        const searchbutton2 = document.getElementById('search-button2');
    
        if (window.scrollY > 0) {
            header.classList.remove('header-unscrolled');
            header.classList.add('header-scrolled');

            searchButton.style.display = 'none';
    
            middleDiv.style.display = 'flex';
    
            headerTop.style.display = 'none';
    
            middleDiv.classList.remove('header-top-unscrolled');
            middleDiv.classList.add('header-top-scrolled');
    
            headerMiddle.style.justifyContent = 'space-between';
    
            logo.classList.remove('logo-unscrolled');
            logo.classList.add('logo-scrolled');
    
            headerBottom.classList.remove('header-bottom-unscrolled');
            headerBottom.classList.add('header-bottom-scrolled');
        } else {
            header.classList.remove('header-scrolled');
            header.classList.add('header-unscrolled');
    
            searchButton.style.display = 'flex';
    
            middleDiv.style.display = 'none';

            headerTop.style.display = 'flex';

            middleDiv.classList.remove('header-top-unscrolled');
            middleDiv.classList.remove('header-top-scrolled');
    
            headerMiddle.style.justifyContent = 'center';
    
            logo.classList.remove('logo-scrolled');
            logo.classList.add('logo-unscrolled');
        
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

    //responiveness
    function toggleMenu(){
        var nav= document.querySelector('.navigation');
        nav.style.display=nav.style.display==='block'? 'none' :'block';
    }

    //login - sign-up pop up
    const loginIconTrigger = document.getElementById('login-button');
    const loginIconTrigger2 = document.getElementById('login-button2');
    const popupContainer = document.getElementById('popup-container');
    const loginButton = document.getElementById('login-nav');
    const loginform = document.getElementById('login-form');
    const createAccountButton = document.getElementById('Create-an-account-nav');
    const createAccountForm = document.getElementById('create-account-form');

    loginIconTrigger.addEventListener('click', () => {
        event.preventDefault();
        popupContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    loginIconTrigger2.addEventListener('click', () => {
        event.preventDefault();
        popupContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden';
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
    const currentUsers = [{"Email": "admin@mail.com", "Password":"123admin"}];

    function userExists(email) {
        return currentUsers.some(user => user.Email === email);
    }
    
    function addUser(email, password) {
        currentUsers.push({ "Email": email, "Password": password });
    }

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
            loginFormEmailField.style.backgroundColor = 'rgb(255, 242, 242)';
            loginFormEmailError.textContent = requiredFieldError;
            valid = false;
        } else if (!isValidEmail(loginFormEmailField.value.trim())){
            loginFormEmailError.textContent = invalidEmailError;
            loginFormEmailField.style.backgroundColor = 'rgb(255, 242, 242)';
            valid = false;
        } 

        if (loginFormPasswordField.value === "") {
            loginFormPasswordField.style.borderColor = 'red';
            loginFormPasswordField.style.backgroundColor = 'rgb(255, 242, 242)';
            loginFormPasswordError.textContent = requiredFieldError;
            valid = false;
        }else if (!isValidPassword(loginFormPasswordField.value.trim())){
            loginFormPasswordError.textContent = invalidPasswordError;
            loginFormPasswordField.style.backgroundColor = 'rgb(255, 242, 242)';
            valid = false;
        }

        return valid;
    }

    loginSubmitButton.addEventListener('click', () => {
        if(validateLogin()) {
            if(userExists(loginFormEmailField.value)) {
                //el mafrood hena ye3mel login baa
                if(loginFormEmailField.value === "admin@mail.com" && loginFormPasswordField.value === "123admin") {
                    //neroo7 le page shahd
                    // console.log('admin logged in');
                    // window.location.href("..//HTML/main.html");
                } else {
                    //user 3ady
                }
            } else {
                //replace dy b fading pop up
                alert("User does not exist. Please sign up.");
            }
        } else {
            event.preventDefault();
        }
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
        if(validateSignUp()) {
            //add el user lel dictionary beta3ty
            addUser(signUpFormEmailField.value, signUpFormPasswordField.value);
            //replace with cute fading popup
            alert("Account created successfully!");
        } else {
            event.preventDefault();
        }
    });

    //exiting el popup login
    const exitPopupButton = document.getElementById('exit-popup-button');

    exitPopupButton.addEventListener('click', () => {
        popupContainer.style.display = 'none';
        document.body.style.overflow = 'scroll';
    });

    
    // 7agat el search
    const searchButtonclick = document.getElementById('search');
    const searchField = document.getElementById('searchField');
    const searchDiv = document.getElementById('search-button');
    let buttonCount = 0;
    // search functionality
    if (searchButtonclick && searchField) { 
        searchButtonclick.addEventListener('click', expandSearch);
    }

    function expandSearch() {
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

    //second search
    const searchButtonclick2 = document.getElementById('search2');
    const searchField2 = document.getElementById('searchField2');
    const searchDiv2 = document.getElementById('search-button2');
    let buttonCount2 = 0;

    if(searchButtonclick2){
        searchButtonclick2.addEventListener('click', expandSearch2);
    }

    function expandSearch2() {
        if (buttonCount2 === 0) {
            searchDiv2.style.width = '200px';
            searchField2.style.width = '200px';
            searchDiv2.style.border = '1px solid black';
            buttonCount2++;
        } else if (buttonCount2 === 1 && searchField2.value == "") {
            searchDiv2.style.border = 'none';
            searchField2.style.width = '0px';
            searchDiv2.style.width = '40px';
            buttonCount2--;
        }
        else {
            alert("Hena its supposed to search");
        }
    }

    //CONTACT US
    const emailUs = document.getElementById('Email-us');
    const arrowDown = document.getElementById('arrow-down');
    const arrowUp = document.getElementById('arrow-up');
    const email = document.getElementById('email');
    // const cs = document.getElementById('CSAI');
    // const cspopup = document.getElementById('cs-popup');

    if(arrowUp && arrowDown){
        arrowDown.addEventListener('click', () => {
            arrowDown.style.display = 'none';
            arrowUp.style.display = 'block';
    
            emailUs.style.height = '165px'
            email.style.display = 'block';
        });
    
        arrowUp.addEventListener('click', () => {
            arrowUp.style.display = 'none';
            arrowDown.style.display = 'block';
    
            email.style.display = 'none';
            emailUs.style.height = '129px'
        });
    }

    // cs.addEventListener('click', () => {
    //     event.preventDefault();
    //     // cspopup.style.display = 'flex';
    // })

    //CUSTOMER SUPPORT FORM
    const fn = document.getElementById('first-name-form-field');
    const fnerror = document.getElementById('first-name-form-field-error');
    const ln = document.getElementById('last-name-form-field');
    const lnerror = document.getElementById('last-name-form-field-error');
    const pn = document.getElementById('phone-number-form-field');
    const pnerror = document.getElementById('phone-number-form-field-error');
    const em = document.getElementById('email-address-form-field');
    const emerror = document.getElementById('email-address-form-field-error');
    const ta = document.getElementById('message-form-field');
    const taerror = document.getElementById('message-form-field-error');

    const submitbutton = document.getElementById('submit-button');

    function isValidPhoneNumber(number) {
        const phoneNumberPattern = /^(?:(?:\+|00)([1-9]\d{0,2}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})$/;
        return phoneNumberPattern.test(number);
    }

    function validateFormSubmission() {
        let valid = true;
        fnerror.textContent = '';
        lnerror.textContent = '';
        pnerror.textContent = '';
        emerror.textContent = '';
        taerror.textContent = '';

        noErrorStyling(fn);
        noErrorStyling(ln);
        noErrorStyling(pn);
        noErrorStyling(em);
        noErrorStyling(ta);

        if(fn.value === ""){
            fn.style.borderColor = 'red';
            fn.style.backgroundColor = 'rgb(255, 242, 242)';
            fnerror.textContent = requiredFieldError;
            valid = false;
        }
        if(ln.value === ""){
            ln.style.borderColor = 'red';
            ln.style.backgroundColor = 'rgb(255, 242, 242)';
            lnerror.textContent = requiredFieldError;
            valid = false;
        }

        if(em.value === ""){
            em.style.borderColor = 'red';
            em.style.backgroundColor = 'rgb(255, 242, 242)';
            emerror.textContent = requiredFieldError;
            valid = false;
        } else if (!isValidEmail(em.value.trim())){
            em.style.borderColor = 'red';
            em.style.backgroundColor = 'rgb(255, 242, 242)';
            emerror.textContent = invalidEmailError;
            valid = false;
        }
        if(pn.value === ""){
            noErrorStyling(pn);
            pnerror.textContent = '';
        } else if (!isValidPhoneNumber(pn.value.trim())){
            pn.style.borderColor = 'red';
            pn.style.backgroundColor = 'rgb(255, 242, 242)';
            pnerror.textContent = "Invalid Phone Number";
            valid = false;
        }
        if(ta.value === ""){
            ta.style.borderColor = 'red';
            ta.style.backgroundColor = 'rgb(255, 242, 242)';
            taerror.textContent = requiredFieldError;
            valid = false;
        }

        return valid;
    }


    submitbutton.addEventListener('click', () => {
        if(!validateFormSubmission())
            event.preventDefault();
        //popup message sent

        //clear fields
        fn.textContent = '';
        ln.textContent = '';
        em.textContent = '';
        pn.textContent = '';
        ta.textContent = '';
    })

});