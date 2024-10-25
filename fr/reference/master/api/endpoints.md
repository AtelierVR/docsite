# API Référence

L'API Nox permet de faire des actions du le réseau Nox.
Elle est basée sur le protocole HTTP et suit les principes de REST.
Les informations qui suivent sont les ressources disponibles à l'aide de l'API.
Ces méthodes sont utilisées pour interagir/récupérer/modifier des données.

## Appeler l'API

Certaines actions que vous pouvez faire nécessitent certaines conditions citées ci-dessous.
Elle vous seront indiquées par un encadré comme celui-ci:

::: warning
Cette action nécessite une authentification par Utilisateur.
:::

1. N'importe quel requête API passe par le préfixe `/api/`.
2. Certaines actions nécessitent une authentification,
comme consulter des informations privées ou modifier des données.
Elle peut être placée dans différents endroits, comme dans le header à l'aide du `Authorization <token>`,
dans les query parameters avec `?auth=<token en base64>` ou en utilisant le cookie `_uid=<token en base64>`.
Pour les différentes méthodes d'authentification, voir la section [Authentification](/reference/master/authentication.md).
3. Il est recommandé d'utiliser un `User-Agent` pour identifier votre application.

## Réponse de l'API

Les réponses de l'API sont toujours au format JSON saus indication contraire.
Le serveur retourne aussi quelques informations en en-tête:

:::details Sous-serveur
A l'aide de Nginx, SRV, ou tout autre proxy, vous pouvez répartir les requêtes sur plusieurs « sous-serveurs »,
différents processus qui sont identifiés sous une même address de référence.
:::

| En-tête         | Description                   | Format   | Exemple                                                    |
|-----------------|-------------------------------|----------|------------------------------------------------------------|
| `Content-Type`  | Type de contenu de la réponse | `*/*`    | `application/json`                                         |
| `User-Agent`    | Identifiant de l'application  | `string` | `User-Agent: NoxServer/1.0.0 (linux; x64) Node.js/v23.0.0` |
| `X-Nox-Id`      | Identifiant du sous-serveur   | `string` | `X-Nox-Id: MIICIjANBgkqhkiG9w0BAQEF`                       |
| `X-Nox-Address` | Adresse du serveur            | `string` | `X-Nox-Address: localhost`                                 |
| `X-Nox-Version` | Version du sous-serveur       | `string` | `X-Nox-Version: 1.0.0`                                     |

Quant au contenu de la réponse se présente comme suit:
::: code-group

```ts [Format de la réponse]
interface IResponse {
    "data"?: any            // données de la réponse
    "error"?: {
        "code": number      // code d'erreur interne au protocole
        "message": string   // message d'erreur explicatif pour l'utilisateur
        "status": number    // code HTTP
    },
    "time": number          // date de la réponse, en millisecondes
    "request": string       // chemin de la requête
}
```

```jsonc [Exemple d'une erreur]
{
  "error": {
    "code": 1,
    "message": "This endpoint is not implemented.",
    "status": 501
  },
  "time": 1729805020605,
  "request": "/"
}
```

```jsonc [Exemple d'un succès]
{
  "data": {
    "id": "MIICIjANBgkqhkiG9w0BAQEF",
    "title": "Reileta Local Dev",
    "description": "Reileta Local Dev",
    "address": "localhost",
    "gateways": {
      "http": "http://localhost:53032",
      "ws": "ws://localhost:53032/api/ws"
    },
    "features": [
      "world",
      "instance",
      "server",
      "user"
    ],
    "version": "1.0.0",
    "ready_at": 1729804465576,
    "icon": "http://localhost:53032/icon.png",
    "public_key": "-----BEGIN PUBLIC KEY-----\n[...]\n-----END PUBLIC KEY-----\n"
  },
  "time": 1729805167418,
  "request": "/api/server"
}
```

:::

En cadre général, quand la réponse est une erreur, aucun champ `data` n'est retourné.
Le champ `error` contient les informations sur l'erreur:

