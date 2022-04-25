// Je termine la séparation des concepts en triant la logique et la non-logique de mon application 

// Je vais avoir besoin du datamapper pour verser toutes les données dans les bons controllers

const datamapper = require('./../../models/datamapper');

// Je réalise un controlleur qui va s'occuper de toute ma logique concernant la page d'accueil de mon application

const homeController = {

    home: function (request, response) {

        // Je rend la vue qui va se charger d'afficher la page d'accueil de mon site

        response.render('home');

    },

    // Ici, je vais faire en sorte d'afficher toutes mes requetes SQL, on passe la fonction en asynchrone à cause de la BDD

    showAllCharacters: async function (request, response) {

        // Je réalise ma splendide gestion d'erreur avec un try / catch 

        // J'ai besoin de tout les ID de mes personnages ! Je part les récuperer et les converti en nombre avec la propriété Number

        const characterID = Number(request.params.id);

        try {

            // Je dis à ma BDD que j'ai besoin de toutes les données pour afficher les personnages

            const characters = await datamapper.getAllCharacters(characterID);

            // Je fais un titre personnalisé

            const title = "Voici l'intégralité des personnages de la licence Mario Kart";

            // Je rend la vue qui aura toutes les données crées précédemment

            response.render('home', {

                characters,

                title

            })

        } catch (error) {

            // Si cela ne marche pas, alors j'indique dans mon terminal qu'il y a une petite erreur

            console.error(error);

            // Pour le référencement naturel et pour l'UX, j'indique le plus de détails possibles : ici le type d'erreur et un petit message

            response.status(500).render('Le personnage en question est introuvable')

        }

    },

    // Je termine la logique qui me servira à afficher les détails de chacune des cartes

    showOneCharacter: async function (request, response) {

        // J'indique à mon controller que je veux que mon ID soit sous la forme d'un nombre, j'utilise donc la propriété Number

        const characterID = Number(request.params.id);

        // Je réalise un try / catch qui me servira pour la gestion d'erreur

        try {

            // Je part chercher toute la logique dont j'ai besoin 

            const characters = await datamapper.getOneCharacter(characterID);

            // Je réalise une belle vue en lui rendant toutes les données dont j'ai besoin 

            response.render('characterDetail', {

                characters,

            });

            // Direction les routes pour tracé la route correspondante

        } catch (error) {

            // Je préviens mon terminal qu'il y a une érreur le cas échéant

            console.error(error);

            // J'indique à mon utilisateur l'erreur en question et j'indique le type d'erreur pour le référencement naturel 

            response.status(500).render('La carte que vous cherchez est indisponible');

        }
        
    }

};

// J'exporte le module car il faut l'importer ailleurs, ici on le met dans le fichier router.js

module.exports = homeController;