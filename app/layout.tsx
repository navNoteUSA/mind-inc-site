import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mind AI Inc. | Intelligence Layer for Physical Operations",
    template: "%s | Mind AI Inc.",
  },
  description:
    "Mind AI Inc. is the parent platform behind navNote, delivering AI-native, agentic operations for real-world, location-based teams.",
  metadataBase: new URL("https://www.mind-inc.io"),
  applicationName: "Mind AI Inc.",
  keywords: [
    "Mind AI Inc.",
    "AI operations platform",
    "agentic operations",
    "location-based work",
    "field operations AI",
    "navNote parent company",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mind AI Inc.",
    description:
      "The intelligence layer for real-world, location-based operations. Parent platform behind navNote.",
    url: "https://www.mind-inc.io",
    siteName: "Mind AI Inc.",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mind AI Inc. enterprise platform preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mind AI Inc.",
    description:
      "AI-native, agentic operations platform for real-world, location-based teams.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
