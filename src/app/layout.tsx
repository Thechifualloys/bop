import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/data/site";
import CustomCursor from "@/components/ui/custom-cursor";
import ScrollProgress from "@/components/ui/scroll-progress";
import BackToTop from "@/components/ui/back-to-top";
import WhatsAppWidget from "@/components/ui/whatsapp-widget";
import LoadingScreen from "@/components/ui/loading-screen";
import Navbar from "@/components/navbar";
import MobileStickyCTA from "@/components/ui/mobile-sticky-cta";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Virtual Accounting & Tax Specialist in Mombasa, Kenya`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "virtual accounting Kenya",
    "tax consultant Mombasa",
    "bookkeeping services Kenya",
    "KRA tax compliance",
    "payroll services Mombasa",
    "VAT PAYE filing Kenya",
    "QuickBooks Xero setup Kenya",
    "outsourced accounting Mombasa",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    title: `${siteConfig.name} | Virtual Accounting & Tax Specialist`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Virtual Accounting & Tax Specialist`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteConfig.name,
    description: siteConfig.description,
    image: `${siteConfig.url}/og-image.jpg`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mombasa",
      addressCountry: "KE",
    },
    areaServed: "KE",
    url: siteConfig.url,
    priceRange: "$$",
    sameAs: [],
  };

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased selection:bg-accent/20">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LoadingScreen />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          {children}
          <BackToTop />
          <WhatsAppWidget />
          <MobileStickyCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
