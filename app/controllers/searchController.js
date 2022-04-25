// Je réalise un controller qui va me permettre de trier mes personnages selon plusieurs critères spécifiques

// Dans un premier temps je vais avoir besoin de mon datamapper ! je part le chercher

const datamapper = require('./../../models/datamapper');

const searchController = {

    // Je décide de créer une vue qui contiendra tout les formulaire à remplir pour avoir une séléction par tri 

    showSelection: function (request, response) {

        // Je lui rend la vue correspondante, qu'on appellera "searchCharacter"

        response.render('searchCharacter');

    },

    // Je termine la logique qui me servira à trier les personnages selon le critère du type

    // On pioche toujours dans la base de données, donc ASYNC AWAIT !

    showByType: async function (request, response) {

        // Je dis à mon back que ce que j'attend est le type du personnage, rien d'autre

        const type = request.query.type;

        // Je réalise ensuite mon merveilleux try / catch qui va me permettre de réaliser la gestion d'erreur

        try {

            // Je part chercher toutes les données dont j'ai besoin 

            const characters = await datamapper.getByType(type);

            // Je réalise un titre personnalisé pour faire plus joli ! 

            const title = "Voici les personnages triées selon le type " + type + " : ";

            // Je redirige donc vers la vue correspondante en passant en objet tout ce dont j'ai besoin 

            response.render('home', {

                characters,

                title

            });

            // Je vais dans le routeur pour terminer mon développement 

        } catch (error) {

            // Si il y a une erreur, alors je l'indique dans mon terminal 

            console.error(error);

            // Pour l'UX et le référencement, je donne le plus de détails possibles

            response.status(500).render('Il y a eu un problème dans la requete demandée');

        }

    },

    // Je termine la logique pour terminer le code d'aujourdh'ui !

    // On pense toujours à faire une fonction en Async / Await à cause de la manipulation de la base de données

    showByParticipation: async function (request, response) {

        // Je dis à express que le résultat que j'attend est le nombre total de participation, rien de plus ! 

        const apparition = request.query.apparition;

        // Je fais un magnifique try / catch pour la gestion d'erreur

        try {

            // Je part chercher tout ce dont j'ai besoin 

            const characters = await datamapper.getByParticipation(apparition);

            // Je réalise un titre pour faciliter l'UX

            const title = "Voici les personnages qui sont apparus dans la licence " + apparition + " fois :";

            // Je rend la vue d'origine en passant en argument tout ce dont j'ai besoin 

            response.render('home', {

                characters,

                title

            });

        } catch (error) {

            // Si il y a une erreur, je dois l'indiquer dans mon terminal ! 

            console.error(error);

            // Comme toujours, j'indique le plus de reneignement possibles concernant l'erreur en question 

            response.status(500).render('Il y a eu un problème dans la requete demandée');

        }

        // Je part dans le routeur pour écrire la bonne route qui va délivrer une séléction par nombre de participation

    },

    // Je termine le tri par premiere apparition de mes personnages 

    // Comme toujours, on doit faire une fonction en asynchrone à cause de la manipulation de la base de données

    showByFirstParticipation: async function (request, response) {

        // Attention ! Je dois dire à mon express que je n'attend que la premiere apparition, rien d'autre ! 

        const first_apparition = request.query.first_apparition;

        // Je réalise maintenant mon superbe try / catch pour la gestion d'erreur 

        try {

            // Je met en constante tout ce dont j'ai besoin pour terminer mon code

            const characters = await datamapper.getByFirstParticipation(first_apparition);

            // Je réalise un superbe titre pour l'expérience utilisateur ! 

            const title = "Voici les personnages apparus avec " + first_apparition + " :";

            // Je dois rendre ma vue avec toutes les choses dont j'ai besoin 

            response.render('home', {
                characters,
                title
            });

        } catch (error) {

            // Si il y a une erreur, je dois toujours le notifier dans le terminal ! 

            console.error(error);

            // Je donne le maximum de détails pour l'UX, l'UI et le référencement naturel 

            response.status(500).render('Il y a eu un problème dans le traitement de votre requete');

        }

        // Direction le router pour réaliser le tracé de la route ! 

    },

    // Je termine la logique qui me permet de classer les personnage selon la dernière apparition

    // Comme d'habitude, on réalise une fonction asynchrone à cause de la manipulation de la base de données

    getByLastParticipation: async function (request, response) {

        // Attention ! Je dois spécifier à mon express que je ne veux que la derniere apparition des personnages ! 

        const last_apparition = request.query.last_apparition;

        // je réalise mon try / catch pour la gestion d'erreur

        try {

            // Je part chercher tout ce dont j'ai besoin 

            const characters = await datamapper.getByLastParticipation(last_apparition);

            // Je réalise un titre personnalisé pour l'expérience utilisateur

            const title = "Voici les personnages apparus pour la derniere fois dans " + last_apparition + " :";

            // Je réalise le renvoi en or massif de la vue qui va me permettre de distribuer toutes les données nécéssaires

            response.render('home', {
                characters,
                title
            });

        } catch (error) {

            // Si il y a une erreur dans mon code, je l'indique dans mon terminal ! 

            console.error(error);

            // Pour moi même et mon l'utilisateur, j'indique le maximum de renseignements possibles

            response.status(500).render('Il y a eu un problème dans le traitement de votre requete');

        }

        // Direction le router pour réaliser le tracé de la route ! 

    },

    // Je termine toute la partie logique pour aujourdh'ui, on a encore fait du bon boulot Johnny ! 

    // Je réalise ma toute dernière fonction asynchrone à cause de la manipulation de ma BDD

    getByName: async function (request, response) {

        // Attention ! Je dis à mon serveur express que je ne veux que les noms ! rien d'autre ...

        const name = request.query.name;

        // Je réalise une superbe gestion d'erreur en or massif

        try {

            // Je requete tout ce dont j'ai besoin ! 

            const characters = await datamapper.getByName(name);

            // Je réalise un titre en OR MASSIF pour l'expérience utilisateur

            const title = "Voici les personnages triés selon le nom " + name + " :";

            // Je rend la vue correspondante avec tout ce dont j'ai besoin ! 

            response.render('home', {
                characters,
                title
            });

        } catch (error) {

            // Si il y a une erreur, alors je l'indique dans le terminal ! 

            console.error(error);

            // Je donne le plus de détails possibles pour la maintenance mais aussi pour l'expérience utilisateur

            response.status(500).render('Il y a eu un problème dans le traitement de votre requete');
        }

        // Direction le fichier router pour réaliser le dernier tracé ! Encore bravo pour le boulot qu'on a fait Johnny ! 

    }
};

// Comme toujours, je décide d'exporter mon controller et on ira l'importer dans le fichier router.js

module.exports = searchController;