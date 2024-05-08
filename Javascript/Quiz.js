function selectOption(button) {
    var buttons = document.querySelectorAll('.response.active, .response2.active, .response7.active');
    buttons.forEach(function(btn) {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });
    button.classList.add('active');
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
// Function to update progress bar
// function updateProgressBar() {
//     var questions = document.querySelectorAll('.question');
//     var progress = Math.round((questions.length - 1) / (questions.length) * 100);
//     document.getElementById('progress').style.width = progress + '%';
// }

// // Call the function to update progress bar initially
// updateProgressBar();
