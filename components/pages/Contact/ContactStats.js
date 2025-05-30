export function ContactStats() {
  const stats = [
    { icon: "⚡", value: "< 24h", label: "Temps de réponse moyen" },
    { icon: "💬", value: "100%", label: "De réponses personnalisées" },
    { icon: "🆓", value: "Gratuit", label: "Support inclus" },
    { icon: "🌍", value: "7j/7", label: "Disponibilité" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center bg-[var(--color-surface)] rounded-xl p-4 shadow-sm border border-[var(--color-border)]">
          <div className="text-2xl mb-1">{stat.icon}</div>
          <div className="font-bold text-[var(--color-primary)] text-sm md:text-base">{stat.value}</div>
          <div className="text-xs text-[var(--color-muted)]">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}