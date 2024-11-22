# Baccalauréat Général - Numérique et Sciences Informatiques

## Exercice 1 : Bases de données relationnelles et langage SQL (4 points)

### Contexte
La ligue féminine de basket-ball publie les données relatives à chaque saison sur son site web. On s'intéresse à la base de données relationnelle `LFP_2021_2022` permettant le stockage et la gestion des données de la saison régulière de basket-ball féminin 2021-2022.

### 1. Table `Equipe`

Contenu de la table `Equipe` :

| id_equipe | nom | adresse | telephone |
|-----------|-----|---------|-----------|
| 1 | Saint-Amand | 39 avenue du Clos, 59230 Saint-Amand-les-Eaux | 03 04 05 06 07 |
| 2 | Basket Landes | 15 place Saint-Roch, 40000 Mont-De-Marsan | 05 06 07 08 09 |
| ... | ... | ... | ... |

Schéma relationnel :
- `id_equipe` (clé primaire) : INT
- `nom` : VARCHAR(50)
- `adresse` : VARCHAR(100)
- `telephone` : VARCHAR(20)

#### Questions

a) **Erreur d'insertion**
   Expliquer pourquoi la requête suivante produirait une erreur :
   ```sql
   INSERT INTO Equipe
   VALUES (11, "Toulouse", "2 rue du Nord, 40100 Dax", "05 04 03 02 01");
   ```

b) **Choix du domaine de l'attribut `telephone`**
   Expliquer le choix du domaine de l'attribut `telephone`.

c) **Requête de sélection**
   Résultat de la requête :
   ```sql
   SELECT nom, adresse, telephone FROM Equipe WHERE id_equipe = 5;
   ```

d) **Comptage des équipes**
   Donner et expliquer le résultat de la requête :
   ```sql
   SELECT COUNT(*) FROM Equipe;
   ```

e) **Affichage par ordre alphabétique**
   Écrire la requête SQL permettant d'afficher les noms des équipes par ordre alphabétique.

f) **Correction de nom d'équipe**
   Écrire la requête SQL permettant de corriger le nom de l'équipe dont `id_equipe` est égal à 4. Le nom correct est "Tarbes".

### 2. Table `Joueuse`

Extrait de la table `Joueuse` :

| id_joueuse | nom | prenom | date_naissance | taille | poste | id_equipe |
|------------|-----|--------|---------------|--------|-------|-----------|
| 1 | Berkani | Lisa | 19/05/1997 | 176 | 2 | 7 |
| 2 | Alexander | Kayla | 05/01/1991 | 193 | 5 | 5 |
| ... | ... | ... | ... | ... | ... | ... |

Schéma relationnel :
- `id_joueuse` (clé primaire) : INT
- `nom` : DATE
- `prenom` : INT
- `date_naissance` : INT
- `taille` : INT
- `poste` : INT
- `id_equipe` (clé étrangère vers `Equipe.id_equipe`) : INT

#### Questions

a) **Clé étrangère**
   Expliquer pourquoi l'attribut `id_equipe` a été déclaré clé étrangère.

b) **Suppression d'équipe**
   Expliquer pourquoi on ne peut pas directement supprimer une équipe dans la table `Equipe`.

c) **Joueuses d'Angers**
   Écrire la requête SQL qui permet d'afficher les noms et prénoms des joueuses de l'équipe d'Angers par ordre alphabétique des noms.

### 3. Table `Match`

Exemple de match :
- Match n° 10
- Date : 23/10/2021
- Villeneuve d'Ascq 73 | 78 Bourges

#### Questions

a) **Schéma relationnel**
   Proposer un schéma relationnel pour la table `Match`. Si des clés étrangères sont définies, préciser quelles tables et quels attributs elles référencent.

b) **Insertion de match**
   Écrire la requête SQL qui permet l'insertion dans la table `Match` de l'enregistrement correspondant à l'exemple donné.

### 4. Table des statistiques de match

Extrait des statistiques du match n° 53 (Landerneau vs Charleville-Mézières) :

| Equipe | Nom | Prénom | Points | Rebonds | Passes décisives |
|--------|-----|--------|--------|---------|-----------------|
| Charleville-Mézières | Pouye | Tima | 18 | 6 | 2 |
| ... | ... | ... | ... | ... | ... |

#### Questions

a) **Schéma relationnel**
   Proposer un schéma relationnel pour stocker les informations relatives aux statistiques des joueuses.

b) **Requête d'affichage**
   Écrire la requête SQL qui a été utilisée pour afficher la partie « Extrait des statistiques » de l'exemple.
