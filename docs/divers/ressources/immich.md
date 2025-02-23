---
title: Installation et utilisation d’Immich sous Arch Linux avec Podman
description: Créez votre propre serveur de photos avec Immich sur Arch Linux en utilisant Podman
sidebar_position: 7
keywords: ['Immich', 'Arch Linux', 'Podman', 'serveur photo', 'Google Photos alternatif']
---

## Introduction

Immich est une solution open-source pour héberger vos photos et vidéos, offrant des fonctionnalités comme la sauvegarde automatique, le partage d’albums et la recherche par métadonnées ou reconnaissance faciale. Si vous cherchez une alternative à Google Photos que vous contrôlez entièrement, Immich est un excellent choix. Dans ce guide, nous allons installer Immich sur Arch Linux en utilisant Podman, un outil de conteneurisation sans démon qui remplace avantageusement Docker. Ce tutoriel suppose que vous avez une connaissance de base d’Arch Linux et de la ligne de commande.

## Prérequis

Avant de commencer, assurez-vous d’avoir :

- Un système Arch Linux à jour :
  ```bash
  sudo pacman -Syu
  ```
- Podman installé :

```bash
sudo pacman -S podman
```

- Podman-compose pour gérer les services multiples d’Immich :

```bash
sudo pacman -S podman-compose
```

- Un répertoire pour stocker vos photos (ex. /mnt/photos) avec suffisamment d’espace (SSD recommandé pour la base de données).
- Accès root ou sudo pour configurer les conteneurs.

:::tip
Podman fonctionne sans démon, ce qui le rend léger et sécurisé. Si vous avez utilisé Docker auparavant, la transition est simple grâce à sa compatibilité avec les commandes Docker.
:::

## Configuration de l’environnement

Immich utilise plusieurs services (serveur, base de données PostgreSQL, Redis, etc.). Nous allons cloner le dépôt officiel et ajuster les fichiers pour Podman.

- Créez un répertoire pour le projet :

```bash
mkdir ~/immich && cd ~/immich
```

- Clonez le dépôt Immich :

```bash
git clone https://github.com/immich-app/immich.git .
```

- Copiez le fichier d’environnement exemple :

```bash
cp docker/example.env .env
```

- Éditez .env avec vos préférences :

```bash
nano .env
```

- Modifiez au moins ces variables :

```
UPLOAD_LOCATION=/mnt/photos (chemin où vos photos seront stockées)
DB_PASSWORD=votre_mot_de_passe (choisissez un mot de passe fort)
IMMICH_VERSION=release (pour la dernière version stable)
```

Exemple :

```
UPLOAD_LOCATION=/mnt/photos
DB_PASSWORD=monmotdepasse123
IMMICH_VERSION=release
DB_HOSTNAME=immich_postgres
DB_USERNAME=postgres
DB_DATABASE_NAME=immich
REDIS_HOSTNAME=immich_redis
```

:::note

Assurez-vous que `/mnt/photos` existe et que l’utilisateur exécutant Podman a les permissions nécessaires (`sudo mkdir /mnt/photos && sudo chown $USER:$USER /mnt/photos`).

:::

## Lancement d’Immich avec Podman

Immich fournit un fichier `docker-compose.yml`, compatible avec `podman-compose`.

- Vérifiez que Podman est prêt :

```bash
podman --version
```

- Lancez les conteneurs :

```bash
podman-compose up -d
```

`-d` lance les services en arrière-plan.

Podman téléchargera les images (serveur Immich, PostgreSQL, Redis, etc.) et les démarrera.

- Vérifiez que tout fonctionne :

```bash
podman ps
```

Vous devriez voir plusieurs conteneurs actifs (ex. immich_server, immich_postgres, immich_redis).

## Trouver l’adresse IP du serveur

Pour accéder à Immich depuis un autre appareil sur votre réseau (ou à distance), vous devez connaître l’adresse IP de votre machine Arch Linux.

- Utilisez cette commande pour afficher vos adresses IP :

```bash
ip addr show
```

Cherchez une ligne comme :

```
inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0
```

Ici, 192.168.1.100 est l’adresse IP locale de ton serveur sur l’interface eth0 (ou wlan0 pour le Wi-Fi).

Une alternative simple :

```bash
hostname -I
```

Cela affiche uniquement les adresses IP actives (ex. `192.168.1.100`).

:::tip
Si vous êtes sur un réseau domestique, cette IP est locale. Pour un accès externe, vous devrez utiliser votre IP publique (trouvable via `curl ifconfig.me`) et configurer la redirection de port sur votre routeur.
:::

## Ouvrir le port 2283 avec UFW

Immich utilise le port 2283 par défaut. Si vous avez activé UFW, ouvrez ce port pour autoriser l’accès.

- Ajoutez une règle pour le port 2283 :

```bash
sudo ufw allow 2283/tcp
```

- Vérifiez que la règle est active :

```bash
sudo ufw status
```

Vous devriez voir :

```
2283/tcp                   ALLOW       Anywhere
```

- Rechargez UFW si nécessaire :

```bash
sudo ufw reload
```

:::note
Si vous accédez à Immich depuis l’extérieur (via votre IP publique), configurez aussi une redirection de port 2283 sur votre routeur vers l’IP locale de votre serveur.
:::

## Accès à Immich

Ouvrez votre navigateur à l’adresse : http://localhost:2283.

Créez un compte administrateur lors de la première connexion.

Configurez l’application mobile Immich (disponible sur iOS/Android) en entrant l’URL de votre serveur (ex. http://votre_ip:2283/api).

:::tip
Pour un accès externe, configurez un reverse proxy (ex. Nginx) et un certificat SSL avec Let’s Encrypt.
:::

## Utilisation d’Immich

- Ajout de photos : Téléversez manuellement via l’interface web ou configurez l’application mobile pour une sauvegarde automatique.
- Organisation : Immich crée une chronologie et peut détecter des visages ou objets avec son module d’apprentissage automatique (activé par défaut).
- Partage : Créez des albums et partagez-les avec des liens sécurisés.

:::note
Si vous avez beaucoup de photos, le traitement initial (indexation, vignettes) peut prendre du temps. Assurez-vous que votre système a au moins 4 Go de RAM (6 Go recommandé).
:::

## Gestion et maintenance

- Mise à jour :

```bash
podman-compose down
podman-compose pull
podman-compose up -d
```

- Arrêt des services :

```bash
podman-compose down
```

- Logs : Consultez les journaux si nécessaire :

```bash
podman logs immich_server
```

## Prochaines étapes

Pour aller plus loin :

- Configurez une sauvegarde régulière de /mnt/photos et de la base de données PostgreSQL.
- Explorez les options avancées d’Immich, comme l’intégration de Typesense pour une recherche plus rapide (voir la doc officielle).
- Immich sous Podman sur Arch Linux offre une alternative puissante et privée à Google Photos. Profitez de votre serveur photo personnalisé !
