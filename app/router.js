// Je sépare le router du server à cause de la séparation des concepts !

// J'ai toujours besoin de express, je part le chercher 

const express = require('express');

// Je dis que mon routeur doit également tourner sur express

const router = express.Router();

// Je part chercher tout mes controlleurs que j'ai créer auparavant

const homeController = require('./controllers/homeController');

const searchController = require ('./controllers/searchController');

// Je réalise une route test qui va afficher la page d'accueil de mon application en indiquant le tracé de la route et la propriété en question

router.get('/', homeController.showAllCharacters);

// Je réalise une route qui va permettre d'afficher les détails de chacun des personnages de la licence

router.get('/character/:id', homeController.showOneCharacter);

// Je réalise une route qui va générer le formulaire de tri des personnages 

router.get('/search', searchController.showSelection);

// Je réalise une route qui va générer les personnages par type précis. Le chemin en question est déja tracé

router.get('/search/type', searchController.showByType);

// Je réalise une route qui va générer les personnages par leur nombre d'apparition dans la licence. Le chemin en question est déjà tracé

router.get('/search/apparition', searchController.showByParticipation);

// Je réalise une route qui va générer les personnages selon le premier jeu dans lequel il sont apparus. Comme toujours, le chemin est déja tracé

router.get('/search/first_apparition', searchController.showByFirstParticipation);

// Je réalise une route qui va générer les personnage selon le dernier jeu dans lequel il sont apparus. Comme toujours, le chemin est déja tracé

router.get('/search/last_apparition', searchController.getByLastParticipation);

// Je réalise une route qui va générer les personnages selon le nom que l'utilisateur à saisi 

router.get('/search/name', searchController.getByName);

// Je dois exporter le module car il faut l'importer ailleurs, ici, en l'occurence, il partira dans le server !

module.exports = router;