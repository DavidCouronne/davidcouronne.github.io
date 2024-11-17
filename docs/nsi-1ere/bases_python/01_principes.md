---
title: Principes de base de Python
description: Cours de spécialité NSI sur les bases de Python
sidebar_position: 1
---

## Introduction

Le langage de programmation Python possède un large éventail de constructions syntaxiques, de fonctions de bibliothèque standard et de fonctionnalités d'environnement de développement interactif. Heureusement, vous pouvez ignorer la plupart de cela ; vous avez juste besoin d'en apprendre assez pour écrire quelques petits programmes pratiques.

Cependant, vous devrez apprendre quelques concepts de programmation de base avant de pouvoir faire quoi que ce soit.

Ce chapitre contient quelques exemples qui vous encouragent à taper dans le shell interactif, ce qui vous permet d'exécuter des instructions Python une à la fois et vous montre les résultats instantanément. L'utilisation du shell interactif est idéal pour apprendre ce que font les instructions de base de Python, alors essayez-le au fur et à mesure. Vous vous souviendrez des choses que vous faites beaucoup mieux que les choses que vous vous ne faites que lire.

## Saisie d'expressions dans le shell interactif

Vous pouvez utiliser un shell interactif en ligne, par exemple le bac à sable Python.

Lien direct: [basthon](https://console.basthon.fr/)

Nous pouvons aussi utiliser programmiz: [programmiz](https://www.programiz.com/python-programming/online-compiler/)

Cet éditeur en ligne se compose d'un éditeur de script dans la partie et gauche et de la console (shell interactif) dans la partie droite.

Essayez:

```
>>> 2 + 5
7
```

En Python, `2 + 5` est appelé une **expression**, qui est le type d'instruction de programmation le plus basique dans le langage.

Les expressions se composent de **valeurs** (telles que 2) et d'**opérateurs** (tels que +), et elles peuvent toujours **évaluer** (c'est-à-dire réduire) jusqu'à une seule valeur.

Dans l'exemple précédent, `2 + 5` est évalué jusqu'à une seule valeur, 7. Une valeur unique sans opérateur est également considérée comme une expression, bien qu'elle ne s'évalue qu'à elle-même, comme illustré ici :

```
>>> 2
2
```

## Opérations sur les nombres

:::tip Différentes opérations sur les nombres

- `+`: Addition: `2 + 3`
- `-`: Soustraction: `2 - 3`
- `*`: Multiplication: `2 * 3`
- `/`: Division: `5 / 2`(qui donne 2.5)
- `**`: Exposant: `2**3`qui donne 8 ($2^3$)
- `%`: Modulo: `17 % 5` qui donne 2 (reste de la division euclidienne de 17 par 5)
- `//`: Quotient: `17 // 5`qui donne 3 (quotient de la division euclidienne de 17 par 5)

:::

:::note Exemples

```python
>>> 2 + 3 * 6
20
>>> (2 + 3) * 6
30
>>> 48565878 * 578453
28093077826734
>>> 2**8
256
>>> 23 / 7
3.2857142857142856
>>> 23 // 7
3
>>> 23 % 7
2
>>> 2 + 2
4
>>> (5 - 1) * ((7 + 1) / (3 - 1))
16.0
```

:::

## Les erreurs

Les programmes se bloquent s'ils contiennent du code que l'ordinateur ne peut pas comprendre, ce qui fera en sorte que Python affiche un message d'erreur. Cependant, un message d'erreur ne cassera pas votre ordinateur, alors n'ayez pas peur de faire des erreurs. Un _plantage_ signifie simplement que le programme a cessé de fonctionner de manière inattendue.

Si vous voulez en savoir plus sur un message d'erreur, vous pouvez rechercher le texte exact du message en ligne pour en savoir plus sur cette erreur spécifique.

:::note Exemples

```python
    >>> 5 +
        File "<stdin>", line 1
        5 +
          ^
    SyntaxError: invalid syntax
    >>> 42 + 5 + * 2
      File "<stdin>", line 1
        42 + 5 + * 2
                 ^
    SyntaxError: invalid syntax
```

:::

## Les types de données de base

Il existe une multitude de types de données en Python.

:::tip Connaître le type d'une donnée

En Python, c'est l'instruction `type`qui permet d'obtenir le type d'une donnée.

Exemples:

```python
    >>> type(2)
    <class 'int'>
    >>> type(3.7)
    <class 'float'>
```

:::

:::tip int : Les entier relatifs

`int`: de l'anglais _integer_, correspond aux **entiers relatifs**.

Exemples: 3, 12, $-7$, $-24$, ...

En mathématiques, c'est l'ensemble $\mathbb{Z}$.

:::

:::tip float: les nombres à virgule flottante

`float`: de l'anglais _floating-point number_, correspond à mode de représentation des nombres réels (en fait ce sont des nombres décimaux comme la partie décimale est finie...)

Exemples: 3.14, 0.001, -4.12

En mathématiques, c'est l'ensemble des décimaux $\mathbb{D}$.

Mais parfois en informatique, on dit que ce sont des réels (alors que non ...)

:::

:::tip str: les chaînes de caractères

`str`: de l'anglais _string of characters_, correspond à une chaîne de caractères.

Exemples: "Bonjour", "23", "Le ciel est bleu", ...

:::

:::tip bool: les booléens

`bool`: de l'anglais _boolean value_ (valeur booléenne), correspond au résultat d'un test.

Une variable de ce type prend deux valeurs: `True`(vrai) ou `False`(faux).

:::
