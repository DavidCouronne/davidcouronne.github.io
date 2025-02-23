---
title: Configuration de Duplicati pour des sauvegardes multi-cloud
description: Une configuration de Duplicati pour des sauvegardes chiffrées
sidebar_position: 7
---

## Configuration de Duplicati pour des sauvegardes multi-cloud

Dans cet article, nous allons voir comment configurer Duplicati pour sauvegarder automatiquement vos données vers différents services cloud (OneDrive, Google Drive). Duplicati est une solution de sauvegarde open source qui offre le chiffrement de bout en bout et la possibilité d'utiliser plusieurs destinations de stockage.

## Installation sur CachyOS (Arch Linux)

Commençons par installer Duplicati et configurer le service :

```bash
# Installation via yay
yay -S duplicati
# Sélectionnez l'option 2 (duplicati-bin) dans la liste

# Configuration du pare-feu (UFW)
sudo ufw allow 8200/tcp

# Activation et démarrage du service au niveau utilisateur
systemctl --user enable duplicati
systemctl --user start duplicati

# Vérification du statut
systemctl --user status duplicati
```

## Configuration de l'interface web

Une fois installé, accédez à l'interface web via `http://localhost:8200`. C'est ici que nous allons configurer nos différentes sauvegardes.

## Configuration des sauvegardes multi-cloud

### 1. Structure recommandée

Pour une organisation claire, planifiez vos sauvegardes selon vos besoins. Par exemple :

- Photos personnelles → OneDrive compte personnel
- Documents de travail → OneDrive professionnel
- Projets en cours → Google Drive

### 2. Création d'une nouvelle sauvegarde

Pour chaque destination, suivez ces étapes :

1. Cliquez sur "Add backup"
2. Sélectionnez "Configure a new backup"
3. Remplissez les informations de base :
   - Nom descriptif de la sauvegarde
   - Choix du service de stockage
   - Authentification au service
   - Dossier de destination

### 3. Paramètres avancés

Pour chaque sauvegarde, configurez :

- **Chiffrement** : Utilisez un mot de passe unique et fort
- **Planification** : Adaptez selon la criticité des données
- **Rétention** : Définissez combien de versions conserver
- **Filtres** : Excluez les fichiers non nécessaires
- **Notifications** : Configurez les alertes par email

## Bonnes pratiques

### Sécurité

- Utilisez des mots de passe différents pour chaque configuration
- Stockez les mots de passe de manière sécurisée
- Activez l'authentification à deux facteurs sur vos comptes cloud

### Performance

- Évitez les sauvegardes simultanées
- Planifiez les sauvegardes pendant les heures creuses
- Ajustez la compression selon votre bande passante

### Maintenance

- Testez régulièrement la restauration
- Surveillez les logs
- Vérifiez périodiquement l'espace disponible

## Restauration

Pour restaurer vos données sur un autre ordinateur :

1. Installez Duplicati
2. Dans l'interface web, cliquez sur "Restore backup"
3. Connectez-vous au service cloud approprié
4. Sélectionnez la sauvegarde à restaurer
5. Choisissez les fichiers et le dossier de destination

## Conclusion

Duplicati offre une solution flexible pour gérer vos sauvegardes vers différents services cloud. En suivant cette configuration, vous pouvez :

- Sécuriser vos données avec le chiffrement
- Profiter de l'espace gratuit sur différents services
- Automatiser vos sauvegardes
- Adapter la stratégie selon vos besoins

N'oubliez pas de tester régulièrement vos sauvegardes pour vous assurer que tout fonctionne comme prévu.
