'use client';

import React from 'react';
import { AboutHero } from '../../../components/pages/About/AboutHero';
import { AboutStats } from '../../../components/pages/About/AboutStats';
import { AboutMission } from '../../../components/pages/About/AboutMission';
import { AboutTarget } from '../../../components/pages/About/AboutTarget';
import { AboutPhilosophy } from '../../../components/pages/About/AboutPhilosophy';
import { AboutCta } from '../../../components/pages/About/AboutCta';

export const metadata = {
  title: "À propos – Ma Signature Mail",
  description: "Découvrez l'histoire, les valeurs et la mission derrière Ma Signature Mail, votre générateur de signature email HTML gratuite.",
  openGraph: {
    title: "À propos – Ma Signature Mail",
    description: "Ma Signature Mail, c’est un outil simple et gratuit pour créer une signature email professionnelle. Découvrez qui nous sommes.",
    url: "https://masignaturemail.com/about",
    siteName: "Ma Signature Mail",
    images: ["/og-preview.png"],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos – Ma Signature Mail",
    description: "L’histoire et la mission de Ma Signature Mail, créateur de signatures HTML gratuites.",
    images: ["/og-preview.png"],
  },
}

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-background)] text-[var(--color-foreground)] py-16 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <AboutHero />
        <AboutStats />
        <AboutMission />
        <AboutTarget />
        <AboutPhilosophy />
        <AboutCta />
      </div>
    </main>
  );
}