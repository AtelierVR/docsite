# Recherche d'utilisateurs

Cette section vous permet de rechercher des utilisateurs sur un serveur Master.
Cette requête utilise divers paramètres pour filtrer les résultats.

## Requête

```http
GET /api/users/search
```

## Paramètres

Tous les paramètres sont optionnes.

| Paramètre | Type                   | Description                                                      |
|-----------|------------------------|------------------------------------------------------------------|
| `query`   | `string`               | Identifiant, Nom de l'utilisateur. Il est insensible à la casse. |
| `limit`   | `uint`                 | Nombre maximum de résultats à retourner. Min: 1, Max: 100.       |
| `offset`  | `uint`                 | Nombre de résultats à sauter. Min: 0.                            |
| `id`      | `string[] \| string`   | Liste d'identifiants/noms d'utilisateurs à rechercher.           |

## Réponse

::: code-group
<<< @/snippets/IUserSearch.txt#types{ts} [Formats de réponse]
<<< @/snippets/IUserSearch.txt#example{ts} [Exemple de réponse]
<<< @/snippets/IUser.txt#types{ts} [IUser]
:::

## Explicatifs utils

export interface IUserSearch {
    total: uint32;
    query: string;
    ids: string[];
    limit: uint32;
    offset: uint32;
    users: IUser[];
}

::: details `total` - Le nombre total de résultats
Ce nombre est le nombre total de résultats trouvés par la requête.
:::

::: details `query` - La requête de recherche
Cette valeur est la requête de recherche utilisée pour filtrer les résultats par id, nom d'utilisateur, et nom d'affichage (insensible à la casse).
:::

::: details `ids` - Les identifiants des utilisateurs
Cette liste est la liste des identifiants des utilisateurs à chercher.
Ces valeurs respecte ce format `<id|username>[@<server>]`.
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

::: details `users` - Les utilisateurs trouvés
Cette liste est la liste des utilisateurs trouvés par la requête.
Plus d'informations sur les utilisateurs sont disponibles dans la section [Utilisateurs](/reference/master/users).
:::
