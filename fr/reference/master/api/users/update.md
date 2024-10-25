# Modifie les informations de l'utilisateur courant

::: warning
Cette méthode nécessite une authentification utilisateur interne.
Plus d'informations sur l'authentification sont disponibles dans la section [Authentification](/reference/master/authentication#bearer).
Elle nécessite également l'autorisation `sys:can_self_edit`.
:::

Cette méthode permet de modifier les informations de l'utilisateur courant.
Pour explicitement supprimer une valeur, il faut la remplacer par `null` ou par le texte `"NULL"`;

## Requête

```http
POST /api/users/@me
Content-Type: application/json
```

## Contenu de la requête

::: code-group
<<< @/snippets/IUserMeUpdateData.txt#types{ts} [Formats de requête]
<<< @/snippets/IUserMeUpdateData.txt#example{ts} [Exemple de requête]
:::

## Réponse

::: code-group
<<< @/snippets/IUserMe.txt#types{ts} [Formats de réponse]
<<< @/snippets/IUserMe.txt#example{ts} [Exemple de réponse]
<<< @/snippets/IUser.txt#types{ts} [IUser]
:::

## Explicatifs utils

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

::: details `email` - L'adresse email de l'utilisateur
Cette valeur est l'adresse email de l'utilisateur.
Dès qu'une adresse email est définie, elle ne peut pas être supprimée ou modifiée.
:::

::: details `password` - Le mot de passe de l'utilisateur
Ce mot de passe est utilisé pour l'authentification de l'utilisateur.
Pour des questions de sécurité, envoyer le SHA-256 du mot de passe.
:::

::: details `thumbnail` - L'image de profil
Cette valeur est l'URL vers l'image de profil de l'utilisateur.
:::

::: details `banner` - L'image de bannière
Cette valeur est l'URL vers l'image de bannière de l'utilisateur.
:::

::: details `links` - Les liens de l'utilisateur
Cette liste est la liste des liens de l'utilisateur.
:::

::: details `home` - L'identifiant du monde d'accueil de l'utilisateur
Cette valeur est l'identifiant du monde d'accueil de l'utilisateur.
La valeur respecte ce format `<id>[(;<tag>=<value>)[]]@<server>` si elle est définie.
:::