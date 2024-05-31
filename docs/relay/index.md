# Relais

Un relais est un serveur qui permet de transmettre des messages entres des clients d'une même instance de jeu.
Il est utilisé pour permettre d'éviter les transmissions directes entre les clients, et évité les problèmes de sécurité qui peuvent en découler.

## Fonctionnement
Pour fonctionner, un relais doit être connecté à un [serveur de jeu](/docs/master/).
Il s'authentifie à ce dernier en utilisant un jeton d'authentification.
Un token `Badger <token>` est envoyé dans l'entête `Authorization` de la requête HTTP.
Il pourra récupréer les informations nécessaires comme les instances de jeu qu'il doit relayer,
vérifier les messages qu'il reçoit, et les transmettre aux bonnes instances,
et vérifier les utilisateurs qui se connectent à lui.

## API
Le relais utilise une API REST pour communiquer avec le serveur de jeu.

## Protocole interne
Le protocole interne du relais est basé sur le protocole UDP et TCP pour la transmission des messages.
Plus d'informations sur le protocole interne dans la [documentation technique](/docs/protocol/).