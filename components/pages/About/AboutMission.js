export function AboutMission() {
  return (
    <section className="mb-12">
      <div className="bg-[var(--color-surface)] rounded-2xl p-8 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl">✨</div>
          <h2 className="text-[var(--color-primary)] font-semibold">Notre mission</h2>
        </div>
        <div className="text-[var(--color-muted)] leading-relaxed">
          <p className="mb-4">
            Nous croyons que chaque professionnel devrait pouvoir <strong className="text-[var(--color-foreground)]">valoriser son image de marque</strong> dans chaque email envoyé. 
          </p>
          <p>
            <strong className="text-[var(--color-primary)]">Ma Signature Mail</strong> a été conçu pour permettre à tout le monde — sans compétence technique — de créer une <strong className="text-[var(--color-foreground)]">signature HTML moderne, responsive et personnalisée</strong> en quelques clics, gratuitement.
          </p>
        </div>
      </div>
    </section>
  );
}