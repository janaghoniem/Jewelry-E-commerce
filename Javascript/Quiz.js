function selectOption(button) {
    var buttons = document.querySelectorAll('.response');
    buttons.forEach(function(btn) {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });
    button.classList.toggle('active');
}
function selectOption(button) {
    var buttons = document.querySelectorAll('.response2');
    buttons.forEach(function(btn) {
        if (btn !== button) {
            btn.classList.remove('active');
        }
    });
    button.classList.toggle('active');
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
function showNextQuestion(nextQuestionId) {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    document.getElementById(nextQuestionId).style.display = "block";
}
