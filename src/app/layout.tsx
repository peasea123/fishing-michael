import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Trophy Fishing TN | Premier Fly Fishing Guide Service — Caney Fork, Cumberland River & Center Hill Lake",
  description:
    "Book a guided fly fishing trip in Tennessee with Mike Anderson. 30+ years of experience on the Caney Fork River, Cumberland River, Obey River & Center Hill Lake. Trophy trout, striper, musky, and smallmouth. Professional photography included.",
  keywords: [
    "fly fishing guide Tennessee",
    "Caney Fork River guide",
    "Cumberland River striper",
    "Tennessee fishing guide",
    "trout fishing Tennessee",
    "fly fishing Nashville",
    "Center Hill Lake guide",
    "musky fishing Tennessee",
    "smallmouth bass fly fishing",
    "Obey River fishing",
    "guided fishing trip TN",
    "Trophy Fishing TN",
    "Mike Anderson fishing guide",
    "Smithville TN fishing",
    "jet boat fishing guide",
  ],
  openGraph: {
    title: "Trophy Fishing TN | Premier Fly Fishing Guide Service in Tennessee",
    description:
      "Guided fly fishing trips with Mike Anderson — 30+ years of Tennessee fishing expertise. Trophy trout, striper, musky & more on the Caney Fork, Cumberland River & beyond.",
    type: "website",
    locale: "en_US",
    url: "https://trophyfishingtn.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500463959177-e0869687df26?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Scenic lake and mountains at golden sunrise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trophy Fishing TN | Tennessee Fly Fishing Guide",
    description:
      "Guided fly fishing trips on the Caney Fork, Cumberland River & beyond. 30+ years, premium boats, magazine-quality photography included.",
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
    canonical: "https://trophyfishingtn.com",
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
              name: "Trophy Fishing TN",
              description:
                "Premier fly fishing guide service in Tennessee. Guided trips for trophy trout, striper, musky, and smallmouth on the Caney Fork River, Cumberland River, Center Hill Lake, and more. Over 30 years of experience. Professional photography included.",
              url: "https://trophyfishingtn.com",
              telephone: "+1-615-617-9032",
              email: "mike@trophyfishingtn.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "4500 Coconut Ridge Rd",
                addressLocality: "Smithville",
                addressRegion: "TN",
                postalCode: "37166",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.0533,
                longitude: -85.8142,
              },
              areaServed: [
                { "@type": "Place", name: "Caney Fork River" },
                { "@type": "Place", name: "Cumberland River" },
                { "@type": "Place", name: "Center Hill Lake" },
                { "@type": "Place", name: "Obey River" },
                { "@type": "Place", name: "Collins River" },
              ],
              priceRange: "$350–$400",
              openingHours: "Mo-Su 05:00-20:00",
              founder: {
                "@type": "Person",
                name: "Mike Anderson",
              },
              image:
                "https://images.unsplash.com/photo-1500463959177-e0869687df26?w=1200&h=630&fit=crop",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Guided Fishing Trips",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Trout Fishing — Full Day",
                      description:
                        "Full-day guided fly fishing trip on the Caney Fork River or Obey River for trophy brown and rainbow trout.",
                    },
                    price: "400",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Striper on the Fly — Full Day",
                      description:
                        "Full-day guided fly fishing for trophy Cumberland River striped bass.",
                    },
                    price: "400",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Musky Fishing — Full Day",
                      description:
                        "Full-day guided musky fishing on the Collins River and surrounding waters.",
                    },
                    price: "400",
                    priceCurrency: "USD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "River Smallmouth — Full Day",
                      description:
                        "Full-day guided fly fishing for river smallmouth bass.",
                    },
                    price: "350",
                    priceCurrency: "USD",
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
