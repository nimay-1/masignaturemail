export function AboutStats() {
  const stats = [
    { number: "0", label: "Inscription requise", icon: "🚫" },
    { number: "< 1", label: "Minute pour créer", icon: "⚡" },
    { number: "100%", label: "Gratuit à vie", icon: "🎁" },
    { number: "3", label: "Clients email supportés", icon: "📧" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center bg-[var(--color-surface)] rounded-xl p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow">
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">{stat.number}</div>
          <div className="text-sm text-[var(--color-muted)]">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
