$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    $("#content").toggleClass("active");
    $("#admin").toggleClass("hidden_admin");
  });

  $(".more-button, .body-overlay").on("click", function () {
    $("#sidebar, .body-overlay").toggleClass("show-nav");
  });
});

var dropdownImage = document.getElementById("dropdownImage");
dropdownImage.addEventListener("click", function () {
  var dropdownMenu = this.nextElementSibling;
  dropdownMenu.classList.toggle("show");
});
