
export function getInstructions(emailClient) {
  const instructions = {
    gmail: {
      title: 'Instructions Gmail',
      clientName: 'Gmail',
      icon: '📧',
      steps: [
        'Ouvrez Gmail dans votre navigateur',
        'Cliquez sur l\'engrenage ⚙️ → "Voir tous les paramètres"',
        'Allez dans l\'onglet "Général"',
        'Descendez jusqu\'à la section "Signature"',
        'Cliquez sur "Créer" pour ajouter une nouvelle signature',
        'Collez votre signature avec Ctrl+V (ou Cmd+V sur Mac)',
        'Définissez-la comme signature par défaut si souhaité',
        'Cliquez sur "Enregistrer les modifications" en bas de page'
      ],
      tips: [
        'Gmail peut modifier légèrement le formatage lors du collage',
        'Testez en vous envoyant un email pour vérifier le rendu',
        'Vous pouvez créer plusieurs signatures pour différents usages'
      ]
    },
    outlook: {
      title: 'Instructions Outlook',
      clientName: 'Outlook',
      icon: '📮',
      steps: [
        'Ouvrez Outlook sur votre ordinateur',
        'Allez dans Fichier → Options → Courrier',
        'Dans la section "Composer des messages", cliquez sur "Signatures..."',
        'Cliquez sur "Nouveau" pour créer une nouvelle signature',
        'Donnez un nom à votre signature',
        'Collez votre signature dans l\'éditeur avec Ctrl+V',
        'Définissez cette signature pour les nouveaux messages',
        'Cliquez sur "OK" pour sauvegarder'
      ],
      tips: [
        'Pour Outlook Web : Paramètres → Afficher tous les paramètres → Composer et répondre',
        'La signature peut être différente entre Outlook desktop et web',
        'Vérifiez le rendu en HTML dans les options avancées'
      ]
    },
    apple: {
      title: 'Instructions Apple Mail',
      clientName: 'Apple Mail',
      icon: '🍎',
      steps: [
        'Ouvrez Apple Mail sur votre Mac',
        'Allez dans Mail → Réglages (ou Préférences)',
        'Cliquez sur l\'onglet "Signatures"',
        'Sélectionnez le compte email concerné',
        'Cliquez sur le bouton "+" pour ajouter une signature',
        'Collez votre signature avec Cmd+V dans la zone de droite',
        'Donnez un nom à votre signature si souhaité',
        'Fermez les réglages pour sauvegarder automatiquement'
      ],
      tips: [
        'Apple Mail préserve généralement bien le formatage HTML',
        'Vous pouvez glisser-déposer votre signature entre comptes',
        'La signature peut être assignée automatiquement ou manuellement'
      ]
    },
    yahoo: {
      title: 'Instructions Yahoo Mail',
      clientName: 'Yahoo Mail',
      icon: '📬',
      steps: [
        'Connectez-vous à Yahoo Mail',
        'Cliquez sur l\'icône Paramètres ⚙️ en haut à droite',
        'Sélectionnez "Plus de paramètres"',
        'Cliquez sur "Rédaction d\'emails" dans le menu de gauche',
        'Faites défiler jusqu\'à la section "Signature"',
        'Activez la signature et collez votre code HTML',
        'Prévisualisez le résultat',
        'Cliquez sur "Enregistrer" pour sauvegarder'
      ],
      tips: [
        'Yahoo Mail supporte bien le HTML dans les signatures',
        'Testez l\'affichage avant de finaliser',
        'La signature s\'applique à tous les nouveaux emails'
      ]
    },
    thunderbird: {
      title: 'Instructions Thunderbird',
      clientName: 'Thunderbird',
      icon: '🦅',
      steps: [
        'Ouvrez Mozilla Thunderbird',
        'Allez dans Outils → Paramètres des comptes',
        'Sélectionnez votre compte de messagerie',
        'Cochez "Joindre cette signature"',
        'Sélectionnez "Utiliser HTML" si disponible',
        'Collez votre signature HTML dans la zone de texte',
        'Cliquez sur "OK" pour sauvegarder',
        'Testez en composant un nouveau message'
      ],
      tips: [
        'Thunderbird gère très bien les signatures HTML',
        'Vous pouvez avoir une signature différente par compte',
        'Option pour inclure la signature dans les réponses'
      ]
    }
  };

  return instructions[emailClient] || instructions.gmail;
}

// Version simplifiée pour compatibilité
export function getSimpleInstructions(emailClient) {
  const data = getInstructions(emailClient);
  return {
    title: data.title,
    steps: data.steps
  };
}

// Obtenir tous les clients supportés
export function getSupportedClients() {
  return [
    { value: 'gmail', label: 'Gmail', icon: '📧' },
    { value: 'outlook', label: 'Outlook', icon: '📮' },
    { value: 'apple', label: 'Apple Mail', icon: '🍎' },
    { value: 'yahoo', label: 'Yahoo Mail', icon: '📬' },
    { value: 'thunderbird', label: 'Thunderbird', icon: '🦅' }
  ];
}

// Détecter le client probable basé sur l'user agent (optionnel)
export function detectEmailClient() {
  if (typeof window === 'undefined') return 'gmail';
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('mac')) return 'apple';
  if (userAgent.includes('windows')) return 'outlook';
  
  return 'gmail'; // Par défaut
}