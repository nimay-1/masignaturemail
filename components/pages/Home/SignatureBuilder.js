'use client';
import React, { useState, useEffect } from 'react';

// Fonction getTableAttributes
function getTableAttributes(emailClient) {
  switch (emailClient) {
    case 'outlook':
    case 'gmail':
      return 'cellpadding="0" cellspacing="0" border="0"';
    case 'apple':
    default:
      return '';
  }
}

// Fonction pour générer les icônes de contact
function getContactIcon(type, iconStyle, primaryColor) {
  const icons = {
    email: {
      emoji: '📧',
      svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="${primaryColor}" style="vertical-align:middle;margin-right:4px;display:inline;"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/></svg>`
    },
    phone: {
      emoji: '📞',
      svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="${primaryColor}" style="vertical-align:middle;margin-right:4px;display:inline;"><path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/></svg>`
    },
    website: {
      emoji: '🌐',
      svg: `<svg width="16" height="16" viewBox="0 0 24 24" fill="${primaryColor}" style="vertical-align:middle;margin-right:4px;display:inline;"><path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.77 20 8.64 20 12C20 14.08 19.2 15.97 17.9 17.39Z"/></svg>`
    }
  };

  return iconStyle === 'emoji' ? icons[type].emoji + ' ' : icons[type].svg;
}

