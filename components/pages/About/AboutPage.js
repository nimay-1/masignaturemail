'use client';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 py-16 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Titre SEO friendly */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
            À propos de Ma Signature Mail
          </h1>
          <p className="text-lg text-gray-600">
            Une solution gratuite, rapide et intuitive pour créer des signatures email professionnelles.
          </p>
        </header>

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-3">
            ✨ Notre mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nous croyons que chaque professionnel devrait pouvoir valoriser son image de marque dans chaque email envoyé. <strong>Ma Signature Mail</strong> a été conçu pour permettre à tout le monde — sans compétence technique — de créer une <strong>signature HTML moderne, responsive et personnalisée</strong> en quelques clics, gratuitement.
          </p>
        </section>

        {/* Public ciblé */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-3">
            👥 Pour qui ?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Que vous soyez <strong>freelance, entrepreneur, recruteur, commercial, étudiant ou créateur de contenu</strong>, Ma Signature Mail vous permet de créer une signature email professionnelle qui inspire confiance. Pas besoin de coder, pas besoin de compte.
          </p>
        </section>

        {/* Philosophie produit */}
        <section>
          <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-3">
            🚀 Une approche simple, rapide, sans fioritures
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Nous n'exigeons <strong>aucune inscription</strong>, nous ne stockons <strong>aucune donnée</strong>, et nous mettons l'accent sur l'accessibilité et la simplicité. L'outil est 100 % utilisable en ligne, sur ordinateur comme sur mobile, en moins d'une minute.
          </p>
        </section>

        {/* Call to action */}
        <section className="text-center mt-8">
          <a href="#main" className="inline-block bg-[var(--color-primary)] text-white font-semibold py-3 px-6 rounded-lg shadow hover:opacity-90 transition">
            Commencer gratuitement
          </a>
        </section>
      </div>
    </main>
  );
}
