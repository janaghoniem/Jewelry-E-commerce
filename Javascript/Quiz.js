let totalScore = 0;

function selectOption(button) {
    var buttons = document.querySelectorAll('.response.active, .response2.active, .response7.active');
    buttons.forEach(function(btn) {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });
    button.classList.add('active');
    
    let score = parseInt(button.value); // Retrieve the score from the button's value attribute
    totalScore += score;
}

function showNextQuestion(nextQuestionId) {
    var selectedOption = document.querySelector('.response.active, .response2.active');
    
    // Hide all questions
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "none";

    document.getElementById("question6").style.display = "none";
    document.getElementById("question7").style.display = "none";
    // Display the next question
    document.getElementById(nextQuestionId).style.display = "block";
    if (nextQuestionId === 'results') {
        calculateResult(); // Call calculateResult function to display result
    }
    // Update current question ID
    currentQuestionId = nextQuestionId;
}

var currentQuestionId = ""; // Variable to store the ID of the current question

function showPreviousQuestion() {
    var prevQuestionId = ""; // Variable to store the ID of the previous question
    
    switch (currentQuestionId) {
        case "question2":
            prevQuestionId = "question1";
            break;
        case "question3":
            prevQuestionId = "question2";
            break;
        case "question4":
            prevQuestionId = "question3";
            break;
        case "question5":
            prevQuestionId = "question4";
            break;
        case "question6":
            prevQuestionId = "question5";
            break;
        case "question7":
            prevQuestionId = "question6";
            break;
        case "results":
            prevQuestionId = "question7";
            break;
        default:
            prevQuestionId = ""; // If current question is the first question, do nothing
            break;
    }
    
    if (prevQuestionId !== "") {
        document.getElementById(currentQuestionId).style.display = "none"; // Hide current question
        document.getElementById(prevQuestionId).style.display = "block"; // Show previous question
        currentQuestionId = prevQuestionId; // Update current question ID
    }
}
function calculateResult() {
    let result = '';
    let imageSrc = '';
    let description = '';

    // Define score ranges and corresponding results
    if (totalScore >= 40 && totalScore <= 60) {
        result = 'Indian';
        imageSrc = '../images/Quiz/New folder/download (10).jpeg'; // Set the image source for Indian result
        description = 'Indian description goes here...';

    } else if (totalScore >= 61 && totalScore <= 80) {
        result = 'Egyptian';
        imageSrc = '../images/Quiz/New folder/download (12).jpeg'; // Set the image source for Egyptian result
        description = 'Egyptian description goes here...';

    } else if (totalScore >= 81 && totalScore <= 100) {
        result = 'Middle Eastern';
        imageSrc = '../images/Quiz/New folder/download (11).jpeg'; // Set the image source for Middle Eastern result
        description = 'Middle Eastern description goes here...';

    } else if (totalScore >= 101 && totalScore <= 120) {
        result = 'Vintage';
        imageSrc = '../images/Quiz/New folder/download (9).jpeg'; // Set the image source for Vintage result
        description = 'Vintage description goes here...';

    } else if (totalScore >= 121 && totalScore <= 140) {
        result = 'Minimalist';
        imageSrc = '../images/minimalist_result_image.jpg'; // Set the image source for Minimalist result
        description = 'Minimalist description goes here...';

    }
    // Display the result and image
    document.getElementById('result').innerText = result;
    document.getElementById('resultImage').src = imageSrc;
    document.querySelector('.data').innerText = description;

    console.log("Total Score:", totalScore);
}

// Function to update progress bar
// function updateProgressBar() {
//     var questions = document.querySelectorAll('.question');
//     var progress = Math.round((questions.length - 1) / (questions.length) * 100);
//     document.getElementById('progress').style.width = progress + '%';
// }

// // Call the function to update progress bar initially
// updateProgressBar();
document.addEventListener('DOMContentLoaded', function() {
    // 7agat el carousel
    const track = document.getElementById("carousel__track");
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('carousel__button--right');
    const prevButton = document.getElementById('carousel__button--left');
    
    //da in case el user 8ayar el size of the window
    const slideSize = slides[0].getBoundingClientRect();
    const slideWidth = 275;


    // arrange the slides next to each other
    // set el slide position for each slide in my carousel
    slides.forEach((slide, index) =>
    {
        slide.style.left = slideWidth * index + 'px';
        // if(index)
        // console.log("slide" + index + " width: " + slide.style.left)
    });

    //functions

    function moveToSlide(track, currentSlide, targetSlide) {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }

    function hideShowArrows (slides, prevButton, nextButton, targetIndex) {
        if(targetIndex === 0)
        {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (targetIndex === slides.length - 5) {
            nextButton.classList.add('is-hidden');
            prevButton.classList.remove('is-hidden');
        } else {
            nextButton.classList.remove('is-hidden');
            prevButton.classList.remove('is-hidden');
        }
    }

    //move left, slide to the left
    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);

        moveToSlide(track, currentSlide, prevSlide);
        hideShowArrows(slides, prevButton, nextButton, prevIndex);
    });

    //move right, slide to the right
    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);

        moveToSlide(track, currentSlide, nextSlide);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
    });

    
    //categories hovering
    document.querySelectorAll('.item').forEach(item => {
        const primaryimg = item.querySelector('.primary-img');
        const secondaryimg = item.querySelector('.secondary-img');
        const anchor = item.querySelector('a');
    
        //hover lel entire div
        if(primaryimg && secondaryimg)
        {
            anchor.addEventListener('mouseenter', function() {
                // img.src = `../images/Landing/exp/${category}2.jpg`;
                primaryimg.style.opacity = '0';
                secondaryimg.style.opacity = '1';
            });
    
            anchor.addEventListener('mouseout', function() {
                primaryimg.style.opacity = '1';
                secondaryimg.style.opacity = '0';
            });
        }
    });

});
