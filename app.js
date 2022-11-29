const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const welcome = document.querySelector('welcome')


window.onbeforeunload = function () {
    window.scrollTo(0,0);
};


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

setTimeout(function() {
    document.body.style.overflowY = "scroll";
}, 5200);

window.onunload = function(){ window.scrollTo(0,0); }
