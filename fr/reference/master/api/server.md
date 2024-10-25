# Informations sur le serveur

Cette requête permet de récupérer des informations sur le serveur.
Elle est utilisée pour obtenir des informations sur le serveur, telles que son nom, sa version, et d'autres informations pertinentes.
Cette requête est accessible par tout le monde, même les utilisateurs non authentifiés.

## Requête

```http
GET /api/server
```

## Réponse

::: code-group

<<< @/snippets/IServer.txt#types{ts} [Formats de réponse]
<<< @/snippets/IServer.txt#example{ts} [Exemple de réponse]

:::

## Explicatifs utils

::: details `id` - L'identifiant unique d'un sous-serveur
Cet identifiant est généré automatiquement par le serveur,\
donc il est non recommandé de l'utiliser pour identifier le serveur sur le réseau.
Ce dernier sert à l'administration du serveur et savoir sur quel sous-processus vous travaillez.
:::

::: details `address` - L'adresse du serveur
Cette adresse permet d'identifier le serveur sur le réseau.\
Plus d'informations sur les adresses sont disponibles dans la section [Identification](/reference/master/identification).
:::

::: details `version` - La version du serveur
Cette version est utilisée pour connaître quelles ressources sont disponibles,\
dépendamment de la version.\
Cette valeur est au format [**SemVer**](https://semver.org/lang/fr/) (major.minor.patch).
:::

::: details `name` - Le nom du serveur
Ce nom est utilisé pour se faire reconnaître par les utilisateurs.
:::

::: details `description` - La description du serveur
Cette description est utilisée pour donner plus d'informations sur le serveur.
:::

::: details `gateways` - Les passerelles du serveur
Lors de la recherche du serveurs le client aura surment que l'addresse du server Master.\
Cette liste permet au client de savoir à quelle URL où faire une certaine requête.

- `http`: C'est l'origine des requêtes API.
- `ws`: URL vers le serveur WebSocket.
:::

::: details `features` - Les fonctionnalités du serveur
Ces fonctionnalités sont utilisées pour savoir quelles fonctionnalités sont disponibles sur le serveur.\
Plus d'informations sur les fonctionnalités sont disponibles dans la section [Fonctionnalités](/reference/master/features).
:::

::: details `ready_at` - La date de prêt du serveur
La date au format timestamp millisecondes à laquelle le serveur a été prêt à accepter des connexions.
:::

::: details `icon` - L'icône du serveur
Cette valeur est l'URL vers l'image du serveur.
:::

::: details `public` - La clé publique du serveur
Cette clé permet de vérifier l'authenticité du serveur même si elle change d'address ou utilise une ip dynamique.
Plus d'informations sur la vérification de l'authenticité sont disponibles dans la section [Challenge](/reference/master/challenge).
:::