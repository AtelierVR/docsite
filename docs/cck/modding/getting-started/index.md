# Getting Started

Pour commencer un projet, vous avez la possibilité de partir à partir d'un projet Unity.
<br>
Vous trouverez dans quelques temps les fichiers pour pouvoir commencer un projet.

## Prérequis
Vous devez avoir ces prérequis pour pouvoir commencer un projet:
- Unity Hub
- Unity >=6000.0.5f1
- Code Editor (Visual Studio, Visual Studio Code, Rider, etc.)

## Nouveau projet
Pour commencer un nouveau projet, vous avez deux possibilités:
- Créer un nouveau projet Unity et importer les fichiers du jeu en tant que package
- Créer un nouveau projet Unity et importer uniquement le CCK

## Créer un Mod
Un mod est un essemble de fichiers qui permettent que le CCK puisse detecter et compiler ce dernier.
Nous vous conseillons de créer un dossier dans `Assets/Mods`, là où vous pourrez y mettre vos divers mods.
Cela est utile lors que voulez essayer les nouveaux mods que vous avez créé avec le code du jeu sans devoir tout recompiler.

### Fichiers & Metadata
Dans le dossier `Assets/Mods`, vous devez créer un dossier avec l'ID de votre mod, par exemple `com.example.mod`.
Dans ce dossier, vous devez créer un fichier `nox.mod.json` qui contient les [informations](./metadata) de votre mod.
Vous devez aussi créer un fichier `Assembly Definition` au même nom que le dossier, par exemple `com.example.mod.asmdef`.

### Assembly Definition
Vous pourrez ajouter la dépendance `NoxCCK.dll` pour pouvoir utiliser les classes du jeu.
Votre assembly definition devrait (avec d'autres informations) ressembler à ceci:
```json
{
    "name": "com.example.mod",
    "references": [
        "NoxCCK"
    ]
}
```

### Scripts
Vous pouvez maintenant créer des scripts dans votre mod.
Dans Unity, vous ne pouvez coder uniquement en C#.
Vous devez impérativement utiliser l'ID de votre mod pour les namespaces de vos scripts.
Voici un exemple de script (Client) dans votre mod:
```csharp
using Nox.CCK;
using Nox.CCK.Mods.Cores;
using Nox.CCK.Mods.Initializers;

namespace com.example.mod
{
    public class ExampleMod : ClientModInitializer
    {
        private ClientModCoreAPI coreAPI;

        public void OnInitialize(ModCoreAPI api)
        {
            Debug.Log("Run everytime the game is initialized!");
        }

        public void OnInitializeClient(ClientModCoreAPI api)
        {
            coreAPI = api;
            Debug.Log("Run if the game is in client mode!");
        }

        public void OnDispose()
        {
            Debug.Log("Run everytime the mod is disposed!");
        }
    }
}
```
Vous trouverez plus d'informations sur les [Initializers](/cck/references/initializers/) et les [Cores](/cck/references/cores/) dans la documentation.
