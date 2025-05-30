export function PricingFeatures() {
  const features = [
    {
      category: "🎨 Personnalisation",
      items: [
        "2 templates professionnels",
        "Couleurs personnalisables",
        "Upload photo/logo illimité",
        "Choix d'icônes (emoji/SVG)"
      ]
    },
    {
      category: "🔧 Fonctionnalités",
      items: [
        "Générateur illimité",
        "Prévisualisation temps réel",
        "Code HTML optimisé",
        "100% responsive"
      ]
    },
    {
      category: "📧 Compatibilité",
      items: [
        "Gmail, Outlook, Apple Mail",
        "Instructions intégrées",
        "Support multi-clients",
        "Export facile"
      ]
    },
    {
      category: "🔒 Confidentialité",
      items: [
        "Aucune donnée stockée",
        "Traitement local",
        "Pas d'inscription",
        "100% privé"
      ]
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center mb-8">
        Tout ce dont vous avez besoin, gratuitement
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-[var(--color-surface)] rounded-xl p-6 border border-[var(--color-border)] shadow-sm">
            <h3 className="font-semibold text-[var(--color-primary)] mb-4 text-center">
              {feature.category}
            </h3>
            <ul className="space-y-2">
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                  <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}