# Well-Known
::: warning
Cette section est en cours de développement.
Pour le moment vous pouvez consulté l'état du serveur via le code HTTP.
:::
## Vérification du système Nox

Pour vérifier que le système Nox est en ligne, vous pouvez utiliser la route `/.well-known/nox`.
Cela permet de vérifier que le système Nox est en ligne, et de vérifier la version du système.

### Requête

```http
GET /.well-known/nox
```

### Réponse
Ce format n'est pas standardisé avec le format de réponse de l'API.

#### En-têtes
| Nom | Type | Description |
| --- | --- | --- |
| `Content-Type` | `application/json` | Le type de contenu de la réponse |
| `X-Nox-Version` | `string` | La version du système Nox |

#### Corps
| Paramètre | Type | Description |
| --- | --- | --- |
| `version` | `string` | La version du système Nox |
| `status` | `"ok" \| "maintenance" \| "offline"` | L'état du système Nox |
| `started_at` | `TimestampMS` | Le timestamp de démarrage |
| `features` | `string[]` | Les fonctionnalités activées |

## Fonctionnalités
Les fonctionnalités sont des mots-clés qui permettent de définir les fonctionnalités activées sur le système Nox.
Il est possible d'avoir des fonctionnalités personnalisées, mais voici les fonctionnalités de base:
- `avatar` : Indique que la gestion des avatars est activée.
- `world` : Indique que la gestion des mondes est activée.
- `user` : Indique que la gestion des utilisateurs est activée.
- `instance` : Indique que la gestion des instances est activée.

## Exemple
```json
{
    "version": "1.0.0",
    "status": "ok",
    "started_at": 1620000000000,
    "features": [
        "avatar", 
        "world", 
        "user", 
        "instance"
    ]
}
```