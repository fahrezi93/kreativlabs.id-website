import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "KreativLabs.id - Jasa Pembuatan Website & Design Profesional",
  description: "KreativLabs.id menyediakan jasa pembuatan website dan design profesional untuk bisnis Anda. Solusi digital modern, minimalis, dan berkualitas tinggi.",
  keywords: ["jasa website", "web development", "ui ux design", "pembuatan website", "design website", "kreativlabs"],
  authors: [{ name: "KreativLabs.id" }],
  openGraph: {
    title: "KreativLabs.id - Jasa Pembuatan Website & Design Profesional",
    description: "Solusi digital modern untuk bisnis Anda",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "KreativLabs.id - Jasa Pembuatan Website & Design",
    description: "Solusi digital modern untuk bisnis Anda",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
