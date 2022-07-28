var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container1 = document.querySelector(".container-1");

menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container1.classList.toggle("large-container");

}