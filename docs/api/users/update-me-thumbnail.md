# Photo de profile
::: warning
Cette fonctionnalité n'est pas encore disponible.
:::
## Mettre à jour la photo de profile de l'utilisateur actuel
::: warning
Requiert une authentification et le tag permission `can_self_edit`.
:::
Vous pouvez modifier la photo de profile à partir d'une image de l'utilisateur actuellement authentifié.

#### Requête
```http
POST /api/users/@me/thumbnail
```

#### En-têtes
| Nom | Type | Description | Requis |
| --- | --- | --- | --- |
| `Authorization` | `Bearer <token>` | Le token d'authentification | `true` |
| `Content-Type` | `multipart/form-data` | Le type de contenu de la requête | `true` |

#### Contenu de la requête
| Paramètre | Type | Description |
| --- | --- | --- |
| `file` | `File[type: image/*]` | L'image de la photo de profile de profil |

#### Réponse
::: details En cas de succès
En cas de succès, la réponse se comportera comme [`GET /api/users/:search/thumbnail`](/docs/api/users/get-thumbnail).
:::
::: details En cas d'erreur
En cas d'erreur, la réponse sera sous forme d'un erreur standard.
| Paramètre | Type | Description |
| --- | --- | --- |
| `error` | [`IError`](/docs/api/typing.html#ierror) | Une erreur sur la récupération de la photo de profile |
:::