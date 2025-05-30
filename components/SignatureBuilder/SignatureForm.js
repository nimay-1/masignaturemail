import React from 'react';

export default function SignatureForm({ formData, setFormData }) {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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

          <div>
            <label htmlFor="primaryColor" className={labelClasses}>Couleur</label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                name="primaryColor"
                id="primaryColor"
                value={formData.primaryColor}
                onChange={handleChange}
                className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
              />
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
                placeholder="#1F2B45"
                className="flex-1 px-2 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength="7"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}