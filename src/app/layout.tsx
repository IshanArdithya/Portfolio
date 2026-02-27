import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import StingerTransition from "@/components/ui/StingerTransition";
import CustomCursor from "@/components/ui/CustomCursor";
import { siteConfig } from "@/constants/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: `Personal portfolio of ${siteConfig.name}`,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.name,
    description: `Personal portfolio of ${siteConfig.name}`,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/og/og2.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} | ${siteConfig.jobTitle}`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: `Personal portfolio of ${siteConfig.name}`,
    images: ["/images/og/og2.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.fullName,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/profile/image.webp`,
    jobTitle: siteConfig.jobTitle,
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.github,
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${quicksand.variable} antialiased`}
      >
        <ThemeProvider>
          <StingerTransition />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
