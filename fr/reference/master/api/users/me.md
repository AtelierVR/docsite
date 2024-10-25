# Récupère les informations de l'utilisateur courant

::: warning
Cette méthode nécessite une authentification utilisateur interne.
Plus d'informations sur l'authentification sont disponibles dans la section [Authentification](/reference/master/authentication#bearer).
:::

Cette méthode permet de récupérer les informations de l'utilisateur courant.
Cette méthode est utile pour récupérer les informations de l'utilisateur courant sans avoir à spécifier son identifiant.
On utilise le [Selecteur de l'utilisateur](/reference/master/users/selectors) `@me` pour spécifier l'utilisateur courant.

## Requête

```http
GET /api/users/@me
```

## Réponse

::: code-group
<<< @/snippets/IUserMe.txt#types{ts} [Formats de réponse]
<<< @/snippets/IUserMe.txt#example{ts} [Exemple de réponse]
<<< @/snippets/IUser.txt#types{ts} [IUser]
:::

## Explicatifs utils

::: info
L'objet `IUserMe` est une extension de l'objet `IUser` avec des informations supplémentaires.
Plus d'informations sur l'objet `IUser` sont disponibles dans la section [Informations sur un utilisateur](/reference/master/api/users/get).
:::

::: details `email` - L'adresse email de l'utilisateur
Cette valeur est l'adresse email de l'utilisateur.
:::

::: details `created_at` - La date de création de l'utilisateur
CLa date au format timestamp millisecondes à laquelle l'utilisateur a été créé.
:::

::: details `home` - L'identifiant du monde d'accueil de l'utilisateur
Cette valeur est l'identifiant du monde d'accueil de l'utilisateur.
La valeur respecte ce format `<id>[(;<tag>=<value>)[]]@<server>`.
:::
