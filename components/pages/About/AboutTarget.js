export function AboutTarget() {
  const targets = [
    { name: "Freelances", icon: "💼" },
    { name: "Entrepreneurs", icon: "🚀" },
    { name: "Recruteurs", icon: "👥" },
    { name: "Commerciaux", icon: "💼" },
    { name: "Étudiants", icon: "🎓" },
    { name: "Créateurs", icon: "🎨" }
  ];

  return (
    <section className="mb-12">
      <div className="bg-[var(--color-surface)] rounded-2xl p-8 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl">👥</div>
          <h2 className="text-[var(--color-primary)] font-semibold">Pour qui ?</h2>
        </div>
        <div className="text-[var(--color-muted)] leading-relaxed">
          <p className="mb-6">
            Ma Signature Mail s'adresse à tous les professionnels qui souhaitent créer une signature email qui inspire confiance et professionnalisme.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {targets.map((target, index) => (
              <div key={index} className="flex items-center gap-3 bg-[var(--color-background)] rounded-lg p-3 border border-[var(--color-border)]">
                <span className="text-xl">{target.icon}</span>
                <span className="font-medium text-[var(--color-foreground)]">{target.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm">
            <strong className="text-[var(--color-foreground)]">Pas besoin de coder, pas besoin de compte.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}