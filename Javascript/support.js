// document.addEventListener("DOMContentLoaded", function () {
//     var actionMenuBtn = document.getElementById("action_menu_btn");
//     actionMenuBtn.addEventListener("click", function () {
//         var actionMenu = document.querySelector(".action_menu");
//         if (actionMenu.computedStyleMap.display === "none") {
//             actionMenu.computedStyleMap.display = "block";
//         } else {
//             actionMenu.style.display = "none";
//         }
//     });
// });

// $(document).ready(function () {
//     $('#action_menu_btn').click(function () {
//         $('.action_menu').toggle();
//     });
// });


 // Function to create a new message container with the same format and CSS
 function createMessageContainer(message) {
    // Create the message container div
    var msgContainer = document.createElement('div');
    msgContainer.className = 'd-flex justify-content-end mb-4';

    // Create the image container div
    var imgContMsg = document.createElement('div');
    imgContMsg.className = 'img_cont_msg';

    // Create the image element
    var imgMsg = document.createElement('img');
    imgMsg.src = '../images/Admin/Admin-icon.png';
    imgMsg.className = 'rounded-circle user_img_msg';

    // Append the image element to the image container div
    imgContMsg.appendChild(imgMsg);

    // Create the message container div
    var msgCotainer = document.createElement('div');
    msgCotainer.className = 'msg_cotainer_send';
    msgCotainer.textContent = message;

    // Create the timestamp span
    var msgTime = document.createElement('span');
    msgTime.className = 'msg_time_send';
    msgTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Append the timestamp to the message container div
    msgCotainer.appendChild(msgTime);

    // Append the image container and message container to the message container div
    msgContainer.appendChild(imgContMsg);
    msgContainer.appendChild(msgCotainer);

    // Return the new message container
    return msgContainer;
}

// Function to handle sending messages
function sendMessage() {
    // Get the textarea element
    var textarea = document.querySelector('.type_msg');

    // Get the message value from the textarea
    var message = textarea.value;

    // Create a new message container
    var newMsgContainer = createMessageContainer(message);

    // Get the message body element
    var msgBody = document.querySelector('.msg_card_body');

    // Append the new message container to the message body
    msgBody.appendChild(newMsgContainer);

    // Clear the textarea
    textarea.value = '';
}

// Event listener for the send button
document.querySelector('.send_btn').addEventListener('click', sendMessage);

// Event listener for the textarea enter key press
document.querySelector('.type_msg').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent default form submission
        sendMessage();
    }
});