# Authentification

## Connexion

Certaines requêtes nécessitent une authentification. Pour cela, vous devez vous connecter.

### Requête

```http
POST /api/auth/login
```

#### Corps

| Paramètre | Type | Description |
| --- | --- | --- |
| `identifier` | `string\|uint` | Le nom d'utilisateur ou l'ID de l'utilisateur |
| `password` | `string` | Le mot de passe de l'utilisateur |

### Réponse

En cas de succès, vous recevrez un token d'authentification. Il sera aussi stocké dans les cookies (`_uid`).

| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IUserLogin`](/docs/api/users/typing.html#iuserlogin) | Les informations de l'utilisateur |
| `error` | [`IError`](/docs/api/typing.html#ierror) | Une erreur sur la connexion |
