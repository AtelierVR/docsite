# Récupère les informations d'un monde

Cette requête permet de récupérer des informations sur un monde.
Elle est utilisée pour obtenir des informations sur un monde, telles que son nom, son identifiant, ou encore la capacitée.
Cette requête est accessible par tout le monde, même les utilisateurs non authentifiés.

## Requête

```http
GET /api/worlds/:world_id
```

## Paramètres

| Paramètre  | Type     | Description                                                   |
|------------|----------|---------------------------------------------------------------|
| `world_id` | `string` | Identifiant du monde.                                         |

## Réponse

::: code-group
<<< @/snippets/IWorld.txt#types{ts} [Formats de réponse]
<<< @/snippets/IWorld.txt#example{ts} [Exemple de réponse]
:::

## Explicatifs utils

::: details `world_id` et `id` - L'identifiant unique du monde
Cet identifiant est unique pour chaques mondes et est peut-être choisi par l'utilisateur.
La valeur est un nombre entier positif unique inférieur à 2^32 (uint32).
La valeur 0 est réservée et ne doit pas être utilisée.
:::

::: details `server` - Le serveur du monde
Cette valeur est l'adresse unique du serveur sur lequel le monde est enregistré.
:::


::: details `title` - Le nom du monde
Ce nom est utilisé pour se faire reconnaître par les utilisateurs.
:::

::: details `description` - La description du monde
Cette description est utilisée pour donner plus d'informations sur le monde.
:::

::: details `capacity` - La capacité du monde
Cette valeur est le nombre maximum recommandé de personnes dans le monde.
La valeur est un nombre entier positif inférieur à (2^16) ushort.
La valeur 0 indique que le monde n'a pas de limite recommandée.
:::

::: details `tags` - Les étiquettes du monde
Les étiquettes sont des mots-clés qui permettent de catégoriser le monde.
Plus d'informations sur les étiquettes sont disponibles dans la section [Étiquettes](/reference/master/worlds/tags).
:::

::: details `owner` - L'identifiant du propriétaire du monde
Cette valeur est l'identifiant du propriétaire du monde.
La valeur respecte ce format `<id>[]]@<server>`.
:::

::: details `thumbnail` - L'image qui représente le monde
Cette valeur est l'URL vers l'image qui représente le monde.
:::
