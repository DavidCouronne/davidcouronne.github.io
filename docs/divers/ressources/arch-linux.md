---
title: Arch Linux
description: Ressources pour Arch Linux
sidebar_position: 2
---

## Installation de Java


1. Premièrement, vérifier si Java est déjà installé :
```bash
java --version
```

2. Sur Arch Linux, vous pouvez installer Java via pacman. Voici les options :

Pour Java 17 (LTS, recommandé) :

```bash
sudo pacman -S jre17-openjdk
```

Pour Java 8 :

```bash
sudo pacman -S jre8-openjdk
```

3. Si vous avez plusieurs versions de Java installées, vous pouvez les lister avec :

```bash
archlinux-java status
```

4. Pour changer la version par défaut :

```bash
sudo archlinux-java set java-17-openjdk
# ou
sudo archlinux-java set java-8-openjdk
```

5. Vérifiez à nouveau la version active :

```bash
java --version
```

