import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.twowellwipes.com";
const title = "Twowell | Custom Wet Wipes, Ready for Your Brand";
const description = "Win-win wet wipes OEM & ODM solutions for shoe care, feminine care and makeup removal brands—from custom specification to repeatable supply.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
    images: [{ url: "/assets/hero/twowell-home-banner-copy-v2.png", width: 1730, height: 909, alt: "Twowell Win-Win Solution - Custom Wet Wipes, Ready for Your Brand" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/assets/hero/twowell-home-banner-copy-v2.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
