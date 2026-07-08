# Vitalia Parapharmacie IA

Vitalia est une boutique de parapharmacie complète et testable: catalogue, recherche, compte client de démonstration, panier, livraison, commande, espace admin et fonctionnalités IA.

## Fonctionnalités principales

- Catalogue par catégories: visage, cheveux, cosmétiques, bébé & maman, compléments.
- Recherche produit par marque, nom ou catégorie.
- Connexion et inscription de démonstration.
- Panier persistant dans le navigateur.
- Formulaire de livraison relié à la commande.
- Création de commande côté backend.
- Espace pro/admin avec commandes, clients, produits et KPI.
- Bannière de confidentialité/cookies.

## Fonctionnalités IA

- **Lia, conseillère IA**: analyse une question client et recommande une catégorie + des produits.
- **Apprentissage supervisé**: classification Naive Bayes entraînée sur des exemples de besoins clients.
- **Score d'attractivité produit**: combine note, volume d'avis, promotion et badge.
- **Recherche par photo**: classification simple par couleur dominante pour orienter vers une catégorie.
- **Fiche produit enrichie**: génération locale d'un texte produit factuel.
- **Remise IA**: optimisation de remise par apprentissage par renforcement, type bandit epsilon-greedy.

## Lancer localement

```bash
npm start
```

Puis ouvrir:

```text
http://localhost:3000
```

L'espace admin est accessible depuis le footer ou directement:

```text
http://localhost:3000/Vitalia%20Admin.dc.html
```

## Routes backend

- `GET /api/health`: statut du backend.
- `GET /api/catalog`: produits et catégories.
- `POST /api/assistant`: recommandation IA depuis une question client.
- `POST /api/product-description`: fiche produit enrichie.
- `POST /api/discount`: optimisation de remise IA.
- `POST /api/orders`: création d'une commande.
- `GET /api/orders`: commandes visibles dans l'espace admin.

## Déploiement gratuit sur Render

1. Créer un dépôt GitHub avec le contenu de ce dossier.
2. Aller sur Render, puis **New Web Service**.
3. Connecter le dépôt GitHub.
4. Render détectera `render.yaml`.
5. Laisser:
   - Build command: vide
   - Start command: `npm start`
   - Plan: Free
6. Déployer.

Le projet n'a aucune dépendance externe et ne demande aucune clé API. Les commandes sont enregistrées dans `data/orders.json`; sur certains hébergeurs gratuits, ce fichier peut être réinitialisé lors d'un redéploiement, ce qui reste acceptable pour une démonstration publique temporaire.

## Angle de carrousel LinkedIn

Fonctionnalité recommandée pour le carrousel: **Lia, conseillère IA par apprentissage supervisé**.

Plan possible:

1. Problème: trop de produits, le client ne sait pas quoi choisir.
2. Données: exemples de besoins clients associés à des catégories.
3. Modèle: classification supervisée Naive Bayes.
4. Résultat: catégorie prédite + taux de confiance.
5. Action e-commerce: produits recommandés automatiquement.
6. Limite responsable: ne remplace pas un avis médical personnalisé.
