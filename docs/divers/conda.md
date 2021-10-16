---
title: conda, miniconda, anaconda
description: Utilisation de conda, miniconda ou anaconda
sidebar_position: 4
---

Documentation de référence: [https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#)

## Bases

On suppose ici que Anaconda ou Miniconda est installé.

### Lister tous les environnments dispobibles

```bash
conda info --envs
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