# Typage des relais

Voici la liste des types de relais disponibles.

## RelaiInstance

Les informations d'une instance d'un relai.

| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `internal_id` | `ushort` | L'identifiant interne de l'instance | `false` |
| `master_id` | `uint` | L'identifiant du master de l'instance | `false` |
| `flags` | `uint` | Les flags de l'instance | `false` |
| `players` | `byte[]` | Les références des clients de l'instance | `false` |
| `max_players` | `ushort` | Le nombre maximum de joueurs de l'instance | `false` |

### Exemple

```json
{
    "internal_id": 1,
    "master_id": 1,
    "flags": 0,
    "players": [1, 2, 3],
    "max_players": 10
}
```

## RelaiClient

Les informations d'un client d'un relai.

| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `id` | `ushort` | L'identifiant du client | `false` |
| `remote` | `string` | L'adresse du client | `false` |
| `status` | [`EClientStatus`](#eclientstatus) | Le statut du client | `false` |
| `platform` | [`EPlatform`](/docs/api/typing.md#eplatform) | La plateforme du client | `false` |
| `engine` | [`EEngine`](/docs/api/typing.md#eengine) | Le moteur du client | `false` |
| `last_seen` | `TimestampMS` | Le dernier moment où le client a été vu | `false` |

### Exemple

```json
{
    "id": 1,
    "remote": "127.0.0.1:12345",
    "status": "authentificated",
    "platform": "windows",
    "engine": "unity",
    "last_seen": 1620000000000
}
```

## MasterInstance

Les informations d'une instance du Master.

| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `master_id` | `uint` | L'identifiant de l'instance sur le Master | `false` |
| `capacity` | `ushort` | La capacité maximale de l'instance | `false` |
| `flags` | `uint` | Les flags de l'instance | `false` |
| `password` | `string` | Le mot de passe de l'instance | `true` |
| `world_ref` | `string` | Référence au monde de l'instance | `false` |

### Exemple

```json
{
    "master_id": 1,
    "capacity": 10,
    "flags": 0,
    "password": "password",
    "world_ref": "0"
}
```

## EClientStatus

Les statuts des clients.

| Valeur | Description |
| --- | --- |
| `disconnected` | Le client est déconnecté |
| `handshaked` | Le client a établi une connexion |
| `authentificating` | Le client est en cours d'authentification |
| `authentificated` | Le client est authentifié |

## IRelaiUpdate

Les informations envoyées lors d'une mise à jour de relai.

| Paramètre | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `relay` | `string` | UUID du relai sur le Master | `false` |
| `next_update` | `ushort` | Prochaine mise à jour du relai (en secondes) | `false` |
| `server` | `string` | Adresse du Master | `false` |
| `instances` | [`MasterInstance[]`](/docs/api/relay/typing.md#masterinstance) | Liste des instances du Master | `false` |

## IMasterAuthResult

Les informations renvoyées lors de la vérification d'un client.

| Paramètre | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `valid` | `bool` | Indique si l'authentification est autorisée | `false` |
| `is_blacklisted` | `bool` | Indique si le client est blacklisté | `false` |
| `blacklisted` | [`IMasterBlacklisted`](#imasterblacklisted) | Les informations du client blacklisté | `true` |
| `is_invalid_token` | `bool` | Indique si le token est invalide | `false` |
| `user` | [`IMasterUser`](#imasteruser) | Les informations du client | `true` |
| `token_type` | [`ETokenType`](/docs/api/typing.md#etokentype) | Le type du token | `false` |
| `access_token` | `string` | Le token d'authentification | `true` |

### Exemple

```json
{
    "valid": true,
    "is_blacklisted": false,
    "blacklisted": null,
    "is_invalid_token": false,
    "user": {
        "id": 1,
        "server": "avr.social",
        "display": "Hactazia"
    },
    "token_type": "bearer",
    "access_token": "eyJffesfesfcvnsdukfsenfdjks"
}
```

## IMasterBlacklisted

Les informations d'un client blacklisté.

| Paramètre | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `expires` | `TimestampMS` | La date d'expiration de la blacklist | `false` |
| `reason` | `string` | La raison de la blacklist | `true` |

### Exemple

```json
{
    "expires": 1620000000000,
    "reason": "Raison de la blacklist"
}
```

## IMasterUser

Les informations d'un client.

| Paramètre | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `id` | `uint` | L'identifiant du client | `false` |
| `display` | `string` | Le nom d'affichage du client | `false` |
| `server` | `string` | L'identifiant du serveur du client | `false` |

### Exemple

```json
{
    "id": 1,
    "display": "Hactazia",
    "server": "avr.social"
}
```

## ETokenType

Les types de token.

| Valeur | Description |
| --- | --- |
| `bearer` | Token d'un utilisateur du Master |
| `integrity` | Token d'un utilisateur externe |
