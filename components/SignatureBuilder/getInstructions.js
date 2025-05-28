// getInstructions.js
export function getInstructions(emailClient) {
  const instructions = {
    apple: {
      title: 'Instructions Apple Mail',
      steps: [
        'Ouvrez Apple Mail',
        'Allez dans Mail → Réglages → Signatures',
        'Cliquez sur "+" pour créer une nouvelle signature',
        'Collez avec Cmd+V dans la zone de texte',
        'Fermez les réglages pour sauvegarder'
      ]
    },
    outlook: {
      title: 'Instructions Outlook',
      steps: [
        'Ouvrez Outlook',
        'Allez dans Fichier → Options → Courrier',
        'Cliquez sur "Signatures..."',
        'Cliquez "Nouveau" pour créer une signature',
        'Collez avec Ctrl+V dans l\'éditeur',
        'Définissez comme signature par défaut'
      ]
    },
    gmail: {
      title: 'Instructions Gmail',
      steps: [
        'Ouvrez Gmail',
        'Cliquez sur l\'engrenage → "Voir tous les paramètres"',
        'Allez dans l\'onglet "Général"',
        'Descendez jusqu\'à "Signature"',
        'Cliquez "Créer" puis collez avec Ctrl+V',
        'Enregistrez les modifications'
      ]
    }
  };
  return instructions[emailClient] || instructions.apple;
}