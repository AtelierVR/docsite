# Utilisateur
## Mettre à jour l'utilisateur actuel
::: warning
Requiert une authentification et le tag permission `can_self_edit`.
:::
Vous pouvez modifier l'utilisateur actuellement authentifié.
Seuls les champs spécifiés seront modifiés, sauf si vous spécifiez `null`.

::: tip
Vous pouvez supprimer votre Monde d'accueil en spécifiant `null` pour le champ `home`.
:::

#### Requête
```http
POST /api/users/@me
```

#### En-têtes
| Nom | Type | Description | Requis |
| --- | --- | --- | --- |
| `Authorization` | `Bearer <token>` | Le token d'authentification | `true` |
| `Content-Type` | `application/json` | Le type de contenu de la requête | `true` |

#### Contenu de la requête
Contenu de la requête au format JSON.
| Paramètre | Type | Description | Optionnel | Nullable |
| --- | --- | --- | --- | --- |
| `username` | `string[/^[a-z0-9_.-]{3,16}$/]` | Le nom d'utilisateur | `true` | `false` |
| `display` | `string[/^.{3,32}$/]` | Le nom d'affichage | `true` | `false` |
| `email` | `string[/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/]` | L'adresse email | `true` | `true` |
| `password` | `string[/^.{6,}$/]` | Le mot de passe (sha256 recommendé) | `true` | `true` |
| `thumbnail` | `URL` | L'URL de l'image de profil | `true` | `true` |
| `banner` | `URL` | L'URL de la bannière de profil | `true` | `true` |
| `links` | `URL[]` | Les liens de l'utilisateur | `true` | `true` |
| `home` | `WorldReference` | ID du monde d'accueil | `true` | `true` |

#### Réponse
| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IUser`](/docs/api/users/typing.html#iuser) | Informations sur l'utilisateur |
| `error` | [`IError`](/docs/api/typing.html#ierror) | Une erreur sur la récupération de l'utilisateur |
