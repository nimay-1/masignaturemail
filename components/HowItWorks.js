export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Titre principal */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-[var(--color-primary)] mb-12">
          Comment ça fonctionne ?
        </h2>

        {/* Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Étape 1 */}
          <div className="bg-[#f9f9f9] rounded-xl p-6 shadow-sm text-center">
            <img
              src="/hiw_1.webp"
              alt="Complétez vos informations"
              className="max-h-60 mx-auto mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
              Complétez vos infos
            </h3>
            <p className="text-sm text-[var(--color-muted)]">
              Renseignez votre nom, poste, photo, logo et liens sociaux en quelques clics.
            </p>
          </div>

          {/* Étape 2 */}
          <div className="bg-[#f9f9f9] rounded-xl p-6 shadow-sm text-center">
            <img
              src="/hiw_2.webp"
              alt="Personnalisez le style"
              className="max-h-60 mx-auto mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
              Personnalisez le style
            </h3>
            <p className="text-sm text-[var(--color-muted)]">
              Choisissez vos couleurs, polices et mise en page. Prévisualisez le rendu en direct.
            </p>
          </div>

          {/* Étape 3 */}
          <div className="bg-[#f9f9f9] rounded-xl p-6 shadow-sm text-center">
            <img
              src="/hiw_3.webp"
              alt="Copiez et collez"
              className="max-h-60 mx-auto mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
              Copiez et collez
            </h3>
            <p className="text-sm text-[var(--color-muted)]">
              Copiez le code HTML généré et collez-le dans Gmail, Outlook ou Apple Mail.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
