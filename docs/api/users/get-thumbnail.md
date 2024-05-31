# Photo de profile
## Récupérer la photo de profile d'un utilisateur
#### Requête
```http
GET /api/users/:search[@:server]/thumbnail
```

#### Réponse
Il y a plusieurs possibilités de réponse:
::: details En cas où la photo de profile n'existe pas
Cela est possible si l'utilisateur n'existe pas ou si l'utilisateur n'a pas de photo de profile.
Vous aurez une réponse standardisé.
| Paramètre | Type | Description |
| --- | --- | --- |
| `error` | [`IError`](/docs/api/typing.html#ierror) | Une erreur sur la récupération de la photo de profile |
:::
::: details En cas de succès
En cas de succès, il est possible que vous soyez redirigé vers l'URL de la photo de profile.
Sinon, vous aurez une réponse tel que:
##### En-têtes
| Nom | Type | Description |
| --- | --- | --- |
| `Content-Type` | `image/*` | Le type de contenu de la réponse |
##### Corps
Le corps de la réponse sera l'image de la photo de profile.
:::