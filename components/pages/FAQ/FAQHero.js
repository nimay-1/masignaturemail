export function FAQHero() {
  return (
    <header className="text-center mb-16">
      <h1 className="text-[var(--color-primary)] mb-4">
        Questions fréquentes
      </h1>
      <p className="text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
        Tout ce que vous devez savoir pour créer votre signature email professionnelle. 
        Une question ? <a href="/contact" className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] link-hover font-medium">Contactez-nous</a> !
      </p>
    </header>
  );
}