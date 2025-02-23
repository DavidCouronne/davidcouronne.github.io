---
title: Python - Conda, Miniconda, Anaconda
description: Utilisation de conda, miniconda ou anaconda
sidebar_position: 6
---

Documentation de référence: [https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#)

## Bases

On suppose ici que Anaconda ou Miniconda est installé.

### Lister tous les environnments disponibles

```bash
conda info --envs
```

ou

```bash
conda env list
```

### Créer un nouvel environnement

```bash
conda create --name envname
```

### Supprimer un environnement et ses dépendances

```bash
conda remove --name envname --all
```

### Cloner un environnement existant

```bash
conda create --name clone_envname --clone envname
```

## Exporter un environnement

Créer un fichier `environment.yml`avec conda:

```bash
conda env export > environment.yml
```

## Importer un environnement

```bash
conda env create -f environment.yml
```

Dans le cas général:

- choisir ses propres packages

```bash
conda env create -n [name of the environment] [python version] [packages]
```

- avec un fichier

```bash
conda env create -n [name of the environment] -f [file]
```

## Packages conda pour la NSI

```bash
conda install jupyter pandas black conda-forge::black-jupyter
```

## Commandes pandoc

```bash
pandoc 2022-polynesie-1.md  --to latex --standalone --no-highlight -o test2.tex
```
