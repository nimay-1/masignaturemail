import PricingPage from "../../../components/pages/Pricing/PricingPage";

export const metadata = {
  title: "Tarifs – Ma Signature Mail",
  description: "Comparez les fonctionnalités de la version gratuite et de la version Pro du générateur de signature Ma Signature Mail.",
  openGraph: {
    title: "Tarifs – Ma Signature Mail",
    description: "Gratuit ou Pro ? Comparez nos offres de signature email.",
    url: "https://masignaturemail.com/pricing",
    siteName: "Ma Signature Mail",
    images: ["/og-preview.png"],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarifs – Ma Signature Mail",
    description: "Découvrez les avantages de chaque version.",
    images: ["/og-preview.png"],
  },
}

export default function Pricing() {
  return (
<PricingPage />
  );
}

