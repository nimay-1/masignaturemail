import React from 'react';
import CopyButton from './CopyButton';

// Export par défaut au lieu d'export nommé
export default function SignaturePreview({ signatureHtml }) {
  return (
    <div className="bg-[var(--color-surface)] text-[var(--color-foreground)] p-5 rounded-xl shadow-sm border border-[var(--color-border)] space-y-4">
        <h3 className="text-xl font-semibold text-center text-[var(--color-foreground)] mb-1">Prévisualisation</h3>
      <div className="border border-dashed border-[var(--color-border)] p-4 rounded-lg bg-[var(--color-background)] min-h-[150px]">
        {signatureHtml ? (
          <div dangerouslySetInnerHTML={{ __html: signatureHtml }} />
        ) : (
          <p className="text-[var(--color-muted)] text-center mt-6 text-sm">
            Remplissez les champs à gauche pour voir votre signature ici.
          </p>
        )}
      </div>
      {signatureHtml && (
        <div className="flex justify-center">
          <CopyButton signatureHtml={signatureHtml} />
        </div>
      )}
    </div>
  );
}