import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const description =
  "Willis Baptist Church in Willis, Michigan — a local KJV Baptist church committed to Scripture and the gospel of Jesus Christ, faithfully serving families since 1979.";

export const metadata: Metadata = {
  metadataBase: new URL("https://willisbaptist-redesign.vercel.app"),
  title: {
    default: `${site.name} | Willis, MI`,
    template: `%s | ${site.name}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Willis, Michigan`,
    description,
    url: "/",
    images: [
      {
        url: "/willis/og.jpg",
        width: 1200,
        height: 630,
        alt: "Willis Baptist Church building with steeple in Willis, Michigan.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Willis, Michigan`,
    description,
    images: ["/willis/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#183126",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
