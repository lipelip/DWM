#DWM - Tips&Tricks

##Actions CSS

Ajout d'intéraction en CSS 

###target

Utilisation de la pseudo class `:target` pour le déplacement d'un objet.

```
#demo:target {
	-webkit-transform: translateX(100px);
}
```

L'inconvéniant c'est que Le navigateur ne peut cibler qu'un élément à la fois, il n'est donc pas possible de mettre en place plusieurs interactions consécutives.

###Input checked (checkbox / radio)

Pour mettre en place plusieurs interactions consécutives sur une même page on peut utiliser les input (checkbox ou radio).

```
#demo1:checked + 
#demo2:checked + 
#demo3:checked ~ #bloc {
	-webkit-transform: translateX(100px);
}
```

Notez que les checkbox peuvent être cochées et/ou  décochées,
si vous voulez empècher un utilisateur de décocher un input les boutons radio sont la solution.


-------------

_From the [DWM](http://dwm.re) team - [@pixeline](https://twitter.com/pixeline) [@boblemarin](https://twitter.com/boblemarin) [@lelipelip](https://twitter.com/lelipelip) [@aqro](https://twitter.com/aqro) [@remysaintcricq](https://twitter.com/remysaintcricq) [@fbourgaux](https://twitter.com/fbourgaux) [@chdelfosse](https://twitter.com/chdelfosse) [@teddytdk](https://twitter.com/teddytdk)_
