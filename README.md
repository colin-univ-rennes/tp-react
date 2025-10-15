# TP React

[Colin Ozanne](https://finxol.io)

## Instructions

Versions: <br>
Node: v22.20.0
pnpm: 10.18.1

- Installer les dépendances avec `pnpm install`
- Démarrer le serveur avec `pnpm run start`

## Composants

### BeerContext

Contexte React qui gère l'état global des bières. Il fournit :
- Une liste de bières préchargée
- Une fonction pour ajouter une bière
- Une fonction pour supprimer une bière
- Une fonction pour mettre à jour la liste complète

### Beer

Composant qui affiche une bière individuelle. Il montre :
- Le nom de la bière
- Le début de son identifiant unique
- Un bouton pour la supprimer de la liste

### BeerList

Composant principal qui affiche la liste des bières. Il contient :
- Un formulaire pour ajouter une nouvelle bière (composant `BeerInput`)
- La liste des bières existantes
- Un message si la liste est vide
- Chaque bière est affichée via le composant `Beer`

## Routage avec React Router

L'application utilise React Router pour gérer la navigation entre les pages. Le routage est configuré dans le fichier `index.tsx` et comprend :

- Une barre de navigation présente sur toutes les pages avec des liens vers :
  - La page d'accueil (`/`)
  - La page "À propos" (`/about`)

Les routes disponibles sont :
- `/` : Page d'accueil qui affiche la liste des bières
- `/about` : Page "À propos" qui présente l'auteur du TP

Le routage est implémenté avec `createBrowserRouter` de react-router-dom v7, et les composants sont chargés de manière statique.
