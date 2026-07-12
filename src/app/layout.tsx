import type { Metadata } from "next";
import "./globals.css";
import FloatingActions from "@/components/FloatingActions";

const siteUrl = "https://carrecoveryteam.uk";
const siteTitle = "Car Recovery Team";
const siteDescription =
  "Reliable, professional, and fast recovery services. Available 24/7 across the region for all your roadside assistance needs.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  icons: {
    icon: "/CR-site-icon.webp",
    shortcut: "/CR-site-icon.webp",
    apple: "/CR-site-icon.webp",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [
      {
        url: "/car-recovery-team-og.webp",
        width: 1110,
        height: 580,
        alt: "Car Recovery Team - Fast & Reliable Car Recovery When You Need It Most",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/car-recovery-team-og.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
