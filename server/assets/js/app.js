window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var title_bar = document.querySelector('.title-bar');
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    if(title_bar)
      title_bar.style.marginTop = "80px";
  } else {
    navbar.classList.remove("sticky");
    if(title_bar)
      title_bar.style.marginTop = "0px";
  }
}

$(document).ready(function(){
    $('.nav-tabs  .nav-item').click(() => {
    	animationHover('.card','shake')
    });
});

function animationHover(element, animation){
	element = $(element);
	element.addClass('animated ' + animation);

    //wait for animation to finish before removing classes
    let timeout = window.setTimeout( function(){
      element.removeClass('animated ' + animation);
      clearTimeout(timeout);
    }, 2000);

}