// Fonction pour générer les liens des réseaux sociaux
function generateSocialLinks(data) {
  const links = [];
  const style = `width: 20px; height: 20px; border: none; display: inline-block;`;

  const socialIcons = {
    linkedin: { emoji: '🔗', svg: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', name: 'LinkedIn' },
    x: { emoji: '❌', svg: 'https://cdn-icons-png.flaticon.com/512/5968/5968958.png', name: 'X' },
    instagram: { emoji: '📸', svg: 'https://cdn-icons-png.flaticon.com/512/174/174855.png', name: 'Instagram' },
    facebook: { emoji: '📘', svg: 'https://cdn-icons-png.flaticon.com/512/733/733547.png', name: 'Facebook' },
  };

  Object.entries(socialIcons).forEach(([key, icons]) => {
    const url = data[key] || (key === 'x' ? data.twitter : null);
    if (!url) return;

    links.push(
      `<a href="${url}" style="display: inline-block; margin-right: 8px;">` +
      `<img src="${icons.svg}" alt="${icons.name}" style="${style}; filter: hue-rotate(0deg);">` +
      `</a>`
    );
  });

  return links.length
    ? `<div style="margin-top: 8px;">${links.join('')}</div>`
    : '';
}

// Templates de signature
const templates = {
  modern: (data) => {
    const tableAttrs = getTableAttributes(data.emailClient);
    const cleanUrl = (url) => url.replace(/^https?:\/\//, '');

    return `
      <table ${tableAttrs} style="font-family: -apple-system, BlinkMacSystemFont,'Segoe UI',Roboto; font-size:${data.fontSize}px;color:#333;border-collapse:collapse;">
        <tr>
          ${data.photoUrl ? `<td style="padding-right:20px;"><img src="${data.photoUrl}" alt="Logo" style="width:80px;max-height:60px;border:none;"></td>` : ''}
          <td>
            <div style="border-left:4px solid ${data.primaryColor};padding-left:15px;">
              ${data.fullName  ? `<div style="font-size:18px;font-weight:700;color:${data.primaryColor};">${data.fullName}</div>`  : ''}
              ${data.jobTitle  ? `<div style="font-size:14px;color:#666;">${data.jobTitle}</div>`                         : ''}
              ${data.company   ? `<div style="font-size:14px;font-weight:600;">${data.company}</div>`                    : ''}
              ${data.email     ? `<div><a href="mailto:${data.email}" style="color:#333;text-decoration:none;">${getContactIcon('email', data.iconStyle, data.primaryColor)}${data.email}</a></div>` : ''}
              ${data.phone     ? `<div><a href="tel:${data.phone}" style="color:#333;text-decoration:none;">${getContactIcon('phone', data.iconStyle, data.primaryColor)}${data.phone}</a></div>` : ''}
              ${data.website   ? `<div><a href="${data.website}" style="color:#333;text-decoration:none;">${getContactIcon('website', data.iconStyle, data.primaryColor)}${cleanUrl(data.website)}</a></div>` : ''}
              ${generateSocialLinks(data)}
            </div>
          </td>
        </tr>
      </table>
    `;
  },

  classic: (data) => {
    const tableAttrs = getTableAttributes(data.emailClient);
    const cleanUrl = (url) => url.replace(/^https?:\/\//, '');

    return `
      <table ${tableAttrs} style="font-family:Georgia,'Times New Roman',serif;font-size:${data.fontSize}px;color:#333;border-collapse:collapse;">
        <tr>
          ${data.photoUrl ? `<td style="padding-right:20px;"><img src="${data.photoUrl}" alt="Logo" style="width:80px;max-height:60px;"></td>` : ''}
          <td style="padding-top:10px;border-top:2px solid ${data.primaryColor};">
            ${data.fullName  ? `<div style="font-size:16px;font-weight:bold;color:${data.primaryColor};">${data.fullName}</div>`    : ''}
            ${data.jobTitle  ? `<div style="font-style:italic;color:#666;">${data.jobTitle}</div>`                                     : ''}
            ${data.company   ? `<div style="font-weight:bold;">${data.company}</div>`                                                    : ''}
            ${data.email     ? `<div><a href="mailto:${data.email}" style="color:#333;text-decoration:none;">${getContactIcon('email', data.iconStyle, data.primaryColor)}${data.email}</a></div>` : ''}
            ${data.phone     ? `<div><a href="tel:${data.phone}" style="color:#333;text-decoration:none;">${getContactIcon('phone', data.iconStyle, data.primaryColor)}${data.phone}</a></div>` : ''}
            ${data.website   ? `<div><a href="${data.website}" style="color:#333;text-decoration:none;">${getContactIcon('website', data.iconStyle, data.primaryColor)}${cleanUrl(data.website)}</a></div>` : ''}
            ${generateSocialLinks(data)}
          </td>
        </tr>
      </table>
    `;
  }
};

// Fonction de génération de signature
function generateSignatureHTML(data) {
  return (templates[data.template] || templates.modern)(data);
}

// Composant SignatureForm
function SignatureForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClasses = "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  const labelClasses = "block text-xs font-medium text-gray-700 mb-1";
  const selectClasses = "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className="space-y-4 p-5 bg-white rounded-xl shadow-sm border border-gray-200 h-fit">
      <div className="text-center pb-3 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">Informations personnelles</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label htmlFor="fullName" className={labelClasses}>Nom complet</label>
          <input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Jean Dupont"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="jobTitle" className={labelClasses}>Poste</label>
          <input
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Directeur Marketing"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClasses}>Entreprise</label>
          <input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Ex: Agence Nova"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="website" className={labelClasses}>Site web</label>
          <input
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="https://monentreprise.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>Téléphone</label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+33 6 12 34 56 78"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jean@exemple.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className={labelClasses}>Logo / Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;
              if (file.size > 2 * 1024 * 1024) {
                alert('Image trop grande (max 2MB)');
                return;
              }
              const reader = new FileReader();
              reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, photoUrl: reader.result }));
              };
              reader.readAsDataURL(file);
            }}
            className="w-full px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-sm"
          />
          {formData.photoUrl && (
            <div className="flex justify-center mt-2">
              <div className="relative">
                <img
                  src={formData.photoUrl}
                  alt="Aperçu logo"
                  className="h-12 w-auto rounded-lg object-contain border border-gray-300"
                />
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, photoUrl: '' }))}
                  className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>

        <div>
          <label className={labelClasses}>Réseaux sociaux <span className="text-gray-500">(optionnel)</span></label>
          <div className="grid grid-cols-2 gap-2">
            <input
              name="linkedin"
              value={formData.linkedin || ''}
              onChange={handleChange}
              placeholder="LinkedIn"
              className={`${inputClasses} text-xs`}
            />
            <input
              name="x"
              value={formData.x || formData.twitter || ''}
              onChange={(e) => {
                setFormData(prev => ({ 
                  ...prev, 
                  x: e.target.value,
                  twitter: e.target.value 
                }));
              }}
              placeholder="X (Twitter)"
              className={`${inputClasses} text-xs`}
            />
            <input
              name="instagram"
              value={formData.instagram || ''}
              onChange={handleChange}
              placeholder="Instagram"
              className={`${inputClasses} text-xs`}
            />
            <input
              name="facebook"
              value={formData.facebook || ''}
              onChange={handleChange}
              placeholder="Facebook"
              className={`${inputClasses} text-xs`}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Configuration</h4>
        
        {/* GRILLE CORRIGÉE : ajout de xl:grid-cols-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          <div>
            <label htmlFor="emailClient" className={labelClasses}>Client e-mail</label>
            <select
              id="emailClient"
              name="emailClient"
              value={formData.emailClient}
              onChange={handleChange}
              className={selectClasses}
            >
              <option value="gmail">Gmail</option>
              <option value="apple">Apple Mail</option>
              <option value="outlook">Outlook</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="template" className={labelClasses}>Modèle</label>
            <select
              id="template"
              name="template"
              value={formData.template}
              onChange={handleChange}
              className={selectClasses}
            >
              <option value="modern">Moderne</option>
              <option value="classic">Classique</option>
            </select>
          </div>

          <div>
            <label htmlFor="iconStyle" className={labelClasses}>Style des icônes</label>
            <select
              id="iconStyle"
              name="iconStyle"
              value={formData.iconStyle}
              onChange={handleChange}
              className={selectClasses}
            >
              <option value="emoji">Emoji</option>
              <option value="svg">Classique</option>
            </select>
          </div>

          {/* SECTION COULEUR CORRIGÉE */}
          <div>
            <label htmlFor="primaryColor" className={labelClasses}>Couleur</label>
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="color"
                  name="primaryColor"
                  id="primaryColor"
                  value={formData.primaryColor}
                  onChange={handleChange}
                  className="w-10 h-10 rounded-lg border-2 border-gray-300 cursor-pointer bg-white hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  style={{
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    appearance: 'none',
                    padding: '2px'
                  }}
                />
                {/* Indicateur visuel de la couleur sélectionnée */}
                <div 
                  className="absolute inset-1 rounded-md pointer-events-none"
                  style={{ backgroundColor: formData.primaryColor }}
                />
              </div>
              <input
                type="text"
                value={formData.primaryColor}
                onChange={(e) => {
                  let value = e.target.value.trim();
                  if (value && !value.startsWith('#')) {
                    value = '#' + value;
                  }
                  if (/^#?[0-9A-Fa-f]{0,6}$/.test(value) || value === '') {
                    setFormData(prev => ({ ...prev, primaryColor: value }));
                  }
                }}
                onBlur={(e) => {
                  let value = e.target.value.trim();
                  if (value && !/^#[0-9A-Fa-f]{6}$/.test(value)) {
                    e.target.value = formData.primaryColor;
                  }
                }}
                placeholder="#1F2B45"
                className="flex-1 min-w-0 px-3 py-2 text-sm font-mono border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                maxLength="7"
              />
            </div>
            <div className="mt-1 text-xs text-gray-500">
              Couleur principale de votre signature
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant CopyButton
function CopyButton({ signatureHtml }) {
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
      <button 
        onClick={handleCopySignature} 
        className="min-w-60 text-sm px-6 py-2.5 bg-[var(--color-accent)] text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        Copier la signature
      </button>
      <button
        onClick={handleCopyCode}
        className="min-w-60 text-sm px-6 py-2.5 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
      >
        &lt;/&gt; Copier le code HTML
      </button>
      
      {/* Toasts simplifiés */}
      {copied && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-xl shadow-lg text-white text-sm bg-green-600 z-50">
          ✅ Signature copiée !
        </div>
      )}
      {codeCopied && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-xl shadow-lg text-white text-sm bg-blue-600 z-50">
          ✅ Code HTML copié !
        </div>
      )}
    </div>
  );
}

