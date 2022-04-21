## Pour créer ma base de données et y importer les données nécéssaires pour réaliser le projet en question, je procède en 6 temps précis :

1. Je me connecte au serveur en tant que super utilisateur Postgre :

``` sudo -i -u postgres ```

2. J'explique à mon terminal que je veux me connecter au serveur Postgre : 
   
``` psql ```

3. Je me crée un compte utilisateur avec un mot de passe pour plus de sécurité, pour le projet, l'utilisateur et le mot de passe sera le même :

``` CREATE ROLE mariokart WITH LOGIN PASSWORD 'mariokart'; ```

1. Je crée une base de donnée qui me servira de base de travail pour le projet à réaliser, encore une fois, la base de donnée aura le même nom que mon utilisateur 

et mon mot de passe. Je suis en local, ce n'est donc pas bien grave.

``` CREATE DATABASE mariokart OWNER mariokart; ```

5. Je me deconnecte de postgre et puis, par la suite, je me connecte avec les données renseignées en étapes 3 et 4 et je dois importer toutes les données 
   
du dossier data dans ma base de données, sinon celle-ci est inutilisable.

``` psql -U mariokart -d mariokart -f 'chemin_du_fichier_create_tables / chemin_du_fichier_create_data' ```

1. Pour vérifier que mes données ont bien été exportées, je peux m'amuser à faire une petite reqûete dans le terminal. Voici un exemple: 

``` SELECT * FROM character ```

## Installation du projet et de l'environnement de travail

1. Je crée un fichier .env dans lequel je vais renseigner toutes les données nécéssaires pour connecter ma base de données, je me sert du modèle fourni par le fichier

.env.example de mon éditeur de texte. Ces données sont confidentielles normalement, pour les bonnes pratiques, on mettra ces renseignements dans un fichier .env qui

ne sera pas visible quand le dossier avec tout les sous-dossiers et fichiers sera en ligne sur GitHub.

2. J'initialise le projet avec la commande suivante dans le terminal: ``` npm i ```

3. Je lance mon projet sur le port que j'ai renseigné dans mon fichier .env avec la commande suivante dans le terminal: ``` node index ```