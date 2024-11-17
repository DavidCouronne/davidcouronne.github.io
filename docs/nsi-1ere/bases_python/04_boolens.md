---
title: Booléens
description: Booléens
sidebar_position: 4
---

# Les booléens

## Valeurs booléennes

Alors que les types de données entier, virgule flottante et chaîne ont un nombre illimité de valeurs possibles, le type de données booléen n'a que deux valeurs : `True` et `False`. (Boolean est en majuscule parce que le type de données porte le nom du mathématicien George Boole.)

Lorsqu'il est tapé en tant que code Python, les valeurs booléennes `True` et `False` n'ont pas les guillemets que vous placez autour des chaînes, et ils commencent toujours par un T ou F majuscule , avec le reste du mot en minuscule.

:::note Exemples

```python
>>> spam = True
>>> spam
True
>>> true
Traceback (most recent call last):
        File "<pyshell#2>", line 1, in <module>
        true
NameError: name 'true' is not defined
>>> True = 2 + 2
    SyntaxError: assignment to keyword
```

:::

Comme toute autre valeur, les valeurs booléennes sont utilisées dans des expressions et peuvent être stockées dans des variables . Si vous n'utilisez pas la bonne casse ou si vous essayez d'utiliser `True` et `False` pour les noms de variables , Python vous donnera un message d'erreur.

## Opérateurs de comparaison

Les opérateurs de comparaison comparent deux valeurs et évaluent jusqu'à une seule valeur booléenne.

:::tip Opérateurs de comparaison

- `==` Égal à
- `!=` Pas égal à (différent de)
- `<` Strictement inférieur à
- `>` Strictement supérieur à
- `<=` Inférieur ou égal à
- `>=` Supérieur ou égal à

Ces opérateurs évaluent `True` ou `False` dépendent des valeurs que vous leur donnez.

:::

:::note Exemples avec `==` et`!=`

```python
>>> 42 == 42
True
>>> 42 == 99
False
>>> 2 != 3
True
>>> 2 != 2
False
```

:::

Comme vous pouvez vous y attendre, `==`(égal à) est évalué `True`lorsque les valeurs des deux côtés sont identiques et `!=`(différent de) est évalué `True` lorsque les deux valeurs sont différentes.

Les opérateurs `==`et `!=` peuvent en fait fonctionner avec des valeurs de n'importe quel type de données.

:::note Exemples avec différents types de données

```python
>>> 'hello' == 'hello'
True
>>> 'hello' == 'Hello'
False
>>> 'dog' != 'cat'
True
>>> True == True
True
>>> True != False
True
>>> 42 == 42.0
True
>>> 42 == '42'
False
```

:::

Notez qu'une valeur entière ou à virgule flottante sera toujours différente d'une valeur de chaîne.

L'expression `42 == '42'` prend la valeur `False`car Python considère que l'entier 42 est différent de la chaîne '42'.

:::note Exemples

```python
>>> 42 < 100
True
>>> 42 > 100
False
>>> 42 < 42
False
>>> prix = 42
>>> prix <= 42
True
>>> mon_age = 29
>>> mon_age >= 10
True
```

:::

## Opérateurs booléens

Les trois opérateurs booléens ( `and`, `or` et `not`) sont utilisés pour comparer les valeurs booléennes. Comme les opérateurs de comparaison, ils évaluent ces expressions jusqu'à une valeur booléenne. Explorons ces opérateurs en détail

### Opérateurs booléens binaires

Les opérateurs `and` et `or` prennent toujours deux valeurs booléennes (ou expressions), ils sont donc considérés comme des **opérateurs binaires** .

:::tip Opérateur `and`

L' opérateur `and` évalue une expression à `True` si les deux valeurs booléennes sont `True`; sinon, il est évalué à `False`. Entrez quelques expressions en utilisant `and` dans le shell interactif pour le voir en action.

:::

:::note Exemples fondamentaux avec `and`

```python
    >>> True and True
    True
    >>> True and False
    False
    >>> False and True
    False
    >>> False and False
    False
```

:::

:::tip Opérateur `or`

L' opérateur `or` évalue une expression à `True`si l'une des deux valeurs booléennes est `True`. Si les deux sont `False`, il est évalué à `False`.

:::

:::note Exemples fondamentaux avec `or`

```python
    >>> True or True
    True
    >>> True or False
    True
    >>> False or True
    True
    >>> False or False
    False
```

:::

### L'opérateur `not`

Contrairement à `and` et `or`, l' opérateur `not` opère sur une seule valeur booléenne (ou expression).

:::tip Opérateur `not`

L' opérateur `not` évalue simplement la valeur booléenne opposée.

```python
    >>> not True
    False
    >>> not False
    True
```

:::

## Mélange d'opérateurs booléens et de comparaison

Étant donné que les opérateurs de comparaison évaluent des valeurs booléennes, vous pouvez les utiliser dans des expressions avec les opérateurs booléens.

Rappelez-vous que les opérateurs `and`, `or`et `not` sont appelés opérateurs booléens car ils opèrent toujours sur les valeurs booléennes `True` et `False`.

Bien que les expressions comme `4 < 5` ne soient pas des valeurs booléennes, ce sont des expressions qui évaluent jusqu'aux valeurs booléennes.

:::note Exemples

```python
    >>> (4 < 5) and (5 < 6)
    True
    >>> (4 < 5) and (9 < 6)
    False
    >>> (1 == 2) or (2 == 2)
    True
```

:::

L'ordinateur évaluera d'abord l'expression de gauche, puis il évaluera l'expression de droite. Lorsqu'il connaît la valeur booléenne de chacun, il évaluera alors l'expression entière jusqu'à une valeur booléenne.

Vous pouvez également utiliser plusieurs opérateurs booléens dans une expression, ainsi que les opérateurs de comparaison.

```python
>>> 2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
True
```

:::tip Ordre des opérations

Les opérateurs booléens ont un ordre d'opérations tout comme les opérateurs mathématiques.

1. Evaluation de tous les opérateurs mathématiques et de comparaison
2. `not`
3. `and`
4. `or`.

:::

## Cas particulier: l'inclusion avec `in`

:::note Exemples

```python
    >>> "y" in "Python"
    True
    >>> "z" in "Python"
    False
    >>> "th" in "Python"
    True
    >>> "p" in "Python"
    False
```

:::
