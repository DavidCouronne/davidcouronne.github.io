---
title: Programmation Orientée Objet
description: Programmation Orientée Objet en Python
sidebar_position: 3
---

## Programme officiel

:::tip Contenu
Vocabulaire de la programmation objet :

- classes
- attributs
- méthodes
- objets

:::

:::tip Capacités attendues

- Écrire la définition d’une classe.
- Accéder aux attributs et méthodes d’une classe.

:::

:::tip Commentaires
On n’aborde pas ici tous les aspects de la programmation objet comme le polymorphisme et l’héritage.

:::

## Le paradigme objet

:::info Le paradigme objet en bref

- Un programme est un ensemble d’objets
- La seule façon d’interagir avec un objet est d’appeler l’une de ses méthodes

:::

:::info Objets
Un objet regroupe :

- des **attributs** (contenant des valeurs)
- des **méthodes** (des opérations/fonctions) relatives à cet objet.

Un objet est un élément issu d'une classe. On parle aussi d'**instance** de la classe.

:::

:::info Classes
Les classes sont des " moules " permettant de produire des objets en
série. On produit un objet en appelant le constructeur de la classe.
:::

## Impératif et objet

:::info Impératif (Python)

```python
l=[1,2,3]
def somme(l):
    s=0
    for e in l:
        s=s + e
    return s

print(somme(l))
```

:::

:::info Objet (Python)

```python
#Définition de la classe
class listeEntier():

    def __init__(self): #constructeur
        self.v=[] #champ v initialisé

    def ajouter(self,elt): #une méthode
        self.v.append(elt)
    def somme(self): #une seconde méthode
        s=0
        for e in self.valeur:
            s=s + e
        return s

#Utilisation de la classe
l= listeEntier() #l reçoit un nouvel objet
l.ajouter(1)     #appel de la méthode ajout sur
l.ajouter(2)     #l’objet stocké dans la
l.ajouter(3)     #variable l
print(l.somme())
```

:::

## Quand a-t-on besoin de la programmation objet ?

1. Quand on manipule des données de structures différentes...
2. ... mais ayant des points communs.
3. Quand des grandes familles de données se dégagent.
   Ces "familles" constitueront nos classes...

## Avantages de le programmation objet

:::info Encapsulation : pour une meilleure structuration du code
Dans le code du programme, on regroupe sous un même nom (celui de la
classe) les données et les fonctions relatives à ces données.

L'encapsulation est un principe qui consiste à regrouper des données avec un ensemble de méthodes permettant de les lire ou de les manipuler dans le but de cacher ou de protéger certaines de ces données.

- Les méthodes et données internes (celles plus ou moins "cachée" à l'utilisateur) sont dites **privées**.
- Les méthodes et données accessibles à tout utilisateur (celles que les utilisateurs de la classe connaissent) sont dites **publiques**.

:::

## Quelques exemples

```python
# Définition de la classe Voiture
class Voiture:

    def __init__(self, marque, modele, annee):  # Constructeur
        self.marque = marque  # Champ marque initialisé
        self.modele = modele  # Champ modèle initialisé
        self.annee = annee  # Champ année initialisé

    def age(self):
        """Méthode pour calculer l'âge de la voiture"""
        current_year = 2024
        return current_year - self.annee

    def description(self):
        """Méthode pour obtenir une description de la voiture"""
        return f"{self.marque} {self.modele}, {self.age()} ans"

# Utilisation de la classe
v1 = Voiture("Toyota", "Corolla", 2015)
v2 = Voiture("Tesla", "Model 3", 2020)

print(v1.description())
# Affiche "Toyota Corolla, 9 ans"
print(v2.description())
# Affiche "Tesla Model 3, 4 ans"
```

```python
# Définition de la classe Personne
class Personne:

    def __init__(self, nom, age):  # Constructeur
        self.nom = nom  # Champ nom initialisé
        self.age = age  # Champ age initialisé

    def est_majeur(self):
        """Méthode pour vérifier si la personne est majeure"""
        return self.age >= 18

# Utilisation de la classe
p1 = Personne("Alice", 17)
p2 = Personne("Bob", 20)

print(f"{p1.nom} est majeur ? {p1.est_majeur()}")
# Affiche "Alice est majeur ? False"
print(f"{p2.nom} est majeur ? {p2.est_majeur()}")
# Affiche "Bob est majeur ? True"
```

## Privé - Public

:::tip Privé/Public en Python
En Python, il y a une convention de nommage : un attribut privé est toujours préfixé (c'est-à-dire précédé) de deux espaces soulignés (tiret du bas, celui du 8). En anglais: `underscore`

```python
self.attribut1 # Public
self.__attribut2 # Privé
```

:::

:::info Typage (typage dynamique en Python)
A l’exécution, on peut distinguer des objets produits par différentes classes.

Exemple en Python:

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

A = Point(2, 3)
print(type(A)) # <class '__main__.Point'>
```

:::

:::info Abstraction : pour une programmation qui s’abstrait des détails
Si des objets de classes différentes partagent une même méthode, on peut
appeler celle-ci sans connaître, a priori, la classe/type de l’objet.
:::

## Liens

http://monlyceenumerique.fr/nsi_terminale/sd/sd2_programmation_objet.php
