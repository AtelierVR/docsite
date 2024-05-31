# Informations générales

L'API de Nox est une API REST, ce qui signifie qu'elle utilise les méthodes HTTP pour communiquer.
Pour pouvoir se coordonner avec les clients et les autres serveurs, cette section permet de récuprer des informations sur le serveur.

#### Requête

```http
GET /api/server
```

#### Réponse
| Paramètre | Type | Description |
| --- | --- | --- |
| `data` | [`IServer`](/docs/api/typing.html#iserver) | Informations sur le serveur |
