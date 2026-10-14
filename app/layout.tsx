import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { site, fmt, minPrice } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "يم بوليفارد مدن رأس الحكمة | شاليهات غرفتين و3 غرف — وادي يم",
  description: `شاليهات يم بوليفارد في وادي يم مدن رأس الحكمة من مدن القابضة. غرفتين 145–159 م² و3 غرف 194–207 م² تبدأ من ${fmt(
    minPrice
  )} جنيه، مقدم 5% وتقسيط 8 سنوات.`,
  keywords: [
    "مدن رأس الحكمة",
    "Modon Ras El Hekma",
    "وادي يم رأس الحكمة",
    "يم بوليفارد",
    "Yemm Boulevard",
    "شاليهات رأس الحكمة",
    "شاليه غرفتين رأس الحكمة",
    "شاليه 3 غرف الساحل الشمالي",
    "شقق الساحل الشمالي",
    "مدن القابضة",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: site.url,
    siteName: site.project,
    title: "شاليهات يم بوليفارد — مدن رأس الحكمة",
    description:
      "شاليهات غرفتين و3 غرف على بوليفارد وادي يم. مقدم 5% وتقسيط 8 سنوات.",
    images: [{ url: "/images/blvd-hero.webp", width: 1920, height: 1254 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "يم بوليفارد — مدن رأس الحكمة",
    description: "شاليهات غرفتين و3 غرف. مقدم 5% وتقسيط 8 سنوات.",
    images: ["/images/blvd-hero.webp"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#063d4c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      name: site.agency,
      url: site.url,
      telephone: site.phoneIntl,
      email: site.email,
      areaServed: "Ras El Hekma, North Coast, Egypt",
      address: {
        "@type": "PostalAddress",
        addressLocality: "رأس الحكمة",
        addressRegion: "مطروح",
        addressCountry: "EG",
      },
    },
    {
      "@type": "Place",
      name: "Yemm Boulevard Apartments — Modon Ras El Hekma",
      description:
        "مدينة ساحلية متكاملة في رأس الحكمة على البحر المتوسط من تطوير مدن القابضة الإماراتية، بواجهة بحرية 44 كم وملاعب جولف.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "سيدي حنيش، رأس الحكمة",
        addressRegion: "مطروح",
        addressCountry: "EG",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;600;700;800&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Archivo:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}

        {/* Google Ads — ضع الـ tag ID في lib/site.ts قبل النشر */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gtag}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gtag}');`}
        </Script>
      </body>
    </html>
  );
}
