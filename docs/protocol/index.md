# Protocole

## Introduction

Le protocole permet de faire communique les clients avec les differents relais.
Il est basé sur des paquets de données. Chaque paquet est composé d'un entête et de données. L'entête contient des informations sur le paquet, telles que la taille totale du paquet, l'identifiant unique du paquet et le type de l'événement. Les données contiennent les informations spécifiques à l'événement. Un packet est une liste d'octets (limitée à 1024 octets), qui contient un entête et des données.
La base d'un paquet se présente comme suit :

```
[total_length: ushort][uid: ushort][event: byte][data: total_length - 5 bytes]
```

| Nom | Taille | Description |
| --- | --- | --- |
| total_length | 2 octets | Taille totale du paquet |
| uid | 2 octets | Identifiant unique du paquet |
| event | 1 octet | Type de l'événement |
| data | total_length - 5 octets | Données du paquet |

L'état permet au système de répondre. S'il est égal à 0, il s'agit d'un message sans initiateur, d'un événement serveur.