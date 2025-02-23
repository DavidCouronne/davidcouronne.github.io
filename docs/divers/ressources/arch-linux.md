---
title: Guide Arch Linux
description: Guide pratique pour la configuration et l'administration d'Arch Linux
sidebar_position: 2
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

## Prochaines sections à venir

Les sections suivantes seront ajoutées prochainement :

- Configuration automatique des disques LUKS
- Gestion du pare-feu UFW
  - Visualisation des règles et ports ouverts
  - Suppression de règles spécifiques
  - Réinitialisation complète des règles
- Et plus encore...

