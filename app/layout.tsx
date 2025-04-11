import { Metadata } from "next";
import { Roboto } from "next/font/google";
import ClientLayout from "./ClientLayout";
import "./globals.css";
import { seoConfig } from "./shared/seo.config";
import Script from "next/script";

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
    template: "%s",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Preload LCP image if any */}
        <link rel="preload" as="image" href="/PDLogo.png" />

        {/* Schema.org JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: seoConfig.organization.name,
              url: seoConfig.organization.url,
              logo: seoConfig.organization.logo,
              description: seoConfig.default.description,
              sameAs: seoConfig.organization.sameAs,
              address: {
                "@type": "PostalAddress",
                addressLocality: seoConfig.organization.address.addressLocality,
                addressCountry: seoConfig.organization.address.addressCountry,
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: seoConfig.organization.phone,
                  email: seoConfig.organization.email,
                  contactType: "customer service",
                },
              ],
            }),
          }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: seoConfig.default.title,
              url: seoConfig.default.url,
              description: seoConfig.default.description,
              publisher: {
                "@type": "Organization",
                name: seoConfig.organization.name,
                logo: seoConfig.organization.logo,
              },
            }),
          }}
        />
        {/* Google Analytics - Only in Production */}

        <>
          <Script
            id="google-analytics-tag"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script
            id="google-analytics-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());

                                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                                        page_path: window.location.pathname,
                                    });
                                `,
            }}
          />
        </>

        {/* GTM Script - Only in Production */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
          }}
        />
      </head>
      <body className={roboto.className} suppressHydrationWarning>
        {/* GTM NoScript fallback */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
