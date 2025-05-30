export function AboutHero() {
  return (
    <header className="text-center mb-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[var(--color-primary)] mb-6">
          À propos de Ma Signature Mail
        </h1>
        <p className="text-xl text-[var(--color-muted)] leading-relaxed mb-8">
          Une solution <span className="text-[var(--color-accent)] font-semibold">gratuite</span>, 
          <span className="text-[var(--color-accent)] font-semibold"> rapide</span> et 
          <span className="text-[var(--color-accent)] font-semibold"> intuitive</span> pour créer 
          des signatures email qui marquent les esprits.
        </p>
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-[var(--color-accent)] to-orange-400 rounded-full p-1">
            <div className="bg-[var(--color-surface)] rounded-full px-6 py-2">
              <span className="text-[var(--color-primary)] font-semibold">✨ 100% gratuit, 0% complications</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}