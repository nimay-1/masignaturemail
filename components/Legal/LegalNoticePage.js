'use client';

import React from 'react';

// Métadonnées pour le SEO (à ajouter si vous utilisez le système de métadonnées Next.js)
// export const metadata = {
//   title: 'Mentions Légales | Ma Signature Mail',
//   description: 'Informations légales obligatoires de Ma Signature Mail. Éditeur, hébergement, propriété intellectuelle et contacts.',
//   robots: 'index, follow'
// };

export default function LegalNoticePage() {
  const lastUpdate = "15 décembre 2024";

  return (
    <main className="bg-[var(--color-background)] py-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <header className="text-center mb-12">
          <div className="inline-block bg-[var(--color-primary)] bg-opacity-10 rounded-full px-6 py-2 mb-6">
            <span className="text-[var(--color-background)] font-medium text-sm">
              📋 Informations légales
            </span>
          </div>
          <h1 className="text-[var(--color-primary)] mb-6">
            Mentions Légales
          </h1>
          <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto leading-relaxed">
            Informations légales minimales conformément à la <strong className="text-[var(--color-foreground)]">Loi pour la Confiance dans l&apos;Économie Numérique (LCEN)</strong>. 
            Confidentialité et protection des données personnelles garanties.
          </p>
          <div className="mt-6 text-sm text-[var(--color-muted)]">
            <strong>Dernière mise à jour :</strong> {lastUpdate}
          </div>
        </header>

        {/* Identification de l'éditeur */}
        <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6 flex items-center">
            <span className="mr-3">🏢</span>
            1. Identification de l'éditeur du site
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-4">Informations générales</h3>
              <div className="space-y-3 text-[var(--color-muted)]">
                <div>
                  <strong className="text-[var(--color-foreground)]">Dénomination :</strong><br />
                  Ma Signature Mail
                </div>
                <div>
                  <strong className="text-[var(--color-foreground)]">Forme juridique :</strong><br />
                  Micro-entreprise (Auto-entrepreneur)
                </div>
                <div>
                  <strong className="text-[var(--color-foreground)]">Activité :</strong><br />
                  Développement de logiciels applicatifs
                </div>
                <div>
                  <strong className="text-[var(--color-foreground)]">Code APE/NAF :</strong><br />
                  6201Z - Programmation informatique
                </div>
                <div>
                  <strong className="text-[var(--color-foreground)]">Numéro SIRET :</strong><br />
                  <em className="text-sm">En cours d&apos;obtention</em>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-4">Coordonnées</h3>
              <div className="space-y-3 text-[var(--color-muted)]">
                <div>
                  <strong className="text-[var(--color-foreground)]">Siège social :</strong><br />
                  France
                </div>
                <div>
                  <strong className="text-[var(--color-foreground)]">Email :</strong><br />
                  <a href="mailto:contact@masignaturemail.com" className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] link-hover">
                    contact@masignaturemail.com
                  </a>
                </div>
                <div>
                  <strong className="text-[var(--color-foreground)]">Site web :</strong><br />
                  <a href="https://masignaturemail.com" className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] link-hover">
                    https://masignaturemail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Directeur de publication */}
        <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6 flex items-center">
            <span className="mr-3">👤</span>
            2. Directeur de la publication
          </h2>
          <div className="text-[var(--color-muted)] space-y-3">
            <div>
              <strong className="text-[var(--color-foreground)]">Directeur de publication :</strong><br />
              Représentant légal de Ma Signature Mail
            </div>
            <div>
              <strong className="text-[var(--color-foreground)]">Qualité :</strong><br />
              Gérant et développeur
            </div>
            <div>
              <strong className="text-[var(--color-foreground)]">Contact :</strong><br />
              <a href="mailto:contact@masignaturemail.com" className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] link-hover">
                contact@masignaturemail.com
              </a>
            </div>
          </div>
        </section>

        {/* Hébergement */}
        <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6 flex items-center">
            <span className="mr-3">🌐</span>
            3. Hébergement du site
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-4">Hébergeur principal</h3>
              <div className="space-y-3 text-[var(--color-muted)]">
                <div>
                  <strong className="text-[var(--color-foreground)]">Société :</strong><br />
                  Vercel Inc.
                </div>
                <div>
                  <strong className="text-[var(--color-foreground)]">Adresse :</strong><br />
                  340 S Lemon Ave #4133<br />
                  Walnut, CA 91789<br />
                  États-Unis
                </div>
                <div>
                  <strong className="text-[var(--color-foreground)]">Site web :</strong><br />
                  <a href="https://vercel.com" className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] link-hover" target="_blank" rel="noopener noreferrer">
                    https://vercel.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-4">Services annexes</h3>
              <div className="space-y-3 text-[var(--color-muted)]">
                <div>
                  <strong className="text-[var(--color-foreground)]">CDN :</strong><br />
                  Cloudflare, Inc.<br />
                  101 Townsend St<br />
                  San Francisco, CA 94107, USA
                </div>
                <div>
                  <strong className="text-[var(--color-foreground)]">Analytics :</strong><br />
                  Google Analytics<br />
                  (Données anonymisées)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Propriété intellectuelle */}
        <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6 flex items-center">
            <span className="mr-3">©</span>
            4. Propriété intellectuelle
          </h2>
          <div className="space-y-6 text-[var(--color-muted)]">
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Droits d&apos;auteur</h3>
              <p className="leading-relaxed">
                L'ensemble du contenu présent sur le site Ma Signature Mail (textes, images, vidéos, design, code source, logos, etc.) est protégé par les droits d'auteur et constitue une œuvre de l'esprit protégée par les dispositions du Code de la Propriété Intellectuelle française et les conventions internationales.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Marques</h3>
              <p className="leading-relaxed">
                "Ma Signature Mail" ainsi que tous les logos et signes distinctifs reproduits sur le site sont des marques dont nous sommes propriétaire ou licencié. Toute reproduction ou représentation totale ou partielle de ces marques sans autorisation expresse est interdite.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Droits de reproduction</h3>
              <p className="leading-relaxed">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
              </p>
            </div>
          </div>
        </section>

        {/* Données personnelles */}
        <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6 flex items-center">
            <span className="mr-3">🔒</span>
            5. Protection des données personnelles
          </h2>
          <div className="space-y-4 text-[var(--color-muted)]">
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Responsable de traitement</h3>
              <p className="leading-relaxed">
                Ma Signature Mail, en la personne de son représentant légal, est responsable du traitement des données personnelles collectées sur ce site.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Déclaration CNIL</h3>
              <p className="leading-relaxed">
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), le site respecte la confidentialité de vos données personnelles.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Vos droits</h3>
              <p className="leading-relaxed">
                Vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données vous concernant. Pour exercer ces droits, contactez-nous à l'adresse : 
                <a href="mailto:contact@masignaturemail.com" className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] link-hover"> contact@masignaturemail.com</a>
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 rounded p-4">
              <p className="text-green-800 text-sm">
                <strong>Protection de la vie privée :</strong> Ma Signature Mail ne divulgue aucune information personnelle publiquement. 
                Seules les informations légales minimales sont présentées ici, conformément à la réglementation française.
              </p>
            </div>
          </div>
        </section>

        {/* Cookies */}
        <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6 flex items-center">
            <span className="mr-3">🍪</span>
            6. Cookies et traceurs
          </h2>
          <div className="space-y-4 text-[var(--color-muted)]">
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Utilisation des cookies</h3>
              <p className="leading-relaxed">
                Le site Ma Signature Mail utilise des cookies pour améliorer votre expérience de navigation et analyser l'audience du site de manière anonyme.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Types de cookies utilisés</h3>
              <ul className="space-y-2">
                <li>• <strong>Cookies fonctionnels :</strong> Mémorisation de vos préférences (thème, langue)</li>
                <li>• <strong>Cookies analytiques :</strong> Google Analytics (anonymisé) pour les statistiques de visite</li>
                <li>• <strong>Aucun cookie publicitaire</strong> ou de profilage n&apos;est utilisé</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Gestion des cookies</h3>
              <p className="leading-relaxed">
                Vous pouvez configurer votre navigateur pour refuser les cookies. Cette configuration n'affectera pas le fonctionnement du générateur de signatures.
              </p>
            </div>
          </div>
        </section>

        {/* Responsabilité */}
        <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6 flex items-center">
            <span className="mr-3">⚖️</span>
            7. Limitation de responsabilité
          </h2>
          <div className="space-y-4 text-[var(--color-muted)]">
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Disponibilité du service</h3>
              <p className="leading-relaxed">
                Nous nous efforçons de maintenir le site accessible 24h/24 et 7j/7, mais ne garantissons pas une disponibilité ininterrompue. 
                Le site peut être temporairement indisponible pour maintenance ou en cas de force majeure.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Contenu généré</h3>
              <p className="leading-relaxed">
                Ma Signature Mail n'est pas responsable du contenu des signatures créées par les utilisateurs. 
                Chaque utilisateur est responsable de la légalité et de l'exactitude des informations qu'il saisit.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Liens externes</h3>
              <p className="leading-relaxed">
                Le site peut contenir des liens vers des sites externes. Nous ne sommes pas responsables du contenu, 
                de la disponibilité ou des pratiques de confidentialité de ces sites tiers.
              </p>
            </div>
          </div>
        </section>

        {/* Droit applicable */}
        <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-6 flex items-center">
            <span className="mr-3">🇫🇷</span>
            8. Droit applicable et juridiction compétente
          </h2>
          <div className="text-[var(--color-muted)] space-y-4">
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Loi applicable</h3>
              <p className="leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. 
                Tout litige en relation avec l'utilisation du site est soumis au droit français.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-[var(--color-foreground)] mb-3">Juridiction compétente</h3>
              <p className="leading-relaxed">
                En cas de litige, et après échec de toute tentative de recherche d'une solution amiable, 
                les tribunaux français seront seuls compétents pour connaître du litige.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white rounded-2xl p-8 text-white">
          <h2 className="text-2xl justify-center font-semibold mb-4 flex items-center">
            <span className="mr-3">📞</span>
            Contact et informations
          </h2>
          <div className="text-center">
            <h3 className="font-medium mb-4">Pour toutes vos questions</h3>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 max-w-md mx-auto">
              <div className="space-y-4 text-[var(--color-muted)]">
                <div className="text-center">
                  <div className="text-4xl mb-2">📧</div>
                  <div>
                    <strong>Email unique :</strong><br />
                    <a href="mailto:contact@masignaturemail.com" className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] text-lg font-semibold">
                      contact@masignaturemail.com
                    </a>
                  </div>
                </div>
                <div className="border-t border-white border-opacity-20 pt-4">
                  <div className="text-sm">
                    <div><strong>Questions générales</strong> • Support technique</div>
                    <div><strong>Questions juridiques</strong> • RGPD et données</div>
                    <div><strong>Signalements</strong> • Réclamations</div>
                  </div>
                </div>
                <div className="text-center">
                  <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-[var(--color-primary)] font-semibold py-2 px-4 rounded-lg transition-all">
                    Formulaire de contact
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-blue-200 text-sm">
                Réponse garantie sous 48h • Toutes questions traitées via cette adresse unique
              </p>
            </div>
          </div>
        </section>

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
            "name": "Mentions Légales - Ma Signature Mail",
            "description": "Informations légales obligatoires de Ma Signature Mail : éditeur, hébergement, droits d'auteur, RGPD.",
            "url": "https://masignaturemail.com/legal-notice",
            "lastReviewed": lastUpdate,
            "publisher": {
              "@type": "Organization",
              "name": "Ma Signature Mail",
              "url": "https://masignaturemail.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@masignaturemail.com",
                "contactType": "customer support"
              }
            }
          })
        }}
      />
    </main>
  );
}