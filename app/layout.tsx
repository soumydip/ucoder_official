import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import Analysis from "@/components/analysis";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ucoder.in"),
  title: {
    default: "UCoder — Developer Tools & Services",
    template: "%s | UCoder",
  },
  description:
    "Privacy-first developer tools and web development services. Built by developers, for developers.",
  keywords: [
    "developer tools",
    "analytics",
    "privacy-first",
    "web analytics",
    "UCoder Insights",
    "SaaS",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Soumyadip Maity", url: "https://soumyadip.ucoder.in" }],
  creator: "Soumyadip Maity",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "UCoder — Developer Tools & Services",
    description:
      "Privacy-first developer tools and web development services. Built by developers, for developers.",
    url: "https://ucoder.in",
    siteName: "UCoder",
    images: [
      {
        url: "https://ucoder.in/logo.png",
        width: 1200,
        height: 630,
        alt: "UCoder — Developer Tools & Services",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  //  Twitter card
  twitter: {
    card: "summary_large_image",
    title: "UCoder — Developer Tools & Services",
    description:
      "Privacy-first developer tools and web development services. Built by developers, for developers.",
    images: ["https://ucoder.in/logo.png"],
    creator: "@Ucoder_in",
  },
  //  Verification
  verification: {
    google: "HYXriKdykPP32qy8gCqvx2KmooO1bm2eJusZn9YilmM",
  },
  other: {
    "ucoder-insights-id": "CiydSS7y2XC7pLJB",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UCoder",
  url: "https://ucoder.in",
  logo: "https://ucoder.in/logo.png",
  description: "Privacy-first developer tools and web development services.",
  founder: {
    "@type": "Person",
    name: "Soumyadip Maity",
    url: "https://soumyadip.ucoder.in",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "UCoder Insights",
        url: "https://insights.ucoder.in",
        description: "Privacy-first web analytics platform for developers.",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Free tier available",
        },
      },
    },
  ],
  sameAs: [
    "https://github.com/UcoderOfficial",
    "https://x.com/Ucoder_in",
    "https://www.linkedin.com/company/ucoder-official",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@ucoder.in",
    contactType: "customer support",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark font-sans", plusJakartaSans.variable)}>
      <body
        className={cn("font-sans bg-background text-foreground antialiased")}
      >
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analysis />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
