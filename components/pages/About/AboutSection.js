export function AboutSection({ title, icon, children, className = "" }) {
  return (
    <section className={`mb-12 ${className}`}>
      <div className="bg-[var(--color-surface)] rounded-2xl p-8 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-6">
          <div className="text-3xl">{icon}</div>
          <h2 className="text-[var(--color-primary)] font-semibold">{title}</h2>
        </div>
        <div className="text-[var(--color-muted)] leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}