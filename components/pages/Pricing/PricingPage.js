'use client';

import React from 'react';
import { PricingHero } from './PricingHero';
import { PricingComparison } from './PricingComparison';
import { PricingFeatures } from './PricingFeatures';
import { PricingFAQ } from './PricingFAQ';
import { PricingCTA } from './PricingCTA';

// Métadonnées pour le SEO (décommenter si vous utilisez les métadonnées Next.js)
// export const metadata = {
//   title: 'Tarifs - Ma Signature Mail | 100% Gratuit Sans Inscription',
//   description: 'Créez des signatures email professionnelles gratuitement. Aucune inscription, aucune limite, toujours gratuit. Version Pro bientôt disponible.',
//   keywords: 'tarif signature email, générateur gratuit, signature gmail gratuite, outil signature professionnel',
//   openGraph: {
//     title: 'Ma Signature Mail - 100% Gratuit Pour Toujours',
//     description: 'Le seul générateur de signatures email vraiment gratuit. Pas d\'inscription, pas de limite.',
//     url: 'https://masignaturemail.fr/pricing',
//   }
// };

export default function PricingPage() {
  return (
    <>
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Tarification Ma Signature Mail",
            "description": "Générateur de signatures email 100% gratuit",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Ma Signature Mail",
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Version Gratuite",
                  "price": "0",
                  "priceCurrency": "EUR",
                  "description": "Générateur complet de signatures email professionnel"
                }
              ]
            }
          })
        }}
      />

      <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-primary)] px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <PricingHero />
          <PricingComparison />
          <PricingFeatures />
          <PricingFAQ />
        </div>
      </main>
    </>
  );
}