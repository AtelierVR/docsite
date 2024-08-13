# Authentication

## Enregistrement

Cette route permet à un utilisateur de s'enregistrer sur le serveur.

### Requête

```http
POST /api/auth/register
```

#### Corps

| Paramètre | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `id` | `uint` | L'ID de l'utilisateur, permettant de le customiser | `true` |
| `username` | `string` | Le nom d'utilisateur | `false` |
| `display` | `string` | Le nom d'affichage | `true` |
| `email` | `string` | L'adresse email de l'utilisateur | `true` |
| `password` | `string` | Le mot de passe de l'utilisateur | `true` |
| `thumbnail` | `URL` | L'URL de l'image de profil | `true` |
| `banner` | `URL` | L'URL de la bannière de profil | `true` |

### Réponse

Tout comme la connexion, vous recevrez un token d'authentification.

| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IUserLogin`](/docs/api/users/typing.md#iuserlogin) | Les informations de l'utilisateur |
| `error` | [`IError`](/docs/api/typing.md#ierror) | Une erreur sur l'enregistrement |