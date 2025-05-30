import TermsOfServicePage from "../../../components/Legal/TermsOfServicePage";

export const metadata = {
  title: "Conditions d'utilisation – Ma Signature Mail",
  description: "Prenez connaissance des conditions générales d’utilisation de notre générateur de signature email.",
  openGraph: {
    title: "Conditions d'utilisation – Ma Signature Mail",
    description: "Voici les règles d’utilisation de notre service.",
    url: "https://masignaturemail.com/terms-of-service",
    siteName: "Ma Signature Mail",
    images: ["/og-preview.png"],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditions d'utilisation – Ma Signature Mail",
    description: "Lisez nos conditions avant d’utiliser nos services.",
    images: ["/og-preview.png"],
  },
}


export default function TermsOfService() {
  return (
<TermsOfServicePage />
  );
}

