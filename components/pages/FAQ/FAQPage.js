'use client';

import React from 'react';
import { FAQHero } from './FAQHero';
import { FAQSection } from './FAQSection';
import { FAQItem } from './FAQItem';
import { FAQCta } from './FAQCta';

export default function FAQPage() {
  return (
    <>
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Comment fonctionne Ma Signature Mail ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vous remplissez un formulaire avec vos informations professionnelles, choisissez un design et l'outil génère automatiquement un code HTML compatible avec tous les clients de messagerie."
                }
              },
              {
                "@type": "Question", 
                "name": "Le service est-il vraiment gratuit ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, toutes les fonctionnalités de base sont gratuites et sans publicité. Une version Pro avec plus d'options est également disponible."
                }
              },
              {
                "@type": "Question",
                "name": "Est-ce compatible avec Gmail, Outlook et Apple Mail ?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Oui, les signatures générées sont testées et validées pour ces 3 clients de messagerie majeurs."
                }
              }
            ]
          })
        }}
      />

      <main className="bg-[var(--color-background)] text-[var(--color-foreground)] px-6 py-16 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <FAQHero />

          <FAQSection title="Fonctionnement" icon="🔧">
            <FAQItem
              question="Comment fonctionne Ma Signature Mail ?"
              answer="Vous remplissez un formulaire avec vos informations professionnelles (nom, poste, entreprise, réseaux sociaux, etc.). Ensuite, vous choisissez un design et l'outil génère automatiquement un code HTML propre et compatible avec tous les clients de messagerie."
              isOpen={true}
            />
            <FAQItem
              question="Dois-je créer un compte ?"
              answer="Non. Vous pouvez utiliser notre générateur gratuitement et sans inscription. Vos données restent privées et ne sont pas stockées sur nos serveurs."
            />
            <FAQItem
              question="Puis-je tester avant d'utiliser ma signature ?"
              answer="Oui, vous pouvez prévisualiser votre signature en temps réel pendant sa création. Vous voyez exactement à quoi elle ressemblera avant de l'installer."
            />
            <FAQItem
              question="Combien de temps faut-il pour créer une signature ?"
              answer="Moins d'une minute ! Remplissez le formulaire, choisissez votre style, et votre signature est prête à être copiée et installée."
            />
          </FAQSection>

          <FAQSection title="Personnalisation" icon="🎨">
            <FAQItem
              question="Puis-je modifier les couleurs et polices ?"
              answer="Oui, vous pouvez choisir votre couleur principale, votre modèle (moderne ou classique), et personnaliser l'apparence selon votre identité visuelle."
            />
            <FAQItem
              question="Puis-je ajouter mon logo ou ma photo ?"
              answer="Absolument ! Vous pouvez téléverser une image directement dans le formulaire. Elle sera automatiquement optimisée et intégrée à votre signature."
            />
            <FAQItem
              question="Combien de modèles sont disponibles ?"
              answer="Actuellement, nous proposons 2 modèles (moderne et classique) avec différentes options de personnalisation. D'autres templates seront ajoutés régulièrement."
            />
            <FAQItem
              question="Puis-je ajouter des liens vers mes réseaux sociaux ?"
              answer="Oui, vous pouvez ajouter LinkedIn, Twitter, Instagram, votre site web et d'autres liens avec des icônes élégantes (emoji ou SVG)."
            />
          </FAQSection>

          <FAQSection title="Compatibilité" icon="💻">
            <FAQItem
              question="Est-ce compatible avec Gmail, Outlook et Apple Mail ?"
              answer="Oui, les signatures générées sont testées et validées pour ces 3 clients de messagerie majeurs, ainsi que pour la plupart des autres clients populaires."
            />
            <FAQItem
              question="Puis-je utiliser la signature sur mobile ?"
              answer="Oui, le HTML généré est responsive et s'affiche parfaitement sur mobile, tablette et ordinateur."
            />
            <FAQItem
              question="Que faire si ma signature ne s'affiche pas correctement ?"
              answer="Nos signatures sont optimisées pour un maximum de compatibilité. Si vous rencontrez un problème, consultez nos guides d'installation ou contactez-nous."
            />
          </FAQSection>

          <FAQSection title="Tarification" icon="💰">
            <FAQItem
              question="Le service est-il vraiment gratuit ?"
              answer="Oui, toutes les fonctionnalités de base sont gratuites et sans publicité. Aucun frais caché, aucune limite de temps."
            />
            <FAQItem
              question="Qu'apporte la version Pro ?"
              answer="La version Pro vous permet d'enregistrer vos signatures, accéder à plus de modèles, gérer plusieurs identités, obtenir une aide prioritaire, et bénéficier d'options avancées comme l'intégration Calendly."
            />
            <FAQItem
              question="Puis-je annuler mon abonnement Pro à tout moment ?"
              answer="Oui, vous pouvez annuler votre abonnement Pro à tout moment. Vous conserverez l'accès aux fonctionnalités Pro jusqu'à la fin de votre période de facturation."
            />
          </FAQSection>

          <FAQSection title="Sécurité & Confidentialité" icon="🔒">
            <FAQItem
              question="Mes données sont-elles stockées ?"
              answer="Non. Aucune donnée personnelle n'est stockée sur nos serveurs. Tout reste local à votre navigateur, garantissant votre confidentialité."
            />
            <FAQItem
              question="Mon image est-elle hébergée quelque part ?"
              answer="Non, l'image est encodée directement dans la signature (base64) ou vous pouvez utiliser votre propre lien d'hébergement. Nous ne stockons aucune image."
            />
            <FAQItem
              question="Puis-je supprimer mes données ?"
              answer="Comme nous ne stockons aucune donnée, il n'y a rien à supprimer ! Vos informations restent uniquement sur votre appareil."
            />
          </FAQSection>

          <FAQSection title="Support" icon="📞">
            <FAQItem
              question="Qui contacter en cas de problème ?"
              answer="Vous pouvez utiliser notre formulaire de contact ou nous envoyer un email. Nous répondons généralement sous 24h."
            />
            <FAQItem
              question="Puis-je suggérer une fonctionnalité ?"
              answer="Absolument ! Nous adorons les retours de nos utilisateurs. N'hésitez pas à nous faire part de vos idées via notre formulaire de contact."
            />
            <FAQItem
              question="Y a-t-il des guides d'installation ?"
              answer="Oui, nous fournissons des instructions détaillées pour installer votre signature dans Gmail, Outlook, Apple Mail et d'autres clients de messagerie."
            />
          </FAQSection>

          <FAQCta />
        </div>
      </main>
    </>
  );
}