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

    },

    // Maintenant je vais faire en sorte d'afficher le détail de chacun des personnages de la licence

    // Je part piocher dans ma BDD, j'ai donc besoin d'une fonction asynchrone

    getOneCharacter: async function (characterID, callback) {

        // Je fais ma reqûete SQL en séparant la valeur du texte pour éviter les injonctions en SQL

        const query = {

            text: `SELECT * FROM character WHERE id=$1`,

            values: [characterID]

        };

        // J'assigne ma requete SQL à une constante qui sera en await à cause de la manipulation de la BDD

        const result = await database.query(query);

        // Je n'ai besoin que d'un seul résultat puisque je veux un ID, je ne prend donc que le premier index de mon tableau 

        return result.rows[0];

        // Je part dans le controller en question pour terminer la logique

    },

    // Je veux maintenant faire en sorte que mes utilisateurs trient leurs personnages selon un type précis

    // On va repiocher dans la BDD, je dois donc réaliser une fonction asynchrone qui attendra une constante en await

    getByType: async function (type, callback) {

        // On va avoir une réponse pour laquelle il pourra avoir plusieurs réponses, donc je doit remplacer const par let

        let query;

        // J'écrit ma reqûete SQL en veillant à séparer le texte de la valeur, toujours pour éviter ce qu'on appelle les injonctions SQL

        query = {

            text: `SELECT * FROM character WHERE type=$1`,

            values: [type],

        };

        // Je dois maintenant stocker mes résultat dans une constante en await

        const result = await database.query(query);

        // Je dois retourner tout les résultats du tableau

        return result.rows;

        // Je part dans le bon controller pour terminer la logique qui se cache dans le back 

    },

    // Désormais, je dois trier mes personnages selon le nombre total de leurs apparition dans la licence

    // Comme toujours, on va piocher dans la BDD, attention de bien écrire le Async / await ! 

    getByParticipation: async function (apparition, callback) {

        // J'écris ma requête SQL en faisant bien attention de séparer le text de la valeur pour éviter les injonctions SQL

        const query = {

            text: `SELECT * FROM character WHERE total_of_apparition=$1`,

            values: [apparition],

        };

        // Je dois assigner ma requete SQL à une constante en await à cause de la manipulation dans une BDD

        const result = await database.query(query);

        // Je retourne l'ensemble de mon tableau, je n'ai donc pas besoin de spécifier un index

        return result.rows;

        // Je termine ma logique dans le controlleur en question ! 

    },

    // Maintenant, je vais faire en sorte de trier les personnages selon leurs premiere apparition dans les jeux de la licence

    // Comme toujours, on passe la fonction en asynchrone à cause de la manipulation de la base de données

    getByFirstParticipation: async function (first_apparition, callback) {

        // Attention ! Il y aura plusieurs résultats possibles, la query doit donc être en let et non en const ! 

        let query;

        // J'écris tranquillement ma requete SQL en séparant le texte et la valeur pour éviter les injonctions en SQL

        query = {

            text: `SELECT * FROM character WHERE first_apparition=$1`,

            values: [first_apparition],

        };

        // Je dois assigner le résultat de ma requete à une constante en await à cause de la manipulation de la base de données

        const result = await database.query(query);

        // Je récupere l'intégralité du tableau, pas besoin de spécifier un index particulier ! 

        return result.rows;

    },

    // Je trie maintenant les personnages selon leurs toutes dernière apparitions ! 

    // Comme toujours, on spécifie l'asynchronicité de la fonction à cause de la manipulation de la base de données

    getByLastParticipation: async function (last_apparition, callback) {

        // La constante query passe en let car plusieurs réponses seront possibles

        let query;

        // J'écrit ma rêquete SQL toujours en veillant à séparer le texte de la valeur, on évitera alors les injonctions SQL 

        query = {

            text: `SELECT * FROM character WHERE last_apparition=$1`,

            values: [last_apparition],

        };

        // J'assigne les résultats de ma requete dans une constante en await à cause de la manipulation de la base de données

        const result = await database.query(query);

        // Je retourne tout mon tableau, on ne spécifie aucun index

        return result.rows;

    },

    // Dernière requete SQL ! Elle servira pour les utilisateurs de choisir selon le nom, c'est la requete la plus importante

    // Comme toujours, on réalise une fonction asynchrone dans la mesure ou on va piocher dans notre BDD

    getByName: async function (name, callback) {

        // J'écris ici ma requete SQL en faisant bien attention de distinguer le texte de la valeur pour éviter les injonctions SQL

        const query = {

            text: `SELECT * FROM character WHERE name ILIKE $1`, // J'utilise le mot ILIKE pour faire une recherche permissive

            values: [`%${name}%`], // Pour réaliser la permissivité

        };

        // je part stocker les résultats de la requete SQL dans une constante en await à cause de la manipulation de la BDD

        const result = await database.query(query);

        // Je part chercher l'intégralité des résultats possibles

        return result.rows;

        // Je part terminer ma logique dans le controller correspondant, ici il s'agit du search Controller

    }

};

// Comme toujours, on va exporter le module pour l'importer ailleurs, ici on le met dans tout nos controlleurs pour respecter le modele MVC

module.exports = datamapper;