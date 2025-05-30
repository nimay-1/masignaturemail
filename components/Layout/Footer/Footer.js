'use client';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navigationLinks = [
    { href: "/", label: "Accueil" },
    { href: "/pricing", label: "Tarification" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" }
  ];

  const resourceLinks = [
    { href: "home/#how-it-works", label: "Comment ça marche ?" },
    { href: "home/#why-signature", label: "Pourquoi une signature ?" },
    { href: "home/#main", label: "Créer ma signature" }
  ];

  const legalLinks = [
    { href: "/privacy", label: "Politique de confidentialité" },
    { href: "/terms", label: "Conditions d'utilisation" },
    { href: "/legal", label: "Mentions légales" }
  ];

  return (
    <footer 
      className="text-white"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo + Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <img
                src="/logo_msm_long_light.webp"
                alt="Ma Signature Mail - Générateur signature email gratuit"
                className="h-10 w-auto transition-transform group-hover:scale-105"
                width="160"
                height="40"
              />
            </Link>
            <p 
              className="leading-relaxed mb-6 max-w-sm"
              style={{ color: '#DBEAFE' }}
            >
              Le générateur <strong style={{ color: 'white' }}>100% gratuit</strong> pour créer 
              des signatures email professionnelles. Simple, rapide, sans inscription.
            </p>
            
            {/* Stats rapides */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div 
                className="rounded-lg p-3"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div 
                  className="font-bold text-lg"
                  style={{ color: 'var(--color-accent)' }}
                >
                  0€
                </div>
                <div 
                  className="text-xs"
                  style={{ color: '#DBEAFE' }}
                >
                  À vie
                </div>
              </div>
              <div 
                className="rounded-lg p-3"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                <div 
                  className="font-bold text-lg"
                  style={{ color: 'var(--color-accent)' }}
                >
                  &lt;1min
                </div>
                <div 
                  className="text-xs"
                  style={{ color: '#DBEAFE' }}
                >
                  Création
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 
              className="font-semibold mb-6 text-lg"
              style={{ color: 'white' }}
            >
              Navigation
            </h3>
            <ul className="space-y-4">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 text-sm group flex items-center"
                    style={{ color: '#DBEAFE' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--color-accent)';
                      e.target.querySelector('.bullet').style.backgroundColor = 'var(--color-accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#DBEAFE';
                      e.target.querySelector('.bullet').style.backgroundColor = '#BFDBFE';
                    }}
                  >
                    <span 
                      className="bullet w-1 h-1 rounded-full mr-3 transition-colors"
                      style={{ backgroundColor: '#BFDBFE' }}
                    ></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 
              className="font-semibold mb-6 text-lg"
              style={{ color: 'white' }}
            >
              Ressources
            </h3>
            <ul className="space-y-4">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 text-sm group flex items-center"
                    style={{ color: '#DBEAFE' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--color-accent)';
                      e.target.querySelector('.bullet').style.backgroundColor = 'var(--color-accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#DBEAFE';
                      e.target.querySelector('.bullet').style.backgroundColor = '#BFDBFE';
                    }}
                  >
                    <span 
                      className="bullet w-1 h-1 rounded-full mr-3 transition-colors"
                      style={{ backgroundColor: '#BFDBFE' }}
                    ></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h3 
              className="font-semibold mb-6 text-lg"
              style={{ color: 'white' }}
            >
              Support & Légal
            </h3>
            <ul className="space-y-4 mb-8">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 text-sm group flex items-center"
                    style={{ color: '#DBEAFE' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--color-accent)';
                      e.target.querySelector('.bullet').style.backgroundColor = 'var(--color-accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#DBEAFE';
                      e.target.querySelector('.bullet').style.backgroundColor = '#BFDBFE';
                    }}
                  >
                    <span 
                      className="bullet w-1 h-1 rounded-full mr-3 transition-colors"
                      style={{ backgroundColor: '#BFDBFE' }}
                    ></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact rapide */}
            <div 
              className="rounded-lg p-4 border"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <h4 
                className="font-medium mb-2 text-sm"
                style={{ color: 'white' }}
              >
                Une question ?
              </h4>
              <p 
                className="text-xs mb-3"
                style={{ color: '#DBEAFE' }}
              >
                Réponse sous 24h garantie
              </p>
              <Link
                href="/contact"
                className="inline-block text-xs font-medium py-2 px-4 rounded-lg transition-colors"
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
                💬 Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div 
        className="border-t"
        style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
      ></div>

      {/* Copyright & Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div 
            className="flex flex-col md:flex-row items-center gap-4 text-sm"
            style={{ color: '#DBEAFE' }}
          >
            <span className="flex items-center gap-2">
              © {currentYear} Ma Signature Mail
              <span 
                className="hidden md:inline"
                style={{ color: '#BFDBFE' }}
              >
                •
              </span>
            </span>
            <span className="hidden md:inline">
              Tous droits réservés
            </span>
          </div>

          {/* Badge de confiance */}
          <div className="flex items-center gap-6">
            <div 
              className="flex items-center gap-2 text-xs"
              style={{ color: '#DBEAFE' }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Service disponible 24/7</span>
            </div>
            <div 
              className="flex items-center gap-2 text-xs"
              style={{ color: '#DBEAFE' }}
            >
              <span style={{ color: 'var(--color-accent)' }}>🔒</span>
              <span>100% sécurisé</span>
            </div>
          </div>

          {/* Liens rapides légaux */}
          <div className="flex items-center gap-4 text-xs">
            <Link 
              href="/privacy" 
              className="transition-colors"
              style={{ color: '#DBEAFE' }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--color-accent)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#DBEAFE';
              }}
            >
              Confidentialité
            </Link>
            <span style={{ color: '#BFDBFE' }}>•</span>
            <Link 
              href="/terms" 
              className="transition-colors"
              style={{ color: '#DBEAFE' }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--color-accent)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#DBEAFE';
              }}
            >
              CGU
            </Link>
          </div>
        </div>

        {/* Tagline final */}
        <div 
          className="text-center mt-6 pt-6 border-t"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <p 
            className="text-xs"
            style={{ color: '#DBEAFE' }}
          >
            Créé avec ❤️ pour simplifier la vie des professionnels • 
            <strong style={{ color: 'var(--color-accent)' }}> 100% gratuit, 0% complications</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}