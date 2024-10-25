# Monde

## Créer un monde
::: warning
Requiert une authentification et le tag permission `can_world_create`.
:::

Permet de créer un monde.

### Requête

```http
PUT /api/worlds
```

#### Corps

| Paramètre | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `id` | `uint` | ID du monde | `true` |
| `title` | `string` | Titre du monde | `false` |
| `description` | `string` | Description du monde | `true` |
| `capacity` | `ushort` | Capacité maximale du monde | `false` |
| `thumbnail` | `URL` | URL de l'image de profil | `true` |

### Réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IWorld`](/docs/api/worlds/typing.md#iworld) | Informations sur le monde |
| `error` | [`IError`](/docs/api/typing.md#ierror) | Une erreur sur la création du monde |
