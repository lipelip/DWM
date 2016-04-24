#requestAnimationFrame, c'est ton smooth

Il faut savoir que le navigateur, il essaie d'afficher 60 images par secondes, pour que l'expérience de l'utilisateur soit la plus fluide possible. Si on veut que notre site laisse une bonne impression au niveau de ses performances, il est important de travailler main dans la main avec le moteur d'affichage pour lui permettre de remplir au mieux sa tâche.

Par exemple, ça ne sert à rien de changer deux fois la position d'un élément dans la page entre deux cycles d'affichages. Ce serait aussi assez bête de vouloir absolument que notre javascript s'exécute à un certain rythme si le nombre d'images par seconde chute à cause d'un problème d'optimisation.

C'est là qu'intervient la fonction requestAnimationFrame

##Uuuh ?

Dans la langue des browsers, requestAnimationFrame veut dire *dis, tu me fais signe quand tu te prépares à afficher quelque chose, et là je te dis ce qui change, comme ça on gagne du temps et ça ira d'autant mieux*.

C'est donc un moyen de d'indiquer au système qu'on désire gérer une animation de la façon la plus fluide possible, et qu'on a un bout de script à placer quelque part. Au meilleur endroit, si possible.

##Aaaaah. OK.

Avant, on utilisait simplement un setInterval pour exécuter une fonction toutes les 16 ou 17 millisecondes. Mais cette approche a vécu, et la plupart des navigateurs implémentent la fonction requestAnimationFrame. 

Afin de rester compatible avec tout le monde, il existe un polyfill qui permet aux vieux navigateurs de faire semblant d'être jeunes. C'est le fichier requestAnimationFrame.js présent dans ce dossier, il vient de chez Paul Irish qui dit plein de choses intéressantes sur les trucs de l'informatique.

http://paulirish.com/2011/requestanimationframe-for-smart-animating/

##Merci.

De rien.


-------------

_From the [DWM](http://dwm.re) team - [@pixeline](https://twitter.com/pixeline) [@boblemarin](https://twitter.com/boblemarin) [@lelipelip](https://twitter.com/lelipelip) [@aqro](https://twitter.com/aqro) [@remysaintcricq](https://twitter.com/remysaintcricq) [@fbourgaux](https://twitter.com/fbourgaux) [@chdelfosse](https://twitter.com/chdelfosse) [@teddytdk](https://twitter.com/teddytdk)_
