$(document).ready(function(){
    // Team Slider
    $(".menu-bar").click(function () {
        $(".cus-navigation").slideToggle();
    });
});
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}