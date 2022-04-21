// Je termine la séparation des concepts en triant la logique et la non-logique de mon application 

// Je vais avoir besoin du datamapper pour verser toutes les données dans les bons controllers

const datamapper = require ('./../../models/datamapper');

// Je réalise un controlleur qui va s'occuper de toute ma logique concernant la page d'accueil de mon application

const homeController = {

    home: function (request, response) {

        // Je rend la vue qui va se charger d'afficher la page d'accueil de mon site

        response.send('Separation des concepts ok');

    }

};

// J'exporte le module car il faut l'importer ailleurs, ici on le met dans le fichier router.js

module.exports = homeController;