###### [English README](./README.md)

# Comfy pour Tidal

> "Comfy pour Tidal" est une extension Chrome pour modifier l'interface de [Tidal](https://tidal.com).

> ⚠️ Ce thème n'est pas compatible avec l'application native Tidal.


## Captures d'écrans

![Page d'accueil](https://us-east-1.tixte.net/uploads/images.johanstickman.com/comfy_for_tidal-homepage.jpg)
![Lecteur de musique](https://us-east-1.tixte.net/uploads/images.johanstickman.com/comfy_for_tidal-song_lyrics.jpg)


## Comment ça marche

* L'extension comporte deux fichiers très importants : `inject.js` et `theme.css`.
* `inject.js` est un script qui s'injecte dans Tidal pour charger le fichier `theme.css` et faire quelques autres modifications non possible par du CSS (ou juste que j'ai pas réussi ptdr).
* `theme.css` est le fichier gérant l'interface : celui-ci sert principalement à modifier les couleurs du site.


## Installation

Cette extension ne fait pas partie du Chrome Web Store (bof envie de payer) donc...
* Aller sur chrome://extensions et activer le mode développeur
* Télécharger l'archive .zip de la dernière version de l'[extension](https://github.com/johan-perso/comfy-for-tidal/releases) sur votre ordinateur et décompressez-la.
* Appuyer sur le bouton "Charger l'extension non empaquetée" via la page d'extensions et sélectionner le dossier précédemment créé.

L'extension devrait être installée et opérationnelle !

*Notez tout de même que si un des fichiers est supprimé, l'extension ne fonctionnera plus.*


## Licence

MIT © [Johan](https://johanstickman.com).

Basé sur le thème Comfy pour [Discord](https://github.com/NYRI4/Comfy) et [Spotify](https://github.com/NYRI4/Comfy-spicetify).