## Exercice 2 (6 points)

_Cet exercice porte sur les arbres binaires de recherche, la POO et la récursivité._

Nous disposons d’une classe `ABR` pour les arbres binaires de recherche dont les clés sont des entiers :

```python
1 class ABR():
2   def __init__(self) :
3       # Initialise une instance d'ABR vide.
4
5   def cle(self):
6       # Renvoie la clé de la racine de l'instance d'ABR.
7
8   def sad(self):
9       # Renvoie le sous-arbre droit de l'instance d'ABR.
10
11  def sag(self):
12      # Renvoie le sous-arbre gauche de l'instance d'ABR.
13
14  def est_vide(self):
15      # Renvoie True si l'instance d'ABR est vide et False sinon.
16
17  def inserer(self, cle_a_inserer):
18        # Insère cle_a_inserer à sa place dans l'instance d'ABR.
```

Considérons ci-dessous trois arbres binaires de recherche :
