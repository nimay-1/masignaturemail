export function ContactInfo() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email direct",
      description: "support@masignaturemail.com",
      action: "mailto:support@masignaturemail.com",
      note: "Réponse sous 24h"
    },
    {
      icon: "❓",
      title: "Questions fréquentes",
      description: "Consultez notre FAQ",
      action: "/faq",
      note: "Réponses immédiates"
    },
    {
      icon: "🚀",
      title: "Demande de fonctionnalité",
      description: "Proposez vos idées",
      action: "#form",
      note: "Nous adorons vos suggestions"
    }
  ];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-6 text-center">
        Autres moyens de nous contacter
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.action}
            className="group bg-[var(--color-surface)] p-6 rounded-xl border border-[var(--color-border)] hover:shadow-lg hover:border-[var(--color-accent)] transition-all text-center"
          >
            <div className="text-3xl mb-3">{method.icon}</div>
            <h3 className="font-semibold text-[var(--color-foreground)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
              {method.title}
            </h3>
            <p className="text-[var(--color-muted)] mb-2">{method.description}</p>
            <span className="text-xs text-[var(--color-accent)] font-medium">
              {method.note}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}