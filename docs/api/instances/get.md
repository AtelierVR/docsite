# Instance

## Récupérer une instance

Vous pouvez récupérer une instance en utilisant son `id` ou son `name`.

### Requête

```http
GET /api/instances/:search
```

#### Paramètres

| Paramètre | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `search` | `uint\|string` | L'identifiant de l'instance | `false` |

### Réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IInstance`](/docs/api/instances/typing.md#iinstance) | Informations sur l'instance |
| `error` | [`IError`](/docs/api/typing.md#ierror) | Une erreur sur la récupération de l'instance |