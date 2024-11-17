---
title: 24-NSIJ2PO1-Ex2 correction
---

## Partie A

1.

- Le nœud initial est appelé **racine** .
- Un nœud qui n’a pas de fils est appelé **feuille**.
- Un arbre binaire est un arbre dans lequel chaque nœud a **au maximum** deux fils.
- Un arbre binaire de recherche est un arbre binaire dans lequel tout nœud est associé à une clé qui est :
  - supérieure à chaque clé de tous les nœuds de son **sous-arbre gauche**.
  - inférieure à chaque clé de tous les nœuds de son **sous-arbre droit**.

2. Parcours préfixe arbre 1: 1-0-2-3-4-5-6

3. Parcours suffixe arbre 2: 0-1-2-6-5-4-3

4. Parcours infixe arbre 3: 0-1-2-3-4-5-6

5.

```python
1 arbre_no1 = ABR()
2 arbre_no2 = ABR()
3 arbre_no3 = ABR()
4 for cle_a_inserer in [1, 0, 2, 3, 4, 5, 6]:
5   arbre_no1.insere(cle_a_inserer)
6 for cle_a_inserer in [3, 2, 4, 1, 0, 5, 6]:
7   arbre_no2.insere(cle_a_inserer)
8 for cle_a_inserer in [3, 1, 0, 2, 5, 4, 6]:
9   arbre_no3.insere(cle_a_inserer)
```

6. D'après le méthode `hauteur` un arbre vide a pour hauteur $-1$.

On en déduit:

- hauteur de l'arbre 1: 5
- hauteur de l'arbre 2: 3
- hauteur de l'arbre 3: 2

7.

```python
def est_presente(self, cle_a_rechercher):
   if self.est_vide() :
       return False
   elif cle_a_rechercher == self.cle() :
       return True
   elif cle_a_rechercher < self.cle() :
       return self.sag().est_presente(cle_a_rechercher)
   else :
       return self.sad().est_presente(cle_a_rechercher)
```

8. L'arbre 3 nécessitera le moins d'appels récursifs.

   - pour l'arbre 1: la recherche passera par les noeuds 1-2-3-4-5-6 (6 appels récursifs)

   - pour l'arbre 2: la recherche passera par les noeuds 3-4-5-6 (4 appels récursifs)

   - pour l'arbre 3: la recherche passera par les noeuds 3-5-6 (3 appels récursifs)

## Partie B

9. D'après la méthode fournie, un arbre est dit **partiellement équilibré** si la différence de hauteur entre son sous-arbre gauche et son sous-arbre droit est au plus égale à 1.

_En d’autres termes, un arbre partiellement équilibré ne permet pas de déséquilibre important entre les hauteurs de ses sous-arbres._

10.

- pour l'arbre 1: la hauteur du sous-arbre gauche est 0 et la hauteur du sous-arbre droit est 5 (rappel dans cet exercice la hauteur d'un arbre vide est $-1$ !!!!). Donc l'arbre 1 n'est pas partiellement équilibré

- pour l'arbre 2: la hauteur du sous-arbre gauche est 2 et la hauteur du sous-arbre droit est 2. Donc l'arbre 2 est partiellement équilibré.

- pour l'arbre 3: la hauteur du sous-arbre gauche est 1 et la hauteur du sous-arbre droit est 1. Donc l'arbre 3 est partiellement équilibré.

11. L'arbre 1 ne peut être équilibré car il n'est pas partiellement équilibré

**Pour l'arbre 2**:

- il est partiellement équilibré.

**sous-arbre gauche:**

- hauteur sous arbre gauche du sous arbre gauche: 1

- hauteur sous arbre droit du sous arbre gauche: $-1$

- différence de hauteur: 2

Donc le sous-arbre gauche **n'est pas partiellement équilibré**, et n'est donc pas équilibré.

Donc **l'arbre 2 n'est pas équilibré**.

Par conséquent **seul l'arbre 3 est équilibré**.

12. En utilisant les spécifications:

```python
def est_equilibre(self):
    if self.est_vide():
        return True
    if self.est_partiellement_equilibre():
        return self.sag().est_equilibre() and self.sad().est_equilibre()
    return False
```
