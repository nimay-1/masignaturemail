// app/head.js
export default function Head() {
  return (
    <>
      {/* 🌐 Balises SEO classiques */}
      <title>Générateur de signature email HTML gratuite | MaSignatureMail</title>
      <meta
        name="description"
        content="Créez votre signature email professionnelle, responsive et compatible Gmail, Outlook, Apple Mail. Personnalisation facile. Gratuit, sans inscription."
      />
      <meta
        name="keywords"
        content="signature email gratuite, générateur signature email HTML, signature email professionnelle, créer signature Gmail, signature Outlook, signature Apple Mail, signature responsive, signature mail sans inscription"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://masignaturemail.com/" />

      {/* 📱 Responsive / Accessibilité */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />

      {/* 🔗 Open Graph (réseaux sociaux) */}
      <meta property="og:title" content="Générateur de signature email HTML gratuite" />
      <meta
        property="og:description"
        content="Obtenez une signature email professionnelle et HTML personnalisée en quelques secondes. Simple, rapide et gratuite."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://masignaturemail.com/" />
      <meta property="og:image" content="https://masignaturemail.com/og-preview.png" />
      <meta property="og:site_name" content="MaSignatureMail" />

      {/* 🐦 Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Générateur de signature email HTML gratuite" />
      <meta
        name="twitter:description"
        content="Créez votre signature email personnalisée et professionnelle en quelques clics. Compatible Gmail, Outlook, Apple Mail."
      />
      <meta name="twitter:image" content="https://masignaturemail.com/og-preview.png" />
    </>
  );
}
