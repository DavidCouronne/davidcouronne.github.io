---
title: Installation et utilisation du bureau à distance sur Windows 11
description: Guide détaillé pour configurer et utiliser le bureau à distance sur Windows 11, accessible depuis Windows, Mac et Linux.
slug: bureau-a-distance-windows11
authors:
  - name: David Couronné
tags: [Windows 11, bureau à distance, RDP, Windows, Mac, Linux]
hide_table_of_contents: false
---

Le bureau à distance est une fonctionnalité puissante de Windows 11 qui permet d'accéder à votre PC depuis d'autres appareils sur votre réseau local. Ce guide vous montrera comment l'installer, le configurer et l'utiliser depuis différents systèmes d'exploitation.

<!-- truncate -->

## Installation du bureau à distance sur Windows 11

1. Ouvrez les Paramètres Windows (Windows + I).
2. Allez dans Système > Bureau à distance.
3. Activez le commutateur "Bureau à distance".
4. Notez le nom de votre PC affiché sous "Comment se connecter à ce PC".

## Configuration du pare-feu Windows

1. Ouvrez le Pare-feu Windows Defender.
2. Cliquez sur "Autoriser une application ou une fonctionnalité via le Pare-feu Windows Defender".
3. Assurez-vous que "Bureau à distance" est coché pour les réseaux privés.

## Accès depuis différents systèmes d'exploitation

### Windows

1. Ouvrez l'application "Connexion Bureau à distance".
2. Entrez le nom ou l'adresse IP du PC Windows 11.
3. Cliquez sur "Connecter".

### macOS

1. Téléchargez "Microsoft Remote Desktop" depuis l'App Store.
2. Ouvrez l'application et cliquez sur "Add PC".
3. Entrez le nom ou l'adresse IP du PC Windows 11.
4. Cliquez sur "Add" puis double-cliquez sur le PC pour vous connecter.

### Linux

#### Ubuntu et dérivés

1. Installez Remmina : `sudo apt-get install remmina`
2. Ouvrez Remmina et cliquez sur "Nouveau".
3. Choisissez le protocole RDP.
4. Entrez le nom ou l'adresse IP du PC Windows 11.
5. Cliquez sur "Connecter".

#### Fedora

1. Installez Remmina : `sudo dnf install remmina`
2. Suivez les mêmes étapes que pour Ubuntu.

#### Arch Linux

1. Installez Remmina : `sudo pacman -S remmina`
2. Suivez les mêmes étapes que pour Ubuntu.

## Sessions simultanées sur Windows 11

Windows 11, dans sa version grand public, ne permet pas par défaut d'avoir plusieurs sessions utilisateur actives simultanément. Cependant, il existe des solutions pour permettre à un utilisateur de se connecter à distance sans perturber la session locale active :

### 1. Utilisation de Windows 11 Pro ou Entreprise

Windows 11 Pro et Entreprise offrent la possibilité d'activer les connexions simultanées via une fonctionnalité appelée "Remote Desktop Services" (anciennement Terminal Services).

Pour activer cette fonctionnalité :

1. Ouvrez le "Gestionnaire de serveur" (vous devrez peut-être d'abord l'installer via "Ajouter des rôles et fonctionnalités").
2. Cliquez sur "Ajouter des rôles et fonctionnalités".
3. Sélectionnez "Services Bureau à distance" dans la liste des rôles.
4. Suivez l'assistant pour terminer l'installation.

Une fois activé, plusieurs utilisateurs peuvent se connecter simultanément sans perturber les autres sessions.

### 2. Logiciels tiers pour Windows 11 Home

Pour les utilisateurs de Windows 11 Home, des solutions tierces existent :

- **RDP Wrapper** : C'est un projet open-source qui permet d'activer les fonctionnalités de bureau à distance simultané sur les versions non-serveur de Windows.

  **Attention** : L'utilisation de RDP Wrapper peut violer les conditions d'utilisation de Microsoft et présenter des risques de sécurité. Utilisez-le à vos propres risques.

### 3. Alternatives au Bureau à Distance

Si vous ne pouvez pas utiliser les solutions ci-dessus, considérez ces alternatives :

1. **TeamViewer** : Permet des connexions simultanées sans perturber l'utilisateur local.
2. **AnyDesk** : Offre des fonctionnalités similaires à TeamViewer.
3. **Chrome Remote Desktop** : Solution gratuite de Google, facile à configurer.

Ces logiciels permettent à un utilisateur distant de se connecter sans déconnecter ou perturber l'utilisateur local.

### Considérations de sécurité pour les sessions simultanées

- Assurez-vous que chaque utilisateur a son propre compte avec des permissions appropriées.
- Activez l'authentification à deux facteurs pour chaque compte.
- Surveillez régulièrement les journaux de connexion pour détecter toute activité suspecte.
- Considérez l'utilisation d'un VPN pour les connexions à distance, ajoutant une couche de sécurité supplémentaire.

En comprenant ces options et leurs implications, vous pouvez choisir la meilleure approche pour permettre des connexions simultanées sur votre système Windows 11, tout en maintenant un niveau de sécurité élevé.

## Limitez l'accès au bureau à distance aux adresses IP de confiance

- Ouvrez le "Pare-feu Windows Defender avec fonctions avancées de sécurité".
- Cliquez sur "Règles de trafic entrant" dans le panneau de gauche.
- Trouvez la règle "Bureau à distance - User Mode (TCP-In)" et faites un clic droit dessus.
- Sélectionnez "Propriétés".
- Allez dans l'onglet "Étendue".
- Sous "Adresses IP distantes", sélectionnez "Ces adresses IP".
- Cliquez sur "Ajouter" et entrez les adresses IP ou plages d'adresses de confiance.
- Cliquez sur "OK" pour sauvegarder les changements.

Cette configuration empêchera les connexions à distance provenant d'adresses IP non spécifiées, renforçant considérablement la sécurité de votre système.

## Dépannage

- Assurez-vous que les deux appareils sont sur le même réseau.
- Vérifiez que le pare-feu ne bloque pas les connexions.
- Utilisez l'adresse IP si le nom d'hôte ne fonctionne pas.

En suivant ce guide, vous devriez pouvoir configurer et utiliser le bureau à distance sur votre PC Windows 11 depuis divers systèmes d'exploitation. N'hésitez pas à adapter les paramètres en fonction de vos besoins de sécurité et de performance.
