import React, { useState } from 'react';
import Button from '../ui/Button';
import Toast from '../ui/Toast';

export default function CopyButton({ signatureHtml }) {
  const [copied, setCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const showToast = (setter) => {
    setter(true);
    setTimeout(() => setter(false), 3000);
  };

  const handleCopySignature = async () => {
    if (!signatureHtml) return alert('Rien à copier.');
    try {
      if (navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([
          new ClipboardItem({
            'text/html': new Blob([signatureHtml], { type: 'text/html' }),
            'text/plain': new Blob([signatureHtml], { type: 'text/plain' }),
          }),
        ]);
      } else {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = signatureHtml;
        tempDiv.style.position = 'absolute';
        tempDiv.style.left = '-9999px';
        tempDiv.contentEditable = 'true';
        document.body.appendChild(tempDiv);

        const range = document.createRange();
        range.selectNodeContents(tempDiv);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand('copy');
        sel.removeAllRanges();
        document.body.removeChild(tempDiv);
      }

      showToast(setCopied);
    } catch (err) {
      alert('Erreur de copie');
    }
  };

  const handleCopyCode = async () => {
    if (!signatureHtml) return alert('Rien à copier.');
    try {
      await navigator.clipboard.writeText(signatureHtml);
      showToast(setCodeCopied);
    } catch (err) {
      alert('Erreur copie code');
    }
  };

  return (
    <div className="space-y-2 flex flex-col items-center">
      <Button onClick={handleCopySignature} className="min-w-60 text-sm" variant="primary">
        Copier la signature
      </Button>

      <Button
        onClick={handleCopyCode}
        className="min-w-60 text-sm"
        variant="secondary"
      >
        &lt;/&gt; Copier le code HTML
      </Button>

      {/* Toasts */}
      <Toast visible={copied} message="✅ Signature copiée !" type="success" />
      <Toast visible={codeCopied} message="✅ Code HTML copié !" type="info" />
    </div>
  );
}
