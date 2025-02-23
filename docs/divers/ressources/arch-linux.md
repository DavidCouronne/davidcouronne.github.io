---
title: Guide Arch Linux
description: Guide pratique pour la configuration et l'administration d'Arch Linux
sidebar_position: 3
---

## Introduction

Ce guide regroupe différentes ressources et astuces pour la configuration et l'administration d'un système Arch Linux. Il est régulièrement mis à jour avec de nouvelles sections sur des tâches courantes d'administration système.

## Installation et gestion de Java

Java est un composant essentiel pour faire fonctionner de nombreuses applications sur Linux. Voici comment gérer efficacement son installation sur Arch Linux.

### Vérification de l'installation

Avant d'installer Java, vérifiez si une version est déjà présente sur votre système :

```bash
java --version
```

### Installation

Arch Linux propose plusieurs versions de Java via son gestionnaire de paquets `pacman`. Les deux versions les plus couramment utilisées sont :

- **Java 17 (LTS)** : Version recommandée pour la plupart des applications modernes
- **Java 8** : Version plus ancienne, encore nécessaire pour certaines applications legacy

Pour installer Java 17 (LTS) :

```bash
sudo pacman -S jre17-openjdk
```

Pour installer Java 8 :

```bash
sudo pacman -S jre8-openjdk
```

:::tip
Si vous développez des applications Java, vous pouvez également installer le JDK (Java Development Kit) en remplaçant `jre` par `jdk` dans les commandes ci-dessus.
:::

### Gestion des versions multiples

Il est possible d'avoir plusieurs versions de Java installées simultanément sur votre système. Pour voir toutes les versions installées :

```bash
archlinux-java status
```

Pour définir la version par défaut :

```bash
sudo archlinux-java set java-17-openjdk
```

:::note
Remplacez `java-17-openjdk` par le nom exact de la version que vous souhaitez utiliser, tel qu'affiché dans la commande `status`.
:::

### Vérification après configuration

Après avoir changé la version par défaut, vérifiez que le changement a bien été pris en compte :

```bash
java --version
```

## Gestion du pare-feu UFW

UFW (Uncomplicated Firewall) est un outil simple et efficace pour gérer les règles de pare-feu sous Arch Linux (ou toute autre distribution Linux utilisant `iptables`). Bien qu’il ne soit pas installé par défaut sur Arch Linux, il est souvent privilégié pour sa simplicité. Voici comment l’utiliser pour visualiser, modifier et réinitialiser vos règles de pare-feu.

### Prérequis

Avant de commencer, assurez-vous que UFW est installé :

```bash
sudo pacman -S ufw
```

Activez ensuite le service pour qu’il démarre automatiquement au démarrage :

```bash
sudo systemctl enable ufw
sudo systemctl start ufw
```

Par défaut, UFW bloque tout le trafic entrant et autorise tout le trafic sortant. Vous pouvez personnaliser cela avec des règles adaptées à vos besoins.

### Visualisation des règles et ports ouverts

Pour voir les règles actuellement configurées ainsi que les ports ouverts, utilisez la commande suivante :

```bash
sudo ufw status
```

Si UFW est activé, cela affichera une liste comme celle-ci :

```
Status: active

To                         Action      From
--                         ------      ----
22/tcp                     ALLOW       Anywhere
80/tcp                     ALLOW       Anywhere
```

- To : Le port ou service concerné.
- Action : L’action appliquée (ALLOW, DENY, etc.).
- From : La source autorisée (ici, "Anywhere" signifie tout le monde).

Pour une version plus détaillée avec les numéros de règles (utile pour les suppressions), ajoutez l’option numbered :

```bash
sudo ufw status numbered
```

Exemple de sortie :

```
Status: active

     To                         Action      From
     --                         ------      ----
[ 1] 22/tcp                    ALLOW IN    Anywhere
[ 2] 80/tcp                    ALLOW IN    Anywhere
```

:::tip

Si UFW affiche Status: inactive, activez-le avec sudo ufw enable (attention, cela applique immédiatement les règles définies).

:::

### Suppression de règles spécifiques

