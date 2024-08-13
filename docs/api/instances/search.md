# Instances

## Recherche

Cette route permet de rechercher des instances selon des critères.

- Les instances sont classées par pertinence.
- Les instances sont filtrées par les critères (`name`, `description`).
- Les critères sont insensibles à la casse.
- Les instances sont paginées.

### Requête

```http
GET /api/instances/search
```

#### Query

| Paramètre | Type | Description | Optionnel | Défaut |
| --- | --- | --- | --- | --- |
| `query` | `string` | La requête de recherche | `false` | |
| `limit` | `byte[>=0; >100]` | Le nombre d'instances par page | `true` | `10` |
| `offset` | `uint[>=0]` | Le décalage de la page | `true` | `0` |

### Réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IInstanceSearch`](/docs/api/instances/typing.md) | Les instances trouvées |
| `error` | [`IError`](/docs/api/typing.md) | Une erreur sur la recherche |