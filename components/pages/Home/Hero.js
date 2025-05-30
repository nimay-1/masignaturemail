'use client';

import Button from "../../ui/Button";

export default function Hero() {
  return (
    <section
      className="bg-[var(--color-background)] py-16 px-4"
      id="hero-signature-email"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Badge de confiance */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-6 py-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-[var(--color-primary)]">
              ✨ Plus de 10 000 signatures créées ce mois-ci
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Contenu principal */}
          <div className="text-center lg:text-left">
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[var(--color-primary)] mb-6"
            >
              Créateur de signature email{" "}
              <span className="text-[var(--color-accent)]">gratuit</span> et{" "}
              <span className="text-[var(--color-accent)]">professionnel</span>
            </h1>
            
            <p className="text-[var(--color-muted)] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Générez une <strong className="text-[var(--color-foreground)]">signature HTML responsive</strong> en moins d'une minute. 
              Compatible <strong className="text-[var(--color-foreground)]">Gmail, Outlook et Apple Mail</strong>. 
              Sans inscription, toujours gratuit.
            </p>

            {/* CTA principal */}
            <div className="mb-8">
              <a href="#main" className="inline-block group">
                <Button className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transform group-hover:-translate-y-1 transition-all">
                  🚀 Créer ma signature gratuitement
                </Button>
              </a>
              <p className="text-xs text-[var(--color-muted)] mt-2">
                ⚡ Prêt en moins de 60 secondes • 🔒 Aucune donnée stockée
              </p>
            </div>

            {/* Points clés avec metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center lg:text-left">
              <div className="bg-[var(--color-surface)] rounded-lg p-4 border border-[var(--color-border)]">
                <div className="font-bold text-[var(--color-primary)] text-lg">100%</div>
                <div className="text-xs text-[var(--color-muted)]">Gratuit à vie</div>
              </div>
              <div className="bg-[var(--color-surface)] rounded-lg p-4 border border-[var(--color-border)]">
                <div className="font-bold text-[var(--color-primary)] text-lg">&lt; 1min</div>
                <div className="text-xs text-[var(--color-muted)]">Temps création</div>
              </div>
              <div className="bg-[var(--color-surface)] rounded-lg p-4 border border-[var(--color-border)]">
                <div className="font-bold text-[var(--color-primary)] text-lg">3</div>
                <div className="text-xs text-[var(--color-muted)]">Clients supportés</div>
              </div>
            </div>
          </div>

          {/* Visuel avec overlay informatif */}
          <div className="relative">
            <div className="relative rounded-2xl p-8">
              <img
                src="/hero-4.webp"
                alt="Interface générateur signature email gratuit compatible Gmail Outlook Apple Mail"
                className="w-full h-auto rounded-lg"
                loading="eager"
                width="600"
                height="400"
              />
              {/* Overlay avec bénéfices */}
              <div className="absolute -bottom-4 -right-4 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-lg p-4 shadow-lg">
                <div className="text-sm font-semibold">✓ Compatible Gmail</div>
                <div className="text-sm font-semibold">✓ Compatible Outlook</div>
                <div className="text-sm font-semibold">✓ Compatible Apple Mail</div>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de confiance avec logos */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[var(--color-muted)] mb-6">
            Compatible avec tous les clients de messagerie populaires :
          </p>
          <div className="flex justify-center items-center gap-8 opacity-70">
            <div className="text-2xl">📧 Gmail</div>
            <div className="text-2xl">📮 Outlook</div>
            <div className="text-2xl">🍎 Apple Mail</div>
          </div>
        </div>
      </div>
    </section>
  );
}