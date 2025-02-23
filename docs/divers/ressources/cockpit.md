---
title: Installation de Cockpit sous Arch Linux avec Podman, Samba et UFW
description: Guide pour installer Cockpit sur Arch Linux, gérer Podman, Samba et les groupes, et ouvrir les ports avec UFW
sidebar_position: 8
keywords: ['Cockpit', 'Arch Linux', 'Podman', 'Samba', 'UFW', 'gestion serveur']
---

## Introduction

Cockpit est une interface web open-source qui simplifie l’administration d’un serveur Linux. Avec son design intuitif, il permet de surveiller les performances, gérer les conteneurs Podman, configurer des partages Samba, administrer les groupes d’utilisateurs, et plus encore, le tout depuis un navigateur. Dans ce guide, nous installerons Cockpit sur Arch Linux, ajouterons des plugins essentiels, et configurerons UFW pour autoriser l’accès en réseau local. Ce tutoriel s’adresse aux utilisateurs familiers avec Arch Linux et la ligne de commande.

## Prérequis

Avant de commencer, assurez-vous d’avoir :

- Un système Arch Linux à jour :
  ```bash
  sudo pacman -Syu
  ```
- Accès root ou sudo.
- Une connexion réseau fonctionnelle.

## Installation de Cockpit

- Installez le paquet de base cockpit :

```bash
sudo pacman -S cockpit
```

- Démarrez et activez le service Cockpit pour qu’il se lance au démarrage :

```bash
sudo systemctl enable --now cockpit.socket
```

- Vérifiez que Cockpit fonctionne :

```bash
sudo systemctl status cockpit.socket
```

Si tout est correct, vous verrez un statut "`active (listening)`".

- Accédez à Cockpit localement via votre navigateur à https://localhost:9090.
- Connectez-vous avec vos identifiants Arch Linux (utilisateur et mot de passe).

:::note
Par défaut, Cockpit utilise un certificat auto-signé. Pour un certificat SSL valide, voir la section "Sécurité" plus bas.
:::

## Installation des plugins essentiels

Cockpit est modulaire. Voici les plugins clés pour gérer Podman, Samba, et les groupes d’utilisateurs.

### Gestion des conteneurs Podman

Installez `cockpit-podman` pour gérer les conteneurs Podman :

```bash
sudo pacman -S cockpit-podman
```

Une fois installé, redémarrez Cockpit :

```bash
sudo systemctl restart cockpit.socket
```

Dans l’interface, allez dans "Podman Containers" pour voir, lancer, arrêter ou supprimer des conteneurs. Assurez-vous que Podman est installé (`sudo pacman -S podman`).

:::tip
Pour démarrer un conteneur simple via Cockpit, cliquez sur "Create Container", entrez une image (ex. docker.io/library/nginx), et mappez un port (ex. 8080:80).
:::

### Gestion des partages Samba

- Installez `cockpit-file-sharing` pour configurer les partages Samba :

```bash
sudo pacman -S cockpit-file-sharing samba
```

- Redémarrez Cockpit après l’installation. Dans l’interface, accédez à "File Sharing" pour créer des partages Samba ou NFS facilement.

### Gestion des groupes et utilisateurs

Le plugin de base pour les comptes est inclus dans cockpit. Allez dans "Accounts" pour gérer les utilisateurs et groupes locaux :

- Ajoutez un utilisateur : "Create New Account".
- Modifiez un groupe : Cliquez sur un utilisateur, puis "Groups".
  :::note
  Pour des fonctionnalités avancées (ex. LDAP), installez cockpit-389-ds (sudo pacman -S cockpit-389-ds).
  :::

### Autres plugins utiles

`cockpit-storaged` : Gestion des disques et partitions (sudo pacman -S cockpit-storaged).
`cockpit-machines` : Gestion des machines virtuelles avec libvirt (sudo pacman -S cockpit-machines).

## Ouvrir les ports nécessaires avec UFW

Cockpit écoute par défaut sur le port 9090. Pour un accès depuis le réseau local, configurez UFW.

- Installez UFW si ce n’est pas déjà fait :

```bash
sudo pacman -S ufw
sudo systemctl enable --now ufw
```

- Autorisez le port 9090 pour Cockpit :

```bash
sudo ufw allow 9090/tcp
```

Si vous utilisez Samba, ouvrez les ports associés :

```bash
sudo ufw allow Samba
```

Cela ouvre les ports 137-139 (UDP/TCP) et 445 (TCP).

- Vérifiez les règles :

```bash
sudo ufw status
```

Résultat attendu :

```
9090/tcp                   ALLOW       Anywhere
137,138/udp (Samba)        ALLOW       Anywhere
139,445/tcp (Samba)        ALLOW       Anywhere
```

Rechargez UFW pour appliquer les changements :

```bash
sudo ufw reload
```

:::tip
Pour limiter l’accès à votre réseau local (ex. 192.168.1.0/24), utilisez :

```bash
sudo ufw allow from 192.168.1.0/24 to any port 9090 proto tcp
```

Puis supprimez la règle générale avec `sudo ufw delete allow 9090/tcp`.
:::

## Accès en réseau local

- Trouvez l’adresse IP de votre serveur :

```bash
ip addr show
```

Cherchez l’IP locale (ex. 192.168.1.100 sur l’interface eth0 ou wlan0). Ou utilisez :

```bash
hostname -I
```

- Depuis un autre appareil sur le même réseau, ouvrez un navigateur à https://<votre_ip>:9090 (ex. https://192.168.1.100:9090). Connectez-vous avec vos identifiants.

:::note
Si vous obtenez une erreur de connexion, vérifiez que le port 9090 est bien ouvert dans UFW et que votre pare-feu ou routeur ne bloque pas le trafic.
:::

## Sécurisation (optionnel)

- Certificat SSL : Par défaut, Cockpit utilise un certificat auto-signé. Pour un certificat valide :
  - Placez un certificat (.cert) et une clé (.key) dans /etc/cockpit/ws-certs.d/.
  - Redémarrez Cockpit : sudo systemctl restart cockpit.
- Mot de passe fort : Assurez-vous que les comptes utilisés ont des mots de passe robustes.

## Utilisation de Cockpit

- Podman : Dans "Podman Containers", démarrez/arrêtez des conteneurs, consultez les logs ou supprimez des images inutilisées.
- Samba : Sous "File Sharing", créez un partage en spécifiant un dossier (ex. /srv/samba) et les permissions.
- Groupes : Ajoutez un utilisateur à un groupe (ex. sudo) via "Accounts" pour lui donner des privilèges.

## Prochaines étapes

- Ajoutez une sauvegarde pour vos partages Samba avec rsync.
- Explorez d’autres plugins Cockpit comme cockpit-selinux pour gérer SELinux.

Avec Cockpit sous Arch Linux, vous avez une interface puissante pour gérer Podman, Samba et vos utilisateurs, accessible en réseau local grâce à UFW !
