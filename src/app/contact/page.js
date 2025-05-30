import ContactPage from "../../../components/pages/Contact/ContactPage";

export const metadata = {
  title: "Contact – Ma Signature Mail",
  description: "Une question, un besoin ? Contactez l’équipe Ma Signature Mail via notre formulaire sécurisé.",
  openGraph: {
    title: "Contact – Ma Signature Mail",
    description: "Écrivez-nous si vous avez besoin d’aide ou de renseignements.",
    url: "https://masignaturemail.com/contact",
    siteName: "Ma Signature Mail",
    images: ["/og-preview.png"],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact – Ma Signature Mail",
    description: "Besoin d’un contact rapide ? C’est par ici.",
    images: ["/og-preview.png"],
  },
}


export default function Contact() {
  return (
<ContactPage />
  );
}

