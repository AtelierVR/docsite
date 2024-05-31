# Utilisateur
::: warning
Cette section est en cours de développement.
- Certains sélécteurs peuvent ne pas être supportés.
- Les selection multiples ne sont pas supportés.
:::
## Récupérer un utilisateur

Vous pouvez récupérer un utilisateur en utilisant son identifiant.

#### Requête
```http
GET /api/users/:search[@:server]
```
#### Query
| Paramètre | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `search` | [TUserSelector](/docs/api/users/typing.html#tuserselector) | L'identifiant de l'utilisateur | `false` |
| `server` | `string` | L'identifiant du serveur de l'utilisateur | `true` |

#### Réponse
::: info
La sortie est un tableau si vous spécifiez un sélécteur à sortie multiple.
:::
| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IUser \| IUser[]`](/docs/api/users/typing.html#iuser) | Informations sur l'utilisateur |
| `error` | [`IError`](/docs/api/typing.html#ierror) | Une erreur sur la récupération de l'utilisateur |