Pour supprimer une règle, vous devez connaître son numéro (obtenu avec sudo ufw status numbered). Par exemple, pour supprimer la règle n°2 (port 80 dans l’exemple ci-dessus) :

```bash
sudo ufw delete 2
```

UFW vous demandera une confirmation avant de supprimer la règle. Vérifiez ensuite avec sudo ufw status que la règle a bien été retirée.

Alternativement, vous pouvez supprimer une règle en la décrivant directement, par exemple :

```bash
sudo ufw delete allow 80/tcp
```

Cela supprime la règle autorisant le port 80 TCP.

:::note
Assurez-vous de ne pas supprimer une règle essentielle (comme l’accès SSH sur le port 22) si vous administrez un serveur à distance, sinon vous risquez de perdre l’accès !
:::

### Réinitialisation complète des règles

Si vous souhaitez repartir de zéro, UFW permet de réinitialiser toutes les règles.
Attention, cette opération supprime toutes les configurations existantes et désactive le pare-feu :

```bash
sudo ufw reset
```

Vous aurez une invite de confirmation. Après cela :

- Le pare-feu sera désactivé.
- Toutes les règles précédentes seront supprimées.

Pour repartir sur une base propre, réactivez UFW et ajoutez vos règles de base, par exemple :

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 22/tcp
sudo ufw enable
```

Cela configure une politique par défaut sécurisée tout en autorisant SSH.

:::warning

Utilisez reset avec précaution, surtout sur un système en production, car cela peut interrompre des services actifs.

:::

## Configuration automatique des disques LUKS

LUKS (Linux Unified Key Setup) est une solution standard pour chiffrer des disques sous Linux.

Configurer des disques chiffrés pour qu’ils se montent automatiquement au démarrage peut être fastidieux, mais un script bien conçu permet d’automatiser cette tâche.

Cette section présente un script qui configure deux disques chiffrés avec des fichiers de clés (keyfiles) pour un montage automatique, tout en expliquant comment l’adapter à un seul disque ou à plusieurs disques selon vos besoins.

### Prérequis

Avant de commencer, assurez-vous que les outils nécessaires sont installés :

```bash
sudo pacman -S cryptsetup
```

Vous devez également avoir au moins une partition chiffrée avec LUKS (par exemple, /dev/sdb1). Si ce n’est pas encore fait, vous pouvez la créer avec :

```bash
sudo cryptsetup luksFormat /dev/sdb1
```

:::warning

Le chiffrement avec luksFormat efface toutes les données sur la partition ciblée. Sauvegardez vos données avant de procéder !

:::

### Personnalisation du script

Le script présenté ci-dessous est conçu pour configurer deux disques (/dev/sdb1 et /dev/sdc1), mais il peut être adapté à un seul disque ou à plusieurs.

Avant de l’exécuter, vous devez le personnaliser pour qu’il corresponde à votre configuration. Voici les étapes essentielles :

1. **Remplacez les UUID** : Les UUID (05a73d34-3ea6-411c-a4a4-a227f457562a et 7d6f4865-d9fb-4176-8dbe-3c0d599f5d4c) dans `/etc/crypttab` sont des exemples. Obtenez les UUID réels de vos partitions avec :

```bash
lsblk -f
```

ou

```bash
blkid /dev/sdb1
```

Mettez à jour le script avec ces valeurs.

2. **Ajustez les périphériques** : Les disques /dev/sdb1 et /dev/sdc1 sont des exemples. Remplacez-les par les partitions réelles de votre système (par exemple, /dev/nvme0n1p2 pour un disque NVMe). Si vous configurez un seul disque, supprimez les lignes relatives au second disque. Pour plusieurs disques, dupliquez les blocs correspondants.

3. **Système de fichiers** : Le script utilise btrfs dans /etc/fstab. Si vous utilisez un autre système de fichiers (comme ext4), modifiez les lignes de /etc/fstab dans le script.

4. **Noms des volumes et points de montage** : Les noms crypto_hdd1, crypto_hdd2, /mnt/hdd1 et /mnt/hdd2 sont arbitraires. Adaptez-les à vos préférences (par exemple, crypto_data et /mnt/data).

:::note

Ne copiez-collez pas le script tel quel sans le personnaliser ! Une mauvaise configuration peut rendre vos disques inaccessibles ou mal montés.

:::

### Script d’automatisation

Voici le script complet, conçu pour deux disques mais adaptable. Copiez-le dans un fichier, par exemple `luks_setup.sh`, et rendez-le exécutable :

```bash
chmod +x luks_setup.sh
```

```bash
#!/bin/bash

