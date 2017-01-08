**Bus factor**
===================

Par équipe de 4.

Choisissez la personne la plus avancée techniquement sur les technos utilisées dans le cadre du projet et donnez lui le poste de dev lead.

Cette personne va fork le repo.
Les autres personnes de l'équipe vont forker le dossier que le lead a fork (#fractal).

![Team Work](https://www.claromentis.com/blog/wp-content/uploads/2016/05/How-You-Can-Handle-the-Bus-Factor-Using-Your-Intranet.jpg)

### **Pour intialiser le projet :**

Ouvrez deux onglets. Dans le premier vous allez run le script npm build :

```
$ npm run build
```

Dans le deuxième :

```
$ npm run cdn
```

Une fois que le projet a été intialisé, si j'ai besoin de relancer le watch. Je le relance avec :

```
$ npm run watch
```

### **But du projet :**

+ Réduire le **bus factor** en respectant les méthodes agiles de **cross-training** et **pair-programming**.
+ Apprendre à travailler avec des **pull requests** et **code reviews**.
+ Savoir naviguer dans une **app react**.
+ Ajouter un **loader** dans **webpack**.

### **Consignes :**

Le développeur lead n'a pas le droit d'utiliser son ordi pour faire autre chose que des recherches google. Il ne peut pas intéragir directement avec le code source sauf dans le cadre des **code reviews** pour les **pulls requests**. Ou pour faire des tests de son côté. Il est constamment en pair-programming avec une personne de son équipe.

Les autres développeurs se répartissent les exos suivants de façon **équitable** en essayant autant que possible de prioriser le pair-programming aussi :

1. Le bouton en haut à gauche qui contrôle la side-nav doit être dans un bouton en floating à droite et par dessus l'image. L'icône doit être encerclée.
2. Mettre un padding à gauche et à droite de la nav.
3. Il faut supprimer le trait gris sous le titre _This section holds a grid_.
4. Les sports ne sont pas dans l'ordre alphabétique.
5. Il faut une grid de 4 articles par row.
6. Il faut une grid responsive avec seulement 1 article par row quand je suis sur mobile.
7. Je veux coller mon footer à ma dernière image de parallax.
8. Il faut rajouter un component caroussel ou slider au dessus de ma grid.
9. Je veux me débarrasser du warning dans ma console _"It looks like you're using a minified copy of the development build of React"_.
10. BONUS : Mon tableau de nom de sport n'est pas assez défini. Je veux en faire un objet avec une image, un nom, et un contenu par sport. Chaque objet correspond à un component Card.
11. BONUS : Je souhaite changer le thème couleur de materialize. En suivant les consignes indiquée sur la page npm de [materialize-loader](https://www.npmjs.com/package/materialize-loader) je crée mon fichier de config css pour re-définir les variables de $primary-colors.

**Chaque exo représente au minimum un commit :**

+ Si l'exo consiste à supprimer un élément le message de commit sera "Delete: _reste du message_"
+ Pour un bug fix : "Fix : _reste du message_"
+ Pour un nouvel élement : "Add : _reste du message_"

Le lead est responsable du respect des consignes sur git.
Il ne merge pas les pull requests qui n'y répondent pas.

**Ressources :**

+ [Webpack](https://www.grafikart.fr/tutoriels/javascript/webpack-module-bundler-758)
+ [Pull requests](https://www.grafikart.fr/formations/git/fork-pull-request)
+ [React](https://facebook.github.io/react/docs/hello-world.html)
+ [Materialize](http://materializecss.com/carousel.html)  