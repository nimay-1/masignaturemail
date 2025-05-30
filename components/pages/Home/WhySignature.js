'use client';

import React from 'react';

export default function WhySignature() {
  const benefits = [
    {
      icon: "🎯",
      title: "Professionnalisez votre image de marque",
      description: "Une signature email soignée renforce votre crédibilité et donne une première impression positive à chaque email envoyé.",
      stats: "73% d'impact sur la première impression"
    },
    {
      icon: "🚀",
      title: "Générez plus de leads et de trafic",
      description: "Intégrez vos liens LinkedIn, site web et réseaux sociaux pour convertir chaque email en opportunité commerciale.",
      stats: "Jusqu'à +32% de clics sur vos liens"
    },
    {
      icon: "⚡",
      title: "Gagnez du temps avec l'automatisation",
      description: "Plus besoin de taper vos coordonnées à chaque fois. Votre signature s'ajoute automatiquement à tous vos emails.",
      stats: "Plus de 60 heures économisées par an"
    }
  ];

  const useCases = [
    { icon: "👔", title: "Commerciaux", desc: "Augmentez vos conversions" },
    { icon: "💼", title: "Freelances", desc: "Renforcez votre marque perso" },
    { icon: "🏢", title: "Entreprises", desc: "Uniformisez vos signatures" },
    { icon: "🎓", title: "Étudiants", desc: "Préparez votre avenir pro" }
  ];

  return (
    <section
      className="py-20 px-6"
      style={{ 
        backgroundColor: 'var(--color-primary)',
        color: 'white'
      }}
      aria-labelledby="why-signature-title"
      id="avantages-signature-email-professionnelle"
    >
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2
            id="why-signature-title"
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: 'white' }}
          >
            Pourquoi avoir une signature email professionnelle ?
          </h2>
          <p 
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#D1D5DB' }}
          >
            Dans un monde où nous échangeons en moyenne{' '}
            <strong style={{ color: 'var(--color-accent)' }}>121 emails par jour</strong>, 
            votre signature est vue des milliers de fois.{' '}
            <strong style={{ color: 'var(--color-accent)' }}>Transformez chaque email en opportunité</strong>.
          </p>
        </div>

        {/* Bénéfices principaux */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 border transition-all group hover:scale-[1.02]"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: 'white' }}
              >
                {benefit.title}
              </h3>
              <p 
                className="leading-relaxed mb-4"
                style={{ color: '#D1D5DB' }}
              >
                {benefit.description}
              </p>
              <div 
                className="text-sm font-medium rounded-full px-4 py-3 inline-block"
                style={{
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                📊 {benefit.stats}
              </div>
            </div>
          ))}
        </div>

        {/* Cas d'usage */}
        <div 
          className="rounded-2xl p-8 border"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <h3 
            className="text-2xl font-semibold text-center mb-8"
            style={{ color: 'white' }}
          >
            Parfait pour tous les professionnels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{useCase.icon}</div>
                <div 
                  className="font-semibold mb-1"
                  style={{ color: 'white' }}
                >
                  {useCase.title}
                </div>
                <div 
                  className="text-sm"
                  style={{ color: '#D1D5DB' }}
                >
                  {useCase.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center mt-12">
          <p 
            className="mb-6"
            style={{ color: '#D1D5DB' }}
          >
            Rejoignez les milliers de professionnels qui utilisent déjà une signature email percutante
          </p>
          <a
            href="#main"
            className="inline-block font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-primary)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--color-accent-hover)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--color-accent)';
            }}
          >
            Créer ma signature maintenant →
          </a>
        </div>
      </div>
    </section>
  );
}