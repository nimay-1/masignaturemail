import LegalNoticePage from "../../../components/Legal/LegalNoticePage";

export const metadata = {
  title: "Mentions légales – Ma Signature Mail",
  description: "Informations légales sur l’éditeur du site, la propriété intellectuelle et les obligations réglementaires.",
  openGraph: {
    title: "Mentions légales – Ma Signature Mail",
    description: "Retrouvez ici toutes les mentions légales concernant Ma Signature Mail.",
    url: "https://masignaturemail.com/legal-notice",
    siteName: "Ma Signature Mail",
    images: ["/og-preview.png"],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentions légales – Ma Signature Mail",
    description: "Notre site respecte les obligations légales en vigueur.",
    images: ["/og-preview.png"],
  },
}

export default function Legal() {
  return (
<LegalNoticePage />
  );
}

