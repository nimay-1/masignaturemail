export function AboutPhilosophy() {
  const principles = [
    {
      title: "Simplicité",
      description: "Interface intuitive, pas de complications inutiles",
      icon: "🎯"
    },
    {
      title: "Confidentialité",
      description: "Aucune donnée stockée, tout reste sur votre appareil",
      icon: "🔒"
    },
    {
      title: "Accessibilité",
      description: "Utilisable partout, sur tous les appareils",
      icon: "📱"
    },
    {
      title: "Qualité",
      description: "Signatures professionnelles, compatibles et responsives",
      icon: "⭐"
    }
  ];

  return (
    <section className="mb-12">
      <div className="bg-[var(--color-surface)] rounded-2xl p-8 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl">🚀</div>
          <h2 className="text-[var(--color-primary)] font-semibold">Notre approche</h2>
        </div>
        <div className="text-[var(--color-muted)] leading-relaxed">
          <p className="mb-6">
            Nous avons conçu Ma Signature Mail autour de <strong className="text-[var(--color-foreground)]">4 principes fondamentaux</strong> qui guident chacune de nos décisions.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {principles.map((principle, index) => (
              <div key={index} className="flex gap-4 bg-[var(--color-background)] rounded-lg p-4 border border-[var(--color-border)]">
                <div className="text-2xl flex-shrink-0">{principle.icon}</div>
                <div>
                  <h3 className="font-semibold text-[var(--color-foreground)] mb-1">{principle.title}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}