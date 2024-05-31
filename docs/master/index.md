# Server de jeu

Le serveur de jeu est ce qui permet de relier le réseau de joueurs entre eux.
Il permet de gérer les utilisateurs, les instances de jeu, les mondes, etc.

## Fonctionnement
Ce dernier va permettre de gérer les utilisateurs et leur permettre d'être représentés sur le réseau,
sous la forme d'un ID unique (`<id>|<username>@<server>`).
Il va fornir les informations nécessaires pour que les clients puissent se connecter à lui, et se connecté aux instances qu'il gère.

## API
Le serveur de jeu utilise une API REST pour communiquer avec les clients, les relais, et les autres serveurs.
::: details Exemple
Voici une liste d'exemple que peut fournir le serveur de jeu:
- Lister les autres serveurs
- Gérer les utilisateurs qui veulent se connecter aux instances
- Gérer les amitiés entre les utilisateurs de différents serveurs
- Détecter informations pertinantes et les transmettre à ses utilisateurs (ex: demande d'ami, message privé, etc.)
:::
Il peut aussi fournir des informations sur les instances de jeu qu'il gère, et permettre de les rejoindre.