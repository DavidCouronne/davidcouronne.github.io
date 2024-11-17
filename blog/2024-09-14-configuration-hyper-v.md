---
title: Configuration de virtualisation avec Hyper-V
description: Configuration de virtualisation avec Hyper-V sur windows 11

authors:
  - name: David Couronné

tags: [virtualisation]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

Configuration de virtualisation avec Hyper-V sur Windows 11

<!-- truncate -->

# Configuration de virtualisation avec Hyper-V

## Prérequis

- Windows 11 Pro, Entreprise ou Éducation
- Processeur supportant la virtualisation

## Étapes de configuration

1. Activer Hyper-V

   - Ouvrez le "Panneau de configuration" > "Programmes" > "Activer ou désactiver des fonctionnalités Windows"
   - Cochez "Hyper-V" et redémarrez votre PC

2. Créer une machine virtuelle

   - Ouvrez le "Gestionnaire Hyper-V"
   - Cliquez sur "Nouvelle" > "Machine virtuelle"
   - Suivez l'assistant pour créer une VM avec suffisamment de ressources pour le jeu
   - Installez le système d'exploitation invité (Windows 10/11 ou une distribution Linux selon vos besoins)

3. Optimiser les performances

   - Utilisez la mémoire dynamique pour une allocation efficace de la RAM
   - Activez les services d'intégration Hyper-V dans la VM
   - Utilisez un disque virtuel sur un SSD pour de meilleures performances

4. Configurer le réseau

   - Créez un commutateur virtuel externe dans Hyper-V pour permettre à la VM d'accéder à Internet

5. Accès à distance
   - Activez le Bureau à distance ou installez un logiciel de streaming comme Parsec dans la VM

## Alternatives à Hyper-V :

Si vous préférez ne pas utiliser Hyper-V ou si vous n'avez pas une version de Windows 11 qui le supporte, vous pouvez envisager :

### VMware Workstation Player :

- Version gratuite pour un usage personnel
- Interface conviviale et bonnes performances

### VirtualBox :

- Gratuit et open-source
- Fonctionne bien pour de nombreuses applications, mais peut avoir des performances limitées pour les jeux

### Streaming de jeux :

Pour améliorer l'expérience de jeu à distance, vous pouvez utiliser des solutions de streaming :

- Parsec : Excellent pour le gaming à faible latence
- Steam Remote Play : Idéal si vous utilisez principalement Steam pour vos jeux
- Moonlight : Si vous avez une carte graphique NVIDIA
