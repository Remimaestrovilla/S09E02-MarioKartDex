// Je part chercher mon module express car j'en aurais besoin pour réaliser mon serveur 

const express = require('express');

// Je part également chercher mon module dotenv car il me servira à réaliser mon environnement de travail personnel 

const dotenv = require ('dotenv');

// Je part chercher le routeur que j'ai crée dans un autre dossier à cause de la séparation des concepts 

const router = require('./router');

// Je configure mon environnement personnel de sorte à ce que le serveur s'ouvre sur le port que je choisi par moi même par exemple 

dotenv.config();

// Je dis à mon serveur de tourner sous express

const app = express();

// Je dis à mon application de tourner sur le port que j'ai choisi dans mon .env ou, par défaut, sur le port 3005

const PORT = process.env.PORT || 3005;

// J'ai besoin d'utiliser mon router ! Je l'inidque avec la propriété use

app.use(router);

// Je dis à mon serveur de se lancer sur le port choisi

app.listen(PORT, function (request, response) {

    // Je réalise un petit message pour faciliter la maintenance et pour vérifier que tout fonctionne bien

    console.log(`Serveur démarré sur le port suivant: http://localhost:${PORT}`);

    // Si le message tourne dans le terminal, tout est ok ! Je teste avec la commande node index

});