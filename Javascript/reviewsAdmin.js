//delete review
function deleteReview(button){
    var reviewbox = button.closest('.review-box');
    reviewbox.parentNode.removeChild();
}