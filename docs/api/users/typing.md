# Typage des utilisateurs

Voici la liste des types d'utilisateurs disponibles.

## IUser

| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `id` | `uint` | L'identifiant de l'utilisateur | `false` |
| `username` | `string` | Le nom d'utilisateur | `false` |
| `display` | `string` | Le nom d'affichage | `false` |
| `server` | `string` | L'identifiant du serveur de l'utilisateur | `false` |
| `tags` | [`TUserTag[]`](#tusertag) | Les tags de l'utilisateur | `false` |
| `thumbnail` | `URL` | L'URL de l'image de profil | `true` |
| `banner` | `URL` | L'URL de la bannière de profil | `true` |
| `links` | `URL[]` | Les liens de l'utilisateur | `false` |
| `rank` | `float[-1;0-1]` | Le rang de l'utilisateur | `false` |

### Exemple

```json
{
    "id": 1,
    "username": "hactazia",
    "display": "Hactazia",
    "server": "avr.social",
    "tags": [
        "sys:admin",
        "dft:can_self_edit"
    ],
    "thumbnail": "https://avr.social/api/users/1/thumbnail.png",
    "banner": "https://avr.social/api/users/1/banner.png",
    "links": [
        "https://twitter.com/hactazia",
        "https://github.com/hactazia"
    ],
    "rank": 0.5
}
```

## ISession

Il fait référence à la session de l'utilisateur.
| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `token` | `string` | Le token de session | `false` |
| `expires` | `TimestampMS` | La date d'expiration de la session | `false` |
| `created_at` | `TimestampMS` | La date de création de la session | `false` |

### Exemple

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    "expires": 1614556800000,
    "created_at": 1614556800000
}
```

## IUserLogin

Il fait référence à l'utilisateur qui vient de se connecter.
::: info
Etendu de [ISession](#isession).
:::
| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `user` | [`IUserMe`](#iuserme) | Les informations de l'utilisateur | `false` |

## IUserMe

Il fait référence à l'utilisateur actuellement authentifié.
::: info
Etendu de [IUser](#iuser).
:::
| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `email` | `string` | L'adresse email de l'utilisateur | `true` |
| `createdAt` | `TimestampMS` | La date de création de l'utilisateur  | `false` |
| `home` | `WorldReference` | L'URL de la page d'accueil de l'utilisateur | `true` |

### Exemple

```json
{
    "id": 1,
    "username": "hactazia",
    "display": "Hactazia",
    "server": "avr.social",
    "tags": [
        "sys:admin",
        "dft:can_self_edit"
    ],
    "thumbnail": "https://avr.social/api/users/1/thumbnail.png",
    "banner": "https://avr.social/api/users/1/banner.png",
    "links": [
        "https://twitter.com/hactazia",
        "https://github.com/hactazia"
    ],
    "rank": 0.5,
    "email": "hactazia@avr.social",
    "createdAt": 1614556800000,
    "home": "5264@avr.social"
}
```

## TUserTag

Il s'agit d'un tag d'utilisateur.
Voici une liste de tags d'utilisateurs disponibles.
Ces tags sont utilisés pour définir les permissions et les rôles des utilisateurs.
Il sont séparé en deux parties, le [délivreur](/docs/api/typing.md#tag-délivreurs) et la valeur, séparé par `:`.

### Valeurs

| Valeur | Description | Délivreurs recommandés |
| --- | --- | --- |
| `admin` | Est un administrateur | `sys \| adm` |
| `unverified` | N'a pas été vérifié par un modérateur (rank === 0) | `sys` |
| `blacklisted` | Est blacklisté | `sys \| adm \| itr` |
| `can_self_edit` | Peut modifier ses propres informations | `dft` |
| `can_self_delete` | Peut supprimer son propre compte | `dft` |
| `can_world_create` | Peut créer des mondes | `dft` |
| `can_world_edit` | Peut modifier ses mondes | `dft` |
| `can_world_delete` | Peut supprimer ses mondes | `dft` |
| `can_world_asset_create` | Peut créer des assets de mondes | `dft` |
| `can_world_asset_edit` | Peut modifier ses assets de mondes | `dft` |
| `can_world_asset_delete` | Peut supprimer ses assets de mondes | `dft` |

### Exemple

```jsonc
[ // Liste de tags
    "sys:admin", // Est un administrateur, par le système
    "dft:can_self_edit" // Modifier ses propres informations, par défaut
]
```

## TUserSelector

Il s'agit d'un sélecteur d'utilisateur.
Il peut être un identifiant, un nom d'utilisateur ou un sélécteur d'utilisateur avancé.

### Identifiant

Un identifiant est un nombre entier positif sur 32 bits (uint).
Il est unique pour chaque utilisateur.

### Nom d'utilisateur

Un nom d'utilisateur est une chaîne de caractères alphanumériques.
::: info
Il se référe à l'expression régulière `/^[a-z0-9_.-]{3,16}$/`.
:::

### Sélecteur avancé

Un sélécteur avancé est une chaîne de caractères qui commence par `@`.
Il désigne un utilisateur ou un groupe d'utilisateurs.
| Valeur | Description | Multiple |
| --- | --- | --- |
| `@me` | L'utilisateur actuellement authentifié | `false` |
| `@admin` | Principal administrateur du serveur | `false` |
| `@mods` | Modérateurs du serveur | `true` |
| `@server` | Utilisateur principal du serveur | `false` |
