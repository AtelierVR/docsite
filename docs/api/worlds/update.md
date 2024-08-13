# Monde

## Mettre à jour un monde
::: warning
Requiert une authentification et le tag permission `can_world_edit` et ownership.
:::

Permet de mettre à jour un monde.

### Requête

```http
POST /api/worlds/:id
```

#### Paramètres
| Paramètre | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `id` | `uint` | L'identifiant du monde | `false` |

#### Corps

| Paramètre | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `title` | `string` | Titre du monde | `true` |
| `description` | `string` | Description du monde | `true` |
| `capacity` | `ushort` | Capacité maximale du monde | `true` |
| `thumbnail` | `URL` | URL de l'image de profil | `true` |

### Réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IWorld`](/docs/api/worlds/typing.md#iworld) | Informations sur le monde |
| `error` | [`IError`](/docs/api/typing.md#ierror) | Une erreur sur la mise à jour du monde |