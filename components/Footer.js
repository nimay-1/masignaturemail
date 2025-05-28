export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center border-t border-t-[var(--color-border)] text-[var(--color-background)] p-4 bg-[var(--color-primary)]">
      <div>
        <img
          src="/logo_msm_light.png"
          alt="Logo Ma Signature Mail"
          className="h-20"
        />
      </div>
      <div className="text-center md:text-left mt-4 md:mt-0">
        <h3 className="text-sm font-semibold mb-2">Liens rapides</h3>
        <nav aria-label="Liens rapides">
          <ul className="space-y-1">
            <li className="relative group">
              <a href="/pricing" className="link-hover">Tarification</a>
            </li>
            <li className="relative group">
              <a href="/contact" className="link-hover">Contact</a>
            </li>
            <li className="relative group">
              <a href="#main" className="link-hover">Commencer gratuitement</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-xs mt-4 md:mt-0">
        © {new Date().getFullYear()} Ma Signature Mail. Tous droits réservés.
      </div>
    </footer>
  );
}
