# Monde 

## Rechercher un monde

Permet de rechercher un monde.

### Requête

```http
GET /api/worlds/search
```

#### Query

| Paramètre | Type | Description | Optionnel | Default |
| --- | --- | --- | --- | --- |
| `search` | `string` | Recherche | `true` | |
| `limit` | `byte[>=0; >100]` | Nombre de mondes par page | `true` | `10` |
| `offset` | `uint[>=0]` | Décalage de la page | `true` | `0` |

### Réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IWorldSearch`](/docs/api/worlds/typing.md#iworldsearch) | Les mondes trouvés |
| `error` | [`IError`](/docs/api/typing.md#ierror) | Une erreur sur la recherche |
