import { Metadata } from "next";
import { Roboto } from "next/font/google";
import ClientLayout from "./ClientLayout";
import "./globals.css";
import { seoConfig } from "./shared/seo.config";

const roboto = Roboto({
  weight: "400",
  subsets: ["greek"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.default.url),
  title: {
    default: seoConfig.default.title,
    template: "%s | Prabodham DigiTech",
  },
  description: seoConfig.default.description,
  keywords: seoConfig.default.keywords,
  authors: [{ name: "Prabodham DigiTech" }],
  creator: "Prabodham DigiTech",
  publisher: "Prabodham DigiTech",
  robots: seoConfig.default.robots,

  // Icons
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },

  // Open Graph
  openGraph: {
    type: "website",
    siteName: "Prabodham DigiTech",
    title: seoConfig.default.title,
    description: seoConfig.default.description,
    url: seoConfig.default.url,
    images: [
      {
        url: "/pdBG.png",
        width: 1200,
        height: 630,
        alt: "Prabodham DigiTech Banner",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: seoConfig.default.title,
    description: seoConfig.default.description,
    site: seoConfig.social.twitter.site,
    creator: seoConfig.social.twitter.handle,
    images: [
      {
        url: "/pdBG.png",
        alt: "Prabodham DigiTech Banner",
      },
    ],
  },

  manifest: "/site.webmanifest",
  alternates: {
    canonical: seoConfig.default.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Preload LCP image if any */}
        <link rel="preload" as="image" href="/PDLogo.png" />
      </head>
      <body className={roboto.className} suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
