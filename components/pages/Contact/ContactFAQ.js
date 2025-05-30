export function ContactFAQ() {
  const quickFaqs = [
    {
      question: "Combien de temps pour une réponse ?",
      answer: "Nous répondons généralement sous 24h en semaine, 48h le weekend."
    },
    {
      question: "Puis-je suggérer une nouvelle fonctionnalité ?",
      answer: "Absolument ! Nous adorons les idées de nos utilisateurs. Utilisez le formulaire ci-dessus."
    },
    {
      question: "Le support est-il vraiment gratuit ?",
      answer: "Oui, le support est inclus gratuitement, même pour la version gratuite de notre outil."
    }
  ];

  return (
    <div className="mt-12 bg-[var(--color-background)] rounded-2xl p-8">
      <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6 text-center">
        Questions rapides
      </h2>
      <div className="space-y-4">
        {quickFaqs.map((faq, index) => (
          <details key={index} className="bg-[var(--color-surface)] rounded-lg p-4 border border-[var(--color-border)]">
            <summary className="font-medium text-[var(--color-foreground)] cursor-pointer hover:text-[var(--color-primary)] transition-colors">
              {faq.question}
            </summary>
            <p className="mt-2 text-[var(--color-muted)] text-sm leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
      <div className="text-center mt-6">
        <a 
          href="/faq" 
          className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] font-medium link-hover"
        >
          Voir toutes les questions fréquentes →
        </a>
      </div>
    </div>
  );
}
