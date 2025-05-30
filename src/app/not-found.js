export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
      <h1 className="text-5xl font-bold mb-4 text-[var(--color-primary)]">404</h1>
      <p className="text-lg text-gray-600 mb-6">Oups ! Cette page n’existe pas (ou plus).</p>
      <a
        href="/home"
        className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white rounded hover:bg-opacity-90 transition"
      >
        Revenir à l'accueil
      </a>
    </div>
  )
}