# Vérification des privilèges root
if [ "$EUID" -ne 0 ]; then
    echo "Ce script doit être exécuté en tant que root (sudo)"
    exit 1
fi

# Création du répertoire pour les clés
echo "Création du répertoire pour les clés..."
mkdir -p /etc/luks-keys
chmod 600 /etc/luks-keys

# Création des keyfiles
echo "Création des keyfiles..."
dd if=/dev/urandom of=/etc/luks-keys/hdd1.key bs=4096 count=1
dd if=/dev/urandom of=/etc/luks-keys/hdd2.key bs=4096 count=1
chmod 600 /etc/luks-keys/hdd1.key
chmod 600 /etc/luks-keys/hdd2.key

# Ajout des keyfiles aux conteneurs LUKS
echo "Ajout des keyfiles aux disques..."
echo "Pour le premier disque (sdb1):"
cryptsetup luksAddKey /dev/sdb1 /etc/luks-keys/hdd1.key

echo "Pour le second disque (sdc1):"
cryptsetup luksAddKey /dev/sdc1 /etc/luks-keys/hdd2.key

# Création des points de montage
echo "Création des points de montage..."
mkdir -p /mnt/hdd1
mkdir -p /mnt/hdd2
chmod 755 /mnt/hdd1
chmod 755 /mnt/hdd2

# Configuration de crypttab
echo "Configuration de crypttab..."
cat >> /etc/crypttab << EOL
crypto_hdd1 UUID=05a73d34-3ea6-411c-a4a4-a227f457562a /etc/luks-keys/hdd1.key luks
crypto_hdd2 UUID=7d6f4865-d9fb-4176-8dbe-3c0d599f5d4c /etc/luks-keys/hdd2.key luks
EOL

# Configuration de fstab
echo "Configuration de fstab..."
cat >> /etc/fstab << EOL
/dev/mapper/crypto_hdd1 /mnt/hdd1 btrfs defaults 0 0
/dev/mapper/crypto_hdd2 /mnt/hdd2 btrfs defaults 0 0
EOL

echo "Configuration terminée!"
echo "Vous devrez entrer les mots de passe LUKS actuels pour ajouter les keyfiles"
echo "Redémarrez pour tester la configuration"
```

### Exécution du script

Après avoir personnalisé le script, exécutez-le en tant que root :

```bash
sudo ./luks_setup.sh
```

Pendant l’exécution, vous devrez entrer les mots de passe LUKS actuels des disques pour ajouter les keyfiles. Une fois terminé, redémarrez votre système pour vérifier que les disques se montent automatiquement :

```bash
sudo reboot
```

Après le redémarrage, vérifiez les montages avec :

```bash
lsblk
```

Vous devriez voir /mnt/hdd1 et /mnt/hdd2 (ou les points de montage que vous avez choisis) montés correctement.

:::tip

Pour tester sans redémarrer, ouvrez manuellement un volume LUKS avec :

```bash
sudo cryptsetup luksOpen /dev/sdb1 crypto_hdd1 --key-file /etc/luks-keys/hdd1.key
sudo mount /dev/mapper/crypto_hdd1 /mnt/hdd1
```

:::

### Résolution des problèmes

- Disque non monté au démarrage : Vérifiez les UUID dans `/etc/crypttab` et les chemins dans `/etc/fstab`.
- Erreur de keyfile : Assurez-vous que les keyfiles existent et que leurs chemins sont corrects dans `/etc/crypttab`.`

:::note

Les keyfiles doivent être sécurisés. Le script leur applique des permissions restrictives (`chmod 600`), mais protégez bien `/etc/luks-keys`.

:::
