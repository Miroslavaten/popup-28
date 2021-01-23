const modal = document.getElementById('modal');
const openBtn = document.getElementById("open");
const closeBtn = document.getElementsByClassName("modal__close")[0];

openBtn.onclick = function () {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
}

closeBtn.onclick = function () {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
}

window.onclick = function (e) {
    if(e.target == modal) {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
    }
}

