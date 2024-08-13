# Challenge

## Vérification

Pour que deux Masters puissent se connaitre, ils doivent se partager un secret et l'utiliser en paire avec une clé publique.
Cette route permet de vérifier si le secret est correct.
Elle envoie un code de vérification chiffrée à l'autre Master avec la clé publique de ce dernier.
Et recupère le code de vérification chiffée avec sa clé publique.
Il pourra alors vérifier si le code est correct.

### Requête

```http
POST /api/challenge/verify
```

#### Corps

| Paramètre | Type | Description |
| --- | --- | --- |
| `address` | `string` | Adresse de son Master |
| `data` | `string` | Code de vérification chiffrée avec la clé publique de l'autre Master |
| `signature` | `string` | Signature du code de vérification chiffrée avec sa clé privée |

### Réponse

| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IChallengeVerify`](/docs/api/challenge/typing.md#ichallengeverify) | Les informations du challenge |
| `error` | [`IError`](/docs/api/typing.md#ierror) | Une erreur sur la vérification |