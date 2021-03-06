window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

var openMenu = document.getElementsByClassName("btn--openmenu")[0],
	nav = document.getElementsByClassName("nav__push")[0],
	menuEl = document.getElementsByClassName("nav__el"),
	pageActive = document.getElementsByClassName("page--active")[0];

openMenu.addEventListener("click", function(){
	nav.classList.toggle("nav--open");
});


for(var i=0; i<menuEl.length; i++) {
	menuEl[i].addEventListener("click", function(){
		pageActive.classList.remove("page--active");
		nav.classList.remove("nav--open");	
	});
}