#Utiliser le clavier comme un pro

Avec un tout petit fichier appelé key.js qui est une sorte de micro-librairie qui va te permettre de savoir, à tout moment, si une touche est appuyée ou pas.

Tu verras, c'est super facile.

##Prérequis

D'abord tu inclus le fichier js dans ton code html, comme ceci :

	<script type="text/javascript" src="key.js"></script>


##Utilisation

A partir du point évoqué juste ci-dessus, tout devient facile.

A tout moment, tu peut savoir si un touche est enfoncée (down) à l'aide de la fonction Key.isDown(). La fonction attend le code de la touche concernée, mais tu n'as même pas besoin de connaître tous les codes par coeur, car key.js te fournit une série de constantes représentant les principales touches de modification.

	Key.isDown( Key.SPACE ); // ça te renvoit true ou false, c'est selon.

	