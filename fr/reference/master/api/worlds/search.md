# Recherche d'utilisateurs

Cette section vous permet de rechercher des mondes sur un serveur Master.
Cette requête utilise divers paramètres pour filtrer les résultats.

::: info
Cette requête est se limite aux mondes publiques avec l'étiquette `usr:public`.
Plus d'informations sur les étiquettes sont disponibles dans la section [Étiquettes](/reference/master/worlds/tags).
:::

## Requête

```http
GET /api/worlds/search
```

## Paramètres

Tous les paramètres sont optionnes.
Lors d'une recherche avec query et id, la recherche se fera sur le résultat id uniquement.

| Paramètre | Type                   | Description                                                      |
|-----------|------------------------|------------------------------------------------------------------|
| `query`   | `string`               | Titre ou description du monde. Il est insensible à la casse.     |
| `limit`   | `uint`                 | Nombre maximum de résultats à retourner. Min: 1, Max: 100.       |
| `offset`  | `uint`                 | Nombre de résultats à sauter. Min: 0.                            |
| `id`      | `string[] \| string`   | Liste d'identifiants des mondes à rechercher.                    |

## Réponse

::: code-group
<<< @/snippets/IWorldSearch.txt#types{ts} [Formats de réponse]
<<< @/snippets/IWorldSearch.txt#example{ts} [Exemple de réponse]
<<< @/snippets/IWorld.txt#types{ts} [IWorld]
:::

## Explicatifs utils

::: details `total` - Le nombre total de résultats
Ce nombre est le nombre total de résultats trouvés par la requête.
:::

::: details `query` - La requête de recherche
Cette valeur est la requête de recherche utilisée pour filtrer les résultats par titre et description (insensible à la casse).
:::

::: details `ids` - Les identifiants des mondes
Cette liste est la liste des identifiants des worlds à chercher.
Ces valeurs respecte ce format `<id>[@<server>]`.
Les valeurs qui indiquent qu'il ne sont pas sur le serveur actuel sont ignorées, ce doit êtres des adresse « locale ».
:::

::: details `limit` - Le nombre maximum de résultats
Ce nombre est le nombre maximum de résultats à retourner.
La valeur est entre 1 et 100, par défaut 10.
S'il y a un nombre inférieur, égal à 0, ou supérieur à 100, la valeur sera ajustée.
:::

::: details `offset` - Le nombre de résultats à sauter
Ce nombre est le nombre de résultats à sauter avant de retourner les résultats.
La valeur est un nombre entier positif, par défaut 0.
S'il y a un nombre inférieur à 0, la valeur sera ajustée.
:::

::: details `worlds` - Les mondes trouvés
Cette liste est la liste des mondes trouvés par la requête.
Plus d'informations sur les mondes sont disponibles dans la section [Mondes](/reference/master/worlds).
:::