# Référence de l'API

Pour donnée le plus de possiblité aux développeurs, 
l'API de Nox est divisée en plusieurs parties, 
chacune ayant un rôle spécifique.
Cette partie est destinée aux [serveurs de jeu](/docs/master/).

## Spécifications par HTTP

L'API de Nox est une API REST, ce qui signifie qu'elle utilise les méthodes HTTP pour communiquer.
Cela signifie que vous pouvez utiliser n'importe quel client HTTP pour communiquer avec l'API de Nox.

### Mise en forme des requêtes

L'API utilise une forme de réponse standard pour toutes les requêtes.
Vous trouverez donc le contenu de la réponse dans le champ `data` de la réponse.

```ts
interface Response<T> {
    "data": T, // Données de la réponse
    "error"?: {
        "code": number, // Code d'erreur spécifique à l'API
        "message": string, // Message d'erreur
        "status": number // Code HTTP
    },
    "time": number // timestamp de la réponse
    "request": string // basepath de l'url
}
```