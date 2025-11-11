import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://kreativlabs.my.id'),
  title: "Blog - KreativLabs.id | Web Development & Design Tips",
  description:
    "Discover the latest tips, tutorials, and insights about web development, graphic design, and digital business solutions from KreativLabs.id",
  keywords:
    "web development blog, design tips, tutorial website, desain grafis, digital marketing, kreativlabs blog",
  openGraph: {
    title: "Blog - KreativLabs.id | Web Development & Design Tips",
    description:
      "Discover the latest tips, tutorials, and insights about web development, graphic design, and digital business solutions",
    url: "https://kreativlabs.my.id/en/blog",
    siteName: "KreativLabs.id",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://kreativlabs.my.id/bannerkreatiflabsen.png",
        width: 1200,
        height: 630,
        alt: "KreativLabs.id Blog - Web Development & Design Tips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - KreativLabs.id | Web Development & Design Tips",
    description:
      "Discover the latest tips, tutorials, and insights about web development, graphic design, and digital business solutions",
    images: ["https://kreativlabs.my.id/bannerkreatiflabsen.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
