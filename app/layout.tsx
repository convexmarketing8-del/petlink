import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import ScrollRestoration from "@/components/ScrollRestoration";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "PetLink — Alimentador y bebedero automático",
  description:
    "Controlá el alimentador y el bebedero automático de tu mascota desde el celular, en tiempo real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth h-full`}
    >
      <body className="min-h-full bg-[#0D0F12] font-[family-name:var(--font-inter)] text-[#F5F5F5] antialiased">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
