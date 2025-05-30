'use client';

import React from 'react';

// Métadonnées pour le SEO (à ajouter si vous utilisez le système de métadonnées Next.js)
// export const metadata = {
//   title: 'Conditions d\'Utilisation | Ma Signature Mail',
//   description: 'Conditions générales d\'utilisation de Ma Signature Mail. Service gratuit, utilisation responsable, propriété intellectuelle protégée.',
//   robots: 'index, follow'
// };

export default function TermsOfServicePage() {
  const lastUpdate = "15 décembre 2024";
  const effectiveDate = "1er janvier 2025";

  const sections = [
    {
      id: "acceptation",
      title: "1. Acceptation des conditions",
      content: [
        "En accédant et en utilisant Ma Signature Mail (ci-après \"le Service\"), vous acceptez d'être lié par ces Conditions d'Utilisation (\"Conditions\") sans restriction ni réserve.",
        "Si vous n'acceptez pas ces Conditions dans leur intégralité, vous devez cesser immédiatement d'utiliser le Service.",
        "Ces Conditions constituent un contrat légalement contraignant entre vous (\"Utilisateur\") et Ma Signature Mail (\"nous\", \"notre\", \"nos\").",
        "L'utilisation continue du Service après toute modification des Conditions vaut acceptation des nouvelles conditions."
      ]
    },
    {
      id: "description-service",
      title: "2. Description du service",
      content: [
        "Ma Signature Mail est un générateur gratuit de signatures email HTML qui fonctionne entièrement dans votre navigateur web.",
        "Le Service permet de :",
        "• Créer des signatures email personnalisées",
        "• Prévisualiser le rendu en temps réel",
        "• Générer du code HTML compatible avec les clients de messagerie",
        "• Accéder à des instructions d'installation",
        "Le Service est fourni \"tel quel\" sans garantie de disponibilité continue, de performance ou d'absence d'interruption."
      ]
    },
    {
      id: "utilisation-autorisee",
      title: "3. Utilisation autorisée",
      content: [
        "Vous pouvez utiliser le Service pour :",
        "• Créer des signatures email à des fins personnelles ou professionnelles légitimes",
        "• Générer du code HTML pour votre propre usage",
        "• Partager vos signatures créées avec ce Service",
        "• Utiliser les signatures dans tous vos clients de messagerie",
        "Vous conservez tous les droits sur le contenu (texte, images) que vous saisissez dans le générateur."
      ]
    },
    {
      id: "utilisation-interdite",
      title: "4. Utilisations interdites",
      content: [
        "Il est strictement interdit d'utiliser le Service pour :",
        "• Créer du contenu illégal, diffamatoire, haineux ou discriminatoire",
        "• Usurper l'identité d'autrui ou créer de fausses signatures",
        "• Contourner les mesures de sécurité ou tenter de pirater le Service",
        "• Utiliser des scripts automatisés ou robots sans autorisation",
        "• Surcharger nos serveurs par un usage excessif ou abusif",
        "• Extraire, copier ou reproduire le code source du Service",
        "• Créer un service concurrent en utilisant notre technologie",
        "• Violer la propriété intellectuelle de tiers via vos contenus",
        "• Utiliser le Service à des fins de spam ou marketing non sollicité"
      ]
    },
    {
      id: "propriete-intellectuelle",
      title: "5. Propriété intellectuelle",
      content: [
        "Le Service, incluant mais non limité au code, design, interface, logos, et fonctionnalités, est protégé par les droits d'auteur et autres droits de propriété intellectuelle.",
        "Vous reconnaissez que :",
        "• Le Service et sa technologie nous appartiennent exclusivement",
        "• Aucune licence n'est accordée sur notre propriété intellectuelle",
        "• Toute reproduction, modification ou distribution du Service est interdite",
        "• Les marques \"Ma Signature Mail\" et logos associés sont nos marques déposées",
        "Concernant votre contenu :",
        "• Vous conservez tous vos droits sur vos textes et images",
        "• Vous garantissez détenir les droits nécessaires sur vos contenus",
        "• Vous nous accordez une licence limitée pour traiter vos contenus techniquement (génération de signature uniquement)"
      ]
    },
    {
      id: "responsabilites-utilisateur",
      title: "6. Responsabilités de l'utilisateur",
      content: [
        "En utilisant le Service, vous vous engagez à :",
        "• Respecter toutes les lois et réglementations applicables",
        "• Ne pas porter atteinte aux droits de tiers",
        "• Utiliser des informations exactes et non trompeuses",
        "• Maintenir la sécurité de votre accès au Service",
        "• Signaler tout usage abusif ou contenu inapproprié",
        "• Respecter les droits d'auteur dans vos images et contenus",
        "Vous êtes seul responsable de :",
        "• L'exactitude des informations saisies",
        "• L'usage que vous faites des signatures générées",
        "• Le respect de la législation dans votre juridiction",
        "• Les conséquences de l'utilisation de vos signatures"
      ]
    },
    {
      id: "limitation-responsabilite",
      title: "7. Limitation de responsabilité",
      content: [
        "DANS LA MESURE MAXIMALE AUTORISÉE PAR LA LOI :",
        "• Le Service est fourni \"EN L'ÉTAT\" sans aucune garantie",
        "• Nous ne garantissons pas la disponibilité, fiabilité ou exactitude du Service",
        "• Nous ne sommes pas responsables des dommages directs, indirects, accessoires ou consécutifs",
        "• Notre responsabilité totale ne peut excéder le montant payé (0€ pour le service gratuit)",
        "• Nous ne sommes pas responsables des contenus générés par les utilisateurs",
        "• Nous ne garantissons pas la compatibilité avec tous les clients de messagerie",
        "Exclusions spécifiques :",
        "• Perte de données ou de signatures",
        "• Interruptions de service ou maintenance",
        "• Problèmes de rendu dans certains clients email",
        "• Utilisation malveillante par des tiers de vos signatures"
      ]
    },
    {
      id: "disponibilite-service",
      title: "8. Disponibilité du service",
      content: [
        "Nous nous efforçons de maintenir le Service disponible 24h/24, 7j/7, mais nous ne garantissons pas une disponibilité ininterrompue.",
        "Nous nous réservons le droit de :",
        "• Suspendre temporairement le Service pour maintenance",
        "• Modifier les fonctionnalités du Service avec préavis",
        "• Interrompre définitivement le Service avec préavis de 30 jours",
        "• Limiter l'accès en cas d'usage abusif",
        "Aucune compensation ne sera due en cas d'interruption du Service gratuit."
      ]
    },
    {
      id: "donnees-personnelles",
      title: "9. Données personnelles",
      content: [
        "Conformément à notre Politique de Confidentialité :",
        "• Vos données personnelles ne sont jamais stockées sur nos serveurs",
        "• Le traitement s'effectue entièrement dans votre navigateur",
        "• Nous ne collectons que des données techniques anonymes",
        "• Vous conservez le contrôle total de vos informations",
        "En cas de conflit entre ces Conditions et notre Politique de Confidentialité, cette dernière prévaut concernant le traitement des données."
      ]
    },
    {
      id: "modification-conditions",
      title: "10. Modification des conditions",
      content: [
        "Nous nous réservons le droit de modifier ces Conditions à tout moment.",
        "Processus de modification :",
        "• Notification sur le site web au moins 15 jours avant l'entrée en vigueur",
        "• Mise à jour de la date de \"dernière modification\"",
        "• Pour les modifications majeures : notification par email si vous avez un compte",
        "• Droit de résiliation si vous n'acceptez pas les nouvelles conditions",
        "L'utilisation continue du Service après modification vaut acceptation des nouvelles Conditions."
      ]
    },
    {
      id: "resiliation",
      title: "11. Résiliation",
      content: [
        "Ces Conditions restent en vigueur tant que vous utilisez le Service.",
        "Résiliation par l'utilisateur :",
        "• Vous pouvez cesser d'utiliser le Service à tout moment",
        "• Aucune procédure de résiliation requise (pas de compte)",
        "Résiliation par nos soins :",
        "• En cas de violation de ces Conditions",
        "• En cas d'usage abusif ou illégal du Service",
        "• Pour des raisons techniques ou commerciales avec préavis",
        "Effets de la résiliation :",
        "• Cessation immédiate de votre droit d'utiliser le Service",
        "• Survival des clauses de propriété intellectuelle et limitation de responsabilité"
      ]
    },
    {
      id: "force-majeure",
      title: "12. Force majeure",
      content: [
        "Nous ne serons pas tenus responsables de tout retard ou défaut d'exécution résultant de circonstances indépendantes de notre volonté raisonnable, incluant mais non limité à :",
        "• Catastrophes naturelles, guerres, actes terroristes",
        "• Pannes généralisées d'internet ou de télécommunications",
        "• Actes gouvernementaux, nouvelles réglementations",
        "• Cyberattaques, piratage ou sabotage par des tiers",
        "• Défaillances de nos fournisseurs d'hébergement ou services tiers"
      ]
    },
    {
      id: "droit-applicable",
      title: "13. Droit applicable et juridiction",
      content: [
        "Ces Conditions sont régies par le droit français.",
        "Tout litige relatif à ces Conditions ou à l'utilisation du Service sera soumis à la juridiction exclusive des tribunaux français compétents.",
        "Si une disposition de ces Conditions est jugée invalide ou inapplicable, les autres dispositions restent pleinement en vigueur.",
        "Ces Conditions constituent l'intégralité de l'accord entre vous et nous concernant le Service."
      ]
    },
    {
      id: "divers",
      title: "14. Dispositions diverses",
      content: [
        "Indépendance des clauses : Si une clause est déclarée nulle, les autres restent applicables.",
        "Renonciation : Notre non-exercice d'un droit ne constitue pas une renonciation à ce droit.",
        "Cession : Vous ne pouvez pas céder vos droits et obligations sans notre accord écrit préalable.",
        "Intégralité : Ces Conditions constituent l'accord complet entre les parties.",
        "Langue : En cas de traduction, la version française fait foi.",
        "Contact pour questions juridiques : contact@masignaturemail.com"
      ]
    },
    {
      id: "contact-legal",
      title: "15. Contact et réclamations",
      content: [
        "Pour toute question relative à ces Conditions d'Utilisation :",
        "• Email juridique : contact@masignaturemail.com",
        "• Support général : contact@masignaturemail.com",
        "• Formulaire de contact : https://masignaturemail.com/contact",
        "• Délai de réponse : 72h maximum pour les questions légales",
        "Pour les réclamations ou signalements d'abus :",
        "• Utilisez l'adresse contact@masignaturemail.com",
        "• Incluez tous les éléments permettant l'identification du problème",
        "• Nous nous engageons à traiter toute réclamation dans les 7 jours ouvrés"
      ]
    }
  ];

  return (
    <main className="bg-[var(--color-background)] py-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <header className="text-center mb-12">
          <div className="inline-block bg-[var(--color-primary)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <span className="text-[var(--color-primary)] font-medium text-sm">
              ⚖️ Conditions légales
            </span>
          </div>
          <h1 className="text-[var(--color-primary)] mb-6">
            Conditions d'Utilisation
          </h1>
          <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto leading-relaxed">
            Les règles d'utilisation de Ma Signature Mail. <strong className="text-[var(--color-foreground)]">Service gratuit</strong> avec utilisation responsable requise.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--color-muted)]">
            <div>
              <strong>Dernière mise à jour :</strong> {lastUpdate}
            </div>
            <div>
              <strong>Date d&apos;entrée en vigueur :</strong> {effectiveDate}
            </div>
          </div>
        </header>

        {/* Résumé des droits et obligations */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-8 mb-12 shadow-sm">
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
            📋 Résumé de vos droits et obligations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3 flex items-center">
                <span className="text-green-600 mr-2">✅</span>
                Vous POUVEZ
              </h3>
              <ul className="text-sm text-[var(--color-muted)] space-y-2">
                <li>• Utiliser le service gratuitement</li>
                <li>• Créer des signatures personnelles/pro</li>
                <li>• Conserver vos droits sur vos contenus</li>
                <li>• Utiliser les signatures générées librement</li>
                <li>• Arrêter d&apos;utiliser le service à tout moment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3 flex items-center">
                <span className="text-red-600 mr-2">❌</span>
                Vous NE POUVEZ PAS
              </h3>
              <ul className="text-sm text-[var(--color-muted)] space-y-2">
                <li>• Copier ou reproduire notre technologie</li>
                <li>• Utiliser le service à des fins illégales</li>
                <li>• Surcharger nos serveurs</li>
                <li>• Créer de fausses signatures</li>
                <li>• Violer les droits de propriété intellectuelle</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Avertissement important */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <div className="text-yellow-600 text-xl mr-3">⚠️</div>
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Important</h3>
              <p className="text-yellow-700 text-sm leading-relaxed">
                Ces conditions constituent un contrat légalement contraignant. En utilisant Ma Signature Mail, 
                vous acceptez d'être lié par ces termes. <strong>Lisez attentivement avant utilisation.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Table des matières */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-[var(--color-primary)] mb-4">📑 Table des matières</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
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
        <div className="space-y-8">
          {sections.map((section, index) => (
            <section key={index} id={section.id} className="scroll-mt-24">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <div key={pIndex}>
                      {paragraph.includes('•') ? (
                        paragraph.split('\n').map((line, lineIndex) => (
                          <p key={lineIndex} className="text-[var(--color-muted)] leading-relaxed">
                            {line}
                          </p>
                        ))
                      ) : (
                        <p className="text-[var(--color-muted)] leading-relaxed">
                          {paragraph}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact légal */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[var(--color-primary)] to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Questions juridiques ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Notre équipe juridique est disponible pour répondre à vos questions sur ces conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@masignaturemail.com" 
                className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-primary)] font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                ⚖️ Contact juridique
              </a>
              <a 
                href="/contact" 
                className="inline-block border-2 border-white hover:bg-white hover:text-[var(--color-primary)] text-white font-semibold py-3 px-8 rounded-lg transition-all"
              >
                💬 Support général
              </a>
            </div>
            <p className="text-xs text-blue-200 mt-4">
              Réponse garantie sous 72h pour les questions juridiques
            </p>
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
            "name": "Conditions d'Utilisation - Ma Signature Mail",
            "description": "Conditions générales d'utilisation du générateur de signatures email Ma Signature Mail",
            "url": "https://masignaturemail.com/terms",
            "lastReviewed": lastUpdate,
            "about": {
              "@type": "Organization",
              "name": "Ma Signature Mail",
              "description": "Générateur de signatures email gratuit"
            }
          })
        }}
      />
    </main>
  );
}