// Composant SignaturePreview
function SignaturePreview({ signatureHtml }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 space-y-4">
      <h3 className="text-xl font-semibold text-center text-gray-900 mb-1">Prévisualisation</h3>
      <div className="border border-dashed border-gray-300 p-4 rounded-lg bg-gray-50 min-h-[150px]">
        {signatureHtml ? (
          <div dangerouslySetInnerHTML={{ __html: signatureHtml }} />
        ) : (
          <p className="text-gray-500 text-center mt-6 text-sm">
            Remplissez les champs à gauche pour voir votre signature ici.
          </p>
        )}
      </div>
      <div className="flex justify-center">
        <CopyButton signatureHtml={signatureHtml} />
      </div>
    </div>
  );
}

// Instructions données
const instructionsData = {
  gmail: {
    title: 'Instructions Gmail',
    steps: [
      'Ouvrez Gmail dans votre navigateur',
      'Cliquez sur l\'engrenage ⚙️ → "Voir tous les paramètres"',
      'Allez dans l\'onglet "Général"',
      'Descendez jusqu\'à la section "Signature"',
      'Cliquez sur "Créer" pour ajouter une nouvelle signature',
      'Collez votre signature avec Ctrl+V (ou Cmd+V sur Mac)',
      'Définissez-la comme signature par défaut si souhaité',
      'Cliquez sur "Enregistrer les modifications" en bas de page'
    ]
  },
  outlook: {
    title: 'Instructions Outlook',
    steps: [
      'Ouvrez Outlook sur votre ordinateur',
      'Allez dans Fichier → Options → Courrier',
      'Dans la section "Composer des messages", cliquez sur "Signatures..."',
      'Cliquez sur "Nouveau" pour créer une nouvelle signature',
      'Donnez un nom à votre signature',
      'Collez votre signature dans l\'éditeur avec Ctrl+V',
      'Définissez cette signature pour les nouveaux messages',
      'Cliquez sur "OK" pour sauvegarder'
    ]
  },
  apple: {
    title: 'Instructions Apple Mail',
    steps: [
      'Ouvrez Apple Mail sur votre Mac',
      'Allez dans Mail → Réglages (ou Préférences)',
      'Cliquez sur l\'onglet "Signatures"',
      'Sélectionnez le compte email concerné',
      'Cliquez sur le bouton "+" pour ajouter une signature',
      'Collez votre signature avec Cmd+V dans la zone de droite',
      'Donnez un nom à votre signature si souhaité',
      'Fermez les réglages pour sauvegarder automatiquement'
    ]
  }
};

