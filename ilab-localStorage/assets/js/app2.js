window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

var accueil = document.getElementById("accueil"),
		form = document.getElementById("form"),
		button = document.getElementById("button"),
		userName = document.getElementById("username"),
		createProfil = document.getElementsByTagName("button")[0];

//si il y a quelque chose dans le local storage on l'affiche
if ( localStorage['user'] ) {
	accueil.classList.remove("new-user");
	accueil.classList.add("returning-user");
	accueil.innerHTML = "Welcome " +localStorage['user']+ "!";
}

createProfil.addEventListener("click", function(){
	button.classList.add("hide");
	form.classList.remove("hide");
});

function storeUser() {
	localStorage['user'] = userName.value;
	return false;
	form.classList.add("hide");
}
	
	
	
