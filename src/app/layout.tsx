import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Michael's Guide Service | Premier Fishing Guide on Center Hill Lake, TN",
  description:
    "Book your unforgettable fishing adventure on Center Hill Lake, Tennessee with Michael — an experienced fishing guide with top-of-the-line bass boats, jet boat access, and decades of expertise. Smallmouth, largemouth, walleye, and more.",
  keywords: [
    "fishing guide",
    "Center Hill Lake",
    "Tennessee fishing",
    "bass fishing",
    "smallmouth bass",
    "largemouth bass",
    "fishing charter",
    "guided fishing trip",
    "Center Hill Lake guide",
    "jet boat fishing",
    "river fishing Tennessee",
    "fishing guide near me",
  ],
  openGraph: {
    title: "Michael's Guide Service | Center Hill Lake Fishing Guide",
    description:
      "Experience world-class fishing on Center Hill Lake, TN. Guided trips with premium boats and expert local knowledge.",
    type: "website",
    locale: "en_US",
    url: "https://fishing-michael.vercel.app",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Fishing on Center Hill Lake Tennessee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael's Guide Service | Center Hill Lake Fishing Guide",
    description:
      "Book a guided fishing trip on Center Hill Lake, TN. Premium boats, expert knowledge, unforgettable catches.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://fishing-michael.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0c2d48" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Michael's Guide Service",
              description:
                "Premier fishing guide service on Center Hill Lake, Tennessee. Expert-guided trips with top-of-the-line bass boats and jet boat for shallow water adventures.",
              url: "https://fishing-michael.vercel.app",
              telephone: "+1-555-FISH-NOW",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Smithville",
                addressRegion: "TN",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.0533,
                longitude: -85.8142,
              },
              areaServed: {
                "@type": "Place",
                name: "Center Hill Lake, Tennessee",
              },
              priceRange: "$$",
              openingHours: "Mo-Su 05:00-20:00",
              sameAs: [],
              image:
                "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=630&fit=crop",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Guided Fishing Trips",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Full Day Bass Boat Trip",
                      description:
                        "8-hour guided fishing trip on Center Hill Lake in a premium bass boat with latest fish-finding technology.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Half Day Trip",
                      description:
                        "4-hour guided fishing trip perfect for beginners and families.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Jet Boat Adventure",
                      description:
                        "Explore shallow creeks and rivers in a jet-powered boat that goes where others can't.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
