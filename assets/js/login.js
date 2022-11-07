const unhide = document.querySelector(".icone-unhide");
const hide = document.querySelector(".icone-hide");
const password = document.getElementById('input-senha');

function unhideIcon() {
    unhide.style.visibility = 'hidden';
    hide.style.visibility = 'visible';
    password.type = 'text';

}
function hideIcon() {
    unhide.style.visibility = 'visible';
    hide.style.visibility = 'hidden';
    password.type = 'password';
}

unhide.addEventListener("click", unhideIcon);
hide.addEventListener("click", hideIcon);
