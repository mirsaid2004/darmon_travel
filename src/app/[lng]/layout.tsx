import { dir } from "i18next";
import { languages } from "../i18n/settings";
import "../globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: supportedLangs };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <Navbar lng={lng} />
        {children}
        <Footer lng={lng} />
      </body>
    </html>
  );
}
