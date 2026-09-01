import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE 3RD LAYER — Editorial Digital Studio & Systems",
  description:
    "We design, develop and deploy high-performance digital systems, custom web architectures, and digital products that help businesses grow faster and smarter.",
  keywords: [
    "Digital Studio",
    "Web Development",
    "Brutalist Web Design",
    "Software Engineering",
    "Next.js",
    "Product Studio",
    "The 3rd Layer",
  ],
  authors: [{ name: "The 3rd Layer" }],
  openGraph: {
    title: "THE 3RD LAYER — Editorial Digital Studio",
    description: "IDEAS. CODE. IMPACT. We engineer digital products and scalable web architectures.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F3F0E9] text-[#0A0A0A] selection:bg-[#DE3D1C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
