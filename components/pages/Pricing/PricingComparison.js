export function PricingComparison() {
  return (
    <div className="mb-16">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Plan Gratuit */}
        <div className="relative bg-[var(--color-surface)] border-2 border-[var(--color-accent)] rounded-2xl p-8 shadow-lg transform hover:-translate-y-1 transition-all">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-[var(--color-accent)] text-[var(--color-primary)] px-4 py-1 rounded-full text-sm font-semibold">
              ⭐ Recommandé
            </span>
          </div>
          
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-2">
              Gratuit
            </h2>
            <p className="text-[var(--color-muted)] mb-4">
              Pour tous les professionnels
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[var(--color-primary)]">0€</span>
              <span className="text-[var(--color-muted)]">/mois</span>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {[
              "Générateur complet illimité",
              "2 modèles professionnels (moderne & classique)",
              "Couleurs personnalisables",
              "Upload photo/logo gratuit",
              "Réseaux sociaux intégrés",
              "Icônes emoji ou SVG au choix",
              "Instructions Gmail/Outlook/Apple Mail",
              "Code HTML propre et responsive",
              "Prévisualisation temps réel",
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                <span className="text-[var(--color-foreground)] text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="/#generator"
            className="w-full block text-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-primary)] font-semibold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Commencer gratuitement
          </a>
        </div>

        {/* Plan Pro - Coming Soon */}
        <div className="relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 shadow-sm">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-[var(--color-primary)] text-white px-4 py-1 rounded-full text-sm font-semibold">
              🚀 Bientôt disponible
            </span>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-2">
              Pro
            </h2>
            <p className="text-[var(--color-muted)] mb-4">
              Pour les équipes et power users
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[var(--color-muted)]">~5€</span>
              <span className="text-[var(--color-muted)]">/mois</span>
              <div className="text-xs text-[var(--color-muted)] mt-1">Prix indicatif</div>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
              <span className="text-[var(--color-muted)] text-sm">Toutes les fonctionnalités gratuites</span>
            </li>
            {[
              "Des dizaines de templates premium exclusifs",
              "Sauvegarde cloud de vos signatures",
              "Gestion multi-signatures",
              "Création de signatures temporaires (événements, salons, promotions...)",
              "Export PDF haute qualité",
              "Polices typographiques avancées",
              "Intégrations Calendly, WhatsApp, etc.",
              "Installation directe Gmail (extension)",
              "Analytics des signatures",
              "Support prioritaire par téléphone et email",
              "Accès anticipé aux nouvelles fonctionnalités"
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[var(--color-muted)] font-bold flex-shrink-0 mt-0.5">✓</span>
                <span className="text-[var(--color-muted)] text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            disabled
            className="w-full bg-gray-100 text-gray-500 font-semibold py-4 px-6 rounded-xl cursor-not-allowed"
          >
            Disponible très bientôt!
          </button>
        </div>
      </div>
    </div>
  );
}