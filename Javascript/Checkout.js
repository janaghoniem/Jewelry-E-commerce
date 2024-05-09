document.querySelector('.card-number-input').oninput = () => {
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

// -------------------------------------------------------------------------------------------------

// Get the elements
// const formContainer = document.querySelector('.form-container');
// const containerDiv = document.querySelector('.container');
// const completePurchaseBtn = document.querySelector('input[value="Complete purchase"]');

// // Function to hide form-container and show container
// function hideFormContainerOnClick() {
//     formContainer.classList.add('hidden');
//     containerDiv.classList.remove('hidden');
// }

// // Event listener for the button click
// completePurchaseBtn.addEventListener('click', hideFormContainerOnClick);

// ------------------- Billing form validation-----------------------------

function validateForm() {
    let isValid = true;

    
    const inputs = document.querySelectorAll('.checkout-form input[type="text"]');
    
    
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.classList.add('invalid');
            const errorMessage = input.parentNode.querySelector('.error-message');
            if (!errorMessage) {
                const errorMessage = document.createElement('span');
                errorMessage.classList.add('error-message');
                errorMessage.textContent = 'This field is required';
                input.parentNode.appendChild(errorMessage);
            }
        } else {
            input.classList.remove('invalid');
            const errorMessage = input.parentNode.querySelector('.error-message');
            if (errorMessage) {
                errorMessage.remove();
            }
           // Additional check for email format validation
            if (input.getAttribute('type') === 'text' && input.getAttribute('id') === 'Email') {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(input.value)) {
                    isValid = false;
                    input.classList.add('invalid');
                    const errorMessage = input.parentNode.querySelector('.error-message');
                    if (!errorMessage) {
                        const errorMessage = document.createElement('span');
                        errorMessage.classList.add('error-message');
                        errorMessage.textContent = 'Please enter a valid email address';
                        input.parentNode.appendChild(errorMessage);
                    }
                }
            }
        }
    });

    return isValid;
}

function handleFormSubmission(event) {

    event.preventDefault();

    const isValid = validateForm();
    if (isValid) {
        console.log('Form is valid. Proceeding to the next step...');
        const formContainer = document.querySelector('.form-container');
        const containerDiv = document.querySelector('.container');
     
        formContainer.classList.add('hidden');
        containerDiv.classList.remove('hidden');
    }
}

const form = document.querySelector('.checkout-form');


form.addEventListener('submit', handleFormSubmission);



// ----------Payment Form Validation-----------------------------