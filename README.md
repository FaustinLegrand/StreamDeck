# StreamDeck Web Controller

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

StreamDeck Web Controller est une application web qui permet de connecter et de configurer un StreamDeck pour l'utiliser comme une télécommande personnalisée. Grâce à cette application, vous pouvez configurer des fonctionnalités comme un soundboard, des raccourcis, des commandes personnalisées, et bien plus encore, directement depuis votre navigateur.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Contributions](#contributions)
- [License](#license)

## Fonctionnalités

- **Configuration intuitive** : Configurez facilement votre StreamDeck via une interface web conviviale.
- **Soundboard** : Ajoutez et gérez des sons personnalisés déclenchables à partir du StreamDeck.
- **Gestion du sons** : Gerer le sons de chaque application que vous souhaitez

## Prérequis

Avant d'installer et d'utiliser cette application, assurez-vous d'avoir les éléments suivants :

- [Node.js](https://nodejs.org/) version 14 ou supérieure.
- Un StreamDeck compatible.
- Un navigateur web moderne (Chrome, Firefox, Edge, etc.).

## Installation

1. **Clonez le dépôt**

   ```bash
   git clone https://github.com/faustinlegrand/StreamDeck.git
   cd StreamDeck
   ```
2. **Installez les dépendances**

  Utilisez npm pour installer les dépendances nécessaires :

  ```bash
  npm install
  ```

3. **Démarrez l'application**

  Pour démarrer le serveur de l'application web :

  ```bash
  npm start
  ```
  
  L'application sera accessible à l'adresse http://localhost:3000.

## Configuration

Une fois l'application démarrée, vous pouvez configurer votre StreamDeck via l'interface web :

1. **Connexion du StreamDeck : Suivez les instructions à l'écran pour connecter votre StreamDeck à l'application.**
2. **Personnalisation des boutons : Cliquez sur un bouton du StreamDeck dans l'interface pour le configurer.**
  - Ajoutez des actions : Ajoutez des actions comme des commandes, des raccourcis, ou des sons.
  - Personnalisez l'apparence : Changez les icônes et les titres des boutons.
3. **Sauvegarde et chargement de profils : Créez, sauvegardez et chargez différents profils de configuration.**

## Utilisation

- **Soundboard** : Ajoutez des fichiers audio via l'interface et assignez-les à des boutons pour les jouer rapidement.
- **Macros** : Configurez des séquences d'actions pour automatiser des tâches répétitives.
- **Commandes personnalisées** : Exécutez des scripts ou envoyez des commandes spécifiques depuis votre StreamDeck.

## Contributions

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre ces étapes :

1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité (git checkout -b feature/ma-fonctionnalité).
3. Committez vos modifications (git commit -m 'Ajout de ma fonctionnalité').
4. Poussez votre branche (git push origin feature/ma-fonctionnalité).
5. Ouvrez une Pull Request.
   
Veuillez vous assurer que votre code respecte les bonnes pratiques de développement et inclut des tests lorsque cela est possible.

## License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](https://opensource.org/licenses/MIT) pour plus de détails.
