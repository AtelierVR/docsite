# Typage des mondes

Voici la liste des types de mondes disponibles.

## IWorld

| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `id` | `uint` | L'identifiant du monde | `false` |
| `title` | `string` | Le titre du monde | `true` |
| `description` | `string` | La description du monde | `true` |
| `capacity` | `ushort` | La capacité maximale du monde |
| `tags` | [`TWorldTag[]`](#tworldtag) | Les tags du monde | `false` |
| `thumbnail` | `URL` | L'URL de l'image de profil du monde | `true` |
| `owner` | `string` | L'identifiant du propriétaire du monde | `false` |
| `server` | `string` | Adresse du serveur du monde | `false` |

## IWorldAsset

Représente un asset d'un monde.
Si l'asset est vide, `is_empty` est `true`, alors les propriétés `url`, `hash` et `size` sont nulles.

| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `id` | `uint` | L'identifiant de l'asset | `false` |
| `version` | `uint` | La version de l'asset | `false` |
| `engine` | [`EEngine`](/docs/api/typing.md#eengine) | Le moteur de l'asset | `false` |
| `platform` | [`EPlatform`](/docs/api/typing.md#eplatform) | La plateforme de l'asset | `false` |
| `is_empty` | `boolean` | L'asset est vide | `true` |
| `url` | `URL` | L'URL de l'asset | `true` |
| `hash` | `string` | Le hash (sha256) de l'asset | `true` |
| `size` | `ulong` | La taille de l'asset | `true` |

## TWorldTag

Les tags de mondes.
Ces tags sont utilisés pour définir les caractéristiques du monde.
Tout comme les tags d'utilisateurs, ils sont sous forme de chaîne de caractères.
Il sont définis par un [délivreur](/docs/api/typing.md#tag-délivreurs) et une valeur, séparé par `:`.

### Valeurs

| Valeur | Description | Délivreurs recommandés |
| --- | --- | --- |
| `official` | Le monde est officiel du master | `sys` |
| `public` | Le monde est public (sera référencé) | `sys` |
| `dallback` | Mon par défaut des utilisateurs du Master | `sys` |

## IWorldSearch

Les informations renvoyées lors d'une recherche de mondes.

| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `worlds` | [`IWorld[]`](#iworld) | Les mondes trouvés | `false` |
| `total` | `uint` | Le nombre total de mondes | `false` |
| `search` | `string` | La recherche effectuée | `false` |
| `limit` | `byte` | Le nombre maximum de mondes retournés | `false` |
| `offset` | `uint` | L'offset de la recherche | `false` |
