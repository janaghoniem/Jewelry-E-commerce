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
    var selectedOption = document.querySelector('.response.active');
    if (!selectedOption) {
        alert('Please select an option.');
        return;
    }

    document.getElementById("question1").style.display = "none";
    document.getElementById(nextQuestionId).style.display = "block";
}
