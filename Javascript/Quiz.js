function selectOption(button) {
    // Remove 'active' class from all buttons
    var buttons = document.querySelectorAll('.response');
    buttons.forEach(function(btn) {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });
    // Toggle 'active' class for the clicked button
    button.classList.toggle('active');
}

function showNextQuestion(nextQuestionId) {
    // Check if an option is selected
    var selectedOption = document.querySelector('.response.active');
    if (!selectedOption) {
        alert('Please select an option.');
        return;
    }

    // Hide current question and show next question
    document.getElementById("question1").style.display = "none";
    document.getElementById(nextQuestionId).style.display = "block";
}
function showNextQuestion(nextQuestionId) {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    // Hide previous question
    document.getElementById(nextQuestionId).style.display = "block";
    // Show next question
}