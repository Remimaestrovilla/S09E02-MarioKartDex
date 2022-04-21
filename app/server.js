// Je part chercher mon module express car j'en aurais besoin pour réaliser mon serveur 

const express = require('express');

// Je part également chercher mon module dotenv car il me servira à réaliser mon environnement de travail personnel 

const dotenv = require ('dotenv');

// Je part chercher le routeur que j'ai crée dans un autre dossier à cause de la séparation des concepts 

const router = require('./router');

// Finalement, je part chercher Path qui me servira à réparer les chemins cassées

const path = require ('path');

// Je dis à mon serveur de tourner sous express

const app = express();

// Je configure mon environnement personnel de sorte à ce que le serveur s'ouvre sur le port que je choisi par moi même par exemple 

dotenv.config();

// Je dis à mon application de tourner sur le port que j'ai choisi dans mon .env ou, par défaut, sur le port 3005

const PORT = process.env.PORT || 3005;

// J'indique à mon serveur express que je veux des vues en EJS

app.set ('view engine', 'ejs');

// Je dis à mon serveur express que les vues à rendre se trouvent dans le dossier correspondant

app.set("views", path.join(__dirname, './views'));

// Pour finir la configuration des bases du serveur, je part chercher mes fichiers statiques avec express.static et path pour réparer les chemins cassés

app.use(express.static(path.join(__dirname, '../static')));

// J'ai besoin d'utiliser mon router ! Je l'inidque avec la propriété use

app.use(router);

// Je dis à mon serveur de se lancer sur le port choisi

app.listen(PORT, function (request, response) {

    // Je réalise un petit message pour faciliter la maintenance et pour vérifier que tout fonctionne bien

    console.log(`Serveur démarré sur le port suivant: http://localhost:${PORT}`);

    // Si le message tourne dans le terminal, tout est ok ! Je teste avec la commande node index

});