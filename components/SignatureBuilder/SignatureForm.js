import React from 'react';

export default function SignatureForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const inputClasses = "w-full px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-colors bg-[var(--color-surface)]";
  const labelClasses = "block text-xs font-medium text-[var(--color-muted)] mb-1";
  const selectClasses = "w-full px-3 py-2 border border-[var(--color-border)] rounded-lg text-sm bg-[var(--color-surface)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] transition-colors cursor-pointer appearance-none pr-8";

  return (
    <form className="space-y-4 p-5 bg-[var(--color-surface)] text-[var(--color-foreground)] rounded-xl shadow-sm border border-[var(--color-border)] h-fit">
      <div className="text-center pb-3 border-b border-[var(--color-border)]">
        <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-1">Informations personnelles</h3>
      </div>

      {/* Informations de base - 3 lignes de 2 colonnes */}
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

      {/* Logo + Réseaux sociaux côte à côte */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Upload logo */}
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
className="w-full px-3 py-2 border-2 border-dashed border-[var(--color-border)] rounded-lg bg-[var(--color-background)] hover:bg-[var(--color-surface)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] cursor-pointer text-sm transition-colors
file:mr-3 file:py-1.5 file:px-3 file:rounded file:border file:border-[var(--color-border)] file:text-xs file:bg-[var(--color-surface)] file:text-[var(--color-foreground)] file:hover:bg-[var(--color-accent)] file:hover:text-[var(--color-primary)] file:cursor-pointer file:transition-colors"/>
          {formData.photoUrl && (
            <div className="flex justify-center mt-2">
              <div className="relative">
                <img
                  src={formData.photoUrl}
                  alt="Aperçu logo"
                  className="h-12 w-auto rounded-lg object-contain border border-[var(--color-border)]"
                />
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, photoUrl: '' }))}
                  className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Réseaux sociaux */}
        <div>
          <label className={labelClasses}>Réseaux sociaux <span className="text-[var(--color-muted)]">(optionnel)</span></label>
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

      {/* Configuration - une seule ligne */}
      <div className="bg-[var(--color-background)] p-3 rounded-lg border border-[var(--color-border)]">
        <h4 className="text-sm font-medium text-[var(--color-foreground)] mb-3">Configuration</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div>
            <label htmlFor="emailClient" className={labelClasses}>Client e-mail</label>
            <div className="relative">
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-3 h-3 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <label htmlFor="template" className={labelClasses}>Modèle</label>
            <div className="relative">
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-3 h-3 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="iconStyle" className={labelClasses}>Style des icônes</label>
            <div className="relative">
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-3 h-3 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="primaryColor" className={labelClasses}>Couleur</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                name="primaryColor"
                id="primaryColor"
                value={formData.primaryColor}
                onChange={handleChange}
                className="w-8 h-8 rounded border border-[var(--color-border)] cursor-pointer flex-shrink-0"
              />
              <input
                type="text"
                value={formData.primaryColor}
                onChange={(e) => {
                  let value = e.target.value.trim();
                  // Ajouter # si manquant et que ce n'est pas vide
                  if (value && !value.startsWith('#')) {
                    value = '#' + value;
                  }
                  // Valider le format hex (accepter les codes partiels pendant la saisie)
                  if (/^#?[0-9A-Fa-f]{0,6}$/.test(value) || value === '') {
                    setFormData(prev => ({ ...prev, primaryColor: value }));
                  }
                }}
                onBlur={(e) => {
                  let value = e.target.value.trim();
                  // Validation finale : doit être un code hex complet
                  if (value && !/^#[0-9A-Fa-f]{6}$/.test(value)) {
                    // Restaurer la valeur précédente si invalide
                    e.target.value = formData.primaryColor;
                  }
                }}
                placeholder="#1F2B45"
                className="flex-1 min-w-0 px-2 py-2 text-xs text-[var(--color-foreground)] bg-[var(--color-surface)] rounded border border-[var(--color-border)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
                maxLength="7"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}