$(document).ready(function(){
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $(".dropdown-trigger").dropdown();
  });


document.addEventListener('DOMContentLoaded', () => {
    // SIDENAV
   const sideNav = document.querySelector('.sidenav');
   M.Sidenav.init(sideNav);

    // PARALLAX
//    const parallax = document.querySelectorAll('.parallax')
 // M.Parallax.init(parallax)
})