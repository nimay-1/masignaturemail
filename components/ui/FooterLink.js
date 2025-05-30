function FooterLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-white/70 hover:text-[var(--color-accent)] transition-colors duration-200 hover:translate-x-1 transform inline-block"
      >
        {children}
      </a>
    </li>
  );
}