import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="bg-[var(--color-background)] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Colonne gauche - Texte */}
        <div>
          <h1 className="text-[var(--text-5xl)] font-heading font-[var(--font-bold)] leading-[var(--leading-tight)] mb-4">
            Votre signature email professionnelle en quelques secondes
          </h1>
          <p className="text-[var(--color-muted)] leading-[var(--leading-normal)] mb-6">
            Ajoutez une touche de crédibilité à vos emails avec une signature HTML soignée, responsive et personnalisée. Gratuit et sans inscription.
          </p>
          <a href="#main" className="inline-block mb-6 hover:font-bold">
            <Button>Générer ma signature</Button>
          </a>
          <ul className="text-left space-y-3 text-[var(--color-muted)] text-sm md:text-base">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent)]">✔</span>
              <span><strong>Créez une signature email professionnelle</strong> en quelques secondes.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent)]">✔</span>
              <span><strong>Ajoutez facilement vos coordonnées</strong>, photo, logo et réseaux sociaux.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent)]">✔</span>
              <span><strong>Générez un code HTML 100&nbsp;% compatible</strong> : Gmail, Outlook, Apple Mail…</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent)]">✔</span>
              <span><strong>Prévisualisez le rendu final</strong> en temps réel, sur ordinateur et mobile.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent)]">✔</span>
              <span><strong>Utilisez gratuitement les fonctionnalités essentielles</strong> – sans inscription.</span>
            </li>
          </ul>
        </div>
        {/* Colonne droite - Image */}
        <div className="w-full flex justify-center">
          <img
            src="/hero-4.webp"
            alt="Aperçu d'une signature email sur un ordinateur portable"
            className="w-180 mx-auto md:mx-0 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}