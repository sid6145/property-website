let popup = document.getElementById("popup");
let closeBtn = document.getElementById("close");

popup.style.display = "none";

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    popup.style.display = "";
  }, 1000);
});

closeBtn.onclick = function () {
  popup.style.display = "none";
};
