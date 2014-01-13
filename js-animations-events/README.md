#Les événements de l'animation du Web des styles

Dans la réalité de la vie, il n'y a pas de fumée sans feu. 
Dans la réalité du Web, il ne se passe rien sans qu'un événement ne soit généré.
Un événement, c'est un truc que tu peux surveiller pour réagir là où c'est nécessaire.

##Animation End

En javascript il est possible de capter le moment ou une animation css à terminé de ce jouer avec `animationend`.
Le problème, comme souvent, se trouve au niveau des préfix. Il faudra donc travailler avec les `webkitAnimationEnd`.

Pour supporter tous les navigateurs vous trouverez dans `lib/AnimationEvents.js` une petite librairie mise en place par @boblemarin.

On remplacera donc les `animationend`, `webkitAnimationEnd`, ou autres par:
```
ANIMATION_START
ANIMATION_ITERATION
ANIMATION_END
TRANSITION_END
```

-------------

_From the [DWM](http://dwm.re) team - [@pixeline](https://twitter.com/pixeline) [@boblemarin](https://twitter.com/boblemarin) [@lelipelip](https://twitter.com/lelipelip) [@aqro](https://twitter.com/aqro) [@remysaintcricq](https://twitter.com/remysaintcricq) [@fbourgaux](https://twitter.com/fbourgaux) [@chdelfosse](https://twitter.com/chdelfosse) [@teddytdk](https://twitter.com/teddytdk)_
