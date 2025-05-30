'use client';

import React from 'react';

// Métadonnées pour le SEO (à ajouter si vous utilisez le système de métadonnées Next.js)
// export const metadata = {
//   title: 'Politique de Confidentialité | Ma Signature Mail',
//   description: 'Notre politique de confidentialité détaille comment nous protégeons vos données. Aucune donnée personnelle stockée, traitement 100% local.',
//   robots: 'index, follow'
// };

export default function PrivacyPolicyPage() {
  const lastUpdate = "15 décembre 2024";

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: [
        "Ma Signature Mail est un générateur de signatures email 100% gratuit qui respecte votre vie privée. Cette politique de confidentialité explique comment nous traitons (ou plutôt, ne traitons pas) vos données personnelles.",
        "Notre philosophie est simple : vos données vous appartiennent et restent sur votre appareil. Nous ne stockons aucune information personnelle sur nos serveurs."
      ]
    },
    {
      id: "donnees-collectees",
      title: "2. Données collectées",
      content: [
        "Ma Signature Mail fonctionne entièrement côté client (dans votre navigateur). Voici ce qui se passe avec vos données :",
        "• Informations personnelles (nom, email, téléphone, etc.) : Traitées localement dans votre navigateur, jamais envoyées à nos serveurs",
        "• Photos et logos : Convertis en base64 et intégrés directement dans votre signature HTML, aucun stockage externe",
        "• Préférences de design : Stockées temporairement dans votre navigateur, supprimées à la fermeture",
        "• Aucune création de compte requise : Pas de collecte d'identifiants ou mots de passe"
      ]
    },
    {
      id: "donnees-techniques",
      title: "3. Données techniques automatiques",
      content: [
        "Comme la plupart des sites web, nous collectons automatiquement certaines informations techniques non personnelles :",
        "• Adresse IP (anonymisée après 24h)",
        "• Type de navigateur et version",
        "• Système d'exploitation",
        "• Pages visitées et durée de visite",
        "• Provenance du trafic (référent)",
        "Ces données sont utilisées uniquement pour améliorer notre service et analyser l'utilisation globale du site."
      ]
    },
    {
      id: "utilisation-donnees",
      title: "4. Utilisation des données",
      content: [
        "Vos données personnelles (nom, email, etc.) sont utilisées exclusivement pour :",
        "• Générer votre signature email en temps réel dans votre navigateur",
        "• Afficher la prévisualisation de votre signature",
        "• Créer le code HTML que vous copiez",
        "Nous n'utilisons JAMAIS vos données personnelles pour :",
        "• Marketing ou publicité",
        "• Vente à des tiers",
        "• Analyse comportementale",
        "• Constitution de bases de données"
      ]
    },
    {
      id: "partage-donnees",
      title: "5. Partage des données",
      content: [
        "Ma Signature Mail ne partage aucune donnée personnelle avec des tiers. Période.",
        "Les seuls services tiers que nous utilisons sont :",
        "• Hébergement web (sans accès aux données de signature)",
        "• Analytics anonymes (Google Analytics avec IP anonymisée)",
        "• CDN pour les ressources statiques (images, CSS, JS)",
        "Aucun de ces services n'a accès à vos informations personnelles saisies dans le générateur."
      ]
    },
    {
      id: "stockage-donnees",
      title: "6. Stockage et sécurité",
      content: [
        "Vos données personnelles ne sont jamais stockées sur nos serveurs. Voici notre approche :",
        "• Traitement 100% local : Tout se passe dans votre navigateur",
        "• Aucune transmission : Vos informations ne quittent jamais votre appareil",
        "• Pas de base de données : Nous n'avons aucune BDD contenant des infos personnelles",
        "• Connexion HTTPS : Toutes les communications sont chiffrées",
        "• Code open source : Notre générateur est transparent et vérifiable"
      ]
    },
    {
      id: "cookies",
      title: "7. Cookies et technologies similaires",
      content: [
        "Ma Signature Mail utilise un minimum de cookies :",
        "• Cookies fonctionnels : Pour mémoriser vos préférences de thème (sombre/clair)",
        "• Analytics : Google Analytics avec cookies anonymisés (vous pouvez les refuser)",
        "• Aucun cookie publicitaire ou de tracking comportemental",
        "Vous pouvez configurer votre navigateur pour refuser les cookies. Cela n'affectera pas le fonctionnement du générateur de signatures."
      ]
    },
    {
      id: "droits-utilisateurs",
      title: "8. Vos droits (RGPD)",
      content: [
        "Conformément au RGPD, vous disposez des droits suivants :",
        "• Droit d'accès : Comme nous ne stockons rien, il n'y a rien à consulter",
        "• Droit de rectification : Modifiez directement vos infos dans le générateur",
        "• Droit à l'effacement : Fermez votre navigateur, tout est supprimé automatiquement",
        "• Droit à la portabilité : Copiez votre signature HTML, elle vous appartient",
        "• Droit d'opposition : Vous pouvez arrêter d'utiliser le service à tout moment",
        "Pour exercer ces droits ou poser des questions : contact@masignaturemail.com"
      ]
    },
    {
      id: "services-tiers",
      title: "9. Services tiers",
      content: [
        "Nous utilisons quelques services tiers pour faire fonctionner Ma Signature Mail :",
        "• Hébergement : Vercel (États-Unis) - Conforme RGPD",
        "• Analytics : Google Analytics (anonymisé) - Vous pouvez opt-out",
        "• CDN : Cloudflare (International) - Conforme RGPD",
        "• Fonts : Google Fonts (si utilisées) - Conforme RGPD",
        "Chacun de ces services a sa propre politique de confidentialité que nous vous encourageons à consulter."
      ]
    },
    {
      id: "mineurs",
      title: "10. Protection des mineurs",
      content: [
        "Ma Signature Mail peut être utilisé par des mineurs dans le cadre de projets éducatifs ou professionnels.",
        "• Aucune collecte d'âge ou d'informations sensibles",
        "• Traitement local, aucun stockage de données",
        "• Surveillance parentale recommandée pour les moins de 13 ans",
        "Si vous êtes parent et avez des questions, contactez-nous."
      ]
    },
    {
      id: "modifications",
      title: "11. Modifications de cette politique",
      content: [
        "Nous pouvons mettre à jour cette politique de confidentialité occasionnellement.",
        "• Notification des changements majeurs sur notre site",
        "• Date de dernière mise à jour indiquée en haut de page",
        "• Historique des versions disponible sur demande",
        "L'utilisation continue du service après modification vaut acceptation des nouvelles conditions."
      ]
    },
    {
      id: "contact",
      title: "12. Contact",
      content: [
        "Pour toute question concernant cette politique de confidentialité :",
        "• Email : contact@masignaturemail.com",
        "• Formulaire de contact : /contact",
        "• Réponse garantie sous 48h",
        "Nous sommes transparents et réactifs sur toutes les questions de confidentialité."
      ]
    }
  ];

  return (
    <main className="bg-[var(--color-background)] py-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <header className="text-center mb-12">
          <div className="inline-block bg-[var(--color-primary)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <span className="text-[var(--color-background)] font-medium text-sm">
              🔒 Transparence totale
            </span>
          </div>
          <h1 className="text-[var(--color-primary)] mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto leading-relaxed">
            Ma Signature Mail respecte votre vie privée. <strong className="text-[var(--color-foreground)]">Aucune donnée personnelle n&apos;est stockée</strong> sur nos serveurs. 
            Tout reste sur votre appareil.
          </p>
          <div className="mt-6 text-sm text-[var(--color-muted)]">
            <strong>Dernière mise à jour :</strong> {lastUpdate}
          </div>
        </header>

        {/* Résumé exécutif */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-12 shadow-sm">
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
            📋 Résumé exécutif
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-2">✅ Ce que nous FAISONS</h3>
              <ul className="text-sm text-[var(--color-muted)] space-y-1">
                <li>• Traitement 100% local dans votre navigateur</li>
                <li>• Code open source et transparent</li>
                <li>• Connexion HTTPS sécurisée</li>
                <li>• Respect total du RGPD</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-2">❌ Ce que nous ne faisons JAMAIS</h3>
              <ul className="text-sm text-[var(--color-muted)] space-y-1">
                <li>• Stocker vos données personnelles</li>
                <li>• Vendre vos informations</li>
                <li>• Tracking publicitaire</li>
                <li>• Spam ou marketing non sollicité</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table des matières */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-[var(--color-primary)] mb-4">📑 Table des matières</h2>
          <div className="grid md:grid-cols-2 gap-2">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section.id}`}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors py-1 block link-hover"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        {/* Contenu principal */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={index} id={section.id} className="scroll-mt-24">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-[var(--color-muted)] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA de contact */}
        <div className="mt-16 text-center">
          <div className="bg-white shadow-md rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Des questions sur la confidentialité ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Nous sommes transparents et réactifs. N'hésitez pas à nous contacter pour toute question.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-primary)] font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                📧 Nous contacter
              </a>
              <a 
                href="/#main" 
                className="inline-block border-2 border-[var(--color-primary)] hover:bg-white hover:text-[var(--color-accent)] text-[var(--color-primary)] font-semibold py-3 px-8 rounded-lg transition-all"
              >
                🚀 Utiliser le générateur
              </a>
            </div>
          </div>
        </div>

        {/* Retour en haut */}
        <div className="text-center mt-8">
          <a 
            href="#top" 
            className="text-[var(--color-muted)] hover:text-[var(--color-accent)] text-sm transition-colors"
          >
            ↑ Retour en haut
          </a>
        </div>
      </div>

      {/* Schema.org pour SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Politique de Confidentialité - Ma Signature Mail",
            "description": "Politique de confidentialité transparente : aucune donnée personnelle stockée, traitement 100% local.",
            "url": "https://masignaturemail.com/privacy-policy",
            "lastReviewed": lastUpdate,
            "about": {
              "@type": "Organization",
              "name": "Ma Signature Mail",
              "description": "Générateur de signatures email gratuit et respectueux de la vie privée"
            }
          })
        }}
      />
    </main>
  );
}