// Je vais avoir besoin de ma base de données pour la manipuler, on part évidemment la chercher !

const database = require ('./database');

// Je réalise une constante datamapper qui va réaliser l'ensemble des requetes SQL dont j'ai besoin ! 

const datamapper = {

};

// Comme toujours, on va exporter le module pour l'importer ailleurs, ici on le met dans tout nos controlleurs pour respecter le modele MVC

module.exports = datamapper;