import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kreativlabs.my.id'),
  title: "KreativLabs.id - Jasa Website & Desain Grafis Profesional Mulai 50rb",
  description:
    "Jasa pembuatan website dan desain grafis profesional (logo, poster, sosmed, packaging) dengan harga terjangkau mulai dari 50 ribu. Kualitas premium, harga bersahabat!",
  keywords:
    "jasa website, web development, desain grafis, desain logo, desain poster, desain sosmed, desain kemasan, jasa design murah, pembuatan website murah",
  authors: [{ name: "KreativLabs.id" }],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  icons: {
    icon: [
      { url: '/icon', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon', type: 'image/png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: "KreativLabs.id - Jasa Website & Desain Grafis Mulai 50rb",
    description:
      "Jasa pembuatan website dan desain grafis (logo, poster, sosmed, packaging) mulai dari 50 ribu",
    url: "/",
    siteName: "KreativLabs.id",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/bannerkreativlabsid.png",
        width: 1200,
        height: 630,
        alt: "KreativLabs.id - Jasa Website & Desain Grafis Mulai 50rb",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KreativLabs.id - Jasa Website & Desain Grafis Mulai 50rb",
    description:
      "Jasa pembuatan website dan desain grafis profesional dengan harga terjangkau",
    images: ["/bannerkreativlabsid.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${plusJakartaSans.variable} antialiased font-sans overflow-x-hidden`}
      >
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
      </body>
    </html>
  );
}
