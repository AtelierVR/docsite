# Utilisateur
## Récupérer l'utilisateur actuel
::: warning
Requiert une authentification.
:::
Permet de récupérer l'utilisateur actuellement authentifié.

#### Requête
```http
GET /api/users/@me
```

#### En-têtes
| Nom | Type | Description | Requis |
| --- | --- | --- | --- |
| `Authorization` | `Bearer <token>` | Le token d'authentification | `true` |

#### Réponse
| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IUser`](/docs/api/users/typing.html#iuser) | Informations sur l'utilisateur |
| `error` | [`IError`](/docs/api/typing.html#ierror) | Une erreur sur la récupération de l'utilisateur |
