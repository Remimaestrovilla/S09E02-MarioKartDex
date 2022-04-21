// Je sépare le router du server à cause de la séparation des concepts !

// J'ai toujours besoin de express, je part le chercher 

const express = require('express');

// Je dis que mon routeur doit également tourner sur express

const router = express.Router();

// Je part chercher tout mes controlleurs que j'ai créer auparavant

const homeController = require('./controllers/homeController');

// Je réalise une route test qui va afficher la page d'accueil de mon application en indiquant le tracé de la route et la propriété en question

router.get('/', homeController.home);

// Je dois exporter le module car il faut l'importer ailleurs, ici, en l'occurence, il partira dans le server !

module.exports = router;