export function FAQSection({ title, icon, children }) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-[var(--color-primary)] font-semibold">{title}</h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}