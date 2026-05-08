import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Santino Donato | Software Developer",
  description:
    "Estudiante de Licenciatura en Sistemas en UNLa. Apasionado por el desarrollo de software.",
  keywords: [
    "Software Developer",
    "Java",
    "Kotlin",
    "Spring",
    "Sistemas",
    "UNLa",
    "Santino Donato",
  ],
  authors: [{ name: "Santino Donato" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-background">
      <body
        className={`${spaceGrotesk.variable} ${archivo.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
