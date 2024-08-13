# Monde

## Récupérer un monde

Vous pouvez récupérer un monde en utilisant son `id`.

### Requête

```http
GET /api/worlds/:id
```

#### Paramètres

| Paramètre | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `id` | `uint` | L'identifiant du monde | `false` |

### Réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IWorld`](/docs/api/worlds/typing.md#iworld) | Informations sur le monde |
| `error` | [`IError`](/docs/api/typing.md#ierror) | Une erreur sur la récupération du monde |