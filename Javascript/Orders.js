function toggleExpand() {
    var expandingDiv = document.getElementById('expanding-orders');
    if (expandingDiv.style.display === 'none' || expandingDiv.style.display === '') {
        expandingDiv.style.display = 'block';
    } else {
        expandingDiv.style.display = 'none';
    }
}
