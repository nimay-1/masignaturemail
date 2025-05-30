'use client';

import React, { useState } from 'react';

function ChevronIcon({ isOpen, className }) {
  return (
    <svg 
      className={className}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Pourquoi Ma Signature Mail est-il gratuit ?",
      answer: "Nous croyons que chaque professionnel devrait avoir accès à des outils de qualité pour valoriser son image. La version gratuite couvre 95% des besoins, et la future version Pro financera le développement et l'hébergement."
    },
    {
      question: "Y a-t-il des limitations dans la version gratuite ?",
      answer: "Aucune ! Vous pouvez créer autant de signatures que vous voulez, avec toutes les fonctionnalités essentielles. Pas de filigrane, pas de pub, pas de limite de temps."
    },
    {
      question: "Quand la version Pro sera-t-elle disponible ?",
      answer: "Nous prévoyons un lancement courant 2025. Les fonctionnalités Pro se concentreront sur la productivité et les besoins des équipes, sans jamais limiter la version gratuite."
    },
    {
      question: "Puis-je influencer les fonctionnalités de la version Pro ?",
      answer: "Absolument ! Vos retours sont précieux. Contactez-nous pour suggérer des fonctionnalités. Les plus demandées seront prioritaires."
    },
    {
      question: "La version gratuite restera-t-elle toujours gratuite ?",
      answer: "Oui, c'est notre engagement. Toutes les fonctionnalités actuellement gratuites le resteront. La version Pro ajoutera des fonctionnalités avancées sans retirer quoi que ce soit du gratuit."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center mb-8">
        Questions fréquentes sur la tarification
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-[var(--color-background)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--color-foreground)] pr-4">
                {faq.question}
              </h3>
              <ChevronIcon 
                isOpen={openIndex === index}
                className="w-5 h-5 text-[var(--color-muted)] flex-shrink-0"
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)] pt-4">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
