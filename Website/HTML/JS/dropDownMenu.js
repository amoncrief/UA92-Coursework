document.addEventListener("DOMContentLoaded", function () {
    const dropBtn = document.querySelector(".dropbtn");
    const dropContent = document.querySelector(".dropdown-content");

    dropBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        dropContent.classList.toggle("show");
    });

    document.addEventListener("click", function () {
        dropContent.classList.remove("show");
    });
});
