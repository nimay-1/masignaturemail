'use client';

import { useState } from 'react';
import Button from "../../ui/Button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)]/20 bg-[var(--color-background)]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group block">
              <img
                src="/logo_msm_long_dark.webp"
                alt="Logo Ma Signature Mail - Générateur signature email gratuit"
                className="h-12 transition-all duration-200 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-center space-x-6">
              <NavLink href="/">Accueil</NavLink>
              <NavLink href="/pricing">Tarification</NavLink>
              <NavLink href="/faq">FAQ</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
            <div className="ml-8 flex items-center space-x-4">
              <ButtonNavLink href="/">
                <Button size="sm">
                  Commencer gratuitement
                </Button>
              </ButtonNavLink>
            </div>
          </nav>

          {/* Menu mobile */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

// Composant NavLink pour les liens de navigation (sans soulignement)
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="relative text-[var(--color-foreground)] font-medium text-sm transition-colors duration-200 hover:text-[var(--color-accent)] group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

// Composant spécial pour le bouton (sans soulignement)
function ButtonNavLink({ href, children }) {
  return (
    <Link href={href} className="block">
      {children}
    </Link>
  );
}

// Menu mobile avec état fonctionnel
function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Bouton hamburger */}
      <button 
        onClick={toggleMenu}
        className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-foreground)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-accent)] transition-colors duration-200"
        aria-expanded={isOpen}
        aria-label="Menu principal"
      >
        {/* Icône hamburger animée */}
        <svg 
          className={`h-6 w-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Menu déroulant mobile */}
      {isOpen && (
        <>
          {/* Overlay pour fermer le menu */}
          <div 
            className="fixed inset-0 z-40 bg-black bg-opacity-25 backdrop-blur-sm"
            onClick={toggleMenu}
            aria-hidden="true"
          />
          
          {/* Menu content */}
          <div className="absolute right-0 top-full mt-2 w-64 origin-top-right z-50 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-2">
              {/* Liens de navigation mobile */}
              <MobileNavLink href="/" onClick={toggleMenu}>
                🏠 Accueil
              </MobileNavLink>
              <MobileNavLink href="/pricing" onClick={toggleMenu}>
                💰 Tarification
              </MobileNavLink>
              <MobileNavLink href="/faq" onClick={toggleMenu}>
                ❓ FAQ
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={toggleMenu}>
                📞 Contact
              </MobileNavLink>
              
              {/* Séparateur */}
              <div className="border-t border-[var(--color-border)] my-2" />
              
              {/* CTA principal */}
              <div className="px-4 py-2">
                <Link 
                  href="#main" 
                  onClick={toggleMenu}
                  className="block w-full"
                >
                  <Button size="sm" className="w-full justify-center">
                    🚀 Commencer gratuitement
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Composant pour les liens du menu mobile
function MobileNavLink({ href, children, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-[var(--color-foreground)] hover:text-[var(--color-accent)] hover:bg-[var(--color-background)] transition-colors duration-150 font-medium"
    >
      {children}
    </Link>
  );
}