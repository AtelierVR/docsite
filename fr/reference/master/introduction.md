# Introduction aux Masters

Les serveurs « Master » sont les serveurs principaux du réseau Nox.
Ils sont responsables de la gestion des serveurs relais et de la communication entre les clients et d'autres serveurs.
Il permet aussi de revendiquer des utilisateurs de façon unique et de pouvoir communiquer avec eux sans avoir à partager des informations sensibles.

## Fonctionnalités

- Gestion des serveurs relais
- Indexation des serveurs relais
- Gestion des utilisateurs
- Gestion des instances de jeu
- Gestions des mondes de jeu
- Gestion des avatars
- Gestion des mods

## API

Le serveur Master utilise une API REST pour communiquer avec les clients, les relais, et les autres serveurs.

::: details Exemple
Voici une liste d'exemple que peut fournir le serveur Master:

- Lister les autres serveurs
- Gérer les utilisateurs qui veulent se connecter aux instances
- Gérer les amitiés entre les utilisateurs de différents serveurs
- Détecter informations pertinantes et les transmettre à ses utilisateurs (ex: demande d'ami, message privé, etc.)
:::

Vous trouverez les différentes routes de l'API dans la section [API](/reference/master/api).