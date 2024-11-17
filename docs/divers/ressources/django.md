---
title: Python - Django
description: Utilisation basqieude Django
sidebar_position: 4
---

## Installation

Créer un environnement avec `conda`:

```bash
conda create --name django
```

Puis l'activer:

```bash
conda activate django
```

Et installer django

```bash
conda install django
```

## Création du projet Django

Imaginons un projet avec des sujets de bac, donc le nom est`bac_subjets`

```bash
django-admin startproject bac_subjects
cd bac_subjects
python manage.py startapp subjects
```

## Configuration du projet

Ajoutez `'subjects'` à `INSTALLED_APPS` dans `bac_subjects/settings.py`.

```python
...

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "subjects",
]

...
```

## Création des modèles

Dans `subjects/models.py` :

```python
from django.db import models

class Theme(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Subject(models.Model):
    year = models.IntegerField()
    name = models.CharField(max_length=200)  # e.g. "Métropole 2021 Jour 1"
    code = models.CharField(max_length=50)   # e.g. "23-NSIJ1G11"
    pdf_file = models.FileField(upload_to='pdfs/')

    def __str__(self):
        return f"{self.year} - {self.name}"

class Exercise(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    number = models.IntegerField()
    theme = models.ForeignKey(Theme, on_delete=models.SET_NULL, null=True)
    latex_content = models.TextField()

    def __str__(self):
        return f"{self.subject.code} - Exercice {self.number}"
```

## Configuration de l'administration

Dans `subjects/admin.py` :

```python
from django.contrib import admin
from .models import Theme, Subject, Exercise

@admin.register(Theme)
class ThemeAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Subject)
class SubjectAdmin(admin.ModelAdmin):
    list_display = ('year', 'name', 'code')
    list_filter = ('year',)
    search_fields = ('name', 'code')

@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
    list_display = ('subject', 'number', 'theme')
    list_filter = ('subject__year', 'theme')
    search_fields = ('subject__name', 'subject__code')
```

## Création et application des migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

## Création d'un superutilisateur

```bash
python manage.py createsuperuser
```

## Lancement du serveur de développement

```bash
python manage.py runserver
```
