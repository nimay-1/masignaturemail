'use client';
import React, { useState } from 'react';
import Button from '../ui/Button';

export default function CopyButton({ signatureHtml }) {
  const [copied, setCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);
  
  const handleCopySignature = () => {
    if (!signatureHtml) {
      alert('Rien à copier : la signature est vide.');
      return;
    }
    
    // Méthode simple avec textarea
    const textarea = document.createElement('textarea');
    textarea.value = signatureHtml;
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      const success = document.execCommand('copy');
      console.log('Copie signature réussie:', success);
      
      // Afficher le message même si on n'est pas sûr
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la copie');
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const handleCopyCode = () => {
    if (!signatureHtml) {
      alert('Rien à copier : la signature est vide.');
      return;
    }

    // Copier juste le texte brut du code HTML
    const textarea = document.createElement('textarea');
    textarea.value = signatureHtml;
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      const success = document.execCommand('copy');
      console.log('Copie code réussie:', success);
      
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 3000);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la copie du code');
    } finally {
      document.body.removeChild(textarea);
    }
  };
  
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <Button onClick={handleCopySignature} className="text-sm">
          📋 Signature
        </Button>
        <Button 
          onClick={handleCopyCode}
          className="text-sm border border-[var(--color-accent)] bg-transparent text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors"
        >
          &lt;/&gt; Code
        </Button>
      </div>

      {copied && (
        <div className="text-green-600 text-sm font-medium text-center bg-green-50 p-2 rounded-lg border border-green-200">
          ✅ Signature copiée !
        </div>
      )}
      {codeCopied && (
        <div className="text-blue-600 text-sm font-medium text-center bg-blue-50 p-2 rounded-lg border border-blue-200">
          ✅ Code HTML copié !
        </div>
      )}
    </div>
  );
}