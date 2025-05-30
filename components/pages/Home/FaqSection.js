'use client';

import { useState } from 'react';

function ChevronIcon({ isOpen, className }) {
  return (
    <svg 
      className={className}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const faqs = [
  {
    id: "creer-signature-email-gratuite",
    question: 'Comment créer une signature email professionnelle gratuitement ?',
    answer: "Avec Ma Signature Mail, créez une signature HTML personnalisée en 3 étapes : remplissez vos informations, choisissez votre style, et copiez le code généré. 100% gratuit, sans inscription.",
    category: "Général",
    keywords: ["signature email gratuite", "générateur signature", "signature professionnelle"]
  },
  {
    id: "compatibilite-gmail-outlook",
    question: "Ma signature est-elle compatible Gmail, Outlook et Apple Mail ?",
    answer: "Oui ! Notre générateur produit du HTML optimisé, testé et 100% compatible avec Gmail, Outlook, Apple Mail, Yahoo Mail et tous les clients de messagerie populaires.",
    category: "Compatibilité",
    keywords: ["compatible Gmail", "compatible Outlook", "signature multi-plateforme"]
  },
  {
    id: "ajouter-logo-photo-reseaux",
    question: "Puis-je ajouter mon logo, photo et réseaux sociaux ?",
    answer: "Absolument ! Intégrez facilement votre logo d'entreprise, photo professionnelle, et liens vers LinkedIn, Twitter, Instagram, Facebook avec des icônes personnalisables.",
    category: "Personnalisation",
    keywords: ["logo signature email", "photo signature", "réseaux sociaux signature"]
  },
  {
    id: "version-gratuite-vs-pro",
    question: "Différences entre version gratuite et Pro ?",
    answer: "La version gratuite offre toutes les fonctionnalités essentielles. La version Pro (bientôt disponible) ajoutera : templates premium, sauvegarde cloud, multi-signatures et support prioritaire.",
    category: "Tarification",
    keywords: ["version gratuite", "version pro", "prix signature email"]
  },
  {
    id: "sans-inscription-gratuit",
    question: "Dois-je créer un compte pour utiliser l'outil ?",
    answer: "Non ! Utilisation 100% gratuite sans inscription. Générez, copiez et utilisez votre signature immédiatement. Vos données restent privées et ne sont pas stockées.",
    category: "Général",
    keywords: ["sans inscription", "gratuit", "outil signature email"]
  },
  {
    id: "installer-signature-gmail-outlook",
    question: "Comment installer ma signature dans Gmail/Outlook ?",
    answer: "Après génération, copiez le code HTML et suivez nos instructions détaillées intégrées à l'outil. Guides pas-à-pas disponibles pour chaque client de messagerie.",
    category: "Installation",
    keywords: ["installer signature Gmail", "installer signature Outlook", "guide installation"]
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
      <section 
        className="bg-[var(--color-surface)] py-20 px-6" 
        id="faq-signature-email"
        aria-labelledby="faq-title"
      >
        <div className="max-w-4xl mx-auto">
          {/* En-tête avec structure HTML sémantique */}
          <header className="text-center mb-16">
            <div className="inline-block bg-[var(--color-primary)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
              <span className="text-white font-medium text-sm">
                ❓ Questions fréquentes
              </span>
            </div>
            <h2 id="faq-title" className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
              FAQ - Générateur de Signature Email Gratuit
            </h2>
            <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
              Les réponses aux questions les plus posées sur notre outil de création de signatures email professionnelles. 
              Une question spécifique ? <a 
                href="/contact" 
                className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] font-medium link-hover"
                title="Contactez notre équipe support"
              >
                Contactez-nous
              </a> !
            </p>
          </header>

          {/* FAQ avec structure sémantique améliorée */}
          <div className="space-y-4 mb-12" role="region" aria-labelledby="faq-title">
            {faqs.map((faq, index) => (
              <article 
                key={faq.id}
                id={faq.id}
                className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl shadow-sm hover:shadow-md transition-all"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <h3 itemProp="name" className="sr-only">{faq.question}</h3>
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[var(--color-surface-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-50 rounded-xl"
                  aria-expanded={openIndex === index}
                  aria-controls={`answer-${faq.id}`}
                  id={`question-${faq.id}`}
                  type="button"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-medium text-white bg-[var(--color-primary)] bg-opacity-10 rounded-full px-2 py-1">
                        {faq.category}
                      </span>
                    </div>
                    <div className="font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-primary-light)] transition-colors">
                      {faq.question}
                    </div>
                  </div>
                  <ChevronIcon 
                    isOpen={openIndex === index}
                    className={`w-5 h-5 flex-shrink-0 transition-colors ${
                      openIndex === index ? 'text-[var(--color-accent)]' : 'text-[var(--color-muted)] hover:text-[var(--color-accent)]'
                    }`}
                  />
                </button>
                
                <div 
                  id={`answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`question-${faq.id}`}
                  className={openIndex === index ? '' : 'sr-only'}
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div 
                        className="text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4"
                        itemProp="text"
                      >
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* CTA vers la FAQ complète */}
          <aside className="text-center bg-[var(--color-background)] rounded-xl p-8 border border-[var(--color-border)]">
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
              Besoin de plus d'aide ?
            </h3>
            <p className="text-[var(--color-muted)] mb-6">
              Consultez notre FAQ complète ou contactez notre équipe support spécialisée en signatures email.
            </p>
            <nav className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/faq" 
                className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold py-3 px-6 rounded-lg transition-all"
                title="Accéder à la FAQ complète sur les signatures email"
              >
                📚 FAQ complète
              </a>
              <a 
                href="/contact" 
                className="inline-block border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white text-[var(--color-primary)] font-semibold py-3 px-6 rounded-lg transition-all"
                title="Contacter notre support technique"
              >
                💬 Nous contacter
              </a>
            </nav>
          </aside>
        </div>
      </section>

      {/* Schema.org structured data optimisé pour SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "FAQ - Générateur de Signature Email Gratuit",
            "description": "Questions fréquentes sur notre outil gratuit de création de signatures email professionnelles compatibles Gmail, Outlook et tous clients de messagerie.",
            "url": "https://votre-site.com/#faq-signature-email",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "@id": `#${faq.id}`,
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              },
              "keywords": faq.keywords.join(", ")
            })),
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://votre-site.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "FAQ Signature Email",
                  "item": "https://votre-site.com/#faq-signature-email"
                }
              ]
            }
          })
        }} 
      />
    </>
  );
}