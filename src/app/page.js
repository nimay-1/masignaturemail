import Hero from "../../components/pages/Home/Hero";
import WhySignature from "../../components/pages/Home/WhySignature";
import HowItWorks from "../../components/pages/Home/HowItWorks";
import SignatureBuilder from "../../components/pages/Home/SignatureBuilder";
import FaqSection from "../../components/pages/Home/FaqSection";

export const metadata = {
  title: "Ma Signature Mail – Générez votre signature email gratuite",
  description:
    "Créez une signature email HTML professionnelle, personnalisée et responsive, gratuitement.",
  openGraph: {
    title: "Ma Signature Mail",
    description: "Créez une signature email HTML professionnelle gratuitement.",
    url: "https://masignaturemail.com",
    siteName: "Ma Signature Mail",
    images: ["../og-preview.png"],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ma Signature Mail",
    description:
      "Créez votre signature email HTML professionnelle gratuitement.",
    images: ["/og-preview.png"],
  },
};

export default function Home() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>
      <section id="why-signature">
        <WhySignature />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <main>
        <section id="main">
          <SignatureBuilder />
        </section>
      </main>
      <section id="faq">
        <FaqSection />
      </section>
    </main>
  );
}
