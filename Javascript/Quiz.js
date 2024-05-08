function toggleActive(button) {
    button.classList.toggle('active');
}
function showNextQuestion(nextQuestionId) {
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "none";
    // Hide previous question
    document.getElementById(nextQuestionId).style.display = "block";
    // Show next question
}