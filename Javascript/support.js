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
$(document).ready(function () {
    $('#action_menu_btn').click(function () {
        $('.action_menu').toggle();
    });
});