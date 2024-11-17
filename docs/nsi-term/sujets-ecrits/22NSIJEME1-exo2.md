# 22NSIJ1ME1-Exercice 2

1. Récupération de données
a) La requête `SELECT nom, prenom, naissance FROM individu WHERE nom = 'Crog'` va renvoyer :
```
nom    | prenom  | naissance
-------|---------|------------
'Crog' | 'Daniel'| '07-07-1968'
```
Cette requête sélectionne les colonnes nom, prénom et naissance pour tous les enregistrements où le nom est 'Crog'.

b) Pour récupérer le titre et la clé primaire des films après 2020 :
```sql
SELECT id_rea, titre 
FROM realisation
WHERE annee > 2020;
```

2. Modification de relations
a) Il faut utiliser la Requête 1 (UPDATE) car :
- La requête UPDATE modifie une donnée existante
- La requête INSERT tenterait d'ajouter un nouvel enregistrement avec l'id_ind 688 qui existe déjà (violation de la clé primaire)

b) La relation individu peut accepter plusieurs personnes avec les mêmes nom, prénom et date de naissance car :
- Seul id_ind est souligné, donc c'est la seule clé primaire
- Il n'y a pas de contrainte d'unicité sur les autres champs
- Deux personnes différentes peuvent avoir les mêmes informations mais auront des id_ind différents

3. Clés étrangères
a) Pour compléter les INSERT :
```sql
INSERT INTO emploi
VALUES (5400, 'Acteur(James Bond)', 688, 105);
-- 688 est l'id_ind de Crog, 105 est l'id_rea de Casino Imperial

INSERT INTO emploi
VALUES (5401, 'Acteur(James Bond)', 688, 325);
-- 688 est l'id_ind de Crog, 325 est l'id_rea de Ciel tombant
```

b) Pour ajouter un nouvel emploi pour "Docteur Yes", il faut :
- D'abord créer l'enregistrement dans realisation car emploi contient une clé étrangère (#id_rea) qui référence realisation
- Si on essayait de créer d'abord l'emploi, on aurait une violation de contrainte de clé étrangère car l'id_rea n'existerait pas encore

4. Jointures
a) La requête complétée :
```sql
SELECT individu.nom, realisation.titre, realisation.annee
FROM emploi
JOIN individu ON emploi.id_ind = individu.id_ind
JOIN realisation ON emploi.id_rea = realisation.id_rea
WHERE emploi.description = 'Acteur(James Bond)';
```

b) Pour trouver les emplois de Denis Johnson :
```sql
SELECT emploi.description
FROM emploi
JOIN individu ON emploi.id_ind = individu.id_ind
WHERE individu.nom = 'Johnson' 
AND individu.prenom = 'Denis';
```

Points clés à retenir :
- Les clés étrangères permettent de maintenir l'intégrité référentielle
- Les jointures permettent de combiner les données de plusieurs tables
- La modification de données doit respecter les contraintes d'unicité (clés primaires) et d'intégrité référentielle (clés étrangères)
- L'ordre d'insertion des données est important quand il y a des dépendances (clés étrangères)
