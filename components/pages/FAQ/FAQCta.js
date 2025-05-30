export function FAQCta() {
  return (
    <div className="mt-16 text-center bg-gradient-to-r from-[var(--color-primary)] to-blue-700 rounded-2xl p-8 text-white">
      <h3 className="text-2xl font-semibold mb-4">
        Prêt à créer votre signature ?
      </h3>
      <p className="text-blue-100 mb-6 max-w-md mx-auto">
        Générez votre signature email professionnelle gratuitement en moins d'une minute.
      </p>
      <a 
        href="/#generator" 
        className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-primary)] font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
      >
        Commencer maintenant
      </a>
    </div>
  );
}