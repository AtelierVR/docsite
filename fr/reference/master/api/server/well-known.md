# WellKnow pour Nox

Ppour identifier que ce serveur Web/HTTP est un serveur Nox, vous pouvez utiliser la route `/.well-known/nox`.
Ce dernier est utilisé lors d'une résolution DNS de l'adresse, informations sur [Identification](/reference/master/identification).

## Requête

```http
GET /.well-known/nox
```

## Réponse

::: warning
Ce format n'est pas standardisé avec le format de réponse de l'API.
:::

::: code-group
<<< @/snippets/IWellKnown.txt#types{ts} [Formats de réponse]
<<< @/snippets/IWellKnown.txt#example{ts} [Exemple de réponse]
:::

## Explicatifs utils

::: details `$schema` - Le schéma standardisé de la réponse
Ce schéma est utilisé pour valider la réponse du serveur.
:::

::: details `address` - L'adresse du serveur
Cette adresse permet d'identifier le serveur sur le réseau.\
Plus d'informations sur les adresses sont disponibles dans la section [Identification](/reference/master/identification).
:::

::: details `contact` - Les informations de contact
Cette information est le moyen de contacter les administrateurs du serveur.
:::

::: details `port` - Le port du serveur
Ce port est utilisé pour identifier le port sur lequel le serveur écoute.
:::

::: details `wellknown_endpoint` - L'URL du point d'accès
Cette URL est utilisée pour identifier le point d'accès du serveur.
:::

::: details `server_endpoint` - L'URL du serveur
Cette URL est utilisée pour récupérer les informations du serveur.
:::

::: details `engine_name` - Le nom du processus qui supporte le serveur
Ce nom est utilisé pour identifier le processus qui supporte le serveur.
Le nom du processus par défaut est `NoxMaster`.
:::

::: details `engine_version` - La version du processus qui supporte le serveur
Cette version est utilisée pour connaître quelles ressources sont disponibles du processus.
Cette valeur est au format [**SemVer**](https://semver.org/lang/fr/) (major.minor.patch).
:::

::: details `api_version` - La version de l'API
Cette version est indiquée dans `server_endpoint`, mais permet de filtrer lors de la résolution DNS.
Cette valeur est au format [**SemVer**](https://semver.org/lang/fr/) (major.minor.patch).
:::

::: details `supported_tokens` - Les jetons supportés
Cette liste permet de savoir quels jetons sont supportés par le serveur.
Nous avons les jetons suivants:

- `Bearer`: Jeton d'authentification pour les utilisateurs du même serveur.
- `Integrity`: Jeton d'intégrité pour les utilisateurs venant d'autres serveurs.
- `Challenge`: Jeton de défi inter-serveurs Masters.
- `Badge`: Jeton de badge pour les serveurs relais.

Plus d'informations sur les jetons sont disponibles dans la section [Authentification](/reference/master/authentication).
:::

::: details `status` - L'état du serveur
Cet état permet de savoir si le serveur est en ligne, en maintenance, ou hors-ligne, etc.
Nous avons les états suivants:

- `online`: Le serveur est en ligne et fonctionne correctement.
- `offline`: Le serveur est hors-ligne et n'est pas disponible.
- `maintenance`: Le serveur est en maintenance et n'est pas disponible.
- `starting`: Le serveur est en cours de démarrage.
- `stopping`: Le serveur est en cours d'arrêt.
- `error`: Le serveur a rencontré une erreur et n'est pas disponible.
- `security`: Le serveur est en mode de sécurité et est partiellement selon les choix de l'administrateur.
- `deprecated`: Le serveur est obsolète et n'est plus supporté, il est recommandé de migrer vers une nouvelle adresse.
:::

::: details `security_features_disabled` - Liste des fonctionnalités de sécurité désactivées
Cette liste permet de savoir quelles fonctionnalités de sécurité sont désactivées sur le serveur temporairement.
Plus d'informations sur les fonctionnalités sur [Fonctionnalités](/reference/master/features).
:::

::: details `security_message` - Message d'annonce de sécurité
Ce message est utilisé pour informer les raisons de la désactivation des fonctionnalités de sécurité sur le serveur par les administrateurs.
:::

::: details `deprecated_migration` - Adresse de migration
Cette adresse est utilisée pour informer les utilisateurs et aux autres serveurs de migrer vers une nouvelle adresse.
:::

::: details `deprecated_migration_closing_date` - Date de fermeture définitive du serveur
Cette date est utilisée pour informer les utilisateurs et aux autres serveurs jusqu'à quand le serveur est disponible.
Cette valeur est un timestamp en millisecondes.
:::

::: details `error_message` - Message d'erreur
Ce message est utilisé pour informer les utilisateurs/administrateurs que le serveur a rencontré une erreur.
:::

::: details `maintenance_message` - Message de maintenance
Ce message est utilisé pour informer les raisons de la maintenance du serveur par les administrateurs.
:::

::: details `maintenance_end_date` - Date de fin de maintenance
Cette date est utilisée pour informer les utilisateurs et aux autres serveurs jusqu'à quand le serveur est en maintenance.
Cette valeur est un timestamp en millisecondes.
:::

::: details `maintenance_start_date` - Date de début de maintenance
Cette date est utilisée pour informer les utilisateurs et aux autres serveurs à partir de quand le serveur est en maintenance.
Cette valeur est un timestamp en millisecondes.
:::

