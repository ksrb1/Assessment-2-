// JavaScript source code


window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {

        document.querySelector("nav").style.background = "#191b1d";
        //document.querySelectorAll(".animated")[1].classList.add("fade-in-top");
    } else {
        
        document.querySelector("nav").style.background = "none";
    }
}

//found this code to make it so when you refresh youll go back to the same spot in the page then with the use of the smooth scroll animation its going to scroll smoothly
document.addEventListener("DOMContentLoaded", function (event) {
    var scrollpos = localStorage.getItem('scrollpos');
    if (scrollpos) window.scrollTo(0, scrollpos);
});
window.onbeforeunload = function (e) {
    localStorage.setItem('scrollpos', window.scrollY);
};


//this is the method i used to add the fade in animation when it scrolls, i got it from youtube :)
// but basically it check if an element has the class of animated and if it does have the class of animated and it scrolls over it its going add another class of fade-in-top which is the animation of the fade in.
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.animated');
    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 10;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('fade-in-top');
        }
    else {
            reveals[i].classList.remove('fade-in-top');
        }
    }
}