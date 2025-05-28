import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-[var(--color-background)]/50 sticky top-0 z-50 font-medium backdrop-blur-sm">
      <div>
        <a href="/">
        <img
          src="/logo_msm_dark.png"
          alt="Logo Ma Signature Mail"
          className="h-20"
        />
        </a>
      </div>
      <nav>
        <ul className="flex gap-6 font-heading text-[var(--color-primary)] text-sm md:text-base items-center">
          <li className="relative group cursor-pointer">
            <a href="/pricing" className="link-hover block">Tarification</a>
          </li>
          <li className="relative group cursor-pointer">
            <a href="/contact" className="link-hover block">Contact</a>
          </li>
          <li>
            <a href="#main" className="inline-block">
              <Button>Commencer gratuitement</Button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
