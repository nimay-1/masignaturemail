'use client';

import React from 'react';
import { ContactHero } from './ContactHero';
import { ContactStats } from './ContactStats';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { ContactFAQ } from './ContactFAQ';

// Métadonnées pour le SEO (à décommenter si vous utilisez les métadonnées Next.js)
// export const metadata = {
//   title: 'Contact - Ma Signature Mail | Support Gratuit',
//   description: 'Contactez notre équipe support pour toute question sur le générateur de signatures email. Réponse sous 24h, support gratuit inclus.',
//   keywords: 'contact, support, aide signature email, générateur signature, question gmail outlook',
//   openGraph: {
//     title: 'Contactez Ma Signature Mail - Support Rapide et Gratuit',
//     description: 'Une question sur votre signature email ? Notre équipe vous répond sous 24h gratuitement.',
//     url: 'https://masignaturemail.fr/contact',
//   }
// };

export default function ContactPage() {
  return (
    <>
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Ma Signature Mail",
              "url": "https://masignaturemail.fr",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@masignaturemail.com",
                "contactType": "customer support",
                "availableLanguage": ["French"],
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              }
            }
          })
        }}
      />

      <main className="bg-[var(--color-background)] py-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <ContactHero />
          <ContactStats />
          
          <section id="form" aria-label="Formulaire de contact">
            <ContactForm />
          </section>
          
          <ContactInfo />
          <ContactFAQ />
        </div>
      </main>
    </>
  );
}