
var width = "800"; //size width
var height = "600"; //size height
var coordinates = "50.464900, 4.876626"; //location
var zoom = "40"; //fov zoom
/*
	la rotation Y c'est tourner autour de l'axe Y
	la rotation X c'est tourner autour de l'axe X
      |
	   \_/  Y
		|      /
	    /-----|--- X
     /	   \	
    /
*/

var rotationY = "8"; //heading rotation Y
var rotationX = "-4"; //pitch rotation X

/* 
	si ça ne marche plus aller ici : https://developers.google.com/maps/documentation/streetview/#api_key
	et concaténer l'apikey a la fin du gUrl 
	var apiKey = ""; //&key=API_KEY
*/

//création de l'url selon les variables
var gUrl = "https://maps.googleapis.com/maps/api/streetview?size="+width+"x"+height+"&location="+coordinates+"&fov="+zoom+"&heading="+rotationY+"&pitch="+rotationX;

var link = document.getElementById("link"); //sélectionne le lien dans mon html
var image = document.getElementById("image"); // sélection l'image dans mon html
	
	//que faire quand l'image est chargée ?
	image.onload = function(){
		//je peux mettre à jour mon html
		link.link = gUrl;
		link.innerHTML = gUrl;
	}
	//change la source de l'image
	image.src = gUrl;

	//valeurs par défaut en attendant que mon image sois chargée
	link.link = "#";
	link.innerHTML = "image is loading";