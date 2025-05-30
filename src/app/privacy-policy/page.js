import PrivacyPolicyPage from "../../../components/Legal/PrivacyPolicyPage";

export const metadata = {
  title: "Politique de confidentialité – Ma Signature Mail",
  description: "Notre politique de confidentialité détaille la manière dont vos données sont traitées en toute sécurité et dans le respect du RGPD.",
  openGraph: {
    title: "Politique de confidentialité – Ma Signature Mail",
    description: "Nous ne collectons pas vos données. Consultez notre politique de confidentialité RGPD-compliant.",
    url: "https://masignaturemail.com/privacy",
    siteName: "Ma Signature Mail",
    images: ["/og-preview.png"],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Politique de confidentialité – Ma Signature Mail",
    description: "Ma Signature Mail respecte votre vie privée et ne conserve aucune donnée personnelle.",
    images: ["/og-preview.png"],
  },
}

export default function Privacy() {
  return (
<PrivacyPolicyPage />
  );
}

