import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ma Signature Mail",
  description: "Générateur de signature HTML gratuite",
};

export default function RootLayout({ children }) {
  return (
<html lang="fr">
      <body
        className={`min-h-screen flex flex-col ${inter.variable} bg-[var(--color-background)] text-[var(--color-primary)]`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
