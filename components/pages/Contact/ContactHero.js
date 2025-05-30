export function ContactHero() {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
        Contactez-nous
      </h1>
      <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto leading-relaxed">
        Une question sur notre générateur de signatures email ? Un bug à signaler ? 
        Une idée d'amélioration ? <strong className="text-[var(--color-foreground)]">Nous sommes là pour vous aider</strong>.
      </p>
      <div className="mt-6 flex justify-center">
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-4 py-2">
          <span className="text-sm text-[var(--color-primary)] font-medium">
            ⚡ Réponse généralement sous 24h
          </span>
        </div>
      </div>
    </header>
  );
}