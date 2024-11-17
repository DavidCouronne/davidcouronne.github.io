---
title: Arbres
description: Arbre
sidebar_position: 1
---

## Généralités sur les arbres

### Vocabulaire

Un arbre est une structure hiérarchique de données, composée de nœuds. Si on adopte le vocabulaire des graphes, un arbre est un graphe non orienté, connexe, sans cycle, et dans lequel un nœud joue le rôle de racine.

:::tip Vocabulaire

- Chaque **nœud** a exactement un seul **nœud père**, à l'exception du nœud **racine** qui est le seul nœud à ne pas avoir de père.
- Chaque nœud peut avoir un nombre quelconque de **fils**, dont il est le père.
- Les nœuds qui n'ont pas de fils sont appelés les **feuilles** (ou nœuds externes).
- Les nœuds qui ne sont pas des feuilles sont des **nœuds internes**.
- Le nom de chaque nœud est appelé son **étiquette**.

:::

### Outils numériques de description

:::tip Définitions

- la **taille** d'un arbre est son nombre total de nœuds.
- l'**arité** d'un nœud est son nombre de fils.
- la **profondeur** d'un nœud est le nombre de nœuds de son chemin le plus court vers la racine.
- la **hauteur** d'un arbre est la profondeur de son nœud le plus profond.

Nous prendrons comme **convention** que :

- si un arbre est réduit à **un seul nœud-racine**, sa hauteur sera **1**.
- si un arbre est **vide**, sa hauteur est **0**.
  :::

:::danger

Attention, dans certains ouvrages, l'arbre vide a pour hauteur -1, et donc l'arbre réduit à un seul nœud a pour hauteur 0

:::

## Arbres binaires

:::tip Définition

Un arbre binaire est un arbre dont chaque nœud possède **au plus** deux fils.

:::
