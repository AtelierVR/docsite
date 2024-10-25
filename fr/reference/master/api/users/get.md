# Informations sur un utilisateur

Cette requête permet de récupérer des informations sur un utilisateur.
Elle est utilisée pour obtenir des informations sur un utilisateur, telles que son nom, son identifiant, et d'autres informations pertinentes.
Cette requête est accessible par tout le monde, même les utilisateurs non authentifiés.
Certaines informations peuvent être masquées pour des raisons de confidentialité.

## Requête


```http
GET /api/users/:search
```

## Paramètres

| Paramètre | Type | Description |
|---|---|---|
| `search` | `string` | Identifiant, Nom de l'utilisateur, ou selecteur de recherche. |

::: info
Un selecteur de recherche est un mot-clé pécédé d'un symbole `@` qui permet de rechercher des utilisateurs selon des critères spécifiques.
Un selecteur de recherche peut être un nom de groupe et donc peut retourner une liste d'utilisateurs.
Plus d'informations sur les selecteurs de recherche sont disponibles dans la section [Selecteurs d'utilisateurs](/reference/master/users/selectors).
:::

## Réponse

::: code-group
<<< @/snippets/IUser.txt#types{ts} [Formats de réponse]
<<< @/snippets/IUser.txt#example{ts} [Exemple de réponse]
:::

## Explicatifs utils

::: details `id` - L'identifiant unique de l'utilisateur
Cet identifiant est généré automatiquement par le serveur et ne doit pas être modifié.
Ce dernier sert à l'administration du serveur et à identifier l'utilisateur sur le réseau.
La valeur est un nombre entier positif unique inférieur à 2^32 (uint32).
La valeur 0 est réservée et ne doit pas être utilisée.
:::

::: details `username` - Le nom d'utilisateur
Le nom d'utilisateur est utilisé pour l'authentification et le partage entre personnes.
Ce nom est unique sur le serveur, mais peut être modifié par l'utilisateur.
La valeur peut êtres vérifiée par une expression régulière: `/^[a-z0-9_.-]{3,16}$/`.
:::

::: details `display` - Le nom d'affichage
Le nom d'affichage est utilisé pour se faire reconnaître par les autres utilisateurs.
Ce nom n'est pas unique et peut être modifié par l'utilisateur.
La valeur peut êtres vérifiée par une expression régulière: `/^.{3,32}$/`.
:::

::: details `server` - Le serveur de l'utilisateur
Cette valeur est l'adresse unique du serveur sur lequel l'utilisateur est enregistré.
:::

::: details `tags` - Les étiquettes de l'utilisateur
Les étiquettes sont des mots-clés qui permettent de catégoriser l'utilisateur.
Plus d'informations sur les étiquettes sont disponibles dans la section [Étiquettes](/reference/master/users/tags).
:::

::: details `thumbnail` - L'image de profil
Cette valeur est l'URL vers l'image de profil de l'utilisateur.
:::

::: details `banner` - L'image de bannière
Cette valeur est l'URL vers l'image de bannière de l'utilisateur.
:::

::: details `links` - Les liens de l'utilisateur
Les liens sont des URL que l'utilisateur veut partager avec les autres utilisateurs.
:::

::: details `rank` - Le rang de l'utilisateur
Le rang est une valeur numérique qui permet de classer les utilisateurs.
Une norme de niveau de rang est sous une standardisation,
mais peut être utilisée pour classer les utilisateurs selon des critères spécifiques.
La valeur est un nombre à virgule flottante entre 0 et 1.
Plus d'informations sur les rangs sont disponibles dans la section [Rangs](/reference/master/users/ranks).
:::