// Composant Instructions
function Instructions({ emailClient }) {
  const data = instructionsData[emailClient] || instructionsData.gmail;
  
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-sm leading-relaxed">
      <h3 className="font-semibold mb-3 text-gray-900 text-center">
        {data.title}
      </h3>
      <ul className="space-y-3 text-gray-600 text-sm">
        {data.steps.map((step, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-blue-600 flex-shrink-0">✔</span>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Composant principal
export default function SignatureBuilder() {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    phone: '',
    email: '',
    website: '',
    photoUrl: '',
    primaryColor: '#1F2B45',
    iconStyle: 'emoji',
    fontSize: '14',
    emailClient: 'gmail',
    linkedin: '',
    twitter: '',
    x: '',
    instagram: '',
    facebook: '',
    template: 'modern'
  });

  const [signatureHtml, setSignatureHtml] = useState('');

  // Debug : afficher les données du formulaire
  console.log('FormData:', formData);

  useEffect(() => {
    const html = generateSignatureHTML(formData);
    console.log('Generated HTML:', html);
    setSignatureHtml(html);
  }, [formData]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Générez votre signature email
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SignatureForm formData={formData} setFormData={setFormData} />
          <div className="space-y-4">
            <SignaturePreview signatureHtml={signatureHtml} />
            <Instructions emailClient={formData.emailClient} />
          </div>
        </div>
      </div>
    </div>
  );
}