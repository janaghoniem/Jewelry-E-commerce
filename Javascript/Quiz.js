function selectOption(button) {
    var buttons = document.querySelectorAll('.response.active, .response2.active');
    buttons.forEach(function(btn) {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });
    button.classList.add('active');
}

function showNextQuestion(nextQuestionId) {
    var selectedOption = document.querySelector('.response.active, .response2.active');
    
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById("question3").style.display = "none";
    document.getElementById("question4").style.display = "none";
    document.getElementById("question5").style.display = "none";

    document.getElementById("question6").style.display = "none";



    document.getElementById(nextQuestionId).style.display = "block";
}

// Function to update progress bar
// function updateProgressBar() {
//     var questions = document.querySelectorAll('.question');
//     var progress = Math.round((questions.length - 1) / (questions.length) * 100);
//     document.getElementById('progress').style.width = progress + '%';
// }

// // Call the function to update progress bar initially
// updateProgressBar();
