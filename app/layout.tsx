import type { Metadata } from "next";
import "./globals.css";
import { businessConfig } from "@/content/config";

export const metadata: Metadata = {
  title: {
    default: "My Corbett Trip | Naturalist-Led Safaris & Forest Lodge Expeditions",
    template: "%s | My Corbett Trip",
  },
  description:
    "Private travel specialist for Jim Corbett National Park. Transparent official safari permits, Dhikala Forest Rest House bookings, and handpicked wildlife stays.",
  metadataBase: new URL(`https://${businessConfig.domain}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "My Corbett Trip | Handcrafted Corbett Safaris & Night Stays",
    description:
      "Expert-guided jeep & canter safaris, Dhikala FRH night stays, and honest fee breakdowns for Corbett Tiger Reserve.",
    siteName: "My Corbett Trip",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-riverstone text-ink antialiased selection:bg-tiger-ochre/20 selection:text-sal-forest">
        {children}
      </body>
    </html>
  );
}
