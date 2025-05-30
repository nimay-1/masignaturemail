"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      image: "/hiw_1.webp",
      title: "Remplissez vos informations professionnelles",
      description: "Nom, poste, entreprise, téléphone, email et réseaux sociaux. Ajoutez votre photo ou logo en un clic.",
      features: ["📝 Formulaire intelligent", "📸 Upload photo/logo", "🔗 Liens réseaux sociaux"],
      time: "30 secondes"
    },
    {
      number: "02", 
      image: "/hiw_2.webp",
      title: "Personnalisez le design à votre image",
      description: "Choisissez votre template, ajustez les couleurs et visualisez le résultat en temps réel.",
      features: ["🎨 2 templates pro", "🌈 Couleurs custom", "👁️ Aperçu temps réel"],
      time: "20 secondes"
    },
    {
      number: "03",
      image: "/hiw_3.webp", 
      title: "Copiez et installez votre signature HTML",
      description: "Un clic pour copier le code HTML optimisé. Instructions détaillées pour Gmail, Outlook et Apple Mail incluses.",
      features: ["📋 Copie 1-clic", "📧 Instructions incluses", "✅ 100% compatible"],
      time: "10 secondes"
    }
  ];

  return (
    <section
      className="bg-[var(--color-background)] py-20 px-6"
      aria-labelledby="how-it-works-title"
      id="comment-creer-signature-email-3-etapes"
    >
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--color-primary)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <span className="text-white font-medium text-sm">
              ⚡ Processus ultra-rapide
            </span>
          </div>
          <h2
            id="how-it-works-title"
            className="text-[var(--color-primary)] mb-6"
          >
            Comment créer votre signature email en 3 étapes
          </h2>
          <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto leading-relaxed">
            Notre processus simplifié vous permet de créer une signature professionnelle 
            en <strong className="text-[var(--color-primary)]">moins d&apos;une minute</strong>. Aucune compétence technique requise.
          </p>
        </div>

        {/* Timeline des étapes */}
        <div className="space-y-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
            >
              {/* Contenu textuel */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[var(--color-muted)]">Temps estimé</div>
                    <div className="font-semibold text-[var(--color-accent)]">{step.time}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4 max-w-md mx-auto lg:mx-0">
                  {step.title}
                </h3>
                
                <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
                  {step.description}
                </p>

                {/* Fonctionnalités */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {step.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-primary)] rounded-full px-4 py-2 text-sm shadow-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image sans cadre */}
              <div className="flex-1 max-w-md">
                <img
                  src={step.image}
                  alt={`Étape ${step.number} : ${step.title} - générateur signature email`}
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 max-w-2xl mx-auto shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">
              Prêt à créer votre signature en moins d'une minute ?
            </h3>
            <p className="text-[var(--color-muted)] mb-6">
              Rejoignez les milliers de professionnels qui font confiance à notre générateur gratuit.
            </p>
            <a
              href="#main"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-primary)] font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              🚀 Commencer maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}