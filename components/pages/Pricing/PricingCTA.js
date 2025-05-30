export function PricingCTA() {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-[var(--color-primary)] to-blue-700 rounded-2xl p-8 text-white max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">
          Prêt à créer votre signature professionnelle ?
        </h3>
        <p className="text-blue-100 mb-6">
          Rejoignez des milliers de professionnels qui utilisent déjà Ma Signature Mail pour valoriser leur communication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a 
            href="/#generator" 
            className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-primary)] font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            Commencer gratuitement
          </a>
          <a 
            href="/contact" 
            className="inline-block border-2 border-white hover:bg-white hover:text-[var(--color-primary)] text-white font-semibold py-3 px-8 rounded-lg transition-all"
          >
            Nous contacter
          </a>
        </div>
        <p className="text-xs text-blue-200">
          💡 Une idée pour la version Pro ? <a href="/contact" className="underline hover:no-underline">Faites-nous part de vos suggestions</a>
        </p>
      </div>
    </div>
  );
}
