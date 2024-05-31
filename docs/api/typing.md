# Typage général

Voici la liste des types principaux utilisés dans l'API.

## TimestampMS

Un timestamp en millisecondes, il est sous forme d'un ulong.

### Exemple
```json
1620000000000
```

## IServer

Il s'agit des informations sur le serveur.
| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `id` | `string` | L'identifiant unique du serveur | `false` |
| `title` | `string` | Le titre du serveur | `false` |
| `description` | `string` | La description du serveur | `false` |
| `address` | `string` | L'adresse du serveur | `false` |
| `gateways` | `IGateways` | Les passerelles du serveur | `false` |
| `version` | `string` | La version du serveur | `false` |
| `ready_at` | `TimestampMS` | Le timestamp de démarrage du serveur | `false` |
| `icon` | `URL` | L'URL de l'icône du serveur | `true` |
| `public_key` | `string` | La clé publique du serveur | `true` |

### Exemple
```jsonc
{
    "id": "avr.social",
    "title": "Avr",
    "description": "Le serveur de test de Nox.",
    "address": "https://avr.social",
    "gateways": {
        "http": "https://avr.social",
        "ws": "wss://avr.social"
    },
    "version": "1.0.0",
    "ready_at": 1620000000000,
    "icon": "https://avr.social/icon.png",
    "public_key": "..."
}
```

## IGateways

Les passerelles du serveur.
| Propriété | Type | Description | Optionnel |
| --- | --- | --- | --- |
| `http` | `URL` | L'orgine HTTP du serveur | `false` |
| `ws` | `URL` | L'orgine WebSocket du serveur | `false` |
| `proxy` | `URL` | L'orgine de proxy du serveur | `true` |
| `cdn` | `URL` | L'orgine CDN du serveur | `true` |

### Exemple
```jsonc
{
    "http": "https://avr.social",
    "ws": "wss://avr.social",
    "proxy": "https://proxy.avr.social",
    "cdn": "https://cdn.avr.social"
}