export function PricingHero() {
  return (
    <header className="text-center mb-16">
      <div className="max-w-3xl mx-auto">
        <div className="inline-block bg-gradient-to-r from-[var(--color-accent)] to-orange-400 rounded-full px-6 py-2 mb-6">
          <span className="text-[var(--color-primary)] font-semibold text-sm">
            🎁 100% Gratuit pour toujours
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
          Tarification simple et transparente
        </h1>
        <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-8">
          <strong className="text-[var(--color-foreground)]">Ma Signature Mail est entièrement gratuit</strong> pour toutes les fonctionnalités essentielles. 
          Créez une signature email professionnelle sans inscription, sans paiement, sans limites.
        </p>
        <div className="flex justify-center items-center gap-4 text-sm text-[var(--color-muted)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Pas d'inscription requise
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Aucune donnée stockée
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Toujours gratuit
          </div>
        </div>
      </div>
    </header>
  );
}
