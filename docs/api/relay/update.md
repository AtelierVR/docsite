# Relai

## Mise à jour

::: warning
Requiert une authentification.
:::
Permet de partager des informations entre le Master et le Relai.

### Requête

```http
POST /api/relays/update
```

#### En-têtes

| Nom | Type | Description | Requis |
| --- | --- | --- | --- |
| `Authorization` | `Badger <token>` | Le token d'authentification du relai | `true` |

#### Corps

| Paramètre | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `use_address` | `string` | Address du relai | `false` |
| `max_instances` | `byte` | Nombre maximum d'instances qu'il peut gérer | `false` |
| `port` | `ushort` | Port du relai | `false` |
| `clients` | `RelaiClient[]` | Liste des clients du relai | `false` |
| `instances` | [`RelaiInstance[]`](/docs/api/relay/typing.md) | Liste des instances du relai | `false` |

### Réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IRelaiUpdate`](/docs/api/relay/typing.md#irelaiupdate) | Informations sur le relai |
| `error` | [`IError`](/docs/api/typing.md#ierror) | Une erreur sur la mise à jour du relai |