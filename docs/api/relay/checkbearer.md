# Relai

## Vérification de l'identité d'un client

::: warning
Requiert une authentification.
:::

Permet de vérifier et récupérer les informations [IUser](/docs/api/users/typing.md#iuser) d'un client avec son Master.

### Requête

```http
POST /api/relay/checkbearer
```

#### En-têtes

| Nom | Type | Description | Requis |
| --- | --- | --- | --- |
| `Authorization` | `Badger <token>` | Le token d'authentification du relai | `true` |

#### Corps

| Paramètre | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `user_id` | `uint` | ID de l'utilisateur à trouver | `false` |
| `access_token` | `string` | Token d'authentification du client | `false` |
| `token_type` | [`ETokenType`](/docs/api/typing.md#etokentype) | Type du token | `false` |
| `ip` | `string` | Adresse IP du client | `false` |

### Réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IMasterAuthResult`](/docs/api/relay/typing.md#imasterauthresult) | Les informations du client |
| `error` | [`IError`](/docs/api/typing.md#ierror) | Une erreur sur la vérification |
