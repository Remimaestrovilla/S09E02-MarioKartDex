// Je vais avoir besoin de ma base de données pour la manipuler, on part évidemment la chercher !

const database = require('./database');

// Je réalise une constante datamapper qui va réaliser l'ensemble des requetes SQL dont j'ai besoin ! 

const datamapper = {

    // Dans un premier temps, je vais faire en sorte d'afficher l'intégralité des personnages de la licence sans véritable tri

    // Je vais piocher dans une base de données, du coup je passe la fonction en asynchrone 

    getAllCharacters: async function (callback) {

        // Je fais ma reqête SQL

        const query = {

            text: `SELECT * FROM "character"`

        };

        // J'assigne ma requete à une constante, puisque on pioche dans une base de données, la fonction est asychrone et la constante en await

        const result = await database.query(query);

        // Je retourne l'intégralité des résultats que j'ai trouvé

        return result.rows;

        // Je part dans le bon controleur pour continuer ma requete SQL, en l'occurence le homeController (la page d'accueil)

    }

};

// Comme toujours, on va exporter le module pour l'importer ailleurs, ici on le met dans tout nos controlleurs pour respecter le modele MVC

module.exports = datamapper;