- `code` est un code d'erreur interne au protocole,
vous pouvez consulter la liste des codes d'erreur dans la section [Erreurs](/reference/master/errors.md).
- `message` est un message d'erreur explicatif pour l'utilisateur/le développeur.
- `status` est le code HTTP de l'erreur, elle sont généralement dans la gamme des 4xx ou 5xx.

Le champ `data` contient les informations demandées par la requête.

## Types des données

### Généraux

Les données générales sont des données qui sont utilisées pour identifier le serveur et ce que ce dernier peut faire.
Elles sont utilisées pour les informations de base, comme les versions, les informations de contact, etc.

| Méthode | Requête              | Description                                       |                                                                                 |
|---------|----------------------|---------------------------------------------------|---------------------------------------------------------------------------------|
| GET     | `/server`            | Récupère les informations générales du serveur.   | [<i class="bi bi-code-slash"></i>](/reference/master/api/server/get.md)         |
| GET     | `/.well-known/nox`   | WellKnow pour Nox.                                | [<i class="bi bi-code-slash"></i>](/reference/master/api/server//well-known.md) |

### Utilisateurs

Les utilisateurs sont les entités qui utilisent le réseau Nox.
Ils peuvent être des joueurs, ou bien des bots.

| Méthode | Requête              | Description                                        |                                                                                 |
|---------|----------------------|----------------------------------------------------|---------------------------------------------------------------------------------|
| GET     | `/users/search`      | Recherche des utilisateurs                         | [<i class="bi bi-code-slash"></i>](/reference/master/api/users/search.md)       |
| GET     | `/users/:search`     | Récupère les informations d'un/des utilisateur(s)  | [<i class="bi bi-code-slash"></i>](/reference/master/api/users/get.md)          |
| GET     | `/users/@me`         | Récupère les informations de l'utilisateur courant | [<i class="bi bi-code-slash"></i>](/reference/master/api/users/me.md)           |
| POST    | `/users/@me`         | Modifie les informations de l'utilisateur courant  | [<i class="bi bi-code-slash"></i>](/reference/master/api/users/update.md)       |

### Mondes

Les mondes sont des endroits virtuels où les joueurs peuvent se réunir.
Un monde est un groupe de fichiers qui sera choisi par la convenance d'un utilisateur pour intéragir avec les autres utilisateurs,
dépendament de la platforme (Windows, Linux, etc.) où le moteur du jeu (Unity, Unreal Engine, Godot, etc.).

| Méthode | Requête             | Description                          |                                                                            |
|---------|---------------------|--------------------------------------|----------------------------------------------------------------------------|
| PUT     | `/worlds`           | Crée un monde                        | [<i class="bi bi-code-slash"></i>](/reference/master/api/worlds/create.md) |
| GET     | `/worlds/search`    | Recherche des mondes                 | [<i class="bi bi-code-slash"></i>](/reference/master/api/worlds/search.md) |
| GET     | `/worlds/:world_id` | Récupère les informations d'un monde | [<i class="bi bi-code-slash"></i>](/reference/master/api/worlds/get.md)    |
| POST    | `/worlds/:world_id` | Modifie les informations d'un monde  | [<i class="bi bi-code-slash"></i>](/reference/master/api/worlds/update.md) |
| DELETE  | `/worlds/:world_id` | Supprime un monde                    | [<i class="bi bi-code-slash"></i>](/reference/master/api/worlds/delete.md) |

### Fichiers de mondes

Les fichiers de mondes sont des fichiers propres au jeu qui sont utilisés pour le monde.
Ils permettent de configurer l'environnement du monde, les assets, les scripts, etc.
:::details Exemple
Pour le moteur de jeu Unity, le fichier utiliser sont des AssetBundles qui contiennent les assets/scenes du monde.
:::

| Méthode | Requête                                       | Description                          |                                                                                     |
|---------|-----------------------------------------------|--------------------------------------|-------------------------------------------------------------------------------------|
| GET     | `/api/worlds/:world_id/assets`                | Recherche des assets d'un monde      | [<i class="bi bi-code-slash"></i>](/reference/master/api/worlds/assets/search.md)   |
| PUT     | `/api/worlds/:world_id/assets`                | Ajoute un asset à un monde           | [<i class="bi bi-code-slash"></i>](/reference/master/api/worlds/assets/create.md)   |
| GET     | `/api/worlds/:world_id/assets/:asset_id`      | Récupère les informations d'un asset | [<i class="bi bi-code-slash"></i>](/reference/master/api/worlds/assets/get.md)      |
| POST    | `/api/worlds/:world_id/assets/:asset_id`      | Modifie les informations d'un asset  | [<i class="bi bi-code-slash"></i>](/reference/master/api/worlds/assets/update.md)   |
| DELETE  | `/api/worlds/:world_id/assets/:asset_id`      | Supprime un asset d'un monde         | [<i class="bi bi-code-slash"></i>](/reference/master/api/worlds/assets/delete.md)   |
| GET     | `/api/worlds/:world_id/assets/:asset_id/file` | Récupère le fichier d'un asset       | [<i class="bi bi-code-slash"></i>](/reference/master/api/worlds/assets/download.md) |
| POST    | `/api/worlds/:world_id/assets/:asset_id/file` | Upload le fichier d'un asset         | [<i class="bi bi-code-slash"></i>](/reference/master/api/worlds/assets/upload.md)   |

### Instances

Les instances sont les lieux où les utilisateurs peuvent se rejoindre avec l'intermédiaire d'un serveur relai.
Cela permet de référence l'instance depuis le serveur Master et distribuer l'ip du serveur relai pour que les utilisateurs puissent se rejoindre.

| Méthode | Requête              | Description                              |                                                                               |
|---------|----------------------|------------------------------------------|-------------------------------------------------------------------------------|
| PUT     | `/instances`         | Crée une instance                        | [<i class="bi bi-code-slash"></i>](/reference/master/api/instances/create.md) |
| GET     | `/instances/search`  | Recherche des instances                  | [<i class="bi bi-code-slash"></i>](/reference/master/api/instances/search.md) |
| GET     | `/instances/:search` | Récupère les informations d'une instance | [<i class="bi bi-code-slash"></i>](/reference/master/api/instances/get.md)    |

### Notifications

Les notifications sont un moyen de communiquer entre les utilisateurs et événements du réseau (message privé, invitation, etc.).
Si un utilisateur est connecté en [WebSocket](/reference/master/api/websocket.md), il recevra les notifications en temps réel.

| Méthode | Requête                    | Description                                         |                                                                                   |
|---------|----------------------------|-----------------------------------------------------|-----------------------------------------------------------------------------------|
| POST    | `/notifications`           | Envoie une notification                             | [<i class="bi bi-code-slash"></i>](/reference/master/api/notifications/create.md) |
| GET     | `/users/@me/notifications` | Récupère les notifications de l'utilisateur courant | [<i class="bi bi-code-slash"></i>](/reference/master/api/notifications/get.md)    |

### Relai

Les relais sont des serveurs qui permettent de relier virtuelment les utilisateurs entre eux avec des instances.
Ces requêtes permettent de gérer les relais e partager les  informations de ce dernier à son serveur Master associé.

| Méthode | Requête                   | Description                             |                                                                                 |
|---------|---------------------------|-----------------------------------------|---------------------------------------------------------------------------------|
| POST    | `/api/relays/update`      | Met à jour les informations d'un relai  | [<i class="bi bi-code-slash"></i>](/reference/master/api/relays/update.md)      |
| POST    | `/api/relays/checkbearer` | Vérifie l'authenticité d'un utilisateur | [<i class="bi bi-code-slash"></i>](/reference/master/api/relays/checkbearer.md) |

### Authentification

Ces requêtes permettent de gérer l'authentification des utilisateurs.

| Méthode | Requête          | Description               |                                                                            |
|---------|------------------|---------------------------|--------------------------------------------------------------------------- |
| POST    | `/auth/login`    | Connecte un utilisateur   | [<i class="bi bi-code-slash"></i>](/reference/master/api/auth/login.md)    |
| POST    | `/auth/register` | Enregistre un utilisateur | [<i class="bi bi-code-slash"></i>](/reference/master/api/auth/register.md) |
| GET     | `/auth/logout`   | Déconnecte un utilisateur | [<i class="bi bi-code-slash"></i>](/reference/master/api/auth/logout.md)   |