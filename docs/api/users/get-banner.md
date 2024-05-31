# Bannière
## Récupérer la bannière d'un utilisateur
#### Requête
```http
GET /api/users/:search[@:server]/banner
```

#### Réponse
Il y a plusieurs possibilités de réponse:
::: details En cas où la bannière n'existe pas
Cela est possible si l'utilisateur n'existe pas ou si l'utilisateur n'a pas de bannière.
Vous aurez une réponse standardisé.
| Paramètre | Type | Description |
| --- | --- | --- |
| `error` | [`IError`](/docs/api/typing.html#ierror) | Une erreur sur la récupération de la bannière |
:::
::: details En cas de succès
En cas de succès, il est possible que vous soyez redirigé vers l'URL de la bannière.
Sinon, vous aurez une réponse tel que:
##### En-têtes
| Nom | Type | Description |
| --- | --- | --- |
| `Content-Type` | `image/*` | Le type de contenu de la réponse |
##### Corps
Le corps de la réponse sera l'image de la bannière.
:::