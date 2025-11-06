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
  description:
    "Jasa pembuatan website profesional, UI/UX design, dan digital marketing. Wujudkan website impian Anda bersama KreativLabs.id",
  keywords:
    "jasa website, web development, UI/UX design, digital marketing, pembuatan website, jasa design",
  authors: [{ name: "KreativLabs.id" }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "KreativLabs.id - Jasa Pembuatan Website & Design Profesional",
    description:
      "Jasa pembuatan website profesional, UI/UX design, dan digital marketing",
    url: "https://kreativlabs.id",
    siteName: "KreativLabs.id",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KreativLabs.id - Jasa Pembuatan Website & Design Profesional",
    description:
      "Jasa pembuatan website profesional, UI/UX design, dan digital marketing",
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
