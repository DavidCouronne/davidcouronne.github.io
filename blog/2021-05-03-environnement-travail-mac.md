---
title: Environnement de travail sur Mac
author: David Couronné
tags: [mac, tutoriel, latex, python]
image: covers/christopher-gower-m_HRfLhgABo-unsplash.jpg
description: Article sur HomeBrew
keywords: [homebrew, mac]
---

![Ordinateur Mac](https://res.cloudinary.com/dpw19qolx/image/upload/t_cover-image/v1620487810/christopher-gower-m_HRfLhgABo-unsplash.jpg)

Dans cet article, nous allons découvrir comment installer et mettre à jour simplement LaTeX, Python et compagnie sur un Mac.

<!--truncate-->

## Installer HomeBrew sur Mac

Les développeurs utilisent l’utilitaire Homebrew pour installer divers logiciels Unix.

Si vous n’avez pas déjà installé [xcode command line tools](https://developer.apple.com/xcode/resources/), Homebrew l’installera.

Conseil : Si vous n’avez pas utilisé de mot de passe pour vous connecter à votre Mac (c’est-à-dire si votre mot de passe est vide), vous ne pouvez pas installer Homebrew.

### Vérifiez si Homebrew est installé

```bash
brew
```

Homebrew n'est pas installé si vous voyez:

```bash
zsh: command not found: brew
```

### Installer homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Vous verrez une liste de fichiers et de dossiers que Homebrew installera.

Si vous n’avez pas déjà installé d’outils XCode CommandLine, vous verrez un message: « les outils de ligne de commande XCode seront installés ».

Appuyez sur retour pour continuer lorsque vous serez invité par le script d’installation Homebrew.

Il faut de cinq à dix minutes pour télécharger et installer les outils de ligne de commande.

### Mises à jour

Mettre à jour homebrew:

```bash
brew update
```

Mettre à jour les packages:

```bash
brew upgrade
```

## Installer python / minoconda

Avec miniconda:

```bash
brew install --cask miniconda
```

Ensuite, activer l'environnement avec:

```bash
conda init "$(basename "${SHELL}")"
```

Puis redémarrer le terminal.

Installer Python directement:

```bash
brew install python@3.9
```

## Installer NodeJS

```bash
brew install node
```

## Installer MacTex

```bash
brew install mactex
```

L'installation peut prendre du temps.

Pour mettre à jour MacTex:

```bash
sudo tlmgr update --self
```

Puis mettre à jour les packages:

```bash
sudo tlmgr update --all
```

Pour installer des packages persos:

Les placer dans :

```
usr/local/texlive/texmf-local/tex/latex/local
```

Puis mettre à jour l'index des packages avec:

```bash
sudo texhash
```

Installer TeXMaker:

```bash
brew install --cask texmaker
```

## Installer Visual Studio Code

```bash
brew install visual-studio-code
```

## Installer Github Desktop

```bash
brew install github
```

## Installer docker

```bash
brew install --cask docker
```

## Divers

- Calibre pour les epub

```bash
brew install --cask calibre
```

- Bitwarden: gestionnaire de mots de passe

```bash
brew install --cask bitwarden
```

- Brave: navigateur respectueux de la vie privée

```bash
brew install --cask brave-browser
```

- Cryptomator: chiffrer les dossiers ou fichiers

```bash
brew install macfuse
```

```bash
brew install --cask cryptomator
```

- Signal: messagerie privée

```bash
brew install --cask signal
```

- VLC: lecteur multimédia

```bash
brew install --cask vlc
```

- Google Chrome

```bash
brew install --cask google-chrome
```

## Installations par lot

Pour installer plusieurs formules en même temps:

```bash
FORMULAS=(
    vlc
    signal
)
```

Puis:

```bash
brew install ${FORMULAS[@]}
```
