export function AboutCta() {
  return (
    <div className="text-center mt-16">
      <div className="bg-gradient-to-r from-[var(--color-primary)] to-blue-700 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-semibold mb-4">
          Prêt à créer votre signature professionnelle ?
        </h3>
        <p className="text-blue-100 mb-6 max-w-md mx-auto">
          Rejoignez les milliers de professionnels qui utilisent déjà Ma Signature Mail pour valoriser leur image.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/#generator" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-primary)] font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            Commencer gratuitement
          </a>
          <a 
            href="/faq" 
            className="inline-block border-2 border-white hover:bg-white hover:text-[var(--color-primary)] text-white font-semibold py-3 px-8 rounded-lg transition-all"
          >
            Voir la FAQ
          </a>
        </div>
      </div>
    </div>
  );
}