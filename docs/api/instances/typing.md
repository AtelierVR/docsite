# Typage des instances

Voici la liste des types d'instances disponibles.

## IInstance

| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `id` | `uint` | L'identifiant de l'instance | `false` |
| `title` | `string` | Le titre de l'instance | `true` |
| `description` | `string` | La description de l'instance | `true` |
| `server` | `string` | L'identifiant du serveur de l'instance | `false` |
| `name` | `string` | Petit identifiant de l'instance | `false` |
| `capacity` | `ushort` | La capacité maximale de l'instance | `false` |
| `tags` | [`TInstanceTag[]`](#tinstancetag) | Les tags de l'instance | `false` |
| `world` | `string` | Référence au monde de l'instance | `false` |
| `address` | `string` | L'adresse du relais de l'instance | `true` |

### Exemple

```json
{
    "id": 1,
    "title": "Official Nox Instance",
    "description": "L'instante officielle de Nox.",
    "server": "avr.social",
    "name": "avr",
    "capacity": 100,
    "tags": [
        "sys:multiplayer",
        "sys:password"
    ],
    "world": "0",
    "address": "instance.avr.social:48562"
}
```

## TInstanceTag

Les tags d'instances.
Ces tags sont utilisés pour définir les caractéristiques de l'instance.
Tout comme les tags d'utilisateurs, ils sont sous forme de chaîne de caractères.
Il sont définis par un [délivreur](/docs/api/typing.md#tag-délivreurs) et une valeur, séparé par `:`.

### Valeurs

| Valeur | Description | Délivreurs recommandés |
| --- | --- | --- |
| `multiplayer` | L'instance est en multijoueur | `sys` |
| `password` | L'instance est protégée par un mot de passe | `sys` |
| `singleplayer` | L'instance est en solo | `sys` |
| `unlimited` | L'instance n'a pas de limite de joueurs | `sys` |
| `whitelist` | L'instance est en liste blanche | `sys` |

## IInstanceSearch

Les informations renvoyées lors d'une recherche d'instances.

| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `instances` | [`IInstance`](#iinstance)[] | Les instances trouvées | `false` |
| `total` | `uint` | Le nombre total d'instances | `false` |
| `search` | `string` | La requête de recherche | `false` |
| `limit` | `byte` | Le nombre d'instances par page | `false` |
| `offset` | `uint` | Le décalage de la page | `false` |
